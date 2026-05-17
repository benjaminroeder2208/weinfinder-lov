import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const escapeHtml = (s: string) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const token = url.searchParams.get("token");

    if (!token) {
      return new Response(htmlPage("Ungültiger Link", "Der Abmelde-Link ist ungültig."), {
        status: 400,
        headers: { "Content-Type": "text/html; charset=utf-8" },
      });
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, serviceKey);

    // Look up token
    const { data: tokenRecord, error: lookupError } = await supabase
      .from("email_unsubscribe_tokens")
      .select("id, email, used_at")
      .eq("token", token)
      .limit(1)
      .single();

    if (lookupError || !tokenRecord) {
      return new Response(htmlPage("Ungültiger Link", "Der Abmelde-Link ist ungültig oder abgelaufen."), {
        status: 404,
        headers: { "Content-Type": "text/html; charset=utf-8" },
      });
    }

    if (tokenRecord.used_at) {
      return new Response(htmlPage("Bereits abgemeldet", `Die E-Mail-Adresse <strong>${escapeHtml(tokenRecord.email)}</strong> wurde bereits abgemeldet.`), {
        status: 200,
        headers: { "Content-Type": "text/html; charset=utf-8" },
      });
    }

    // Mark token as used
    await supabase
      .from("email_unsubscribe_tokens")
      .update({ used_at: new Date().toISOString() })
      .eq("id", tokenRecord.id);

    // Add to suppression list
    await supabase.from("suppressed_emails").insert({
      email: tokenRecord.email,
      reason: "unsubscribe",
      metadata: { token, unsubscribed_at: new Date().toISOString() },
    });

    return new Response(
      htmlPage(
        "Erfolgreich abgemeldet",
        `Die E-Mail-Adresse <strong>${escapeHtml(tokenRecord.email)}</strong> wurde erfolgreich abgemeldet. Du erhältst keine weiteren E-Mails von uns.`
      ),
      { status: 200, headers: { "Content-Type": "text/html; charset=utf-8" } }
    );
  } catch (err) {
    console.error("handle-email-unsubscribe error:", err);
    return new Response(htmlPage("Fehler", "Ein Fehler ist aufgetreten. Bitte versuche es später erneut."), {
      status: 500,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }
});

function htmlPage(title: string, message: string): string {
  return `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} – Weinfinder Premium</title>
  <style>
    body { font-family: 'Inter', Arial, sans-serif; background: hsl(30,25%,95%); margin: 0; display: flex; align-items: center; justify-content: center; min-height: 100vh; }
    .card { background: #fff; border-radius: 12px; padding: 40px 32px; max-width: 420px; text-align: center; box-shadow: 0 4px 24px rgba(0,0,0,0.08); border: 1px solid hsl(30,15%,85%); }
    h1 { font-family: Georgia, serif; font-size: 24px; color: hsl(350,15%,15%); margin: 0 0 12px; }
    p { font-size: 15px; color: hsl(350,8%,45%); line-height: 1.6; margin: 0; }
    strong { color: hsl(350,15%,15%); }
    .emoji { font-size: 36px; margin-bottom: 16px; }
  </style>
</head>
<body>
  <div class="card">
    <div class="emoji">🍷</div>
    <h1>${title}</h1>
    <p>${message}</p>
  </div>
</body>
</html>`;
}
