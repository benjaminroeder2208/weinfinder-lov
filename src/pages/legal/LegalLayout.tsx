import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    <Header />
    <main id="inhalt" className="max-w-3xl mx-auto px-6 py-16">
      {kicker && (
        <p className="text-sm font-bold uppercase mb-4" style={{ letterSpacing: "0.18em", color: COLORS.secondary }}>{kicker}</p>
      )}
      <h1 className="text-4xl md:text-5xl font-bold mb-10" style={{ fontFamily: fontStack.display, color: COLORS.text }}>
        {title}
      </h1>
      <div className="space-y-6 leading-relaxed" style={{ color: "rgba(44,31,14,0.85)", fontWeight: 300 }}>
        {children}
      </div>
    </main>
    <Footer />
  </div>
);

export const LegalSection = ({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) => (
  <section id={id} style={id ? { scrollMarginTop: 80 } : undefined}>
    <h2 className="text-xl font-bold mb-3 mt-8" style={{ fontFamily: fontStack.display, color: COLORS.text }}>{title}</h2>
    <div className="space-y-3">{children}</div>
  </section>
);

export default LegalLayout;