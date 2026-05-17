import LegalLayout, { LegalSection } from "./LegalLayout";

const Datenschutz = () => (
  <LegalLayout title="Datenschutzerklärung" kicker="DSGVO-konforme Information">
    <p>
      Wir freuen uns über dein Interesse am Premium Weinfinder. Der Schutz deiner personenbezogenen
      Daten ist uns ein wichtiges Anliegen. Nachfolgend informieren wir dich konkret und
      transparent darüber, welche Daten beim Besuch dieser Website sowie bei der Nutzung des
      Weinfinder-Quiz und des Pilot-Programm-Formulars verarbeitet werden, mit welchen Tools dies
      geschieht und auf welcher Rechtsgrundlage.
    </p>

    <LegalSection title="1. Verantwortlicher">
      <p>
        Verantwortlich im Sinne der DSGVO ist:<br />
        Benjamin Röder, Mainkurstr. 16, 63075 Offenbach am Main, Deutschland<br />
        E-Mail:{" "}
        <a href="mailto:info@premium-weinfinder.de" className="underline">info@premium-weinfinder.de</a>
      </p>
    </LegalSection>

    <LegalSection title="2. Hosting & technische Infrastruktur">
      <p>
        Diese Website und die zugehörige Anwendungslogik werden über{" "}
        <strong>Lovable Cloud</strong> betrieben, das auf{" "}
        <strong>Supabase (Supabase Inc., 970 Toa Payoh North #07-04, Singapur)</strong> als
        Backend-Plattform aufsetzt. Datenbank, Authentifizierungs- und Serverless-Funktionen
        (Edge Functions) sowie das Datei-Storage werden in einer EU-Region (Frankfurt am Main)
        gehostet. Mit Supabase besteht ein Auftragsverarbeitungsvertrag (Art. 28 DSGVO) sowie
        EU-Standardvertragsklauseln für etwaige Verarbeitungen außerhalb des EWR.
      </p>
      <p className="mt-3">
        Statische Seiteninhalte (HTML, JavaScript, Bilder) werden über das Hosting-/CDN-Netzwerk
        von Lovable (Lovable Tech Inc.) ausgeliefert. Beim Abruf werden technisch notwendige
        Server-Logfiles verarbeitet: IP-Adresse (gekürzt bzw. nur kurzzeitig), Datum und Uhrzeit
        des Abrufs, übertragene Datenmenge, Browsertyp und -version, Betriebssystem,
        Referrer-URL. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
        einem stabilen, sicheren Betrieb). Diese Logs werden nicht mit anderen Daten
        zusammengeführt und nach maximal 30 Tagen gelöscht
        (siehe <a href="#speicherdauer" className="underline">Speicherdauer</a>).
      </p>
    </LegalSection>

    <LegalSection title="3. Eingesetzte Tools & Dienstleister im Überblick">
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong>Lovable Cloud / Supabase</strong> – Hosting, Datenbank (PostgreSQL),
          Edge Functions, Storage. Region: EU (Frankfurt).
        </li>
        <li>
          <strong>Resend (Resend, Inc., 2261 Market Street #5039, San Francisco, CA 94114,
          USA)</strong> – Versand transaktionaler E-Mails (Quiz-Empfehlung, Bestätigung der
          Pilot-Anfrage, Benachrichtigung des Anbieters). Übermittlung in die USA auf Grundlage
          des EU-US Data Privacy Framework sowie EU-Standardvertragsklauseln. Auftragsverarbeitungsvertrag
          liegt vor.
        </li>
        <li>
          <strong>Google Fonts (über fonts.googleapis.com)</strong> – Einbindung der
          Schriftarten „Playfair Display", „Inter" und „Lato". Beim Laden wird deine IP-Adresse
          an Google übertragen. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (einheitliche und
          performante Darstellung). Wir prüfen laufend die Möglichkeit einer lokalen Auslieferung.
        </li>
        <li>
          <strong>Browser-Local-Storage</strong> – Zwischenspeicherung von Quiz-Antworten und
          Theme-Einstellung. Diese Daten verbleiben auf deinem Endgerät und werden nicht an uns
          übertragen, solange du das Quiz nicht abschickst.
        </li>
      </ul>
      <p className="mt-3">
        Es werden <strong>keine Analyse-, Tracking- oder Marketing-Cookies</strong> (z.&nbsp;B.
        Google Analytics, Meta Pixel) eingesetzt. Es findet kein Profiling und keine automatisierte
        Entscheidungsfindung im Sinne des Art. 22 DSGVO statt.
      </p>
    </LegalSection>

    <LegalSection title="4. Weinfinder-Quiz (/demo)">
      <p>
        Das Quiz unter <a href="/demo" className="underline">/demo</a> stellt dir Fragen zu deinen
        Geschmacks- und Anlassvorlieben. Die Antworten werden zunächst ausschließlich lokal in
        deinem Browser verarbeitet, um sofort eine passende Wein-Empfehlung zu berechnen.
      </p>
      <p className="mt-3">
        Erst wenn du am Ende deine E-Mail-Adresse angibst, um die Empfehlung zugeschickt zu
        bekommen, werden folgende Daten an unser Backend übertragen und gespeichert:
      </p>
      <ul className="list-disc pl-5 mt-2 space-y-1">
        <li>E-Mail-Adresse</li>
        <li>Quiz-Antworten (z.&nbsp;B. Anlass, Geschmacksprofil, Budget) in strukturierter Form</li>
        <li>ID und Name des empfohlenen Weins</li>
        <li>Zeitpunkt der Erstellung</li>
      </ul>
      <p className="mt-3">
        Verarbeitungsschritte: Empfang der Daten über eine abgesicherte HTTPS-Verbindung →
        Speicherung in der Supabase-Datenbank (Tabelle „leads", EU-Region) → Auslösen einer
        Edge Function, die per Resend eine E-Mail mit der Wein-Empfehlung an dich versendet.
        Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Durchführung vorvertraglicher Maßnahmen auf
        deine Anfrage) und Art. 6 Abs. 1 lit. f DSGVO (Verbesserung des Empfehlungsalgorithmus
        anhand aggregierter, nicht-individueller Auswertungen).
        Quiz-Leads werden automatisch nach 24 Monaten gelöscht
        (siehe <a href="#speicherdauer" className="underline">Speicherdauer</a>).
      </p>
    </LegalSection>

    <LegalSection title="5. Pilot-Programm-Formular">
      <p>
        Wenn du das Anfrageformular für unser Pilot-Programm absendest, verarbeiten wir die von
        dir eingegebenen Daten: Name, E-Mail-Adresse sowie optional Firma, Shop-URL, Telefon
        und Nachricht.
      </p>
      <p className="mt-3">
        Verarbeitungsschritte: Übertragung per HTTPS an unsere Edge Function
        „submit-pilot-request" → Spam-Prüfung (Honeypot-Feld und Mindest-Verweildauer) →
        Speicherung in der Supabase-Tabelle „pilot_requests" → automatischer Versand zweier
        E-Mails über Resend: einer Benachrichtigung an den Anbieter sowie einer
        Eingangsbestätigung an dich.
      </p>
      <p className="mt-3">
        Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) sowie Art. 6
        Abs. 1 lit. f DSGVO für die Spam-Abwehr. Pilot-Anfragen werden automatisch nach
        24 Monaten gelöscht, sofern keine Vertragsbeziehung zustande gekommen ist
        (siehe <a href="#speicherdauer" className="underline">Speicherdauer</a>).
      </p>
    </LegalSection>

    <LegalSection title="6. E-Mail-Versand via Resend">
      <p>
        Alle transaktionalen E-Mails (Wein-Empfehlung, Bestätigung deiner Anfrage,
        Eingangsbenachrichtigung) werden über den Dienstleister Resend versendet. Hierfür
        übermitteln wir an Resend Empfänger-E-Mail-Adresse, Betreff, HTML-/Text-Inhalt sowie
        technische Metadaten (Message-ID, Zustellstatus). Resend speichert zudem für eine
        begrenzte Zeit Zustell- und Bounce-Informationen, um die Zustellbarkeit sicherzustellen.
      </p>
      <p className="mt-3">
        Jede E-Mail enthält einen funktionierenden Abmelde-Link. Beim Klick wird deine Adresse
        in unsere Sperrliste („suppressed_emails") aufgenommen und es werden keine weiteren
        E-Mails dieser Art mehr an dich versendet. Versandprotokolle werden nach 90 Tagen
        automatisch gelöscht; die Sperrliste bleibt dauerhaft bestehen, damit kein erneuter
        Versand erfolgt (siehe <a href="#speicherdauer" className="underline">Speicherdauer</a>).
      </p>
    </LegalSection>

    <LegalSection title="7. Cookies & Local Storage">
      <p>
        Diese Website setzt ausschließlich technisch notwendige Speichermechanismen ein:
      </p>
      <ul className="list-disc pl-5 mt-2 space-y-1">
        <li>
          <strong>Local Storage</strong>: Theme-Einstellung (hell/dunkel), Zwischenspeicherung
          deiner Quiz-Antworten während der Bearbeitung.
        </li>
        <li>
          <strong>Session-Cookies von Supabase</strong>: nur, falls eine Anmeldung am
          Admin-Bereich erfolgt (für reguläre Besucher nicht relevant).
        </li>
      </ul>
      <p className="mt-3">
        Es werden keine einwilligungspflichtigen Cookies (Tracking, Marketing, Analyse) gesetzt.
        Ein Cookie-Banner ist daher nicht erforderlich.
      </p>
    </LegalSection>

    <LegalSection title="8. Empfänger der Daten / Datenübermittlung in Drittländer">
      <p>
        Eine Übermittlung deiner Daten an Dritte erfolgt ausschließlich an die in Abschnitt 3
        genannten Auftragsverarbeiter. Bei der Nutzung von Resend und Google Fonts können Daten
        in die USA übertragen werden. Die Übermittlung erfolgt auf Grundlage des EU-US Data
        Privacy Framework bzw. der EU-Standardvertragsklauseln (Art. 46 DSGVO).
      </p>
    </LegalSection>

    <LegalSection id="speicherdauer" title="9. Speicherdauer & automatische Löschung">
      <p>
        Die folgenden Fristen werden technisch durchgesetzt: Ein täglicher Datenbank-Job
        (<code>apply_data_retention</code>, geplant für 03:15 Uhr UTC) löscht abgelaufene
        Datensätze automatisch und unwiderruflich.
      </p>
      <ul className="list-disc pl-5 space-y-1 mt-3">
        <li><strong>Server-Logfiles:</strong> max. 30 Tage (über Hosting-Infrastruktur)</li>
        <li><strong>Quiz-Leads</strong> (E-Mail + Antworten, Tabelle „leads"): 24 Monate ab Eingang</li>
        <li><strong>Pilot-Anfragen</strong> (Tabelle „pilot_requests"): 24 Monate ab Eingang</li>
        <li><strong>E-Mail-Versandprotokolle</strong> (Tabelle „email_send_log"): 90 Tage</li>
        <li><strong>Verwendete Abmelde-Tokens:</strong> 90 Tage nach Nutzung; ungenutzte Tokens nach 12 Monaten</li>
        <li><strong>Sperrliste abgemeldeter E-Mail-Adressen</strong> („suppressed_emails"): dauerhaft, ausschließlich zur Verhinderung eines erneuten Versands (Art. 17 Abs. 3 lit. b DSGVO i.&nbsp;V.&nbsp;m. Art. 21 Abs. 3 DSGVO)</li>
      </ul>
      <p className="mt-3">
        Eine vorzeitige Löschung deiner Daten kannst du jederzeit formlos unter{" "}
        <a href="mailto:info@premium-weinfinder.de" className="underline">info@premium-weinfinder.de</a>{" "}
        beantragen. Gesetzliche Aufbewahrungspflichten (z.&nbsp;B. handels- oder steuerrechtlich) bleiben unberührt.
      </p>
    </LegalSection>

    <LegalSection title="10. Deine Rechte">
      <p>
        Du hast jederzeit das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO),
        Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO),
        Datenübertragbarkeit (Art. 20 DSGVO) sowie Widerspruch (Art. 21 DSGVO). Für eine auf
        Einwilligung gestützte Verarbeitung kannst du deine Einwilligung jederzeit mit Wirkung
        für die Zukunft widerrufen.
      </p>
      <p className="mt-3">
        Wende dich dazu formlos an{" "}
        <a href="mailto:info@premium-weinfinder.de" className="underline">info@premium-weinfinder.de</a>.
        Dir steht außerdem ein Beschwerderecht bei der zuständigen Datenschutz-Aufsichtsbehörde
        zu (für unseren Sitz: Der Hessische Beauftragte für Datenschutz und Informationsfreiheit,
        Wiesbaden).
      </p>
    </LegalSection>

    <LegalSection title="11. Datensicherheit">
      <p>
        Die Übertragung sämtlicher Daten erfolgt verschlüsselt per TLS/HTTPS. Datenbankzugriffe
        sind durch Row-Level-Security-Richtlinien geschützt; sensible Funktionen werden durch
        Server-seitige Validierung, Rate-Limiting und Spam-Filter abgesichert. Zugriffe auf den
        Admin-Bereich sind passwortgeschützt.
      </p>
    </LegalSection>

    <LegalSection title="12. Änderungen dieser Datenschutzerklärung">
      <p>
        Wir passen diese Datenschutzerklärung an, sobald sich Tools, Verarbeitungsschritte oder
        rechtliche Rahmenbedingungen ändern. Es gilt jeweils die auf dieser Seite veröffentlichte
        Fassung.
      </p>
    </LegalSection>
  </LegalLayout>
);

export default Datenschutz;
