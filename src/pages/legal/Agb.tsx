import LegalLayout, { LegalSection } from "./LegalLayout";
import SEO from "@/components/SEO";

const Agb = () => (
  <>
    <SEO
      title="AGB – Weinfinder | Allgemeine Geschäftsbedingungen für Weinshops & Weingüter"
      description="Allgemeine Geschäftsbedingungen für die Nutzung von Weinfinder, dem White-Label Weinberatungs-Tool für Weinshops, Weingüter und Online-Handel."
      path="/agb"
    />
    <LegalLayout title="Allgemeine Geschäftsbedingungen">
      <p className="text-sm mb-10" style={{ color: "rgba(44,31,14,0.72)" }}>
        für die Nutzung von „Weinfinder" – Stand: 14.08.2026
      </p>

      <LegalSection title="§ 1 Geltungsbereich">
        <p>
          (1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB") gelten für alle Verträge zwischen „Benjamin Röder, Einzelunternehmen, Mainkurstr. 16, 63075 Offenbach am Main, Deutschland" (nachfolgend „Anbieter") und Unternehmern im Sinne des § 14 BGB (nachfolgend „Kunde") über die Nutzung der Software-as-a-Service-Lösung „Weinfinder" (nachfolgend „Weinfinder" oder „Dienst").
        </p>
        <p>
          (2) Diese AGB gelten ausschließlich gegenüber Unternehmern. Verbraucher im Sinne des § 13 BGB werden nicht als Vertragspartner akzeptiert.
        </p>
        <p>
          (3) Abweichende, entgegenstehende oder ergänzende Allgemeine Geschäftsbedingungen des Kunden werden nur dann Vertragsbestandteil, wenn der Anbieter ihrer Geltung ausdrücklich schriftlich zugestimmt hat.
        </p>
        <p>
          (4) Diese AGB gelten in ihrer jeweils zum Zeitpunkt des Vertragsschlusses gültigen Fassung auch für zukünftige Verträge gleicher Art, ohne dass es hierfür eines erneuten Hinweises bedarf.
        </p>
      </LegalSection>

      <LegalSection title="§ 2 Vertragsgegenstand">
        <p>
          (1) Der Anbieter stellt dem Kunden gegen Entgelt eine cloudbasierte Software zur Verfügung, mit der Besucher der Website des Kunden anhand eines kurzen Fragebogens eine automatisierte, regelbasierte Weinempfehlung aus dem vom Kunden hinterlegten Sortiment erhalten (im Folgenden „Weinfinder-Tool").
        </p>
        <p>
          (2) Der genaue Funktionsumfang richtet sich nach dem vom Kunden gebuchten Leistungspaket gemäß der zum Vertragsschluss gültigen Leistungs- und Preisübersicht unter premium-weinfinder.de/preise (nachfolgend „Leistungsbeschreibung"). Die Leistungsbeschreibung ist Bestandteil des Vertrags.
        </p>
        <p>
          (3) Der Anbieter erbringt seine Leistungen als Software-as-a-Service (SaaS). Es wird kein Quellcode überlassen, keine lokale Installation vorgenommen und kein Werkerfolg im Sinne des § 631 BGB geschuldet, soweit nachfolgend nichts Abweichendes geregelt ist.
        </p>
      </LegalSection>

      <LegalSection title="§ 3 Vertragsschluss">
        <p>
          (1) Die Darstellung der Leistungen auf der Website des Anbieters stellt kein bindendes Angebot dar, sondern eine unverbindliche Aufforderung an den Kunden, seinerseits ein Angebot abzugeben.
        </p>
        <p>
          (2) Der Vertrag kommt zustande, indem der Anbieter dem Kunden eine Auftragsbestätigung in Textform (z. B. per E-Mail) zusendet oder mit der Freischaltung des Zugangs für den Kunden beginnt, je nachdem, welches Ereignis früher eintritt.
        </p>
        <p>
          (3) Änderungen und Ergänzungen des Vertrags bedürfen der Textform, soweit in diesen AGB nichts anderes bestimmt ist.
        </p>
      </LegalSection>

      <LegalSection title="§ 4 Leistungsumfang und Verfügbarkeit">
        <p>
          (1) Der Anbieter betreibt das Weinfinder-Tool auf eigener oder angemieteter Serverinfrastruktur und ist bemüht, eine Verfügbarkeit von 98 % im Jahresmittel zu gewährleisten. Ausgenommen hiervon sind Ausfallzeiten aufgrund von geplanten Wartungsarbeiten (die der Anbieter nach Möglichkeit außerhalb der üblichen Geschäftszeiten des Kunden durchführt und rechtzeitig ankündigt) sowie Störungen, die außerhalb des Einflussbereichs des Anbieters liegen (höhere Gewalt, Ausfälle bei Vorlieferanten wie Hosting- oder Mail-Providern, DDoS-Angriffe u. Ä.).
        </p>
        <p>
          (2) Eine darüberhinausgehende, insbesondere vertraglich zugesicherte Verfügbarkeit (SLA) besteht nur, soweit dies gesondert schriftlich vereinbart wurde (z. B. im Rahmen eines Enterprise-Pakets).
        </p>
        <p>
          (3) Der Anbieter ist berechtigt, das Weinfinder-Tool technisch weiterzuentwickeln, sofern hierdurch die vertraglich geschuldete Funktionalität nicht wesentlich eingeschränkt wird.
        </p>
      </LegalSection>

      <LegalSection title="§ 5 Pflichten des Kunden">
        <p>
          (1) Der Kunde ist für die Richtigkeit, Aktualität und Rechtmäßigkeit der von ihm in das System eingepflegten Daten selbst verantwortlich, insbesondere für:
        </p>
        <ul className="list-disc pl-6 space-y-1.5">
          <li>Produktdaten (Weinbezeichnungen, Preise, Verlinkungen zum eigenen Shop)</li>
          <li>Inhalte der Startseiten-Texte und des Logos</li>
          <li>Angaben zur eigenen verantwortlichen Stelle und Postanschrift im Rahmen der Datenschutzhinweise</li>
        </ul>
        <p>
          (2) Der Kunde stellt sicher, dass die von ihm angegebenen Preise mit den tatsächlichen Preisen in seinem Onlineshop übereinstimmen und hält diese aktuell.
        </p>
        <p>
          (3) Der Kunde ist verpflichtet, seine Zugangsdaten zum Administrationsbereich vertraulich zu behandeln und vor dem Zugriff Dritter zu schützen. Bei Verdacht auf Missbrauch hat der Kunde den Anbieter unverzüglich zu informieren.
        </p>
        <p>
          (4) Der Kunde ist dafür verantwortlich, dass die Einbindung des Weinfinder-Tools auf seiner Website (z. B. per iFrame) im Einklang mit den für ihn geltenden rechtlichen Vorgaben erfolgt, insbesondere im Hinblick auf die Datenschutz-Grundverordnung (DSGVO) und das Telemediengesetz (TMG/TTDSG).
        </p>
        <p>
          (5) Der Kunde darf das Weinfinder-Tool nicht in einer Weise nutzen, die gegen geltendes Recht, Rechte Dritter oder die Systemsicherheit des Anbieters verstößt.
        </p>
      </LegalSection>

      <LegalSection title="§ 6 Preise und Zahlungsbedingungen">
        <p>
          (1) Es gelten die Preise gemäß der zum Zeitpunkt des Vertragsschlusses gültigen Leistungsbeschreibung. Alle Preise verstehen sich netto zzgl. der jeweils gültigen gesetzlichen Umsatzsteuer.
        </p>
        <p>
          (2) Sofern eine einmalige Einrichtungsgebühr vereinbart ist, wird diese mit Vertragsschluss fällig und gesondert in Rechnung gestellt.
        </p>
        <p>
          (3) Die monatliche Nutzungsgebühr wird jeweils im Voraus zum Beginn des jeweiligen Abrechnungsmonats in Rechnung gestellt und ist innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug fällig.
        </p>
        <p>
          (4) Gerät der Kunde mit der Zahlung in Verzug, ist der Anbieter berechtigt, den Zugang zum Weinfinder-Tool nach vorheriger Ankündigung und Fristsetzung zu sperren, ohne dass hierdurch der Zahlungsanspruch entfällt.
        </p>
        <p>
          (5) Der Anbieter ist berechtigt, die Preise mit einer Ankündigungsfrist von sechs Wochen zum Ende der jeweiligen Vertragslaufzeit anzupassen. Widerspricht der Kunde der Preisanpassung nicht innerhalb von vier Wochen nach Zugang der Ankündigung, gilt die Preisanpassung als akzeptiert. Der Anbieter weist den Kunden in der Ankündigung gesondert auf sein Widerspruchsrecht und die Rechtsfolgen des Schweigens hin. Widerspricht der Kunde form- und fristgerecht, ist der Anbieter berechtigt, den Vertrag zum Zeitpunkt des Wirksamwerdens der Preisanpassung außerordentlich zu kündigen.
        </p>
      </LegalSection>

      <LegalSection title="§ 7 Vertragslaufzeit und Kündigung">
        <p>
          (1) Der Vertrag wird, sofern im Einzelfall nicht anders vereinbart, mit einer Mindestlaufzeit von 12 Monaten ab Freischaltung des Zugangs geschlossen.
        </p>
        <p>
          (2) Nach Ablauf der Mindestlaufzeit verlängert sich der Vertrag automatisch um jeweils einen weiteren Monat, sofern er nicht von einer der Parteien mit einer Frist von einem Monat zum Ende der Mindestlaufzeit bzw. zum Ende des jeweiligen Verlängerungsmonats gekündigt wird.
        </p>
        <p>
          (3) Die Kündigung bedarf der Textform (z. B. E-Mail).
        </p>
        <p>
          (4) Das Recht beider Parteien zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt. Ein wichtiger Grund für den Anbieter liegt insbesondere vor, wenn der Kunde trotz Mahnung und angemessener Fristsetzung mit der Zahlung von mindestens zwei Monatsbeträgen in Verzug ist oder gegen § 5 dieser AGB in erheblicher Weise verstößt.
        </p>
        <p>
          (5) Mit Beendigung des Vertrags werden der Zugang des Kunden sowie die von ihm hinterlegten Daten (Sortiment, Startseiten-Texte, Branding) nach Ablauf einer Frist von 30 Tagen gelöscht, sofern der Kunde nicht zuvor einen Exportwunsch mitteilt. Personenbezogene Daten von Endkunden (Leads) unterliegen der gesondert vereinbarten Speicherdauer gemäß § 8.
        </p>
      </LegalSection>

      <LegalSection title="§ 8 Datenschutz und Auftragsverarbeitung">
        <p>
          (1) Beide Parteien verpflichten sich zur Einhaltung der jeweils anwendbaren datenschutzrechtlichen Bestimmungen, insbesondere der DSGVO.
        </p>
        <p>
          (2) Soweit der Anbieter im Rahmen der Vertragsdurchführung personenbezogene Daten von Endkunden des Kunden verarbeitet (insbesondere E-Mail-Adressen im Rahmen der Empfehlungs-Anfrage), erfolgt dies im Auftrag des Kunden auf Grundlage eines gesonderten Vertrags zur Auftragsverarbeitung gemäß Art. 28 DSGVO, den beide Parteien vor Aufnahme der Verarbeitung abschließen.
        </p>
        <p>
          (3) Der Kunde bleibt datenschutzrechtlich Verantwortlicher im Sinne des Art. 4 Nr. 7 DSGVO gegenüber seinen eigenen Endkunden.
        </p>
      </LegalSection>

      <LegalSection title="§ 9 Geistiges Eigentum und Nutzungsrechte">
        <p>
          (1) Sämtliche Rechte an der Software, dem Quellcode, der Systemarchitektur sowie der Marke „Weinfinder" verbleiben beim Anbieter.
        </p>
        <p>
          (2) Der Anbieter räumt dem Kunden für die Dauer des Vertrags ein einfaches, nicht übertragbares und nicht unterlizenzierbares Recht ein, das Weinfinder-Tool im vereinbarten Umfang für die eigenen geschäftlichen Zwecke zu nutzen.
        </p>
        <p>
          (3) Der Kunde behält alle Rechte an den von ihm eingepflegten Inhalten (insbesondere Produktbeschreibungen, Bildmaterial, Logo) und räumt dem Anbieter hieran ein einfaches Nutzungsrecht ein, soweit dies zur vertragsgemäßen Erbringung der Leistung erforderlich ist.
        </p>
      </LegalSection>

      <LegalSection title="§ 10 Gewährleistung">
        <p>
          (1) Der Anbieter gewährleistet, dass das Weinfinder-Tool während der Vertragslaufzeit im Wesentlichen die in der Leistungsbeschreibung genannten Funktionen bereitstellt.
        </p>
        <p>
          (2) Bei Mängeln ist der Anbieter zunächst zur Nacherfüllung innerhalb einer angemessenen Frist berechtigt. Schlägt die Nacherfüllung fehl, stehen dem Kunden die gesetzlichen Gewährleistungsrechte zu.
        </p>
        <p>
          (3) Für Störungen, die auf einer unsachgemäßen Nutzung durch den Kunden, auf von ihm eingebundenen Drittsystemen oder auf von ihm bereitgestellten fehlerhaften Daten beruhen, übernimmt der Anbieter keine Gewährleistung.
        </p>
      </LegalSection>

      <LegalSection title="§ 11 Haftung">
        <p>
          (1) Der Anbieter haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie nach Maßgabe des Produkthaftungsgesetzes. Für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit haftet der Anbieter unbeschränkt, auch bei einfacher Fahrlässigkeit.
        </p>
        <p>
          (2) Bei leicht fahrlässiger Verletzung einer wesentlichen Vertragspflicht (Kardinalpflicht), deren Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt erst ermöglicht und auf deren Einhaltung der Kunde regelmäßig vertrauen darf, ist die Haftung des Anbieters der Höhe nach auf den bei Vertragsschluss vorhersehbaren, vertragstypischen Schaden begrenzt.
        </p>
        <p>
          (3) Die Haftung für leicht fahrlässige Pflichtverletzungen ist im Übrigen ausgeschlossen.
        </p>
        <p>
          (4) Die Haftung nach vorstehendem Absatz 2 ist der Höhe nach begrenzt auf die vom Kunden in den letzten zwölf Monaten vor dem schadensauslösenden Ereignis an den Anbieter gezahlten Vergütungen, mindestens jedoch auf einen Betrag von 5.000 Euro je Schadensfall.
        </p>
        <p>
          (5) Eine Haftung für den Verlust von Daten ist der Höhe nach auf den typischen Wiederherstellungsaufwand begrenzt, der bei regelmäßiger und gefahrentsprechender Datensicherung durch den Kunden eingetreten wäre.
        </p>
        <p>
          (6) Die vorstehenden Haftungsbeschränkungen gelten auch zugunsten der Erfüllungsgehilfen des Anbieters.
        </p>
      </LegalSection>

      <LegalSection title="§ 12 Vertraulichkeit">
        <p>
          (1) Beide Parteien verpflichten sich, alle im Rahmen der Vertragsdurchführung erlangten vertraulichen Informationen der jeweils anderen Partei vertraulich zu behandeln und nur für Zwecke der Vertragsdurchführung zu verwenden.
        </p>
        <p>
          (2) Diese Verpflichtung gilt auch für einen Zeitraum von zwei Jahren nach Beendigung des Vertrags fort.
        </p>
      </LegalSection>

      <LegalSection title="§ 13 Änderung dieser AGB">
        <p>
          (1) Der Anbieter behält sich vor, diese AGB mit Wirkung für die Zukunft zu ändern, soweit dies zur Anpassung an geänderte rechtliche oder technische Rahmenbedingungen erforderlich ist oder bestehende Regelungen zugunsten des Kunden ergänzt werden.
        </p>
        <p>
          (2) Wesentliche Änderungen werden dem Kunden mit einer Frist von sechs Wochen vor Inkrafttreten in Textform mitgeteilt. Widerspricht der Kunde nicht innerhalb von vier Wochen nach Zugang der Mitteilung, gelten die geänderten AGB als angenommen. Der Anbieter weist den Kunden in der Mitteilung gesondert auf diese Rechtsfolge hin.
        </p>
      </LegalSection>

      <LegalSection title="§ 14 Schlussbestimmungen">
        <p>
          (1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
        </p>
        <p>
          (2) Ist der Kunde Kaufmann im Sinne des Handelsgesetzbuches, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen, ist ausschließlicher Gerichtsstand für alle Streitigkeiten aus oder im Zusammenhang mit diesem Vertrag der Sitz des Anbieters.
        </p>
        <p>
          (3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen hiervon unberührt. An die Stelle der unwirksamen Bestimmung tritt die gesetzliche Regelung.
        </p>
        <p>
          (4) Nebenabreden zu diesem Vertrag bestehen nicht. Änderungen und Ergänzungen bedürfen der Textform; dies gilt auch für die Änderung dieser Schriftformklausel selbst.
        </p>
      </LegalSection>

    </LegalLayout>
  </>
);

export default Agb;
