import LegalLayout, { LegalSection } from "./LegalLayout";
import { Mail, Instagram } from "lucide-react";
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
        <a href="mailto:info@premium-weinfinder.de" className="underline hover:opacity-70">info@premium-weinfinder.de</a>
      </p>
    </LegalSection>
    <LegalSection title="Social Media">
      <p className="flex items-center gap-3">
        <Instagram size={18} style={{ color: "#8b2615" }} />
        <a
          href="https://www.instagram.com/premium.weinfinder"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:opacity-70"
        >
          @premium.weinfinder
        </a>
      </p>
    </LegalSection>
  </LegalLayout>
  </>
);

export default Kontakt;