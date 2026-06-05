import { createClient } from "npm:@supabase/supabase-js@2";
import { renderAsync } from "npm:@react-email/render@0.0.12";
import { z } from "npm:zod@3.23.8";
import QuizResultsEmail from "../_shared/email-templates/quiz-results.tsx";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const optStr = (max: number) =>
  z.string().trim().max(max).optional().or(z.literal("")).transform((v) => v ?? "");

const BodySchema = z.object({
  email: z.string().trim().toLowerCase().email().max(255),
  wineName: optStr(200),
  winery: optStr(200),
  description: optStr(2000),
  price: optStr(60),
  grapeVariety: optStr(200),
  region: optStr(200),
  bodyStyle: optStr(100),
  foodPairings: z.array(z.string().max(120)).max(20).optional(),
  wineLink: z
    .string()
    .trim()
    .url()
    .regex(/^https?:\/\//i, "Only http/https URLs allowed")
    .max(500)
    .optional()
    .or(z.literal("")),
  alternativeName: optStr(200),
  alternativeWinery: optStr(200),
});

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

    const parsed = BodySchema.safeParse(await req.json());
    if (!parsed.success) {
      return new Response(
        JSON.stringify({ error: "invalid_input", details: parsed.error.flatten().fieldErrors }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }
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
    } = parsed.data;

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

    // Generate or reuse unsubscribe token
    let unsubscribeToken: string;
    const { data: existingToken } = await supabase
      .from("email_unsubscribe_tokens")
      .select("token")
      .eq("email", email)
      .is("used_at", null)
      .limit(1)
      .single();

    if (existingToken) {
      unsubscribeToken = existingToken.token;
    } else {
      unsubscribeToken = crypto.randomUUID();
      await supabase.from("email_unsubscribe_tokens").insert({
        email,
        token: unsubscribeToken,
      });
    }

    const unsubscribeUrl = `${supabaseUrl}/functions/v1/handle-email-unsubscribe?token=${unsubscribeToken}`;

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
      unsubscribeUrl,
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
      JSON.stringify({ error: "internal_error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
