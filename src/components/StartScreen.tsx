import { motion } from "framer-motion";
import { appConfig } from "@/data/config";
import { trackEvent } from "@/lib/analytics";

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen = ({ onStart }: StartScreenProps) => {
  const handleStart = () => {
    trackEvent("quiz_started");
    onStart();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center min-h-[90vh] px-6 text-center"
    >
      {/* Decorative wine element */}
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
        className="relative mb-10"
      >
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="text-4xl">🍷</span>
        </div>
        <div className="absolute -inset-3 rounded-full border border-primary/10 animate-pulse" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-5 leading-[1.1] tracking-tight"
      >
        {appConfig.headline}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.6 }}
        className="text-muted-foreground text-base md:text-lg mb-10 max-w-md leading-relaxed"
      >
        {appConfig.subheadline}
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        whileHover={{ scale: 1.03, boxShadow: "0 8px 30px hsl(348 55% 27% / 0.25)" }}
        whileTap={{ scale: 0.98 }}
        onClick={handleStart}
        className="bg-primary text-primary-foreground font-medium text-base md:text-lg px-12 py-4 rounded-full shadow-hero transition-all duration-300"
      >
        {appConfig.ctaLabel}
      </motion.button>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="text-muted-foreground text-sm mt-5 tracking-wide"
      >
        {appConfig.ctaSupportText}
      </motion.p>
    </motion.div>
  );
};

export default StartScreen;
