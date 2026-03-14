import { useEffect, useCallback, useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Share2, Check } from "lucide-react";
import type { Wine } from "@/types/wine";
import { appConfig } from "@/data/config";
import { buildShareText } from "@/lib/helpers";
import ResultCard from "@/components/ResultCard";
import AlternativeCard from "@/components/AlternativeCard";

interface ResultScreenProps {
  wines: Wine[];
  onRestart: () => void;
}

const ResultScreen = ({ wines, onRestart }: ResultScreenProps) => {
  const top = wines[0];
  const others = wines.slice(1, 3);
  const [copied, setCopied] = useState(false);

  const shareText = top
    ? buildShareText(top.name, top.weingut, top.description)
    : "";
  const shareUrl = window.location.href;

  const handleShare = useCallback(async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: `Mein Wein-Match 🍷`, text: shareText, url: shareUrl });
      } catch {}
    } else {
      await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [shareText, shareUrl]);

  const handleWhatsApp = useCallback(() => {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(`${shareText}\n${shareUrl}`)}`,
      "_blank"
    );
  }, [shareText, shareUrl]);

  useEffect(() => {
    const duration = 1500;
    const end = Date.now() + duration;
    const colors = ["#9fbc00", "#c8e64a", "#ffffff"];

    const frame = () => {
      confetti({ particleCount: 3, angle: 60, spread: 55, origin: { x: 0, y: 0.6 }, colors });
      confetti({ particleCount: 3, angle: 120, spread: 55, origin: { x: 1, y: 0.6 }, colors });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  }, []);

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

      <p className="text-muted-foreground text-sm mb-8">{appConfig.resultIntro}</p>

      {top && <ResultCard wine={top} />}

      {others.length > 0 && (
        <>
          <h3 className="font-display text-lg font-semibold text-foreground mt-6 mb-3">
            {appConfig.alternativesLabel}
          </h3>
          <div className="flex flex-col gap-3">
            {others.map((wine, i) => (
              <AlternativeCard key={wine.id} wine={wine} index={i} />
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
        <p className="text-muted-foreground text-sm font-medium">{appConfig.shareLabel}</p>
        <div className="flex gap-3">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleWhatsApp}
            className="flex items-center gap-2 bg-[hsl(142,70%,40%)] text-white px-4 py-2.5 rounded-lg text-sm font-medium"
          >
            {appConfig.whatsappLabel}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleShare}
            className="flex items-center gap-2 bg-foreground/10 text-foreground px-4 py-2.5 rounded-lg text-sm font-medium"
          >
            {copied ? <Check className="h-4 w-4" /> : <Share2 className="h-4 w-4" />}
            {copied ? appConfig.copiedLabel : appConfig.shareButtonLabel}
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
        {appConfig.restartLabel}
      </motion.button>
    </motion.div>
  );
};

export default ResultScreen;
