import { Link, useLocation } from "react-router-dom";
import { Instagram, ChevronDown, Mail, ExternalLink } from "lucide-react";

const COLORS = {
  bg: "#f5f0e8",
  primary: "#8b2615",
  text: "#2c1f0e",
};

const fontStack = {
  display: "'Playfair Display', serif",
  body: "'Lato', sans-serif",
};

const currentYear = new Date().getFullYear();

const productLinks = [
  { to: "/", label: "Startseite" },
  { to: "/so-funktionierts", label: "So funktioniert's" },
  { to: "/social", label: "Social" },
  { to: "/#demo-erklaerung", label: "Demo" },
];

const legalLinks = [
  { to: "/kontakt", label: "Kontakt" },
  { to: "/impressum", label: "Impressum" },
  { to: "/datenschutz", label: "Datenschutz" },
  { to: "/agb", label: "AGB" },
];

const NavLink = ({ to, label }: { to: string; label: string }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  const baseClasses = "block py-2.5 text-sm transition hover:opacity-80 md:py-1.5";
  const style = { color: "rgba(44,31,14,0.85)", fontFamily: fontStack.body };

  return (
    <Link
      to={to}
      className={baseClasses}
      style={style}
      aria-current={isActive ? "page" : undefined}
    >
      {label}
    </Link>
  );
};

const MobileSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <details className="group border-b md:hidden" style={{ borderColor: "rgba(44,31,14,0.12)" }}>
    <summary
      className="flex items-center justify-between w-full py-4 text-sm font-semibold cursor-pointer list-none"
      style={{ color: COLORS.text, fontFamily: fontStack.body }}
    >
      {title}
      <ChevronDown
        size={18}
        className="transition-transform group-open:rotate-180"
        style={{ color: "rgba(44,31,14,0.6)" }}
        aria-hidden="true"
      />
    </summary>
    <div className="pb-4 pl-1">{children}</div>
  </details>
);

const DesktopColumn = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="hidden md:block">
    <h3
      className="text-sm font-semibold mb-4"
      style={{ color: COLORS.text, fontFamily: fontStack.body }}
    >
      {title}
    </h3>
    <ul className="space-y-2">{children}</ul>
  </div>
);

const Footer = () => (
  <footer className="border-t" style={{ borderColor: "rgba(44,31,14,0.08)", backgroundColor: COLORS.bg }}>
    <div className="max-w-6xl mx-auto px-5 sm:px-6 pt-10 pb-6">
      {/* Mobile: collapsible sections */}
      <div className="md:hidden mb-8">
        <MobileSection title="Produkt">
          {productLinks.map((link) => (
            <NavLink key={link.to} {...link} />
          ))}
        </MobileSection>
        <MobileSection title="Rechtliches">
          {legalLinks.map((link) => (
            <NavLink key={link.to} {...link} />
          ))}
        </MobileSection>
        <MobileSection title="Kontakt">
          <a
            href="mailto:info@premium-weinfinder.de"
            className="flex items-center gap-2 py-2.5 text-sm transition hover:opacity-80"
            style={{ color: "rgba(44,31,14,0.85)", fontFamily: fontStack.body }}
          >
            <Mail size={16} aria-hidden="true" />
            info@premium-weinfinder.de
          </a>
          <a
            href="https://www.instagram.com/premium.weinfinder"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 py-2.5 text-sm transition hover:opacity-80"
            style={{ color: "rgba(44,31,14,0.85)", fontFamily: fontStack.body }}
            aria-label="Weinfinder auf Instagram (öffnet in neuem Tab)"
          >
            <Instagram size={16} aria-hidden="true" />
            Instagram
            <ExternalLink size={12} aria-hidden="true" className="ml-0.5" />
          </a>
          <a
            href="https://premium-weinfinder.de"
            className="flex items-center gap-2 py-2.5 text-sm transition hover:opacity-80"
            style={{ color: "rgba(44,31,14,0.85)", fontFamily: fontStack.body }}
          >
            premium-weinfinder.de
            <ExternalLink size={12} aria-hidden="true" />
          </a>
        </MobileSection>
      </div>

      {/* Desktop: multi-column grid */}
      <div className="hidden md:grid md:grid-cols-4 gap-8 mb-10">
        {/* Brand column */}
        <div>
          <Link
            to="/"
            className="inline-block font-bold text-2xl tracking-tight mb-4"
            style={{ fontFamily: fontStack.display, color: COLORS.text }}
          >
            Wein<span style={{ color: COLORS.primary }}>finder</span>
          </Link>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(44,31,14,0.72)", fontFamily: fontStack.body }}>
            Der digitale Sommelier für Weinshops und Weingüter.
          </p>
        </div>

        <DesktopColumn title="Produkt">
          {productLinks.map((link) => (
            <li key={link.to}>
              <NavLink {...link} />
            </li>
          ))}
        </DesktopColumn>

        <DesktopColumn title="Rechtliches">
          {legalLinks.map((link) => (
            <li key={link.to}>
              <NavLink {...link} />
            </li>
          ))}
        </DesktopColumn>

        <DesktopColumn title="Kontakt">
          <li>
            <a
              href="mailto:info@premium-weinfinder.de"
              className="flex items-center gap-2 py-1.5 text-sm transition hover:opacity-80"
              style={{ color: "rgba(44,31,14,0.85)", fontFamily: fontStack.body }}
            >
              <Mail size={16} aria-hidden="true" />
              info@premium-weinfinder.de
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/premium.weinfinder"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-1.5 text-sm transition hover:opacity-80"
              style={{ color: "rgba(44,31,14,0.85)", fontFamily: fontStack.body }}
              aria-label="Weinfinder auf Instagram (öffnet in neuem Tab)"
            >
              <Instagram size={16} aria-hidden="true" />
              Instagram
              <ExternalLink size={12} aria-hidden="true" className="ml-0.5" />
            </a>
          </li>
          <li>
            <a
              href="https://premium-weinfinder.de"
              className="flex items-center gap-2 py-1.5 text-sm transition hover:opacity-80"
              style={{ color: "rgba(44,31,14,0.85)", fontFamily: fontStack.body }}
            >
              premium-weinfinder.de
              <ExternalLink size={12} aria-hidden="true" />
            </a>
          </li>
        </DesktopColumn>
      </div>

      {/* Mobile brand + tagline (shown below accordion) */}
      <div className="md:hidden mb-8">
        <Link
          to="/"
          className="inline-block font-bold text-2xl tracking-tight mb-3"
          style={{ fontFamily: fontStack.display, color: COLORS.text }}
        >
          Wein<span style={{ color: COLORS.primary }}>finder</span>
        </Link>
        <p className="text-sm leading-relaxed" style={{ color: "rgba(44,31,14,0.72)", fontFamily: fontStack.body }}>
          Der digitale Sommelier für Weinshops und Weingüter.
        </p>
      </div>

      {/* Bottom bar */}
      <div
        className="pt-6 border-t flex flex-col sm:flex-row gap-4 items-center justify-between text-sm"
        style={{ borderColor: "rgba(44,31,14,0.08)", color: "rgba(44,31,14,0.65)", fontFamily: fontStack.body }}
      >
        <p className="text-center sm:text-left">© {currentYear} Weinfinder. Alle Rechte vorbehalten.</p>
        <p className="text-center sm:text-right">Ein Angebot von Benjamin Röder · Offenbach am Main</p>
      </div>
    </div>
  </footer>
);

export default Footer;
