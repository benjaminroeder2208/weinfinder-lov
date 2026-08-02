import { Link } from "react-router-dom";
import { CalendarClock, Wine, UtensilsCrossed, Droplets, Euro, Zap, Menu, X, Check, ChevronDown, Link2, Mail } from "lucide-react";
import { useEffect, useState } from "react";
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
          <Link to="/#demo-erklaerung" className={linkClass}>Demo</Link>
          <Link to="/#features" className={linkClass}>Features</Link>
          <Link to="/#pricing" className={linkClass}>Preise</Link>
          <Link to="/#ueber" className={linkClass}>Über mich</Link>
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
            <Link to="/#demo-erklaerung" onClick={close} className="py-3 border-b" style={{ borderColor: "rgba(44,31,14,0.08)" }}>Demo</Link>
            <Link to="/#features" onClick={close} className="py-3 border-b" style={{ borderColor: "rgba(44,31,14,0.08)" }}>Features</Link>
            <Link to="/#pricing" onClick={close} className="py-3 border-b" style={{ borderColor: "rgba(44,31,14,0.08)" }}>Preise</Link>
            <Link to="/#ueber" onClick={close} className="py-3 border-b" style={{ borderColor: "rgba(44,31,14,0.08)" }}>Über mich</Link>
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
      <Kicker>Transparente Matching-Logik</Kicker>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ fontFamily: fontStack.display, color: COLORS.text }}>
        So findet der Weinfinder den richtigen Wein
      </h1>
      <p className="text-lg leading-relaxed" style={{ color: "rgba(44,31,14,0.75)", fontFamily: fontStack.body, fontWeight: 300 }}>
        Nachvollziehbare Regeln statt undurchsichtiger Automatik — genau wie ein guter Verkäufer sie anwenden würde. In wenigen Sekunden zum passenden Ergebnis.
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
    <div className="max-w-3xl mx-auto rounded-xl p-8 shadow-sm" style={{ backgroundColor: COLORS.card, border: "1px solid rgba(44,31,14,0.08)" }}>
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
          <div key={title} className="rounded-xl p-6" style={{ backgroundColor: COLORS.card, border: "1px solid rgba(44,31,14,0.08)" }}>
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
        <div key={title} className="rounded-xl p-6" style={{ backgroundColor: COLORS.card, border: "1px solid rgba(44,31,14,0.08)" }}>
          <h3 className="text-lg font-semibold mb-1.5" style={{ fontFamily: fontStack.display, color: COLORS.text }}>{title}</h3>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(44,31,14,0.7)", fontFamily: fontStack.body, fontWeight: 300 }}>{text}</p>
        </div>
      ))}
    </div>
  </section>
);

const exampleProfile = {
  occasion: "Dinner zu zweit",
  style: "Kräftig & intensiv",
  color: "Rot",
  food: "Rind",
  budget: "bis 15 €",
};

const exampleWines = [
  {
    name: "Cuvée Reserve",
    style: "Kräftig & intensiv",
    color: "Rot",
    food: "Rind",
    price: "14,90 €",
    scores: { style: 3, food: 2, occasion: 2, color: 1, budget: 1 },
  },
  {
    name: "Weißburgunder Trocken",
    style: "Leicht & frisch",
    color: "Weiß",
    food: "Fisch",
    price: "11,50 €",
    scores: { style: 0, food: 0, occasion: 1, color: 0, budget: 1 },
  },
];

const ScoreExample = () => {
  const maxTotal = exampleWines.reduce((max, wine) => Math.max(max, Object.values(wine.scores).reduce((a, b) => a + b, 0)), 0);
  return (
    <section style={{ backgroundColor: COLORS.bg }}>
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <Kicker>Konkretes Beispiel</Kicker>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: fontStack.display, color: COLORS.text }}>
            So werden die Punkte vergeben
          </h2>
          <p className="leading-relaxed" style={{ color: "rgba(44,31,14,0.75)", fontFamily: fontStack.body, fontWeight: 300 }}>
            Ein Kunde gibt seine Präferenzen an. Jeder Wein im Sortiment sammelt Punkte — je besser die Übereinstimmung, desto höher die Platzierung.
          </p>
        </div>

        <div className="rounded-xl p-6 shadow-sm mb-10" style={{ backgroundColor: COLORS.card, border: "1px solid rgba(44,31,14,0.08)" }}>
          <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: fontStack.display, color: COLORS.text }}>Kundenwunsch</h3>
          <div className="flex flex-wrap gap-3">
            {Object.entries(exampleProfile).map(([key, value]) => (
              <span key={key} className="inline-flex items-center px-3 py-1.5 rounded-full text-sm" style={{ backgroundColor: `${COLORS.primary}14`, color: COLORS.primary, fontFamily: fontStack.body }}>
                {value}
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {exampleWines.map((wine) => {
            const total = Object.values(wine.scores).reduce((a, b) => a + b, 0);
            return (
              <div key={wine.name} className="rounded-xl p-6 shadow-sm" style={{ backgroundColor: COLORS.card, border: "1px solid rgba(44,31,14,0.08)" }}>
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-semibold" style={{ fontFamily: fontStack.display, color: COLORS.text }}>{wine.name}</h3>
                    <p className="text-sm" style={{ color: "rgba(44,31,14,0.6)", fontFamily: fontStack.body, fontWeight: 300 }}>{wine.style} · {wine.color} · {wine.price}</p>
                  </div>
                  <div className="text-center px-4 py-2 rounded-xl" style={{ backgroundColor: total === maxTotal ? COLORS.green : `${COLORS.primary}14` }}>
                    <span className="block text-2xl font-bold" style={{ color: total === maxTotal ? "#ffffff" : COLORS.primary, fontFamily: fontStack.display }}>{total}</span>
                    <span className="text-xs uppercase" style={{ color: total === maxTotal ? "rgba(255,255,255,0.85)" : COLORS.secondary, fontFamily: fontStack.body }}>Punkte</span>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { label: "Stil passt", value: wine.scores.style },
                    { label: "Essenspaarung", value: wine.scores.food },
                    { label: "Anlass passt", value: wine.scores.occasion },
                    { label: "Farbe passt", value: wine.scores.color },
                    { label: "Budget passt", value: wine.scores.budget },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex items-center justify-between text-sm">
                      <span style={{ color: "rgba(44,31,14,0.75)", fontFamily: fontStack.body, fontWeight: 300 }}>{label}</span>
                      <span className="font-semibold" style={{ color: value > 0 ? COLORS.primary : "rgba(44,31,14,0.35)", fontFamily: fontStack.body }}>+{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .slice(0, 50);

const faqItems = [
  {
    id: "keine-einschraenkung",
    question: "Werden meine Kunden durch ein festes Ergebnis eingeschränkt?",
    answer: "Nein. Die Logik filtert und sortiert, schließt aber keine Weine kategorisch aus. Am Ende sieht der Kunde mehrere passende Vorschläge aus deinem Sortiment.",
  },
  {
    id: "empfehlungen-beeinflussen",
    question: "Kann ich die Empfehlungen beeinflussen?",
    answer: "Ja. Du legst fest, welche Weine bei gleicher Punktzahl bevorzugt werden — etwa Eigenprodukte, höhermarge Sortimente oder aktuelle Highlights.",
  },
  {
    id: "anzahl-fragen",
    question: "Wie viele Fragen muss der Kunde beantworten?",
    answer: "Maximal sechs. Viele Fragen lassen sich überspringen, wenn der Kunde keine Präferenz hat. Das Ziel ist eine schnelle, aber fundierte Beratung.",
  },
  {
    id: "kleines-sortiment",
    question: "Funktioniert das auch ohne großes Weinsortiment?",
    answer: "Ja. Die Logik skaliert mit deinem Angebot. Auch mit wenigen Weinen entsteht ein rundes Beratungserlebnis, weil jeder Wein gezielt in Szene gesetzt wird.",
  },
  {
    id: "wie-transparent",
    question: "Wie transparent ist das Matching?",
    answer: "Vollständig. Hinter jeder Empfehlung stehen klare, regelbasierte Entscheidungen — nachvollziehbar, anpassbar und jederzeit überprüfbar.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.replace("#", "");
      const idx = faqItems.findIndex((item) => item.id === hash);
      if (idx >= 0) {
        setOpenIndex(idx);
        requestAnimationFrame(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: "auto", block: "start" });
        });
      }
    };

    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

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
          {faqItems.map(({ question, answer, id }, index) => {
            const isOpen = openIndex === index;
            const handleDeepLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              setOpenIndex(index);
              window.history.pushState(null, "", `#${id}`);
              document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
            };
            return (
              <div
                key={id}
                id={id}
                className="rounded-xl overflow-hidden scroll-mt-24"
                style={{ backgroundColor: COLORS.card, border: "1px solid rgba(44,31,14,0.08)" }}
              >
                <div className="flex items-stretch">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex-1 flex items-center justify-between p-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <h3 className="font-semibold pr-4 text-base" style={{ fontFamily: fontStack.display, color: COLORS.text }}>{question}</h3>
                    <span className="flex-shrink-0 transition-transform duration-200" style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", color: COLORS.primary }}>
                      <ChevronDown size={20} />
                    </span>
                  </button>
                  <a
                    href={`#${id}`}
                    onClick={handleDeepLink}
                    className="flex items-center px-4 border-l transition-colors hover:text-[#8b2615]"
                    style={{ borderColor: "rgba(44,31,14,0.08)", color: "rgba(44,31,14,0.45)" }}
                    aria-label={`Direktlink zu „${question}“`}
                    title="Direktlink zu dieser Antwort"
                  >
                    <Link2 size={18} />
                  </a>
                </div>
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

const CtaBand = ({ onRequest }: { onRequest: () => void }) => (
  <section style={{ backgroundColor: COLORS.ctaBg }}>
    <div className="max-w-3xl mx-auto px-6 py-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-5 text-white" style={{ fontFamily: fontStack.display }}>
        Jetzt als Pilotkunde einsteigen
      </h2>
      <p className="mb-8 leading-relaxed" style={{ color: "rgba(245,240,232,0.75)", fontFamily: fontStack.body, fontWeight: 300 }}>
        Werde einer der ersten Weinshops mit einem digitalen Sommelier — und sichere dir besondere Konditionen als früher Partner.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <button onClick={onRequest} className="px-7 py-3.5 rounded-md font-semibold text-white hover:opacity-90 transition" style={{ backgroundColor: COLORS.primary, fontFamily: fontStack.body }}>
          Jetzt anfragen
        </button>
        <Link to="/#demo-erklaerung" className="px-7 py-3.5 rounded-md font-semibold border hover:bg-white/5 transition" style={{ borderColor: "rgba(245,240,232,0.3)", color: "#f5f0e8", fontFamily: fontStack.body }}>
          Demo ausprobieren
        </Link>
      </div>
    </div>
  </section>
);

const PilotFormModal = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" style={{ backgroundColor: "rgba(44,31,14,0.6)" }} onClick={onClose}>
    <div className="w-full max-w-lg rounded-xl shadow-2xl max-h-[90vh] overflow-y-auto" style={{ backgroundColor: COLORS.bg }} onClick={(e) => e.stopPropagation()}>
      <div className="flex items-start justify-between p-6 pb-2">
        <div>
          <p className="text-xs font-bold uppercase mb-2" style={{ letterSpacing: "0.18em", color: COLORS.secondary, fontFamily: fontStack.body }}>Pilot-Programm</p>
          <h3 className="text-2xl font-bold" style={{ fontFamily: fontStack.display, color: COLORS.text }}>Jetzt anfragen</h3>
        </div>
        <button onClick={onClose} aria-label="Schließen" className="p-1 rounded hover:bg-black/5">
          <X size={20} style={{ color: COLORS.text }} />
        </button>
      </div>
      <div className="p-6 pt-4 space-y-6" style={{ fontFamily: fontStack.body, color: COLORS.text }}>
        <p>
          Du hast Fragen zu Weinfinder, möchtest eine Demo vereinbaren oder am Pilot-Programm teilnehmen?
          Wir freuen uns auf deine Nachricht.
        </p>
        <div>
          <h4 className="text-sm font-semibold uppercase mb-2" style={{ letterSpacing: "0.05em", color: COLORS.secondary }}>E-Mail</h4>
          <p className="flex items-center gap-3">
            <Mail size={18} style={{ color: COLORS.primary }} />
            <a href="mailto:info@premium-weinfinder.de" className="underline hover:opacity-70">info@premium-weinfinder.de</a>
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="border-t" style={{ borderColor: "rgba(44,31,14,0.08)", backgroundColor: COLORS.bg }}>
    <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-6 items-center justify-between">
      <Logo />
      <div className="flex flex-wrap gap-6 text-sm" style={{ color: "rgba(44,31,14,0.7)", fontFamily: fontStack.body }}>
        <a href="https://premium-weinfinder.de" className="hover:opacity-70">premium-weinfinder.de</a>
        <Link to="/kontakt" className="hover:opacity-70">Kontakt</Link>
        <Link to="/impressum" className="hover:opacity-70">Impressum</Link>
        <Link to="/datenschutz" className="hover:opacity-70">Datenschutz</Link>
      </div>
    </div>
  </footer>
);

const SoFunktionierts = () => {
  const [formOpen, setFormOpen] = useState(false);
  return (
  <div className="min-h-screen" style={{ backgroundColor: COLORS.bg, color: COLORS.text, fontFamily: fontStack.body, scrollBehavior: "smooth" }}>
    <style>{`html { scroll-behavior: smooth; }`}</style>
    <SEO
      title="So funktioniert's: Matching-Logik des Weinfinders"
      description="6 Fragen, klare Punkteregeln: So findet der Weinfinder in Sekunden passende Weine aus deinem Sortiment - mit Beispielrechnung und FAQ."
      path="/so-funktionierts"
      jsonLd={[
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "So funktioniert der Weinfinder",
          description:
            "6 Fragen, klare Punkteregeln: So findet der Weinfinder in Sekunden passende Weine aus deinem Sortiment.",
          inLanguage: "de-DE",
          url: "https://premium-weinfinder.de/so-funktionierts",
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Startseite", item: "https://premium-weinfinder.de/" },
            { "@type": "ListItem", position: 2, name: "So funktioniert's", item: "https://premium-weinfinder.de/so-funktionierts" },
          ],
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map(({ question, answer }) => ({
            "@type": "Question",
            name: question,
            acceptedAnswer: {
              "@type": "Answer",
              text: answer,
            },
          })),
        },
      ]}
    />
    <Nav />
    <main>
      <Hero />
      <WhatItMeans />
      <QuestionsGrid />
      <HowItWorksLogic />
      <ScoreExample />
      <Faq />
      <CtaBand onRequest={() => setFormOpen(true)} />
    </main>
    <Footer />
    {formOpen && <PilotFormModal onClose={() => setFormOpen(false)} />}
  </div>
  );
};

export default SoFunktionierts;
