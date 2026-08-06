import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, X, Menu, Mail, Instagram, Hand, ArrowDown } from "lucide-react";
import { useState, createContext, useContext } from "react";
import SEO from "@/components/SEO";

const ContactContext = createContext<{ open: () => void }>({ open: () => {} });
const useContact = () => useContext(ContactContext);

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
  const location = useLocation();
  const isSocial = location.pathname === "/social";
  const linkClass = "hover:opacity-70 transition";
  const activeClass = "font-semibold underline decoration-2 underline-offset-4";
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md border-b" style={{ backgroundColor: `${COLORS.bg}ee`, borderColor: "rgba(44,31,14,0.08)" }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-4 flex items-center justify-between">
        <Logo />
        <div className="hidden md:flex items-center gap-8 text-sm" style={{ fontFamily: fontStack.body, color: COLORS.text }}>
          <Link to="/#how" className={linkClass}>Wie es funktioniert</Link>
          <Link to="/#demo-erklaerung" className={linkClass}>Demo</Link>
          <Link to="/#features" className={linkClass}>Features</Link>
          <Link to="/social" className={`${linkClass} ${isSocial ? activeClass : ""}`}>Social</Link>
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
          <div className="px-5 sm:px-6 py-4 flex flex-col gap-1 text-base" style={{ fontFamily: fontStack.body, color: COLORS.text }}>
            <Link to="/#how" onClick={close} className="py-3 border-b" style={{ borderColor: "rgba(44,31,14,0.08)" }}>Wie es funktioniert</Link>
            <Link to="/#demo-erklaerung" onClick={close} className="py-3 border-b" style={{ borderColor: "rgba(44,31,14,0.08)" }}>Demo</Link>
            <Link to="/#features" onClick={close} className="py-3 border-b" style={{ borderColor: "rgba(44,31,14,0.08)" }}>Features</Link>
            <Link to="/social" onClick={close} className={`py-3 border-b ${isSocial ? activeClass : ""}`} style={{ borderColor: "rgba(44,31,14,0.08)" }}>Social</Link>
            <Link to="/#pricing" onClick={close} className="py-3 border-b" style={{ borderColor: "rgba(44,31,14,0.08)" }}>Preise</Link>
            <Link to="/#ueber" onClick={close} className="py-3 border-b" style={{ borderColor: "rgba(44,31,14,0.08)" }}>Über mich</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const PhoneMockup = () => (
  <div className="mx-auto w-full max-w-[280px] sm:max-w-[320px] rounded-[1.75rem] sm:rounded-[2rem] overflow-hidden shadow-2xl border-[6px] sm:border-8" style={{ backgroundColor: "#fff", borderColor: "#2c1f0e" }}>
    <div className="px-4 sm:px-5 py-5" style={{ backgroundColor: "#fff" }}>
      <div className="flex items-center gap-3 mb-4">
        <span className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-full flex items-center justify-center" style={{ backgroundColor: `${COLORS.primary}14`, border: `2px solid ${COLORS.primary}` }}>
          <Instagram size={22} style={{ color: COLORS.primary }} />
        </span>
        <div className="min-w-0">
          <p className="text-sm font-semibold" style={{ color: COLORS.text, fontFamily: fontStack.body }}>weingut.muster</p>
          <p className="text-xs" style={{ color: "rgba(44,31,14,0.6)", fontFamily: fontStack.body }}>Weingut · Pfalz</p>
        </div>
      </div>
      <p className="text-xs leading-relaxed mb-3" style={{ color: "rgba(44,31,14,0.75)", fontFamily: fontStack.body }}>
        Finde deinen Wein in 60 Sekunden — Link in Bio
      </p>
      <div className="rounded-md px-3 py-2 text-xs font-semibold flex items-center justify-between gap-2" style={{ border: `1px solid ${COLORS.primary}`, color: COLORS.primary, fontFamily: fontStack.body }}>
        <span className="truncate">weinfinder.link/muster</span>
        <Hand size={14} className="shrink-0" />
      </div>
      <div className="flex justify-center py-3">
        <ArrowDown size={18} style={{ color: COLORS.secondary }} />
      </div>
    </div>
    <div className="px-4 sm:px-5 py-7 sm:py-8 text-center" style={{ backgroundColor: COLORS.demoBg }}>
      <h3 className="text-2xl font-bold mb-1 text-white" style={{ fontFamily: fontStack.display }}>Weinfinder</h3>
      <p className="italic text-xs mb-5" style={{ color: "rgba(245,240,232,0.6)", fontFamily: fontStack.display }}>Ihr digitaler Sommelier</p>
      <span className="inline-block px-4 sm:px-5 py-2.5 rounded-md font-semibold text-sm" style={{ backgroundColor: COLORS.green, color: COLORS.demoBg, fontFamily: fontStack.body }}>
        Weinberatung starten
      </span>
    </div>
  </div>
);

const Hero = () => {
  const { open } = useContact();
  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-6 py-14 sm:py-20 md:py-28 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
      <div>
        <Kicker>Für Instagram &amp; Co.</Kicker>
        <h1 className="text-[2rem] leading-[1.15] sm:text-4xl md:text-5xl lg:text-6xl font-bold md:leading-tight mb-5 sm:mb-6 break-words" style={{ fontFamily: fontStack.display, color: COLORS.text }}>
          Deine Weinberatung — direkt aus <em style={{ color: COLORS.primary, fontStyle: "italic" }}>Instagram</em>
        </h1>
        <p className="text-base sm:text-lg mb-7 sm:mb-8 leading-relaxed" style={{ color: "rgba(44,31,14,0.75)", fontFamily: fontStack.body, fontWeight: 300 }}>
          Kein Website-Umbau, keine technische Einbindung. Dein Weinfinder läuft über einen einzigen Link — perfekt für die Instagram-Bio, Story-Highlights oder Linktree.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
          <button onClick={open} className="w-full sm:w-auto px-6 py-3 rounded-md font-semibold text-white hover:opacity-90 transition" style={{ backgroundColor: COLORS.primary, fontFamily: fontStack.body }}>
            Jetzt starten
          </button>
          <Link to="/#demo-erklaerung" className="w-full sm:w-auto text-center px-6 py-3 rounded-md font-semibold border hover:bg-black/5 transition" style={{ borderColor: "rgba(44,31,14,0.2)", color: COLORS.text, fontFamily: fontStack.body }}>
            Demo ansehen
          </Link>
        </div>
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <PhoneMockup />
      </motion.div>
    </section>
  );
};

const Steps = () => {
  const steps = [
    { t: "Sortiment einrichten", d: "Wir übernehmen deine Weine und die Matching-Logik — wie gewohnt." },
    { t: "Link erhalten", d: "Du bekommst deinen persönlichen Weinfinder-Link, fertig eingerichtet." },
    { t: "In Bio eintragen", d: "Link in die Instagram-Bio oder Story — startklar, ganz ohne Programmierung." },
  ];
  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-6 py-14 sm:py-20">
      <div className="text-center mb-10 sm:mb-14 max-w-2xl mx-auto">
        <Kicker>So einfach geht's</Kicker>
        <h2 className="text-[1.75rem] sm:text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: fontStack.display, color: COLORS.text }}>
          In drei Schritten live
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
        {steps.map((s, i) => (
          <div key={s.t} className="rounded-xl p-5 sm:p-6 shadow-sm h-full" style={{ backgroundColor: COLORS.card, border: "1px solid rgba(44,31,14,0.08)" }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4 text-lg font-bold" style={{ backgroundColor: `${COLORS.primary}14`, color: COLORS.primary, fontFamily: fontStack.display }}>
              {i + 1}
            </div>
            <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: fontStack.display, color: COLORS.text }}>{s.t}</h3>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(44,31,14,0.7)", fontFamily: fontStack.body, fontWeight: 300 }}>{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Comparison = () => {
  const shared = ["Sortiment & Matching-Logik", "Direkte Shop-Links", "White-Label Branding"];
  const cols = [
    { t: "Website-Einbindung", extra: "Einbindung per iFrame auf der eigenen Website" },
    { t: "Link-Variante", extra: "Läuft als eigenständiger Link — ideal für Social Media" },
  ];
  return (
    <section style={{ backgroundColor: COLORS.featuresBg }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-14 sm:py-20">
        <div className="text-center mb-10 sm:mb-14 max-w-2xl mx-auto">
          <Kicker>Was bleibt gleich</Kicker>
          <h2 className="text-[1.75rem] sm:text-3xl md:text-4xl font-bold" style={{ fontFamily: fontStack.display, color: COLORS.text }}>
            Gleiche Logik. Anderer Zugang.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {cols.map((c) => (
            <div key={c.t} className="rounded-xl p-5 sm:p-6 shadow-sm h-full" style={{ backgroundColor: COLORS.card, border: "1px solid rgba(44,31,14,0.08)" }}>
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-5" style={{ fontFamily: fontStack.display, color: COLORS.text }}>{c.t}</h3>
              <ul className="space-y-3">
                {shared.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-sm" style={{ color: "rgba(44,31,14,0.8)", fontFamily: fontStack.body, fontWeight: 300 }}>
                    <Check size={18} style={{ color: COLORS.green, flexShrink: 0 }} />
                    {s}
                  </li>
                ))}
                <li className="flex items-start gap-3 text-sm pt-3 border-t" style={{ color: COLORS.text, fontFamily: fontStack.body, borderColor: "rgba(44,31,14,0.08)" }}>
                  <span className="font-bold" style={{ color: COLORS.primary }}>+</span>
                  {c.extra}
                </li>
              </ul>
            </div>
          ))}
        </div>
        <p className="text-center mt-6 sm:mt-8 text-sm" style={{ color: "rgba(44,31,14,0.7)", fontFamily: fontStack.body, fontWeight: 300 }}>
          Beide Varianten lassen sich jederzeit kombinieren.
        </p>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { v: "6", l: "Fragen zum Wein" },
    { v: "60 Sek.", l: "bis zur Empfehlung" },
    { v: "1 Klick", l: "direkt in den Shop" },
    { v: "0", l: "Programmierung nötig" },
  ];
  return (
    <section>
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-10 sm:py-12 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 sm:gap-8">
        {stats.map((s) => (
          <div key={s.l} className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2" style={{ fontFamily: fontStack.display, color: COLORS.primary }}>{s.v}</div>
            <div className="text-xs sm:text-sm leading-snug" style={{ color: "rgba(44,31,14,0.7)", fontFamily: fontStack.body }}>{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

const CtaBand = () => {
  const { open } = useContact();
  return (
    <section style={{ backgroundColor: COLORS.ctaBg }}>
      <div className="max-w-3xl mx-auto px-5 sm:px-6 py-14 sm:py-20 text-center">
        <h2 className="text-[1.75rem] leading-snug sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 text-white" style={{ fontFamily: fontStack.display }}>
          Starte noch heute — ganz ohne Website-Umbau
        </h2>
        <p className="text-base mb-7 sm:mb-8 leading-relaxed" style={{ color: "rgba(245,240,232,0.75)", fontFamily: fontStack.body, fontWeight: 300 }}>
          Werde einer der ersten Weinshops mit einem digitalen Sommelier direkt aus Social Media.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center">
          <button onClick={open} className="w-full sm:w-auto px-7 py-3.5 rounded-md font-semibold text-white hover:opacity-90 transition" style={{ backgroundColor: COLORS.primary, fontFamily: fontStack.body }}>
            Jetzt anfragen
          </button>
          <Link to="/#demo-erklaerung" className="w-full sm:w-auto text-center px-7 py-3.5 rounded-md font-semibold border hover:bg-white/5 transition" style={{ borderColor: "rgba(245,240,232,0.3)", color: "#f5f0e8", fontFamily: fontStack.body }}>
            Demo ansehen
          </Link>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="border-t" style={{ borderColor: "rgba(44,31,14,0.08)" }}>
    <div className="max-w-6xl mx-auto px-5 sm:px-6 py-10 flex flex-col md:flex-row gap-6 items-center justify-between">
      <Logo />
      <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-3 text-sm" style={{ color: "rgba(44,31,14,0.7)", fontFamily: fontStack.body }}>
        <a href="https://premium-weinfinder.de" className="hover:opacity-70">premium-weinfinder.de</a>
        <Link to="/kontakt" className="hover:opacity-70">Kontakt</Link>
        <Link to="/impressum" className="hover:opacity-70">Impressum</Link>
        <Link to="/datenschutz" className="hover:opacity-70">Datenschutz</Link>
        <a
          href="https://www.instagram.com/premium.weinfinder"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70 inline-flex items-center gap-1.5"
          aria-label="Weinfinder auf Instagram"
        >
          <Instagram size={16} />
          Instagram
        </a>
      </div>
    </div>
  </footer>
);

const ContactModal = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" style={{ backgroundColor: "rgba(44,31,14,0.6)" }} onClick={onClose}>
    <div className="w-full max-w-lg rounded-xl shadow-2xl max-h-[90vh] overflow-y-auto" style={{ backgroundColor: COLORS.bg }} onClick={(e) => e.stopPropagation()}>
      <div className="flex items-start justify-between p-6 pb-2">
        <div>
          <p className="text-xs font-bold uppercase mb-2" style={{ letterSpacing: "0.18em", color: COLORS.secondary, fontFamily: fontStack.body }}>Kontakt</p>
          <h3 className="text-2xl font-bold" style={{ fontFamily: fontStack.display, color: COLORS.text }}>Jetzt anfragen</h3>
        </div>
        <button onClick={onClose} aria-label="Schließen" className="p-1 rounded hover:bg-black/5">
          <X size={20} style={{ color: COLORS.text }} />
        </button>
      </div>
      <div className="p-6 pt-4 space-y-6" style={{ fontFamily: fontStack.body, color: COLORS.text }}>
        <p>Du hast Fragen zu Weinfinder oder möchtest deinen eigenen Link? Wir freuen uns auf deine Nachricht.</p>
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

const Social = () => {
  const [formOpen, setFormOpen] = useState(false);
  return (
    <ContactContext.Provider value={{ open: () => setFormOpen(true) }}>
      <div className="min-h-screen" style={{ backgroundColor: COLORS.bg, color: COLORS.text, fontFamily: fontStack.body }}>
        <SEO
          title="Weinfinder für Instagram — Weinberatung per Link in Bio"
          description="Weinberatung ohne eigene Website: Der Weinfinder läuft als eigener Link — perfekt für Instagram-Bio, Story-Highlights oder Linktree. In 3 Schritten startklar."
          path="/social"
          ogTitle="Deine Weinberatung — direkt aus Instagram"
          ogDescription="Kein Website-Umbau nötig. Ein Link in der Bio, und deine Kundinnen und Kunden finden in 6 Fragen den passenden Wein aus deinem Sortiment."
          jsonLd={[
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Weinfinder für Instagram — Weinberatung per Link in Bio",
              description:
                "Weinberatung ohne eigene Website: Der Weinfinder läuft als eigener Link — perfekt für Instagram-Bio, Story-Highlights oder Linktree.",
              url: "https://premium-weinfinder.de/social",
              inLanguage: "de-DE",
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Startseite", item: "https://premium-weinfinder.de/" },
                { "@type": "ListItem", position: 2, name: "Weinfinder für Social Media", item: "https://premium-weinfinder.de/social" },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Brauche ich eine eigene Website für den Weinfinder?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Nein. Der Weinfinder läuft als eigenständiger Link, den du in deine Instagram-Bio, Story-Highlights oder Linktree eintragen kannst — ganz ohne Website oder Programmierung.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Wie funktioniert die Weinberatung über Instagram?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Deine Kundinnen und Kunden klicken auf den Link in deiner Bio und beantworten 6 gezielte Fragen zu Geschmack, Anlass und Preis. Der Weinfinder zeigt passende Weine aus deinem Sortiment und leitet direkt in deinen Shop weiter.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Kann ich Weinfinder zusätzlich auf meiner Website einbinden?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ja. Du kannst den Weinfinder als Link für Social Media nutzen und gleichzeitig per iFrame in deine Website einbinden — beide Varianten lassen sich beliebig kombinieren.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Wie lange dauert die Einrichtung?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In der Regel ist dein Weinfinder innerhalb weniger Tage einsatzbereit. Wir übernehmen die Übernahme deines Sortiments, die Konfiguration der Matching-Logik und die Erstellung deines persönlichen Links.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Passt sich Weinfinder optisch an meine Marke an?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ja. Logo, Farben, Texte und Schriftart werden auf dein Weingut oder deinen Weinshop abgestimmt — für ein durchgängiges Markenerlebnis auf allen Kanälen.",
                  },
                },
              ],
            },
          ]}

        />
        <Nav />
        <main>
          <Hero />
          <Steps />
          <Comparison />
          <Stats />
          <CtaBand />
        </main>
        <Footer />
        {formOpen && <ContactModal onClose={() => setFormOpen(false)} />}
      </div>
    </ContactContext.Provider>
  );
};

export default Social;
