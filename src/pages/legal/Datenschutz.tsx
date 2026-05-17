import LegalLayout, { LegalSection } from "./LegalLayout";

const Datenschutz = () => (
  <LegalLayout title="Datenschutzerklärung" kicker="DSGVO-konforme Information">
    <p>
      Wir freuen uns über dein Interesse an Weinfinder. Der Schutz deiner personenbezogenen Daten ist
      uns ein wichtiges Anliegen. Nachfolgend informieren wir dich darüber, welche Daten wir wann und
      zu welchem Zweck verarbeiten.
    </p>

    <LegalSection title="1. Verantwortlicher">
      <p>
        Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
        Benjamin [Nachname], [Adresse], E-Mail: <a href="mailto:benjamin@kontakt-2.de" className="underline">benjamin@kontakt-2.de</a>
      </p>
    </LegalSection>

    <LegalSection title="2. Erhebung und Speicherung personenbezogener Daten">
      <p>
        Beim Aufruf unserer Website werden automatisch Informationen an unseren Server gesendet
        (Server-Logfiles): IP-Adresse, Datum und Uhrzeit der Anfrage, übertragene Datenmenge,
        Browsertyp und -version, Betriebssystem und Referrer-URL. Diese Daten werden ausschließlich zur
        Gewährleistung eines reibungslosen Verbindungsaufbaus und zur Sicherstellung der Systemsicherheit
        verarbeitet (Art. 6 Abs. 1 lit. f DSGVO).
      </p>
    </LegalSection>

    <LegalSection title="3. Pilot-Programm-Formular">
      <p>
        Wenn du das Anfrageformular für unser Pilot-Programm nutzt, verarbeiten wir die von dir
        eingegebenen Daten (Name, E-Mail-Adresse, optional Firma, Shop-URL, Telefon, Nachricht), um
        deine Anfrage zu bearbeiten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Durchführung
        vorvertraglicher Maßnahmen).
      </p>
    </LegalSection>

    <LegalSection title="4. Quiz und Wein-Empfehlung">
      <p>
        Das Weinfinder-Quiz auf <a href="/demo" className="underline">/demo</a> verarbeitet deine Antworten lokal in deinem Browser.
        Wenn du am Ende deine E-Mail-Adresse angibst, um die Empfehlung zu erhalten, speichern wir
        deine Antworten und die E-Mail-Adresse zur Versendung der Ergebnisse und zur Verbesserung des
        Dienstes (Art. 6 Abs. 1 lit. b DSGVO).
      </p>
    </LegalSection>

    <LegalSection title="5. E-Mail-Versand">
      <p>
        Für den Versand transaktionaler E-Mails (z.&nbsp;B. deine Quiz-Empfehlung) nutzen wir den
        Dienstleister Resend (Resend, Inc., USA). Mit Resend besteht ein Auftragsverarbeitungsvertrag.
        Jede E-Mail enthält einen Abmelde-Link.
      </p>
    </LegalSection>

    <LegalSection title="6. Backend & Hosting">
      <p>
        Unsere Anwendung wird über Lovable Cloud (basierend auf Supabase) betrieben. Datenbank und
        Funktionen werden in der EU gehostet. Mit den jeweiligen Anbietern bestehen die nach DSGVO
        erforderlichen Vereinbarungen.
      </p>
    </LegalSection>

    <LegalSection title="7. Cookies">
      <p>
        Diese Website setzt nur technisch notwendige Cookies bzw. Local-Storage-Einträge ein (z.&nbsp;B.
        Theme-Einstellung). Es findet kein Tracking durch Drittanbieter statt.
      </p>
    </LegalSection>

    <LegalSection title="8. Deine Rechte">
      <p>
        Du hast jederzeit das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO), Löschung
        (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO), Datenübertragbarkeit (Art. 20
        DSGVO) und Widerspruch (Art. 21 DSGVO). Wende dich dazu formlos an{" "}
        <a href="mailto:benjamin@kontakt-2.de" className="underline">benjamin@kontakt-2.de</a>.
        Außerdem steht dir ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu.
      </p>
    </LegalSection>

    <LegalSection title="9. Speicherdauer">
      <p>
        Wir speichern deine personenbezogenen Daten nur so lange, wie es für die genannten Zwecke
        erforderlich ist oder gesetzliche Aufbewahrungsfristen dies vorsehen.
      </p>
    </LegalSection>

    <p className="text-xs mt-8" style={{ color: "rgba(44,31,14,0.55)" }}>
      Hinweis: Diese Datenschutzerklärung ist eine Vorlage. Bitte prüfe sie vor dem Live-Gang juristisch
      und ergänze die mit [...] markierten Platzhalter mit deinen tatsächlichen Angaben.
    </p>
  </LegalLayout>
);

export default Datenschutz;