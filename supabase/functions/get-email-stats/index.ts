import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Validate password
    const password = req.headers.get("x-dashboard-password");
    const expectedPassword = Deno.env.get("DASHBOARD_PASSWORD");
    if (!expectedPassword || password !== expectedPassword) {
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, serviceKey);

    const url = new URL(req.url);
    const endpoint = url.searchParams.get("endpoint") || "emails";
    const days = parseInt(url.searchParams.get("days") || "30", 10);
    const since = new Date(Date.now() - days * 86400000).toISOString();

    // --- Leads endpoint ---
    if (endpoint === "leads") {
      const { data: leads, error: leadsError } = await supabase
        .from("leads")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(1000);

      if (leadsError) throw leadsError;

      return new Response(
        JSON.stringify({ leads: leads || [] }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // --- Email stats endpoint (default) ---
    const { data: logs, error } = await supabase
      .from("email_send_log")
      .select("*")
      .gte("created_at", since)
      .order("created_at", { ascending: false })
      .limit(1000);

    if (error) throw error;

    const seen = new Map<string, typeof logs[0]>();
    const deduped: typeof logs = [];

    for (const row of logs || []) {
      const key = row.message_id || row.id;
      if (!seen.has(key)) {
        seen.set(key, row);
        deduped.push(row);
      }
    }

    const { data: suppressed } = await supabase
      .from("suppressed_emails")
      .select("email, reason, created_at")
      .order("created_at", { ascending: false })
      .limit(100);

    const stats = { total: deduped.length, sent: 0, failed: 0, pending: 0, suppressed: suppressed?.length || 0 };
    for (const row of deduped) {
      if (row.status === "sent") stats.sent++;
      else if (row.status === "failed" || row.status === "dlq") stats.failed++;
      else if (row.status === "pending") stats.pending++;
    }

    return new Response(
      JSON.stringify({ stats, emails: deduped, suppressed: suppressed || [] }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("get-email-stats error:", err);
    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
