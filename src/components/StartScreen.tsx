import { motion } from "framer-motion";

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen = ({ onStart }: StartScreenProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-6xl mb-6"
      >
        🍷
      </motion.div>

      <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
        Weinfinder
      </h1>

      <p className="font-display text-xl text-foreground/80 mb-3 italic">
        Finde den Wein, der perfekt zu dir passt.
      </p>

      <p className="text-muted-foreground text-base mb-10 max-w-sm">
        Beantworte 5 kurze Fragen und wir empfehlen dir passende Weine.
      </p>

      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        onClick={onStart}
        className="bg-primary text-primary-foreground font-medium text-lg px-10 py-4 rounded-lg shadow-hero transition-shadow hover:shadow-card-hover"
      >
        Wein finden
      </motion.button>
    </motion.div>
  );
};

export default StartScreen;
