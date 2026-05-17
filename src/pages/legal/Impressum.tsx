import LegalLayout, { LegalSection } from "./LegalLayout";

const Impressum = () => (
  <LegalLayout title="Impressum" kicker="Angaben gemäß § 5 TMG">
    <LegalSection title="Anbieter">
      <p>
        Benjamin Röder<br />
        Mainkurstr. 16<br />
        63075 Offenbach am Main<br />
        Deutschland
      </p>
    </LegalSection>
    <LegalSection title="Kontakt">
      <p>
        E-Mail: <a href="mailto:info@premium-weinfinder.de" className="underline">info@premium-weinfinder.de</a><br />
        Web: <a href="https://premium-weinfinder.de" className="underline">premium-weinfinder.de</a>
      </p>
    </LegalSection>
    <LegalSection title="Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV">
      <p>Benjamin Röder, Anschrift wie oben</p>
    </LegalSection>
    <LegalSection title="Haftung für Inhalte">
      <p>
        Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den
        allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch
        nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder
        nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
      </p>
    </LegalSection>
    <LegalSection title="Haftung für Links">
      <p>
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss
        haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die
        Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
        verantwortlich.
      </p>
    </LegalSection>
    <LegalSection title="Urheberrecht">
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
        deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
        Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des
        jeweiligen Autors bzw. Erstellers.
      </p>
    </LegalSection>
  </LegalLayout>
);

export default Impressum;