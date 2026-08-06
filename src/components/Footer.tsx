import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

const COLORS = {
  bg: "#f5f0e8",
  primary: "#8b2615",
  text: "#2c1f0e",
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

const Footer = () => (
  <footer className="border-t" style={{ borderColor: "rgba(44,31,14,0.08)", backgroundColor: COLORS.bg }}>
    <div className="max-w-6xl mx-auto px-5 sm:px-6 py-10 flex flex-col md:flex-row gap-6 items-center justify-between">
      <Logo />
      <div className="flex flex-wrap gap-6 text-sm justify-center" style={{ color: "rgba(44,31,14,0.7)", fontFamily: fontStack.body }}>
        <a href="https://premium-weinfinder.de" className="hover:opacity-70">premium-weinfinder.de</a>
        <Link to="/social" className="hover:opacity-70">Social</Link>
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

export default Footer;
