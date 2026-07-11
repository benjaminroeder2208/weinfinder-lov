import LegalLayout, { LegalSection } from "./LegalLayout";
import { Mail } from "lucide-react";
import SEO from "@/components/SEO";

const Kontakt = () => (
  <>
  <SEO
    title="Kontakt — Weinfinder"
    description="Frage stellen, Demo vereinbaren oder am Pilot-Programm teilnehmen: Hier erreichst du das Weinfinder-Team."
    path="/kontakt"
  />
  <LegalLayout title="Kontakt" kicker="So erreichst du uns">
    <p>
      Du hast Fragen zu Weinfinder, möchtest eine Demo vereinbaren oder am Pilot-Programm teilnehmen?
      Wir freuen uns auf deine Nachricht.
    </p>
    <LegalSection title="E-Mail">
      <p className="flex items-center gap-3">
        <Mail size={18} style={{ color: "#8b2615" }} />
        <a href="mailto:benjamin@kontakt-2.de" className="underline hover:opacity-70">benjamin@kontakt-2.de</a>
      </p>
    </LegalSection>
    <LegalSection title="Pilot-Programm">
      <p>
        Du möchtest direkt einsteigen? Kontaktiere mich direkt — ich melde mich innerhalb von 1–2 Werktagen.
      </p>
    </LegalSection>
  </LegalLayout>
  </>
);

export default Kontakt;