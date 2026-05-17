import LegalLayout, { LegalSection } from "./LegalLayout";
import { Mail, Globe } from "lucide-react";

const Kontakt = () => (
  <LegalLayout title="Kontakt" kicker="So erreichst du uns">
    <p>
      Du hast Fragen zu Weinfinder, möchtest eine Demo vereinbaren oder am Pilot-Programm teilnehmen?
      Wir freuen uns auf deine Nachricht.
    </p>
    <LegalSection title="E-Mail">
      <p className="flex items-center gap-3">
        <Mail size={18} style={{ color: "#8b2615" }} />
        <a href="mailto:info@premium-weinfinder.de" className="underline hover:opacity-70">info@premium-weinfinder.de</a>
      </p>
    </LegalSection>
    <LegalSection title="Website">
      <p className="flex items-center gap-3">
        <Globe size={18} style={{ color: "#8b2615" }} />
        <a href="https://premium-weinfinder.de" className="underline hover:opacity-70">premium-weinfinder.de</a>
      </p>
    </LegalSection>
    <LegalSection title="Pilot-Programm">
      <p>
        Du möchtest direkt einsteigen? Nutze das{" "}
        <a href="/#pricing" className="underline hover:opacity-70">Anfrageformular auf der Startseite</a>{" "}
        — wir melden uns innerhalb von 1–2 Werktagen.
      </p>
    </LegalSection>
  </LegalLayout>
);

export default Kontakt;