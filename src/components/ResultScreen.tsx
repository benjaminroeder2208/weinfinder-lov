import { useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Share2, Copy, Check } from "lucide-react";
import { useState } from "react";
import { Wine } from "@/data/wines";

interface ResultScreenProps {
  wines: Wine[];
  onRestart: () => void;
}

const ResultScreen = ({ wines, onRestart }: ResultScreenProps) => {
  const top = wines[0];
  const others = wines.slice(1, 3);
  const [copied, setCopied] = useState(false);

  const shareText = top
    ? `🍷 Mein Wein-Match: ${top.name} von ${top.weingut} – ${top.description}`
    : "";

  const shareUrl = window.location.href;

  const handleShare = useCallback(async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: "Mein Wein-Match 🍷", text: shareText, url: shareUrl });
      } catch {}
    } else {
      await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [shareText, shareUrl]);

  const handleWhatsApp = useCallback(() => {
    window.open(`https://wa.me/?text=${encodeURIComponent(`${shareText}\n${shareUrl}`)}`, "_blank");
  }, [shareText, shareUrl]);


  useEffect(() => {
    const duration = 1500;
    const end = Date.now() + duration;
    const colors = ["#9fbc00", "#c8e64a", "#ffffff"];

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.6 },
        colors,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.6 },
        colors,
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  }, []);

  const formatPrice = (price: number) =>
    price.toLocaleString("de-DE", { style: "currency", currency: "EUR" });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col px-4 pt-8 pb-16"
    >
      <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
        Dein Wein-Match 🍷
      </h1>

      <p className="text-muted-foreground text-sm mb-8">
        Basierend auf deinen Antworten empfehlen wir dir diese Weine.
      </p>

      {/* Top recommendation */}
      {top && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-lg shadow-hero p-6 mb-3 border border-primary/10"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">
            Top Empfehlung
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1">
            {top.name}
          </h2>
          <p className="text-muted-foreground text-sm mb-3">{top.weingut}</p>
          <p className="text-foreground/80 text-base mb-4">{top.description}</p>
          <div className="flex items-center justify-between">
            <span className="font-display text-2xl font-bold text-primary">
              {formatPrice(top.price)}
            </span>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="bg-primary text-primary-foreground font-medium px-6 py-2.5 rounded-lg shadow-card text-sm"
            >
              Zum Wein
            </motion.button>
          </div>
        </motion.div>
      )}

      {/* Other recommendations */}
      {others.length > 0 && (
        <>
          <h3 className="font-display text-lg font-semibold text-foreground mt-6 mb-3">
            Weitere Empfehlungen
          </h3>
          <div className="flex flex-col gap-3">
            {others.map((wine, i) => (
              <motion.div
                key={wine.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="bg-card rounded-lg shadow-card p-4 border border-border/50 flex justify-between items-center gap-4"
              >
                <div className="flex-1 min-w-0">
                  <h4 className="font-display text-base font-semibold text-foreground truncate">
                    {wine.name}
                  </h4>
                  <p className="text-muted-foreground text-xs">{wine.weingut}</p>
                  <p className="text-foreground/70 text-sm mt-1 line-clamp-1">{wine.description}</p>
                </div>
                <span className="font-display text-lg font-bold text-primary whitespace-nowrap">
                  {formatPrice(wine.price)}
                </span>
              </motion.div>
            ))}
          </div>
        </>
      )}

      {/* Share */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 flex flex-col items-center gap-3"
      >
        <p className="text-muted-foreground text-sm font-medium">Ergebnis teilen</p>
        <div className="flex gap-3">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleWhatsApp}
            className="flex items-center gap-2 bg-[hsl(142,70%,40%)] text-white px-4 py-2.5 rounded-lg text-sm font-medium"
          >
            WhatsApp
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleTwitter}
            className="flex items-center gap-2 bg-foreground/10 text-foreground px-4 py-2.5 rounded-lg text-sm font-medium"
          >
            𝕏 Twitter
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleShare}
            className="flex items-center gap-2 bg-foreground/10 text-foreground px-4 py-2.5 rounded-lg text-sm font-medium"
          >
            {copied ? <Check className="h-4 w-4" /> : <Share2 className="h-4 w-4" />}
            {copied ? "Kopiert!" : "Teilen"}
          </motion.button>
        </div>
      </motion.div>

      {/* Restart */}
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={onRestart}
        className="mt-10 mx-auto text-muted-foreground hover:text-foreground font-medium text-sm underline underline-offset-4 transition-colors"
      >
        Nochmal starten
      </motion.button>
    </motion.div>
  );
};

export default ResultScreen;
