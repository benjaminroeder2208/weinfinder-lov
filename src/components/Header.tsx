import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram } from "lucide-react";

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

const Header = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isSocial = location.pathname === "/social";

  const linkClass = "hover:opacity-70 transition";
  const activeClass = "font-semibold underline decoration-2 underline-offset-4";

  const NavLink = ({
    to,
    anchor,
    children,
    active = false,
  }: {
    to?: string;
    anchor?: string;
    children: React.ReactNode;
    active?: boolean;
  }) => {
    const className = `${linkClass} ${active ? activeClass : ""}`;
    if (isHome && anchor) {
      return (
        <a href={anchor} className={className} onClick={close}>
          {children}
        </a>
      );
    }
    return (
      <Link to={to || "/"} className={className} onClick={close}>
        {children}
      </Link>
    );
  };

  const demoHref = isHome ? "#demo-erklaerung" : "/#demo-erklaerung";

  return (
    <header>
      <nav
        className="sticky top-0 z-50 backdrop-blur-md border-b"
        style={{ backgroundColor: `${COLORS.bg}ee`, borderColor: "rgba(44,31,14,0.08)" }}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-4 flex items-center justify-between">
          <Logo />
          <div className="hidden md:flex items-center gap-8 text-sm" style={{ fontFamily: fontStack.body, color: COLORS.text }}>
            <NavLink anchor="#how" to="/#how">Wie es funktioniert</NavLink>
            <NavLink anchor="#demo-erklaerung" to="/#demo-erklaerung">Demo</NavLink>
            <NavLink anchor="#features" to="/#features">Features</NavLink>
            <NavLink to="/social" active={isSocial}>Social</NavLink>
            <NavLink anchor="#pricing" to="/#pricing">Preise</NavLink>
            <NavLink anchor="#ueber" to="/#ueber">Über mich</NavLink>
          </div>
          <a
            href={demoHref}
            className="hidden md:inline-flex px-5 py-2.5 rounded-md text-sm font-semibold text-white hover:opacity-90 transition"
            style={{ backgroundColor: COLORS.primary, fontFamily: fontStack.body }}
          >
            Demo starten
          </a>
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
              <NavLink anchor="#how" to="/#how">Wie es funktioniert</NavLink>
              <NavLink anchor="#demo-erklaerung" to="/#demo-erklaerung">Demo</NavLink>
              <NavLink anchor="#features" to="/#features">Features</NavLink>
              <NavLink to="/social" active={isSocial}>Social</NavLink>
              <NavLink anchor="#pricing" to="/#pricing">Preise</NavLink>
              <NavLink anchor="#ueber" to="/#ueber">Über mich</NavLink>
              <a
                href={demoHref}
                onClick={close}
                className="mt-3 mb-2 text-center px-5 py-3 rounded-md text-sm font-semibold text-white"
                style={{ backgroundColor: COLORS.primary }}
              >
                Demo starten
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
