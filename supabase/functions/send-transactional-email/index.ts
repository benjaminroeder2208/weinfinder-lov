import { createClient } from "npm:@supabase/supabase-js@2";
import { renderAsync } from "npm:@react-email/render@0.0.12";
import QuizResultsEmail from "../_shared/email-templates/quiz-results.tsx";

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
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, serviceKey);

    const {
      email,
      wineName,
      winery,
      description,
      price,
      grapeVariety,
      region,
      bodyStyle,
      foodPairings,
      wineLink,
      alternativeName,
      alternativeWinery,
    } = await req.json();

    if (!email) {
      return new Response(
        JSON.stringify({ error: "Email is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Check suppression list
    const { data: suppressed } = await supabase
      .from("suppressed_emails")
      .select("id")
      .eq("email", email)
      .limit(1);

    if (suppressed && suppressed.length > 0) {
      return new Response(
        JSON.stringify({ ok: true, suppressed: true }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const siteUrl = "https://weinfinder.lovable.app";

    // Render the email template
    const emailProps = {
      wineName: wineName || "Deine Weinempfehlung",
      winery: winery || "",
      description: description || "",
      price: price || "",
      grapeVariety,
      region,
      bodyStyle,
      foodPairings: foodPairings || [],
      wineLink,
      alternativeName,
      alternativeWinery,
      siteUrl,
    };

    const html = await renderAsync(QuizResultsEmail(emailProps));
    const text = `Deine Weinempfehlung: ${wineName || "Weinfinder"}\n\nWeingut: ${winery || ""}\n${description || ""}\nPreis: ${price || ""}\n\nBesuche ${siteUrl} für mehr Infos.`;

    const messageId = `quiz-result-${crypto.randomUUID()}`;

    // Log as pending
    await supabase.from("email_send_log").insert({
      message_id: messageId,
      template_name: "quiz-results",
      recipient_email: email,
      status: "pending",
      metadata: { wineName, winery },
    });

    // Send via Resend API
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Weinfinder Premium <noreply@mail.premium-weinfinder.de>",
        to: [email],
        subject: `🍷 Deine Weinempfehlung: ${wineName || "Weinfinder"}`,
        html,
        text,
      }),
    });

    const resendData = await resendResponse.json();

    if (!resendResponse.ok) {
      console.error("Resend API error:", resendResponse.status, resendData);

      // Log failure
      await supabase.from("email_send_log").insert({
        message_id: messageId,
        template_name: "quiz-results",
        recipient_email: email,
        status: "failed",
        error_message: resendData?.message || `Resend error ${resendResponse.status}`,
        metadata: { wineName, winery },
      });

      throw new Error(`Resend API error: ${resendResponse.status}`);
    }

    // Log success
    await supabase.from("email_send_log").insert({
      message_id: messageId,
      template_name: "quiz-results",
      recipient_email: email,
      status: "sent",
      metadata: { wineName, winery, resendId: resendData.id },
    });

    return new Response(
      JSON.stringify({ ok: true, messageId, resendId: resendData.id }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("send-transactional-email error:", err);
    return new Response(
      JSON.stringify({ error: err.message || "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
