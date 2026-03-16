import { motion } from "framer-motion";
import { appConfig } from "@/data/config";
import { brandConfig } from "@/config";
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-[85vh] px-6 text-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mb-6"
      >
        <img
          src={brandConfig.logoUrl}
          alt={brandConfig.logoAlt}
          className="h-14 w-auto mx-auto"
        />
      </motion.div>

      <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
        {appConfig.headline}
      </h1>

      <p className="font-display text-lg md:text-xl text-foreground/80 mb-3 italic max-w-md">
        {appConfig.subheadline}
      </p>

      <p className="text-muted-foreground text-base mb-10 max-w-sm leading-relaxed">
        {appConfig.description}
      </p>

      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        onClick={handleStart}
        className="bg-primary text-primary-foreground font-medium text-lg px-12 py-4 rounded-lg shadow-hero transition-shadow hover:shadow-card-hover"
      >
        {appConfig.ctaLabel}
      </motion.button>

      <p className="text-muted-foreground text-sm mt-4 tracking-wide">
        {appConfig.ctaSupportText}
      </p>
    </motion.div>
  );
};

export default StartScreen;
