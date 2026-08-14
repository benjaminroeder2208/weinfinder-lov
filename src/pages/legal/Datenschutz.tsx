import LegalLayout, { LegalSection } from "./LegalLayout";
import SEO from "@/components/SEO";

const Datenschutz = () => (
  <>
    <SEO
      title="Datenschutzerklärung – Weinfinder"
      description="Datenschutzerklärung für die Website premium-weinfinder.de. Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO."
      path="/datenschutz"
    />
    <LegalLayout title="Datenschutzerklärung">
      <p className="text-sm mb-10" style={{ color: "rgba(44,31,14,0.72)" }}>
        für die Website premium-weinfinder.de – Stand: 14.08.2026
      </p>

      <LegalSection title="1. Verantwortlicher">
        <p>
          Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
        </p>
        <p className="mt-3">
          Benjamin Röder<br />
          Mainkurstr. 16<br />
          63075 Offenbach am Main<br />
          Deutschland<br />
          E-Mail: <a href="mailto:info@premium-weinfinder.de" className="underline">info@premium-weinfinder.de</a>
          <br />
          (nachfolgend „wir“ oder „uns")
        </p>
      </LegalSection>

      <LegalSection title="2. Allgemeines zur Datenverarbeitung">
        <p>
          Diese Datenschutzerklärung bezieht sich ausschließlich auf die Landingpage unter premium-weinfinder.de. Für die eigentliche Weinfinder-Anwendung (erreichbar unter app.premium-weinfinder.de sowie den jeweiligen Kunden-Unterseiten) gilt eine gesonderte Datenschutzerklärung, die für jeden Kunden individuell unter der jeweiligen Adresse (z. B. app.premium-weinfinder.de/w/[kunde]/datenschutz) abrufbar ist. Diese Anwendung wird vollständig auf eigener Serverinfrastruktur in Deutschland betrieben.
        </p>
        <p className="mt-3">
          Diese Landingpage selbst dient ausschließlich der Information über unser Produkt „Weinfinder“ und enthält kein Kontaktformular. Es werden auf dieser Seite keine Analyse- oder Tracking-Tools eingesetzt.
        </p>
      </LegalSection>

      <LegalSection title="3. Hosting">
        <p>
          Diese Landingpage wird über den Dienst Lovable (Lovable Labs, Inc.) technisch bereitgestellt und gehostet. Beim Aufruf der Seite werden automatisch technische Verbindungsdaten (siehe Ziffer 4) durch die Hosting-Infrastruktur von Lovable verarbeitet.
        </p>
        <p className="mt-3">
          Lovable kann dabei auch Unterauftragsverarbeiter außerhalb der Europäischen Union einsetzen (u. a. mit Sitz in den USA). Eine aktuelle Liste der eingesetzten Unterauftragsverarbeiter ist unter <a href="https://trust.lovable.dev" target="_blank" rel="noreferrer" className="underline">https://trust.lovable.dev</a> einsehbar. Soweit hierbei Daten in Drittländer außerhalb der EU/des EWR übermittelt werden, erfolgt dies auf Grundlage geeigneter Garantien im Sinne der Art. 44 ff. DSGVO (insbesondere EU-Standardvertragsklauseln).
        </p>
        <p className="mt-3">
          Weitere Informationen zur Datenverarbeitung durch Lovable finden Sie unter <a href="https://lovable.dev/privacy" target="_blank" rel="noreferrer" className="underline">https://lovable.dev/privacy</a>.
        </p>
        <p className="mt-3">
          Die Nutzung von Lovable erfolgt auf Grundlage unseres berechtigten Interesses an einer technisch zuverlässigen und performanten Bereitstellung unserer Website (Art. 6 Abs. 1 lit. f DSGVO).
        </p>
      </LegalSection>

      <LegalSection title="4. Server-Logfiles">
        <p>
          Bei jedem Aufruf dieser Website werden durch die Hosting-Infrastruktur automatisch Informationen in sogenannten Server-Logfiles erfasst, die Ihr Browser automatisch übermittelt. Dies sind:
        </p>
        <ul className="list-disc pl-6 space-y-1.5 mt-3">
          <li>IP-Adresse (in der Regel gekürzt bzw. anonymisiert)</li>
          <li>Datum und Uhrzeit der Anfrage</li>
          <li>Aufgerufene Seite / Datei</li>
          <li>Verwendeter Browser und Betriebssystem</li>
          <li>Referrer-URL (zuvor besuchte Seite)</li>
        </ul>
        <p className="mt-3">
          Die Erfassung dieser Daten erfolgt auf Grundlage unseres berechtigten Interesses an der technischen Stabilität, Sicherheit und Fehleranalyse unserer Website (Art. 6 Abs. 1 lit. f DSGVO). Eine Zusammenführung dieser Daten mit anderen Datenquellen sowie eine Auswertung zu Marketingzwecken erfolgt nicht.
        </p>
      </LegalSection>

      <LegalSection title="5. Kontaktaufnahme per E-Mail">
        <p>
          Auf dieser Website befinden sich Verweise (sogenannte „mailto“-Links), die beim Anklicken Ihr lokales E-Mail-Programm öffnen. Über diese Links selbst werden durch uns keine Daten erhoben oder verarbeitet – erst wenn Sie eine E-Mail an die angezeigte Adresse versenden, verarbeiten wir die von Ihnen darin mitgeteilten Daten (z. B. Name, E-Mail-Adresse, Inhalt Ihrer Anfrage) zum Zweck der Bearbeitung Ihres Anliegens.
        </p>
        <p className="mt-3">
          Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Anfrage bzw. Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung Ihrer Anfrage).
        </p>
      </LegalSection>

      <LegalSection title="6. Cookies">
        <p>
          Diese Website setzt keine Cookies ein, die über die technisch notwendigen Funktionen der Hosting-Infrastruktur hinausgehen. Insbesondere werden keine Analyse-, Marketing- oder Tracking-Cookies verwendet. Eine Einwilligung über einen Cookie-Banner ist daher derzeit nicht erforderlich.
        </p>
        <p className="mt-3">
          Sollten zu einem späteren Zeitpunkt Analyse- oder Marketing-Tools eingesetzt werden, wird diese Datenschutzerklärung entsprechend aktualisiert und – soweit erforderlich – ein Einwilligungsmechanismus (Cookie-Banner) ergänzt.
        </p>
      </LegalSection>

      <LegalSection title="7. Keine Weitergabe an Dritte zu Werbezwecken">
        <p>
          Wir geben Ihre Daten nicht zu Werbezwecken an Dritte weiter und verkaufen keine personenbezogenen Daten.
        </p>
      </LegalSection>

      <LegalSection title="8. Verweis auf die Weinfinder-Anwendung">
        <p>
          Diese Landingpage enthält Verweise (z. B. „Demo starten“) auf die eigentliche Weinfinder-Anwendung unter app.premium-weinfinder.de. Sobald Sie diesen Bereich betreten, gilt nicht mehr diese Datenschutzerklärung, sondern die für die Anwendung bzw. den jeweiligen Kunden geltende, gesonderte Datenschutzerklärung, die dort verlinkt ist. Die Weinfinder-Anwendung selbst wird vollständig auf eigener Serverinfrastruktur in Deutschland betrieben und nicht über Lovable gehostet.
        </p>
      </LegalSection>

      <LegalSection title="9. Ihre Rechte als betroffene Person">
        <p>
          Ihnen stehen nach Maßgabe der gesetzlichen Bestimmungen folgende Rechte zu:
        </p>
        <ul className="list-disc pl-6 space-y-1.5 mt-3">
          <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
          <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
          <li>Recht auf Löschung (Art. 17 DSGVO)</li>
          <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerspruchsrecht gegen Verarbeitungen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (Art. 21 DSGVO)</li>
        </ul>
        <p className="mt-3">
          Zur Ausübung dieser Rechte genügt eine formlose Mitteilung an die oben unter Ziffer 1 genannte Kontaktadresse.
        </p>
      </LegalSection>

      <LegalSection title="10. Beschwerderecht bei einer Aufsichtsbehörde">
        <p>
          Sie haben unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe das Recht auf Beschwerde bei einer Datenschutz-Aufsichtsbehörde, insbesondere in dem Mitgliedstaat Ihres Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die DSGVO verstößt.
        </p>
        <p className="mt-3">
          Zuständige Aufsichtsbehörde für [Firma/Name, sofern Sitz in Hessen]: Der Hessische Beauftragte für Datenschutz und Informationsfreiheit, Postfach 3163, 65021 Wiesbaden. [Bitte prüfen und ggf. an den tatsächlichen Unternehmenssitz anpassen.]
        </p>
      </LegalSection>

      <LegalSection title="11. Aktualität und Änderung dieser Datenschutzerklärung">
        <p>
          Diese Datenschutzerklärung ist aktuell gültig und hat den Stand des oben genannten Datums. Durch die Weiterentwicklung unserer Website und Angebote oder aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern. Die jeweils aktuelle Datenschutzerklärung finden Sie stets unter premium-weinfinder.de/datenschutz.
        </p>
      </LegalSection>

      <p className="text-sm mt-12 pt-8 border-t" style={{ color: "rgba(44,31,14,0.72)", borderColor: "rgba(44,31,14,0.12)" }}>
        Benjamin Röder, Einzelunternehmen, Mainkurstr. 16, 63075 Offenbach am Main, Deutschland, Stand: 14.08.2026
      </p>
    </LegalLayout>
  </>
);

export default Datenschutz;
