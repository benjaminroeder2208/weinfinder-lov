import { Link } from "react-router-dom";

const COLORS = {
  bg: "#f5f0e8",
  primary: "#8b2615",
  secondary: "#8b4a2a",
  text: "#2c1f0e",
};
const fontStack = {
  display: "'Playfair Display', serif",
  body: "'Lato', sans-serif",
};

const LegalLayout = ({ title, kicker, children }: { title: string; kicker?: string; children: React.ReactNode }) => (
  <div className="min-h-screen" style={{ backgroundColor: COLORS.bg, color: COLORS.text, fontFamily: fontStack.body }}>
    <style>{`@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');`}</style>
    <header className="border-b" style={{ borderColor: "rgba(44,31,14,0.08)" }}>
      <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link to="/" className="font-bold text-2xl tracking-tight" style={{ fontFamily: fontStack.display, color: COLORS.text }}>
          Wein<span style={{ color: COLORS.primary }}>finder</span>
        </Link>
        <Link to="/" className="text-sm hover:opacity-70" style={{ color: COLORS.text }}>← Zurück zur Startseite</Link>
      </div>
    </header>
    <main className="max-w-3xl mx-auto px-6 py-16">
      {kicker && (
        <p className="text-xs font-bold uppercase mb-4" style={{ letterSpacing: "0.18em", color: COLORS.secondary }}>{kicker}</p>
      )}
      <h1 className="text-4xl md:text-5xl font-bold mb-10" style={{ fontFamily: fontStack.display, color: COLORS.text }}>
        {title}
      </h1>
      <div className="space-y-6 leading-relaxed" style={{ color: "rgba(44,31,14,0.85)", fontWeight: 300 }}>
        {children}
      </div>
    </main>
    <footer className="border-t mt-10" style={{ borderColor: "rgba(44,31,14,0.08)" }}>
      <div className="max-w-3xl mx-auto px-6 py-8 flex flex-wrap gap-4 justify-between text-sm" style={{ color: "rgba(44,31,14,0.7)" }}>
        <span>© {new Date().getFullYear()} Weinfinder</span>
        <div className="flex gap-6">
          <Link to="/kontakt" className="hover:opacity-70">Kontakt</Link>
          <Link to="/impressum" className="hover:opacity-70">Impressum</Link>
          <Link to="/datenschutz" className="hover:opacity-70">Datenschutz</Link>
        </div>
      </div>
    </footer>
  </div>
);

export const LegalSection = ({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) => (
  <section id={id} style={id ? { scrollMarginTop: 80 } : undefined}>
    <h2 className="text-xl font-bold mb-3 mt-8" style={{ fontFamily: fontStack.display, color: COLORS.text }}>{title}</h2>
    <div className="space-y-3">{children}</div>
  </section>
);

export default LegalLayout;