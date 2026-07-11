import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, Palette, Link2, MessageSquareQuote, Gift, Smartphone, Layers, Check, X, Loader2, Menu } from "lucide-react";
import { useState, createContext, useContext } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import SEO from "@/components/SEO";

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

const Logo = ({ light = false }: { light?: boolean }) => (
  <Link to="/" className="font-bold text-2xl tracking-tight" style={{ fontFamily: fontStack.display, color: light ? "#f5f0e8" : COLORS.text }}>
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
          <a href="#how" className={linkClass}>Wie es funktioniert</a>
          <a href="#features" className={linkClass}>Features</a>
          <a href="#pricing" className={linkClass}>Preise</a>
        </div>
        <Link to="/demo" className="hidden md:inline-flex px-5 py-2.5 rounded-md text-sm font-semibold text-white hover:opacity-90 transition" style={{ backgroundColor: COLORS.primary, fontFamily: fontStack.body }}>
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
            <a href="#how" onClick={close} className="py-3 border-b" style={{ borderColor: "rgba(44,31,14,0.08)" }}>Wie es funktioniert</a>
            <a href="#features" onClick={close} className="py-3 border-b" style={{ borderColor: "rgba(44,31,14,0.08)" }}>Features</a>
            <a href="#pricing" onClick={close} className="py-3 border-b" style={{ borderColor: "rgba(44,31,14,0.08)" }}>Preise</a>
            <Link
              to="/demo"
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

const BrowserMockup = () => (
  <div className="rounded-xl overflow-hidden shadow-2xl" style={{ backgroundColor: "#fff", border: "1px solid rgba(44,31,14,0.1)" }}>
    <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ backgroundColor: "#f5f0e8", borderColor: "rgba(44,31,14,0.08)" }}>
      <div className="flex gap-1.5">
        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ff5f57" }} />
        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#febc2e" }} />
        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#28c840" }} />
      </div>
      <div className="flex-1 mx-3 px-3 py-1 rounded text-xs text-center" style={{ backgroundColor: "#fff", color: "#8b4a2a", fontFamily: fontStack.body }}>
        premium-weinfinder.de/demo
      </div>
    </div>
    <div className="px-6 py-16 text-center" style={{ backgroundColor: COLORS.demoBg }}>
      <div className="text-5xl mb-4">🍷</div>
      <h3 className="text-3xl font-bold mb-2 text-white" style={{ fontFamily: fontStack.display }}>Weinfinder</h3>
      <p className="italic text-sm mb-8" style={{ color: "rgba(245,240,232,0.6)", fontFamily: fontStack.display }}>
        Ihr digitaler Sommelier
      </p>
      <Link to="/demo" className="inline-block px-6 py-3 rounded-md font-semibold text-sm hover:opacity-90 transition" style={{ backgroundColor: COLORS.green, color: COLORS.demoBg, fontFamily: fontStack.body }}>
        Weinberatung starten
      </Link>
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
        <Link to="/demo" className="px-6 py-3 rounded-md font-semibold text-white hover:opacity-90 transition" style={{ backgroundColor: COLORS.primary, fontFamily: fontStack.body }}>
          Demo ausprobieren
        </Link>
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
        In drei einfachen Schritten zum passenden Wein
      </h2>
      <p style={{ color: "rgba(44,31,14,0.7)", fontFamily: fontStack.body, fontWeight: 300 }}>
        Deine Kunden klicken durch sechs schnelle Fragen — und erhalten eine fundierte, personalisierte Empfehlung.
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
      <Link to="/demo" className="inline-block px-6 py-3 rounded-md font-semibold border hover:bg-black/5 transition" style={{ borderColor: "rgba(44,31,14,0.2)", color: COLORS.text, fontFamily: fontStack.body }}>
        Selbst ausprobieren → premium-weinfinder.de/demo
      </Link>
    </div>
  </section>
);

const Features = () => {
  const items = [
    { Icon: Sparkles, title: "Regelbasiertes Matching", desc: "Transparente Logik statt Black-Box-KI. Du behältst die Kontrolle über jede Empfehlung." },
    { Icon: Palette, title: "White-Label Branding", desc: "Logo, Farben, Schriften — alles anpassbar an deinen Shop und deine Marke." },
    { Icon: Link2, title: "Direkte Shop-Links", desc: "Vom Ergebnis mit einem Klick zur Produktseite und in den Warenkorb." },
    { Icon: MessageSquareQuote, title: "Erklärte Empfehlungen", desc: "Jeder Wein kommt mit einer Begründung — wie bei einer echten Beratung." },
    { Icon: Gift, title: "Geschenkmodus", desc: "Eigene Logik für Geschenk-Anlässe — perfekt für Weihnachten und Geburtstage." },
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
    { name: "Starter", price: "39 €", per: "/Monat", setup: "zzgl. 499 € Einrichtung", recommended: true, soon: false, features: ["Vollständig anpassbares Branding", "Bis zu 100 Weine im Katalog", "Direkte Shop-Verlinkung", "Quiz-Editor", "E-Mail Support"], cta: "Jetzt anfragen" },
    { name: "Professional", price: "79 €", per: "/Monat", setup: "zzgl. 499 € Einrichtung", recommended: false, soon: true, features: ["Alles aus Starter", "Bis zu 500 Weine", "A/B Testing", "Lead-Capture & CRM-Export", "Priority Support"], cta: "Demnächst verfügbar" },
    { name: "Enterprise", price: "Individuell", per: "", setup: "Auf Anfrage", recommended: false, soon: true, features: ["Unbegrenzte Weine", "Mehrere Shops", "API-Zugang", "Custom Features", "Dedicated Account Manager"], cta: "Demnächst verfügbar" },
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
            opacity: p.soon ? 0.5 : 1,
          }}>
            {p.recommended && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold text-white" style={{ backgroundColor: COLORS.primary, fontFamily: fontStack.body }}>
                Empfohlen
              </span>
            )}
            {p.soon && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: COLORS.secondary, color: "#fff", fontFamily: fontStack.body }}>
                Coming soon
              </span>
            )}
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: fontStack.display, color: COLORS.text }}>{p.name}</h3>
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
            <button onClick={() => !p.soon && open()} disabled={p.soon} className="w-full py-3 rounded-md text-sm font-semibold disabled:cursor-not-allowed" style={{
              backgroundColor: p.soon ? "rgba(44,31,14,0.1)" : COLORS.primary,
              color: p.soon ? "rgba(44,31,14,0.5)" : "#fff",
              fontFamily: fontStack.body,
            }}>
              {p.cta}
            </button>
          </div>
        ))}
      </div>
      <p className="text-center text-xs mt-10" style={{ color: "rgba(44,31,14,0.55)", fontFamily: fontStack.body }}>
        Alle Preise netto zzgl. MwSt. · Monatlich kündbar nach Mindestlaufzeit von 12 Monaten
      </p>
    </section>
  );
};

const CtaBand = () => (
  <PilotBandInner />
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
        <Link to="/demo" className="px-7 py-3.5 rounded-md font-semibold border hover:bg-white/5 transition" style={{ borderColor: "rgba(245,240,232,0.3)", color: "#f5f0e8", fontFamily: fontStack.body }}>
          Demo ausprobieren
        </Link>
      </div>
    </div>
  </section>
  );
};

const Footer = () => (
  <footer className="border-t" style={{ borderColor: "rgba(44,31,14,0.08)" }}>
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

const PilotFormModal = ({ onClose }: { onClose: () => void }) => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", shop_url: "", phone: "", message: "" });
  const [website, setWebsite] = useState(""); // honeypot
  const [mountedAt] = useState(() => Date.now());

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      toast.error("Bitte Name und E-Mail angeben.");
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.functions.invoke("submit-pilot-request", {
        body: { ...form, website, elapsed_ms: Date.now() - mountedAt },
      });
      if (error) throw error;
      toast.success("Vielen Dank! Wir melden uns in Kürze.");
      onClose();
    } catch (err) {
      console.error(err);
      toast.error("Etwas ist schiefgelaufen. Bitte versuche es erneut.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "10px 12px",
    borderRadius: 6,
    border: "1px solid rgba(44,31,14,0.18)",
    backgroundColor: "#fff",
    color: COLORS.text,
    fontFamily: fontStack.body,
    fontSize: 14,
  };
  const labelStyle: React.CSSProperties = { fontSize: 12, fontWeight: 600, color: COLORS.text, marginBottom: 6, display: "block", fontFamily: fontStack.body };

  return (
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
        <form onSubmit={submit} className="p-6 pt-4 space-y-4">
          {/* Honeypot field — hidden from real users, often filled by bots */}
          <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
            <label>
              Website (bitte leer lassen)
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </label>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label style={labelStyle}>Name *</label>
              <input required value={form.name} onChange={update("name")} style={inputStyle} maxLength={120} />
            </div>
            <div>
              <label style={labelStyle}>E-Mail *</label>
              <input required type="email" value={form.email} onChange={update("email")} style={inputStyle} maxLength={255} />
            </div>
            <div>
              <label style={labelStyle}>Firma</label>
              <input value={form.company} onChange={update("company")} style={inputStyle} maxLength={200} />
            </div>
            <div>
              <label style={labelStyle}>Shop-URL</label>
              <input value={form.shop_url} onChange={update("shop_url")} placeholder="https://" style={inputStyle} maxLength={300} />
            </div>
            <div className="md:col-span-2">
              <label style={labelStyle}>Telefon</label>
              <input value={form.phone} onChange={update("phone")} style={inputStyle} maxLength={60} />
            </div>
            <div className="md:col-span-2">
              <label style={labelStyle}>Nachricht</label>
              <textarea value={form.message} onChange={update("message")} rows={4} style={inputStyle} maxLength={2000} />
            </div>
          </div>
          <button type="submit" disabled={loading} className="w-full py-3 rounded-md font-semibold text-white hover:opacity-90 transition disabled:opacity-60 inline-flex items-center justify-center gap-2" style={{ backgroundColor: COLORS.primary, fontFamily: fontStack.body }}>
            {loading && <Loader2 size={16} className="animate-spin" />}
            {loading ? "Wird gesendet…" : "Anfrage senden"}
          </button>
          <p className="text-xs text-center" style={{ color: "rgba(44,31,14,0.55)", fontFamily: fontStack.body }}>
            Wir melden uns innerhalb von 1–2 Werktagen bei dir.
          </p>
        </form>
      </div>
    </div>
  );
};

const Landing = () => {
  const [formOpen, setFormOpen] = useState(false);
  return (
    <PilotFormContext.Provider value={{ open: () => setFormOpen(true) }}>
    <div className="min-h-screen" style={{ backgroundColor: COLORS.bg, color: COLORS.text, fontFamily: fontStack.body, scrollBehavior: "smooth" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap'); html { scroll-behavior: smooth; }`}</style>
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
      <Nav />
      <main>
        <Hero />
        <Stats />
        <HowItWorks />
        <Features />
        <Pricing />
        <CtaBand />
      </main>
      <Footer />
      {formOpen && <PilotFormModal onClose={() => setFormOpen(false)} />}
    </div>
    </PilotFormContext.Provider>
  );
};

export default Landing;