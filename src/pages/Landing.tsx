import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, Palette, Link2, MessageSquareQuote, Code, Smartphone, Check, X, Mail, ChevronDown } from "lucide-react";
import { useState, createContext, useContext } from "react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const PilotFormContext = createContext<{ open: () => void }>({ open: () => {} });
const usePilotForm = () => useContext(PilotFormContext);

const COLORS = {
  bg: "#f5f0e8",
  primary: "#8b2615",
  secondary: "#8b4a2a",
  ctaBg: "#2c1f0e",
  featuresBg: "#ede8de",
  card: "#ffffff",
  text: "#2c1f0e",
  green: "#a0bd00",
  demoBg: "#1a1008",
};

const fontStack = {
  display: "'Playfair Display', serif",
  body: "'Lato', sans-serif",
};


const Kicker = ({ children, color = COLORS.secondary }: { children: React.ReactNode; color?: string }) => (
  <p className="text-xs font-bold uppercase mb-4" style={{ letterSpacing: "0.18em", color, fontFamily: fontStack.body }}>
    {children}
  </p>
);


const BrowserMockup = () => (
  <div className="rounded-xl overflow-hidden shadow-2xl" style={{ backgroundColor: "#fff", border: "1px solid rgba(44,31,14,0.1)" }}>
    <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ backgroundColor: "#f5f0e8", borderColor: "rgba(44,31,14,0.08)" }}>
      <div className="flex gap-1.5">
        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ff5f57" }} />
        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#febc2e" }} />
        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#28c840" }} />
      </div>
      <div className="flex-1 mx-3 px-3 py-1 rounded text-xs text-center" style={{ backgroundColor: "#fff", color: "#8b4a2a", fontFamily: fontStack.body }}>
        app.premium-weinfinder.de/w/demo
      </div>
    </div>
    <div className="px-6 py-16 text-center" style={{ backgroundColor: COLORS.demoBg }}>
      <div className="text-5xl mb-4">🍷</div>
      <h3 className="text-3xl font-bold mb-2 text-white" style={{ fontFamily: fontStack.display }}>Weinfinder</h3>
      <p className="italic text-sm mb-8" style={{ color: "rgba(245,240,232,0.6)", fontFamily: fontStack.display }}>
        Ihr digitaler Sommelier
      </p>
      <a href="#demo-erklaerung" className="inline-block px-6 py-3 rounded-md font-semibold text-sm hover:opacity-90 transition" style={{ backgroundColor: COLORS.green, color: COLORS.demoBg, fontFamily: fontStack.body }}>
        Weinberatung starten
      </a>
    </div>
  </div>
);

const Hero = () => (
  <section className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
    <div>
      <Kicker>Der digitale Sommelier für deinen Shop</Kicker>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ fontFamily: fontStack.display, color: COLORS.text }}>
        Mehr Weinverkäufe durch <em style={{ color: COLORS.primary, fontStyle: "italic" }}>persönliche</em> Beratung — automatisch
      </h1>
      <p className="text-lg mb-8 leading-relaxed" style={{ color: "rgba(44,31,14,0.75)", fontFamily: fontStack.body, fontWeight: 300 }}>
        Weinfinder führt deine Shopbesucher in 60 Sekunden zum richtigen Wein. 6 kurze Fragen, eine persönliche Empfehlung — fast wie im Gespräch mit einem echten Sommelier.
      </p>
      <div className="flex flex-wrap gap-4">
        <a href="#demo-erklaerung" className="px-6 py-3 rounded-md font-semibold text-white hover:opacity-90 transition" style={{ backgroundColor: COLORS.primary, fontFamily: fontStack.body }}>
          Demo ausprobieren
        </a>
        <a href="#how" className="px-6 py-3 rounded-md font-semibold border hover:bg-black/5 transition" style={{ borderColor: "rgba(44,31,14,0.2)", color: COLORS.text, fontFamily: fontStack.body }}>
          Mehr erfahren
        </a>
      </div>
    </div>
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <BrowserMockup />
    </motion.div>
  </section>
);

const Stats = () => {
  const stats = [
    { v: "6", l: "Fragen zum Wein" },
    { v: "60 Sek.", l: "bis zur Empfehlung" },
    { v: "1 Klick", l: "direkt in den Shop" },
    { v: "White-Label", l: "dein Branding" },
  ];
  return (
    <section style={{ backgroundColor: COLORS.featuresBg }}>
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.l} className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2" style={{ fontFamily: fontStack.display, color: COLORS.primary }}>{s.v}</div>
            <div className="text-sm" style={{ color: "rgba(44,31,14,0.7)", fontFamily: fontStack.body }}>{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

const ProgressBars = ({ active }: { active: number }) => (
  <div className="flex gap-1.5 mb-5">
    {[1, 2, 3, 4, 5, 6].map((i) => (
      <div key={i} className="flex-1 h-1 rounded-full" style={{ backgroundColor: i <= active ? COLORS.green : "rgba(44,31,14,0.1)" }} />
    ))}
  </div>
);

const QuizCard = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl p-6 shadow-sm" style={{ backgroundColor: COLORS.card, border: "1px solid rgba(44,31,14,0.08)" }}>
    {children}
  </div>
);

const OptionBtn = ({ label, selected = false }: { label: string; selected?: boolean }) => (
  <div className="px-4 py-2.5 rounded-md text-sm border" style={{
    backgroundColor: selected ? `${COLORS.primary}10` : "transparent",
    borderColor: selected ? COLORS.primary : "rgba(44,31,14,0.12)",
    color: COLORS.text,
    fontFamily: fontStack.body,
    fontWeight: selected ? 600 : 400,
  }}>{label}</div>
);

const HowItWorks = () => (
  <section id="how" className="max-w-6xl mx-auto px-6 py-20">
    <div className="text-center mb-14 max-w-2xl mx-auto">
      <Kicker>Wie es funktioniert</Kicker>
      <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: fontStack.display, color: COLORS.text }}>
        Der passende Wein für deine Kunden
      </h2>
      <p style={{ color: "rgba(44,31,14,0.7)", fontFamily: fontStack.body, fontWeight: 300 }}>
        Sechs einfache Fragen und deine Kunden erhalten eine fundierte, personalisierte Weinempfehlung aus deinem Sortiment.
      </p>
    </div>
    <div className="grid md:grid-cols-3 gap-6">
      <QuizCard>
        <p className="text-xs uppercase mb-3" style={{ letterSpacing: "0.15em", color: COLORS.secondary, fontFamily: fontStack.body }}>Frage 1 von 6</p>
        <ProgressBars active={1} />
        <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: fontStack.display, color: COLORS.text }}>Wann möchtest du den Wein trinken?</h3>
        <div className="flex flex-col gap-2">
          <OptionBtn label="gemütlicher Abend" />
          <OptionBtn label="Dinner mit Freunden" selected />
          <OptionBtn label="Geschenk" />
        </div>
      </QuizCard>
      <QuizCard>
        <p className="text-xs uppercase mb-3" style={{ letterSpacing: "0.15em", color: COLORS.secondary, fontFamily: fontStack.body }}>Frage 3 von 6</p>
        <ProgressBars active={3} />
        <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: fontStack.display, color: COLORS.text }}>Möchtest du den Wein zu einem Essen trinken?</h3>
        <div className="flex flex-col gap-2">
          <OptionBtn label="Fisch / Meeresfrüchte" />
          <OptionBtn label="Fleisch / Grill" selected />
          <OptionBtn label="Pasta / mediterran" />
        </div>
      </QuizCard>
      <QuizCard>
        <p className="text-xs uppercase mb-3" style={{ letterSpacing: "0.15em", color: COLORS.primary, fontFamily: fontStack.body }}>Top Empfehlung</p>
        <h3 className="text-xl font-bold mb-1" style={{ fontFamily: fontStack.display, color: COLORS.text }}>Sauvignon Blanc</h3>
        <p className="text-xs mb-3" style={{ color: "rgba(44,31,14,0.6)", fontFamily: fontStack.body }}>Weingut Müller · Pfalz · 2022</p>
        <p className="text-2xl font-bold mb-4" style={{ fontFamily: fontStack.display, color: COLORS.primary }}>14,90 €</p>
        <button className="w-full py-2.5 rounded-md text-sm font-semibold mb-4" style={{ backgroundColor: COLORS.green, color: COLORS.demoBg, fontFamily: fontStack.body }}>
          Zum Wein
        </button>
        <div className="space-y-2">
          {[{ l: "Frucht", v: 60 }, { l: "Körper", v: 35 }, { l: "Frische", v: 80 }].map((b) => (
            <div key={b.l}>
              <div className="flex justify-between text-xs mb-1" style={{ color: "rgba(44,31,14,0.7)", fontFamily: fontStack.body }}>
                <span>{b.l}</span><span>{b.v}%</span>
              </div>
              <div className="h-1.5 rounded-full" style={{ backgroundColor: "rgba(44,31,14,0.08)" }}>
                <div className="h-full rounded-full" style={{ width: `${b.v}%`, backgroundColor: COLORS.primary }} />
              </div>
            </div>
          ))}
        </div>
      </QuizCard>
    </div>
    <div className="text-center mt-10">
      <Link to="/so-funktionierts" className="inline-block px-6 py-3 rounded-md font-semibold border hover:bg-black/5 transition" style={{ borderColor: "rgba(44,31,14,0.2)", color: COLORS.text, fontFamily: fontStack.body }}>
        Details zur Matching-Logik erfahren →
      </Link>
    </div>
  </section>
);

const DemoErklaerung = () => {
  const shops = [
    { name: "Weingut A.", checked: true },
    { name: "Weingut K.", checked: true },
    { name: "Weingut G.", checked: true },
    { name: "Weingut L.", checked: true },
  ];
  return (
    <section id="demo-erklaerung" className="max-w-6xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Kicker color={COLORS.secondary}>ECHTE WEINE, ECHTE SHOPS</Kicker>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: fontStack.display, color: COLORS.text }}>
            Probier's mit echten Weinen aus
          </h2>
          <p className="text-lg mb-8 leading-relaxed" style={{ color: "rgba(44,31,14,0.75)", fontFamily: fontStack.body, fontWeight: 300 }}>
            Unsere Demo zeigt keine Fantasieweine. Wähle einen oder mehrere echte Weinshops aus unserem Kundenkreis aus und erlebe die Empfehlung mit deren tatsächlichem Sortiment - genau so, wie es später bei dir aussehen wird.
          </p>
          <a
            href="https://app.premium-weinfinder.de/w/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-md font-semibold text-white hover:opacity-90 transition text-lg"
            style={{ backgroundColor: COLORS.primary, fontFamily: fontStack.body }}
          >
            Demo jetzt starten
          </a>
        </div>
        <div className="rounded-xl p-6 shadow-sm" style={{ backgroundColor: COLORS.card, border: "1px solid rgba(44,31,14,0.08)" }}>
          <p className="text-xs uppercase mb-4" style={{ letterSpacing: "0.15em", color: COLORS.secondary, fontFamily: fontStack.body }}>Pilotkunden-Sortimente</p>
          <div className="space-y-1">
            {shops.map((shop) => (
              <div key={shop.name} className="flex items-center justify-between gap-3 py-3 border-b last:border-0" style={{ borderColor: "rgba(44,31,14,0.08)" }}>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded flex items-center justify-center" style={{ backgroundColor: shop.checked ? COLORS.primary : "rgba(44,31,14,0.08)" }}>
                    {shop.checked && <Check size={14} color="#fff" />}
                  </div>
                  <span className="text-sm" style={{ fontFamily: fontStack.body, color: COLORS.text }}>{shop.name}</span>
                </div>
                <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded" style={{ backgroundColor: `${COLORS.green}20`, color: COLORS.demoBg, fontFamily: fontStack.body, letterSpacing: "0.05em" }}>Pilotkunde</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const items = [
    { Icon: Sparkles, title: "Regelbasiertes Matching", desc: "Transparente, nachvollziehbare Logik. Du behältst die Kontrolle über jede Empfehlung." },
    { Icon: Palette, title: "White-Label Branding", desc: "Logo, Farben, Texte & Schriftart — alles anpassbar an deinen Shop und deine Marke." },
    { Icon: Link2, title: "Direkte Shop-Links", desc: "Vom Ergebnis mit einem Klick zur Produktseite und in den Warenkorb." },
    { Icon: MessageSquareQuote, title: "Erklärte Empfehlungen", desc: "Jeder Wein kommt mit einer Begründung — wie bei einer echten Beratung." },
    { Icon: Code, title: "Flexible Einbindung", desc: "Auf deiner Website per iFrame – oder ganz ohne Umbau als eigenständiger Link für Instagram-Bio & Co." },
    { Icon: Smartphone, title: "Mobile First", desc: "Optimiert für Smartphones — denn deine Kunden shoppen unterwegs." },
  ];
  return (
    <section id="features" style={{ backgroundColor: COLORS.featuresBg }}>
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <Kicker>Features</Kicker>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: fontStack.display, color: COLORS.text }}>
            Alles, was ein moderner Weinshop braucht
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map(({ Icon, title, desc }) => (
            <div key={title} className="rounded-xl p-6 flex gap-5" style={{ backgroundColor: COLORS.card, border: "1px solid rgba(44,31,14,0.06)" }}>
              <div className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: `${COLORS.primary}14` }}>
                <Icon size={22} style={{ color: COLORS.primary }} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1.5" style={{ fontFamily: fontStack.display, color: COLORS.text }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(44,31,14,0.7)", fontFamily: fontStack.body, fontWeight: 300 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const Pricing = () => {
  const { open } = usePilotForm();
  const plans = [
    { name: "Social", price: "19 €", per: "/Monat", setup: "zzgl. 149 € Einrichtung", recommended: false, soon: false, note: "Keine Website-Einbindung nötig", features: ["Vollständig anpassbares Branding", "Bis zu 30 Weine", "Eigenständiger Link (Instagram-Bio, Linktree, Story)", "Direkte Shop-Verlinkung", "E-Mail-Support"], cta: "Jetzt anfragen" },
    { name: "Basis", price: "39 €", per: "/Monat", setup: "zzgl. 299 € Einrichtung", recommended: true, soon: false, features: ["Vollständig anpassbares Branding", "Bis zu 50 Weine", "Direkte Shop-Verlinkung", "Quiz-Editor", "E-Mail Support"], cta: "Jetzt anfragen" },
    { name: "Premium", price: "79 €", per: "/Monat", setup: "zzgl. 499 € Einrichtung", recommended: false, soon: false, features: ["Alles aus Basis", "Bis zu 100 Weine", "Sortiment sichtbar im Premium Weinfinder", "Lead-Capture & CRM-Export", "Priority Support"], cta: "Jetzt anfragen" },
  ];
  return (
    <section id="pricing" className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-14 max-w-2xl mx-auto">
        <Kicker>Preise</Kicker>
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: fontStack.display, color: COLORS.text }}>
          Faire Preise für jeden Shop
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((p) => (
          <div key={p.name} className="relative rounded-xl p-8" style={{
            backgroundColor: COLORS.card,
            border: p.recommended ? `1.5px solid ${COLORS.primary}` : "1px solid rgba(44,31,14,0.1)",
          }}>
            {p.recommended && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold text-white" style={{ backgroundColor: COLORS.primary, fontFamily: fontStack.body }}>
                Empfohlen
              </span>
            )}
            <h3 className="text-xl font-bold mb-1" style={{ fontFamily: fontStack.display, color: COLORS.text }}>{p.name}</h3>
            {p.note && (
              <p className="text-[11px] font-medium mb-4" style={{ color: COLORS.secondary, fontFamily: fontStack.body }}>{p.note}</p>
            )}
            {!p.note && <div className="mb-4" />}
            <div className="mb-1">
              <span className="text-4xl font-bold" style={{ fontFamily: fontStack.display, color: COLORS.text }}>{p.price}</span>
              <span className="text-sm" style={{ color: "rgba(44,31,14,0.6)", fontFamily: fontStack.body }}>{p.per}</span>
            </div>
            <p className="text-xs mb-6" style={{ color: "rgba(44,31,14,0.6)", fontFamily: fontStack.body }}>{p.setup}</p>
            <ul className="space-y-2.5 mb-8">
              {p.features.map((f) => (
                <li key={f} className="flex gap-2 text-sm" style={{ color: COLORS.text, fontFamily: fontStack.body, fontWeight: 300 }}>
                  <Check size={16} style={{ color: COLORS.primary, flexShrink: 0, marginTop: 3 }} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <button onClick={() => open()} className="w-full py-3 rounded-md text-sm font-semibold" style={{
              backgroundColor: COLORS.primary,
              color: "#fff",
              fontFamily: fontStack.body,
            }}>
              {p.cta}
            </button>
            {p.name === "Social" && (
              <Link to="/social" className="block text-center mt-3 text-xs hover:opacity-70 transition" style={{ color: COLORS.primary, fontFamily: fontStack.body }}>
                Details zum Social-Tarif →
              </Link>
            )}
          </div>
        ))}
      </div>
      <p className="text-center text-sm mt-10 mb-3" style={{ color: "rgba(44,31,14,0.7)", fontFamily: fontStack.body, fontWeight: 300 }}>
        Größeres Sortiment, mehrere Shops oder individuelle Anforderungen? Wir erstellen gerne eine maßgeschneiderte Lösung —{" "}
        <button onClick={open} className="underline hover:opacity-70 transition" style={{ color: COLORS.primary, fontFamily: fontStack.body }}>
          Kontakt aufnehmen
        </button>
      </p>
      <p className="text-center text-xs mt-3" style={{ color: "rgba(44,31,14,0.55)", fontFamily: fontStack.body }}>
        Alle Preise netto zzgl. MwSt. · Monatlich kündbar nach Mindestlaufzeit von 12 Monaten
      </p>
    </section>
  );
};

const PricingFaq = () => (
  <section style={{ backgroundColor: COLORS.featuresBg }}>
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h3 className="text-xl md:text-2xl font-bold text-center mb-8" style={{ fontFamily: fontStack.display, color: COLORS.text }}>
        Häufige Fragen zu den Tarifen
      </h3>
      <div className="flex flex-col gap-4">
        <details className="rounded-xl group" style={{ backgroundColor: COLORS.card, border: "1px solid rgba(44,31,14,0.08)" }}>
          <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-semibold text-base" style={{ fontFamily: fontStack.display, color: COLORS.text }}>
            Wie lange dauert die Einrichtung?
            <span className="transition-transform duration-200 group-open:rotate-180" style={{ color: COLORS.primary }}>
              <ChevronDown size={20} />
            </span>
          </summary>
          <p className="px-5 pb-5 text-sm leading-relaxed" style={{ color: "rgba(44,31,14,0.7)", fontFamily: fontStack.body, fontWeight: 300 }}>
            In der Regel ist der Weinfinder innerhalb von 48 Stunden einsatzbereit. Die Einrichtung umfasst Branding, Sortiments-Import, Shop-Verlinkung und einen kurzen Testlauf. Bei individuellen Anpassungen kann es etwas länger dauern.
          </p>
        </details>
        <details className="rounded-xl group" style={{ backgroundColor: COLORS.card, border: "1px solid rgba(44,31,14,0.08)" }}>
          <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-semibold text-base" style={{ fontFamily: fontStack.display, color: COLORS.text }}>
            Was passiert, wenn ich mehr Weine anbieten möchte als im Tarif enthalten?
            <span className="transition-transform duration-200 group-open:rotate-180" style={{ color: COLORS.primary }}>
              <ChevronDown size={20} />
            </span>
          </summary>
          <p className="px-5 pb-5 text-sm leading-relaxed" style={{ color: "rgba(44,31,14,0.7)", fontFamily: fontStack.body, fontWeight: 300 }}>
            Du kannst jederzeit auf ein größeres Paket upgraden. Für sehr große Sortimente oder mehrere Shops erstellen wir gerne eine maßgeschneiderte Enterprise-Lösung.
          </p>
        </details>
        <details className="rounded-xl group" style={{ backgroundColor: COLORS.card, border: "1px solid rgba(44,31,14,0.08)" }}>
          <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-semibold text-base" style={{ fontFamily: fontStack.display, color: COLORS.text }}>
            Wie sieht der Support aus?
            <span className="transition-transform duration-200 group-open:rotate-180" style={{ color: COLORS.primary }}>
              <ChevronDown size={20} />
            </span>
          </summary>
          <p className="px-5 pb-5 text-sm leading-relaxed" style={{ color: "rgba(44,31,14,0.7)", fontFamily: fontStack.body, fontWeight: 300 }}>
            Social und Basis enthalten E-Mail-Support. Premium-Kunden erhalten priorisierte Antworten und direktere Unterstützung bei Sortiments-Anpassungen und Fragen zur Einbindung.
          </p>
        </details>
        <details className="rounded-xl group" style={{ backgroundColor: COLORS.card, border: "1px solid rgba(44,31,14,0.08)" }}>
          <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-semibold text-base" style={{ fontFamily: fontStack.display, color: COLORS.text }}>
            Kann ich den Weinfinder vor dem Kauf testen?
            <span className="transition-transform duration-200 group-open:rotate-180" style={{ color: COLORS.primary }}>
              <ChevronDown size={20} />
            </span>
          </summary>
          <p className="px-5 pb-5 text-sm leading-relaxed" style={{ color: "rgba(44,31,14,0.7)", fontFamily: fontStack.body, fontWeight: 300 }}>
            Ja. Schreib uns einfach eine kurze Nachricht und wir zeigen dir anhand deines Sortiments, wie der Weinfinder für deinen Shop aussehen würde – unverbindlich und kostenlos.
          </p>
        </details>
      </div>
    </div>
  </section>
);

const CtaBand = () => (
  <PilotBandInner />
);

const UeberMich = () => (
  <section id="ueber" className="max-w-6xl mx-auto px-6 py-20" style={{ scrollMarginTop: 80 }}>
    <div className="grid md:grid-cols-[400px_1fr] gap-10 md:gap-14 items-center">
      <img
        src="/benjamin-roeder.jpg"
        alt="Benjamin Röder, Inhaber der Agentur kontakt² und Gründer von Weinfinder"
        width={400}
        height={400}
        loading="lazy"
        decoding="async"
        className="w-full max-w-[400px] mx-auto md:mx-0 aspect-square object-cover rounded-2xl shadow-xl"
        style={{ border: "1px solid rgba(44,31,14,0.1)" }}
      />
      <div>
        <Kicker color={COLORS.primary}>Über mich</Kicker>
        <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: fontStack.display, color: COLORS.text }}>
          Hallo, ich bin Benjamin Röder
        </h2>
        <div className="space-y-4 leading-relaxed" style={{ fontFamily: fontStack.body, color: "rgba(44,31,14,0.85)", fontWeight: 300 }}>
          <p>
            Ich bin Inhaber der Agentur kontakt² und betreue seit Jahren Weingüter im digitalen Bereich. Dabei ist mir über die letzten Jahre immer wieder ein Muster aufgefallen: Onlineshops haben oft ein großes, gutes Sortiment – aber Erstkunden und Bestandskunden, die etwas Neues ausprobieren wollen, wissen häufig nicht, wo sie anfangen sollen, und kaufen am Ende entweder den bekanntesten Wein oder brechen ganz ab.
          </p>
          <p>
            Aus genau diesem Problemverständnis ist der Weinfinder entstanden: ein Tool, das genau das leistet, was eine gute Weinberatung im Laden auch tut – nur automatisch, rund um die Uhr, und im Design Ihres Shops.
          </p>
          <p>
            Ich arbeite eng mit jedem Piloten zusammen, übernehme die technische Einrichtung komplett und bin persönlich erreichbar, wenn Fragen aufkommen.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const PilotBandInner = () => {
  const { open } = usePilotForm();
  return (
  <section style={{ backgroundColor: COLORS.ctaBg }}>
    <div className="max-w-3xl mx-auto px-6 py-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-5 text-white" style={{ fontFamily: fontStack.display }}>
        Jetzt als Pilotkunde einsteigen
      </h2>
      <p className="mb-8 leading-relaxed" style={{ color: "rgba(245,240,232,0.75)", fontFamily: fontStack.body, fontWeight: 300 }}>
        Werde einer der ersten Weinshops mit einem digitalen Sommelier — und sichere dir besondere Konditionen als früher Partner.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <button onClick={open} className="px-7 py-3.5 rounded-md font-semibold text-white hover:opacity-90 transition" style={{ backgroundColor: COLORS.primary, fontFamily: fontStack.body }}>
          Jetzt anfragen
        </button>
        <a href="#demo-erklaerung" className="px-7 py-3.5 rounded-md font-semibold border hover:bg-white/5 transition" style={{ borderColor: "rgba(245,240,232,0.3)", color: "#f5f0e8", fontFamily: fontStack.body }}>
          Demo ausprobieren
        </a>
      </div>
    </div>
  </section>
  );
};


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

const Landing = () => {
  const [formOpen, setFormOpen] = useState(false);
  return (
    <PilotFormContext.Provider value={{ open: () => setFormOpen(true) }}>
    <div className="min-h-screen" style={{ backgroundColor: COLORS.bg, color: COLORS.text, fontFamily: fontStack.body, scrollBehavior: "smooth" }}>
      <style>{`html { scroll-behavior: smooth; }`}</style>
      <SEO
        title="Weinfinder — Digitaler Sommelier für deinen Weinshop"
        description="White-Label Weinberater für Online-Weinhändler: Steigere Conversion mit einer geführten Empfehlung in 6 Fragen. Integration in unter 48 Stunden."
        path="/"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Weinfinder",
            url: "https://premium-weinfinder.de/",
            logo: "https://premium-weinfinder.de/logo.svg",
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Weinfinder",
            url: "https://premium-weinfinder.de/",
          },
        ]}
      />
      <Header />
      <main>
        <Hero />
        <Stats />
        <HowItWorks />
        <DemoErklaerung />
        <Features />
        <Pricing />
        <PricingFaq />
        <UeberMich />
        <CtaBand />
      </main>
      <Footer />
      {formOpen && <PilotFormModal onClose={() => setFormOpen(false)} />}
    </div>
    </PilotFormContext.Provider>
  );
};

export default Landing;