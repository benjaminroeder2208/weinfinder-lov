import { useEffect, useCallback, useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Share2, Check, Gift } from "lucide-react";
import type { Wine } from "@/types/wine";
import type { QuizAnswers } from "@/types/quiz";
import { appConfig } from "@/data/config";
import { buildShareText } from "@/lib/helpers";
import { generateMatchReason, getSeasonalHint, type MatchResult } from "@/lib/matchWines";
import { trackEvent } from "@/lib/analytics";
import ResultCard from "@/components/ResultCard";
import AlternativeCard from "@/components/AlternativeCard";
import LeadCaptureCard from "@/components/LeadCaptureCard";
import SeasonalHint from "@/components/SeasonalHint";

interface ResultScreenProps {
  results: MatchResult;
  answers: QuizAnswers;
  onRestart: () => void;
}

const ResultScreen = ({ results, answers, onRestart }: ResultScreenProps) => {
  const { top, alternative, valueTip, adventurous } = results;
  const [copied, setCopied] = useState(false);

  const shareText = top
    ? buildShareText(top.name, top.weingut, top.description)
    : "";
  const shareUrl = window.location.href;

  const handleShare = useCallback(async () => {
    trackEvent("share_clicked", { method: navigator.share ? "native" : "clipboard" });
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
    trackEvent("share_clicked", { method: "whatsapp" });
    window.open(
      `https://wa.me/?text=${encodeURIComponent(`${shareText}\n${shareUrl}`)}`,
      "_blank"
    );
  }, [shareText, shareUrl]);

  const handleRestart = useCallback(() => {
    trackEvent("restart_clicked");
    onRestart();
  }, [onRestart]);

  useEffect(() => {
    trackEvent("result_viewed", { topWine: top?.name });
    const duration = 1500;
    const end = Date.now() + duration;
    const colors = ["#8B1A3A", "#D4A574", "#ffffff"];

    const frame = () => {
      confetti({ particleCount: 3, angle: 60, spread: 55, origin: { x: 0, y: 0.6 }, colors });
      confetti({ particleCount: 3, angle: 120, spread: 55, origin: { x: 1, y: 0.6 }, colors });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  }, []);

  const reason = top ? generateMatchReason(top, answers) : "";
  const seasonKey = top ? getSeasonalHint(top, answers) : "default";
  const isGift = answers.occasion === "geschenk";
  const hasFood = answers.food !== "ohne_essen";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col px-4 pt-10 pb-20"
    >
      <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
        {appConfig.resultHeadline}
      </h1>
      <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
        {appConfig.resultIntro}
      </p>

      {top && <ResultCard wine={top} reason={reason} />}

      {/* Context-aware sections */}
      {isGift && top && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-2 bg-accent/10 text-accent-foreground px-4 py-3 rounded-lg mt-2 mb-2"
        >
          <Gift className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-foreground">{appConfig.giftNote}</span>
        </motion.div>
      )}

      {hasFood && top && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="text-sm text-muted-foreground italic mt-1 mb-2"
        >
          Besonders passend zu{" "}
          {answers.food === "fisch"
            ? "Fischgerichten"
            : answers.food === "fleisch"
            ? "Fleischgerichten"
            : answers.food === "pasta"
            ? "Pasta"
            : "vegetarischen Gerichten"}
        </motion.p>
      )}

      <SeasonalHint seasonKey={seasonKey} />

      {/* Alternative cards */}
      {(alternative || valueTip || adventurous) && (
        <div className="flex flex-col gap-3 mt-8">
          {alternative && (
            <AlternativeCard wine={alternative} label={appConfig.alternativesLabel} index={0} />
          )}
          {valueTip && (
            <AlternativeCard wine={valueTip} label={appConfig.valueTipLabel} index={1} />
          )}
          {adventurous && (
            <AlternativeCard wine={adventurous} label={appConfig.adventurousLabel} index={2} />
          )}
        </div>
      )}

      {/* Lead Capture */}
      <LeadCaptureCard wine={top} answers={answers} />

      {/* Share */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-10 flex flex-col items-center gap-3"
      >
        <p className="text-muted-foreground text-sm font-medium">{appConfig.shareLabel}</p>
        <div className="flex gap-3">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleWhatsApp}
            className="flex items-center gap-2 bg-[hsl(142,70%,35%)] text-white px-4 py-2.5 rounded-lg text-sm font-medium"
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
        onClick={handleRestart}
        className="mt-10 mx-auto text-muted-foreground hover:text-foreground font-medium text-sm underline underline-offset-4 transition-colors"
      >
        {appConfig.restartLabel}
      </motion.button>
    </motion.div>
  );
};

export default ResultScreen;
