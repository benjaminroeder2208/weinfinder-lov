import { createClient } from "npm:@supabase/supabase-js@2";
import { z } from "npm:zod@3.23.8";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const BodySchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  company: z.string().trim().max(200).optional().or(z.literal("")),
  shop_url: z.string().trim().max(300).optional().or(z.literal("")),
  phone: z.string().trim().max(60).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
  // Honeypot: must be empty. Bots typically fill all fields.
  website: z.string().max(0).optional().or(z.literal("")),
  // Minimum time (ms) the form was visible before submission.
  elapsed_ms: z.number().int().nonnegative().optional(),
});

const RECIPIENT = "benjamin@kontakt-2.de";
const FROM = "Weinfinder Pilot <noreply@mail.premium-weinfinder.de>";

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const parsed = BodySchema.safeParse(await req.json());
    if (!parsed.success) {
      return new Response(JSON.stringify({ error: parsed.error.flatten().fieldErrors }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const d = parsed.data;

    // Spam checks
    if (d.website && d.website.length > 0) {
      console.warn("Honeypot triggered", { email: d.email });
      // Pretend success so bots don't retry
      return new Response(JSON.stringify({ ok: true }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (typeof d.elapsed_ms === "number" && d.elapsed_ms < 1500) {
      console.warn("Form submitted too fast", { ms: d.elapsed_ms, email: d.email });
      return new Response(JSON.stringify({ ok: true }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const { error: dbError } = await supabase.from("pilot_requests").insert({
      name: d.name,
      email: d.email,
      company: d.company || null,
      shop_url: d.shop_url || null,
      phone: d.phone || null,
      message: d.message || null,
    });
    if (dbError) {
      console.error("DB insert failed", dbError);
      return new Response(JSON.stringify({ error: "db_error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (RESEND_API_KEY) {
      const rows = [
        ["Name", d.name],
        ["E-Mail", d.email],
        ["Firma", d.company || "—"],
        ["Shop-URL", d.shop_url || "—"],
        ["Telefon", d.phone || "—"],
        ["Nachricht", d.message || "—"],
      ];
      const html = `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#2c1f0e">
          <h2 style="color:#8b2615;border-bottom:2px solid #8b2615;padding-bottom:8px">
            Neue Pilot-Anfrage
          </h2>
          <table style="width:100%;border-collapse:collapse;margin-top:16px">
            ${rows
              .map(
                ([k, v]) => `
              <tr>
                <td style="padding:8px;border-bottom:1px solid #ede8de;font-weight:bold;width:140px;vertical-align:top">${k}</td>
                <td style="padding:8px;border-bottom:1px solid #ede8de;white-space:pre-wrap">${escapeHtml(String(v))}</td>
              </tr>`,
              )
              .join("")}
          </table>
          <p style="margin-top:24px;font-size:12px;color:#8b4a2a">
            Eingegangen über das Pilot-Programm-Formular auf premium-weinfinder.de
          </p>
        </div>`;

      const emailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: FROM,
          to: [RECIPIENT],
          reply_to: d.email,
          subject: `Neue Pilot-Anfrage von ${d.name}${d.company ? ` (${d.company})` : ""}`,
          html,
        }),
      });
      if (!emailRes.ok) {
        console.error("Resend failed", emailRes.status, await emailRes.text());
      }

      // Confirmation email to the requester
      const confirmHtml = `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#2c1f0e;background:#fdfaf3;padding:32px 24px;border-radius:8px">
          <h2 style="color:#8b2615;font-family:Georgia,serif;margin:0 0 16px">
            Vielen Dank für Ihre Anfrage, ${escapeHtml(d.name)}!
          </h2>
          <p style="font-size:15px;line-height:1.6;margin:0 0 16px">
            Wir haben Ihre Anfrage zum Pilot-Programm des Premium Weinfinders erhalten
            und melden uns innerhalb der nächsten 1–2 Werktage persönlich bei Ihnen.
          </p>
          <p style="font-size:15px;line-height:1.6;margin:0 0 24px">
            Falls Sie in der Zwischenzeit Fragen haben, antworten Sie einfach direkt
            auf diese E-Mail.
          </p>
          <div style="border-top:1px solid #ede8de;padding-top:16px;margin-top:24px">
            <p style="font-size:13px;color:#6b4a2a;margin:0 0 4px"><strong>Ihre Angaben:</strong></p>
            <p style="font-size:13px;color:#6b4a2a;margin:2px 0">Name: ${escapeHtml(d.name)}</p>
            <p style="font-size:13px;color:#6b4a2a;margin:2px 0">E-Mail: ${escapeHtml(d.email)}</p>
            ${d.company ? `<p style="font-size:13px;color:#6b4a2a;margin:2px 0">Firma: ${escapeHtml(d.company)}</p>` : ""}
            ${d.shop_url ? `<p style="font-size:13px;color:#6b4a2a;margin:2px 0">Shop: ${escapeHtml(d.shop_url)}</p>` : ""}
          </div>
          <p style="margin-top:32px;font-size:13px;color:#8b4a2a">
            Herzliche Grüße<br/>
            Ihr Premium Weinfinder Team
          </p>
        </div>`;

      const confirmRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: FROM,
          to: [d.email],
          reply_to: RECIPIENT,
          subject: "Ihre Anfrage zum Premium Weinfinder Pilot-Programm",
          html: confirmHtml,
        }),
      });
      if (!confirmRes.ok) {
        console.error("Resend confirmation failed", confirmRes.status, await confirmRes.text());
      }
    } else {
      console.warn("RESEND_API_KEY not set — skipped email");
    }

    return new Response(JSON.stringify({ ok: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("submit-pilot-request error", e);
    return new Response(JSON.stringify({ error: "server_error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});