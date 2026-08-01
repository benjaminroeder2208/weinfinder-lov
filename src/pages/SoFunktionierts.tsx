import { Link } from "react-router-dom";
import { CalendarClock, Wine, UtensilsCrossed, Droplets, Euro, Zap, Menu, X, Check, ChevronDown } from "lucide-react";
import { useState } from "react";
import SEO from "@/components/SEO";

const COLORS = {
  bg: "#f5f0e8",
  primary: "#8b2615",
  secondary: "#8b4a2a",
  ctaBg: "#2c1f0e",
  featuresBg: "#ede8de",
  card: "#ffffff",
  text: "#2c1f0e",
  green: "#a0bd00",
};

const fontStack = {
  display: "'Playfair Display', serif",
  body: "'Lato', sans-serif",
};

const Logo = () => (
  <Link to="/" className="font-bold text-2xl tracking-tight" style={{ fontFamily: fontStack.display, color: COLORS.text }}>
    Wein<span style={{ color: COLORS.primary }}>finder</span>
  </Link>
);

const Kicker = ({ children, color = COLORS.secondary }: { children: React.ReactNode; color?: string }) => (
  <p className="text-xs font-bold uppercase mb-4" style={{ letterSpacing: "0.18em", color, fontFamily: fontStack.body }}>
    {children}
  </p>
);

const Nav = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const linkClass = "hover:opacity-70 transition";
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md border-b" style={{ backgroundColor: `${COLORS.bg}ee`, borderColor: "rgba(44,31,14,0.08)" }}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Logo />
        <div className="hidden md:flex items-center gap-8 text-sm" style={{ fontFamily: fontStack.body, color: COLORS.text }}>
          <Link to="/#how" className={linkClass}>Wie es funktioniert</Link>
          <Link to="/so-funktionierts" className={linkClass}>So funktioniert's</Link>
          <Link to="/#demo-erklaerung" className={linkClass}>Demo</Link>
          <Link to="/#features" className={linkClass}>Features</Link>
          <Link to="/#pricing" className={linkClass}>Preise</Link>
        </div>
        <Link
          to="/#demo-erklaerung"
          className="hidden md:inline-flex px-5 py-2.5 rounded-md text-sm font-semibold text-white hover:opacity-90 transition"
          style={{ backgroundColor: COLORS.primary, fontFamily: fontStack.body }}
        >
          Demo starten
        </Link>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          className="md:hidden p-2 rounded-md hover:bg-black/5"
        >
          {open ? <X size={22} style={{ color: COLORS.text }} /> : <Menu size={22} style={{ color: COLORS.text }} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t" style={{ borderColor: "rgba(44,31,14,0.08)", backgroundColor: COLORS.bg }}>
          <div className="px-6 py-4 flex flex-col gap-1 text-base" style={{ fontFamily: fontStack.body, color: COLORS.text }}>
            <Link to="/#how" onClick={close} className="py-3 border-b" style={{ borderColor: "rgba(44,31,14,0.08)" }}>Wie es funktioniert</Link>
            <Link to="/so-funktionierts" onClick={close} className="py-3 border-b" style={{ borderColor: "rgba(44,31,14,0.08)" }}>So funktioniert's</Link>
            <Link to="/#demo-erklaerung" onClick={close} className="py-3 border-b" style={{ borderColor: "rgba(44,31,14,0.08)" }}>Demo</Link>
            <Link to="/#features" onClick={close} className="py-3 border-b" style={{ borderColor: "rgba(44,31,14,0.08)" }}>Features</Link>
            <Link to="/#pricing" onClick={close} className="py-3 border-b" style={{ borderColor: "rgba(44,31,14,0.08)" }}>Preise</Link>
            <Link
              to="/#demo-erklaerung"
              onClick={close}
              className="mt-3 mb-2 text-center px-5 py-3 rounded-md text-sm font-semibold text-white"
              style={{ backgroundColor: COLORS.primary }}
            >
              Demo starten
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="max-w-6xl mx-auto px-6 py-20 md:py-28 text-center">
    <div className="max-w-3xl mx-auto">
      <Kicker>Transparente Logik statt Black-Box-KI</Kicker>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ fontFamily: fontStack.display, color: COLORS.text }}>
        So findet der Weinfinder den richtigen Wein
      </h1>
      <p className="text-lg leading-relaxed" style={{ color: "rgba(44,31,14,0.75)", fontFamily: fontStack.body, fontWeight: 300 }}>
        Keine geheimnisvolle KI, sondern nachvollziehbare Regeln — genau wie ein guter Verkäufer sie anwenden würde.
      </p>
    </div>
  </section>
);

const whatItMeansPoints = [
  "Weniger Rückfragen, mehr direkte Verkäufe — der Kunde findet selbstständig den passenden Wein.",
  "Dein Sortiment wird gezielt in Szene gesetzt, nicht durch externe Empfehlungen verdrängt.",
  "Nachvollziehbare Regeln, die du jederzeit anpassen kannst — volle Kontrolle über das Ergebnis.",
  "Eine Beratung, die sich wie ein guter Sommelier anfühlt, aber rund um die Uhr verfügbar ist.",
];

const WhatItMeans = () => (
  <section className="max-w-6xl mx-auto px-6 pb-20 md:pb-28">
    <div className="max-w-3xl mx-auto rounded-2xl p-8 md:p-10" style={{ backgroundColor: COLORS.card, border: "1px solid rgba(44,31,14,0.08)" }}>
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center" style={{ fontFamily: fontStack.display, color: COLORS.text }}>
        Was bedeutet das für deine Entscheidung?
      </h2>
      <p className="text-center mb-8 leading-relaxed" style={{ color: "rgba(44,31,14,0.75)", fontFamily: fontStack.body, fontWeight: 300 }}>
        Du bekommst ein Beratungstool, das deine Kunden führt — ohne dein Sortiment aus dem Blick zu verlieren.
      </p>
      <ul className="grid md:grid-cols-2 gap-4">
        {whatItMeansPoints.map((point) => (
          <li key={point} className="flex items-start gap-3">
            <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: COLORS.green }}>
              <Check size={12} className="text-white" />
            </span>
            <span className="text-sm leading-relaxed" style={{ color: "rgba(44,31,14,0.8)", fontFamily: fontStack.body, fontWeight: 300 }}>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

const questions = [
  {
    Icon: CalendarClock,
    title: "Wann trinkst du den Wein?",
    text: "Der Anlass entscheidet oft mehr über den passenden Wein als man denkt — ein Wein für die Party braucht andere Eigenschaften als einer fürs Dinner zu zweit.",
  },
  {
    Icon: Wine,
    title: "Welcher Stil passt zu dir?",
    text: "Die wichtigste Frage im ganzen Quiz — sie bestimmt die grobe Richtung: leicht & frisch, fruchtig, weich & harmonisch oder kräftig & intensiv.",
  },
  {
    Icon: UtensilsCrossed,
    title: "Isst du dazu?",
    text: "Klassische Sommelier-Weisheit: bestimmte Weine harmonieren besser mit bestimmten Speisen. Wer ohne Essen trinkt, überspringt diese Frage einfach.",
  },
  {
    Icon: Droplets,
    title: "Welche Farbe?",
    text: "Rot, Weiß oder Rosé — eine klare Vorliebe, die selten verhandelbar ist.",
  },
  {
    Icon: Euro,
    title: "Welches Budget?",
    text: "Dein Preisrahmen wird respektiert, aber nie so streng, dass am Ende gar keine Empfehlung möglich ist.",
  },
  {
    Icon: Zap,
    title: "Wie frisch und lebendig?",
    text: "Die Feinjustierung: Zwei Weine im selben Stil können sich in der Frische stark unterscheiden — diese Frage sorgt für den letzten Schliff.",
  },
];

const QuestionsGrid = () => (
  <section style={{ backgroundColor: COLORS.featuresBg }}>
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-14 max-w-2xl mx-auto">
        <Kicker>Die 6 Fragen im Überblick</Kicker>
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: fontStack.display, color: COLORS.text }}>
          Was wir über den Kunden lernen
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {questions.map(({ Icon, title, text }) => (
          <div key={title} className="rounded-xl p-6" style={{ backgroundColor: COLORS.card, border: "1px solid rgba(44,31,14,0.06)" }}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-5" style={{ backgroundColor: `${COLORS.primary}14` }}>
              <Icon size={22} style={{ color: COLORS.primary }} />
            </div>
            <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: fontStack.display, color: COLORS.text }}>{title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(44,31,14,0.7)", fontFamily: fontStack.body, fontWeight: 300 }}>{text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const logicBlocks = [
  {
    title: "Die Türsteher",
    text: "Farbe und Budget entscheiden zuerst, welche Weine überhaupt in die engere Auswahl kommen — bevor irgendetwas anderes gewichtet wird.",
  },
  {
    title: "Die Geschmacksachsen",
    text: "Stil und Frische beschreiben gemeinsam den Charakter des Weins — wie eine Kamera, die erst grob einstellt und dann scharfstellt.",
  },
  {
    title: "Der Kontext",
    text: "Anlass und Essensbegleitung fragen nach der Situation, nicht nach dem Wein selbst — sie ergänzen das Geschmacksbild um die Lebensrealität des Kunden.",
  },
];

const HowItWorksLogic = () => (
  <section className="max-w-6xl mx-auto px-6 py-20">
    <div className="text-center mb-14 max-w-2xl mx-auto">
      <Kicker>Wie die Fragen zusammenspielen</Kicker>
      <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: fontStack.display, color: COLORS.text }}>
        Vom Kundenwunsch zur Empfehlung
      </h2>
    </div>
    <div className="grid md:grid-cols-3 gap-6">
      {logicBlocks.map(({ title, text }) => (
        <div key={title} className="rounded-xl p-6" style={{ backgroundColor: COLORS.card, border: "1px solid rgba(44,31,14,0.06)" }}>
          <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: fontStack.display, color: COLORS.primary }}>{title}</h3>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(44,31,14,0.7)", fontFamily: fontStack.body, fontWeight: 300 }}>{text}</p>
        </div>
      ))}
    </div>
  </section>
);

const faqItems = [
  {
    question: "Werden meine Kunden durch ein festes Ergebnis eingeschränkt?",
    answer: "Nein. Die Logik filtert und sortiert, schließt aber keine Weine kategorisch aus. Am Ende sieht der Kunde mehrere passende Vorschläge aus deinem Sortiment.",
  },
  {
    question: "Kann ich die Empfehlungen beeinflussen?",
    answer: "Ja. Du legst fest, welche Weine bei gleicher Punktzahl bevorzugt werden — etwa Eigenprodukte, höhermarge Sortimente oder aktuelle Highlights.",
  },
  {
    question: "Wie viele Fragen muss der Kunde beantworten?",
    answer: "Maximal sechs. Viele Fragen lassen sich überspringen, wenn der Kunde keine Präferenz hat. Das Ziel ist eine schnelle, aber fundierte Beratung.",
  },
  {
    question: "Funktioniert das auch ohne großes Weinsortiment?",
    answer: "Ja. Die Logik skaliert mit deinem Angebot. Auch mit wenigen Weinen entsteht ein rundes Beratungserlebnis, weil jeder Wein gezielt in Szene gesetzt wird.",
  },
  {
    question: "Ist das wirklich keine KI?",
    answer: "Richtig. Hinter dem Matching stehen transparente, regelbasierte Entscheidungen — nachvollziehbar, anpassbar und jederzeit auditierbar.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section style={{ backgroundColor: COLORS.featuresBg }}>
      <div className="max-w-3xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <Kicker>Häufige Fragen</Kicker>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: fontStack.display, color: COLORS.text }}>
            Zur Matching-Logik
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          {faqItems.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={question}
                className="rounded-xl overflow-hidden"
                style={{ backgroundColor: COLORS.card, border: "1px solid rgba(44,31,14,0.06)" }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold pr-4" style={{ fontFamily: fontStack.display, color: COLORS.text }}>{question}</span>
                  <span className="flex-shrink-0 transition-transform duration-200" style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", color: COLORS.primary }}>
                    <ChevronDown size={20} />
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5">
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(44,31,14,0.75)", fontFamily: fontStack.body, fontWeight: 300 }}>{answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const FinalCta = () => (
  <section style={{ backgroundColor: COLORS.ctaBg }}>
    <div className="max-w-3xl mx-auto px-6 py-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-5 text-white" style={{ fontFamily: fontStack.display }}>
        Volle Kontrolle, keine Blackbox
      </h2>
      <p className="mb-8 leading-relaxed" style={{ color: "rgba(245,240,232,0.75)", fontFamily: fontStack.body, fontWeight: 300 }}>
        Du entscheidest, welche Weine bei Gleichstand bevorzugt werden. Die Logik ist nachvollziehbar, anpassbar und gehört dir — nicht einem Algorithmus, den niemand versteht.
      </p>
      <Link
        to="/#demo-erklaerung"
        className="inline-block px-7 py-3.5 rounded-md font-semibold text-white hover:opacity-90 transition"
        style={{ backgroundColor: COLORS.primary, fontFamily: fontStack.body }}
      >
        Demo ausprobieren
      </Link>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t" style={{ borderColor: "rgba(44,31,14,0.08)", backgroundColor: COLORS.bg }}>
    <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-6 items-center justify-between">
      <Logo />
      <div className="flex flex-wrap gap-6 text-sm" style={{ color: "rgba(44,31,14,0.7)", fontFamily: fontStack.body }}>
        <Link to="/kontakt" className="hover:opacity-70">Kontakt</Link>
        <Link to="/impressum" className="hover:opacity-70">Impressum</Link>
        <Link to="/datenschutz" className="hover:opacity-70">Datenschutz</Link>
      </div>
    </div>
  </footer>
);

const SoFunktionierts = () => (
  <div className="min-h-screen" style={{ backgroundColor: COLORS.bg, color: COLORS.text, fontFamily: fontStack.body, scrollBehavior: "smooth" }}>
    <style>{`@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap'); html { scroll-behavior: smooth; }`}</style>
    <SEO
      title="So funktioniert der Weinfinder — Transparente Matching-Logik"
      description="Erfahre, wie der Weinfinder in 6 Fragen zum passenden Wein kommt. Nachvollziehbare Regeln statt Black-Box-KI."
      path="/so-funktionierts"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "So funktioniert der Weinfinder",
        url: "https://premium-weinfinder.de/so-funktionierts",
      }}
    />
    <Nav />
    <main>
      <Hero />
      <WhatItMeans />
      <QuestionsGrid />
      <HowItWorksLogic />
      <Faq />
      <FinalCta />
    </main>
    <Footer />
  </div>
);

export default SoFunktionierts;
