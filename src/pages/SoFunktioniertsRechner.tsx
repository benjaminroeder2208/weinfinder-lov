import { Link } from "react-router-dom";
import { Calculator } from "lucide-react";
import { useState } from "react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const COLORS = {
  bg: "#f5f0e8",
  primary: "#8b2615",
  secondary: "#8b4a2a",
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
          </div>
        </div>
      )}
    </nav>
  );
};

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

type Selections = {
  occasion: string;
  style: string;
  food: string;
  color: string;
  budget: string;
};

const calculatorOptions = {
  occasion: ["Dinner zu zweit", "Abend mit Freunden", "Festlicher Anlass", "Entspannter Abend"],
  style: ["Kräftig & intensiv", "Leicht & frisch", "Fruchtig & sanft", "Elegant & komplex"],
  food: ["Rind", "Fisch", "Geflügel", "Vegetarisch", "Pasta", "Käse", "Dessert"],
  color: ["Rot", "Weiß", "Rosé", "Schaumwein"],
  budget: ["bis 10 €", "10-15 €", "15-25 €", "über 25 €"],
};

const calculatorWines = [
  { name: "Cuvée Reserve", style: "Kräftig & intensiv", food: "Rind", color: "Rot", occasion: "Dinner zu zweit", budget: "10-15 €", price: "13,90 €" },
  { name: "Weißburgunder Trocken", style: "Leicht & frisch", food: "Fisch", color: "Weiß", occasion: "Abend mit Freunden", budget: "10-15 €", price: "11,50 €" },
  { name: "Rosé Sommerliebling", style: "Leicht & frisch", food: "Vegetarisch", color: "Rosé", occasion: "Entspannter Abend", budget: "bis 10 €", price: "8,90 €" },
  { name: "Riesling Auslese", style: "Elegant & komplex", food: "Dessert", color: "Weiß", occasion: "Festlicher Anlass", budget: "15-25 €", price: "18,50 €" },
  { name: "Spätburgunder Prestige", style: "Elegant & komplex", food: "Geflügel", color: "Rot", occasion: "Festlicher Anlass", budget: "über 25 €", price: "29,00 €" },
];

const scoreLabels: { key: keyof Selections; label: string; weight: number }[] = [
  { key: "style", label: "Stil passt", weight: 3 },
  { key: "food", label: "Essenspaarung", weight: 2 },
  { key: "occasion", label: "Anlass passt", weight: 2 },
  { key: "color", label: "Farbe passt", weight: 1 },
  { key: "budget", label: "Budget passt", weight: 1 },
];

const scoreWine = (wine: typeof calculatorWines[number], selections: Selections) => {
  let total = 0;
  const breakdown = scoreLabels.map(({ key, label, weight }) => {
    const match = wine[key] === selections[key] ? weight : 0;
    total += match;
    return { label, value: match, weight };
  });
  return { total, breakdown };
};

const defaultSelections: Selections = {
  occasion: "Dinner zu zweit",
  style: "Kräftig & intensiv",
  food: "Rind",
  color: "Rot",
  budget: "10-15 €",
};

const MatchingRechner = () => {
  const [selections, setSelections] = useState<Selections>(defaultSelections);

  const results = calculatorWines
    .map((wine) => ({ wine, ...scoreWine(wine, selections) }))
    .sort((a, b) => b.total - a.total);
  const maxTotal = results[0]?.total ?? 0;

  return (
    <section style={{ backgroundColor: COLORS.bg }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="rounded-xl p-6 shadow-sm mb-10" style={{ backgroundColor: COLORS.card, border: "1px solid rgba(44,31,14,0.08)" }}>
          <div className="flex items-center gap-3 mb-6">
            <Calculator size={22} style={{ color: COLORS.primary }} />
            <h2 className="text-lg font-semibold" style={{ fontFamily: fontStack.display, color: COLORS.text }}>Kundenwunsch</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {scoreLabels.map(({ key, label }) => (
              <div key={key}>
                <label className="block text-sm font-medium mb-2" style={{ color: "rgba(44,31,14,0.75)", fontFamily: fontStack.body }}>
                  {label.replace(" passt", "")}
                </label>
                <select
                  value={selections[key]}
                  onChange={(e) => setSelections((prev) => ({ ...prev, [key]: e.target.value }))}
                  className="w-full rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2"
                  style={{
                    backgroundColor: COLORS.bg,
                    color: COLORS.text,
                    border: "1px solid rgba(44,31,14,0.12)",
                    fontFamily: fontStack.body,
                  }}
                >
                  {calculatorOptions[key as keyof typeof calculatorOptions].map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-end">
            <button
              type="button"
              onClick={() => setSelections(defaultSelections)}
              className="text-sm font-medium underline-offset-2 hover:underline"
              style={{ color: COLORS.secondary, fontFamily: fontStack.body }}
            >
              Zurücksetzen
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {results.map(({ wine, total, breakdown }) => {
            const isTop = total === maxTotal && total > 0;
            return (
              <div
                key={wine.name}
                className="rounded-xl p-6 shadow-sm"
                style={{
                  backgroundColor: COLORS.card,
                  border: `1px solid ${isTop ? COLORS.green : "rgba(44,31,14,0.08)"}`,
                }}
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-semibold" style={{ fontFamily: fontStack.display, color: COLORS.text }}>{wine.name}</h3>
                    <p className="text-sm" style={{ color: "rgba(44,31,14,0.6)", fontFamily: fontStack.body, fontWeight: 300 }}>
                      {wine.style} · {wine.color} · {wine.price}
                    </p>
                  </div>
                  <div className="text-center px-4 py-2 rounded-xl" style={{ backgroundColor: isTop ? COLORS.green : `${COLORS.primary}14` }}>
                    <span className="block text-2xl font-bold" style={{ color: isTop ? "#ffffff" : COLORS.primary, fontFamily: fontStack.display }}>{total}</span>
                    <span className="text-xs uppercase" style={{ color: isTop ? "rgba(255,255,255,0.85)" : COLORS.secondary, fontFamily: fontStack.body }}>Punkte</span>
                  </div>
                </div>
                <div className="space-y-3">
                  {breakdown.map(({ label, value, weight }) => (
                    <div key={label} className="flex items-center justify-between text-sm">
                      <span style={{ color: "rgba(44,31,14,0.75)", fontFamily: fontStack.body, fontWeight: 300 }}>{label}</span>
                      <span className="font-semibold" style={{ color: value > 0 ? COLORS.primary : "rgba(44,31,14,0.35)", fontFamily: fontStack.body }}>
                        +{value}/{weight}
                      </span>
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

const SoFunktioniertsRechner = () => (
  <div className="min-h-screen" style={{ backgroundColor: COLORS.bg, color: COLORS.text, fontFamily: fontStack.body }}>
    <SEO
      title="Matching-Rechner | Weinfinder"
      description="Interaktiver Matching-Rechner des Weinfinders."
      path="/so-funktionierts/rechner"
      noindex
    />
    <Nav />
    <main>
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-4 text-center">
        <div className="max-w-2xl mx-auto">
          <Kicker>Interaktiver Rechner</Kicker>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ fontFamily: fontStack.display, color: COLORS.text }}>
            Punkte live nachvollziehen
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "rgba(44,31,14,0.75)", fontFamily: fontStack.body, fontWeight: 300 }}>
            Wähle ein Kundenprofil aus und sieh sofort, wie sich die Punktzahl für jeden Beispielwein zusammensetzt.
          </p>
        </div>
      </section>
      <MatchingRechner />
    </main>
    <Footer />
  </div>
);

export default SoFunktioniertsRechner;
