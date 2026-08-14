import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Sorgt dafür, dass Sprungmarken (#anchor) auch bei Seitenwechseln
 * und bei nachträglich gerendertem Inhalt korrekt angesprungen werden.
 */
const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    const id = decodeURIComponent(hash.slice(1));
    let frame = 0;
    let attempts = 0;

    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      if (attempts++ < 40) {
        frame = requestAnimationFrame(tryScroll);
      }
    };

    frame = requestAnimationFrame(tryScroll);
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
};

export default ScrollToHash;
