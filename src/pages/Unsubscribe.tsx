import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import LegalLayout, { LegalSection } from "./legal/LegalLayout";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANON = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;

type State = "loading" | "confirm" | "already" | "invalid" | "submitting" | "success" | "error";

const Unsubscribe = () => {
  const [params] = useSearchParams();
  const token = params.get("token") || "";
  const [state, setState] = useState<State>("loading");

  useEffect(() => {
    if (!token) {
      setState("invalid");
      return;
    }
    (async () => {
      try {
        const res = await fetch(
          `${SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${encodeURIComponent(token)}`,
          { headers: { apikey: SUPABASE_ANON } },
        );
        const data = await res.json();
        if (data?.valid) setState("confirm");
        else if (data?.reason === "already_unsubscribed") setState("already");
        else setState("invalid");
      } catch {
        setState("error");
      }
    })();
  }, [token]);

  const confirm = async () => {
    setState("submitting");
    const { data, error } = await supabase.functions.invoke("handle-email-unsubscribe", {
      body: { token },
    });
    if (error) setState("error");
    else if ((data as any)?.success) setState("success");
    else if ((data as any)?.reason === "already_unsubscribed") setState("already");
    else setState("error");
  };

  return (
    <LegalLayout title="Abmelden" kicker="E-Mail-Einstellungen">
      <LegalSection title="E-Mail abbestellen">
        {state === "loading" && <p>Einen Moment, wir prüfen Ihren Link…</p>}
        {state === "invalid" && <p>Dieser Abmelde-Link ist ungültig oder abgelaufen.</p>}
        {state === "already" && <p>Diese E-Mail-Adresse ist bereits abgemeldet.</p>}
        {state === "confirm" && (
          <>
            <p>Möchten Sie sich von zukünftigen E-Mails vom Premium Weinfinder abmelden?</p>
            <button
              onClick={confirm}
              className="mt-6 px-6 py-3 rounded font-semibold"
              style={{ backgroundColor: "#8b2615", color: "#f5f0e8" }}
            >
              Abmeldung bestätigen
            </button>
          </>
        )}
        {state === "submitting" && <p>Ihre Abmeldung wird verarbeitet…</p>}
        {state === "success" && (
          <p>Sie wurden erfolgreich abgemeldet. Sie erhalten keine weiteren E-Mails von uns.</p>
        )}
        {state === "error" && (
          <p>Etwas ist schiefgelaufen. Bitte versuchen Sie es später erneut oder kontaktieren Sie info@premium-weinfinder.de.</p>
        )}
      </LegalSection>
    </LegalLayout>
  );
};

export default Unsubscribe;