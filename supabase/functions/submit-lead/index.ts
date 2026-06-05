import { createClient } from "npm:@supabase/supabase-js@2";
import { z } from "npm:zod@3.23.8";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

// Bounded JSON: at most 40 keys, string values up to 500 chars.
const QuizAnswers = z.record(
  z.string().max(80),
  z.union([
    z.string().max(500),
    z.number(),
    z.boolean(),
    z.null(),
    z.array(z.union([z.string().max(500), z.number(), z.boolean()])).max(40),
  ]),
).refine((obj) => Object.keys(obj).length <= 40, { message: "too_many_keys" });

const BodySchema = z.object({
  email: z.string().trim().toLowerCase().email().max(255),
  wine_id: z.string().trim().max(80).nullish(),
  wine_name: z.string().trim().max(200).nullish(),
  quiz_answers: QuizAnswers.nullish(),
});

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const parsed = BodySchema.safeParse(await req.json());
    if (!parsed.success) {
      return new Response(
        JSON.stringify({ error: "invalid_input", details: parsed.error.flatten().fieldErrors }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }
    const d = parsed.data;

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const { error } = await supabase.from("leads").insert({
      email: d.email,
      wine_id: d.wine_id ?? null,
      wine_name: d.wine_name ?? null,
      quiz_answers: d.quiz_answers ?? null,
    });

    if (error) {
      console.error("submit-lead insert failed", error);
      return new Response(JSON.stringify({ error: "db_error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("submit-lead error", e);
    return new Response(JSON.stringify({ error: "internal_error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});