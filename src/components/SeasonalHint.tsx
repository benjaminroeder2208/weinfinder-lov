import { motion } from "framer-motion";
import { appConfig } from "@/data/config";

interface SeasonalHintProps {
  seasonKey: string;
}

const SEASON_EMOJIS: Record<string, string> = {
  sommer: "☀️",
  winter: "❄️",
  festlich: "✨",
  default: "🍷",
};

const SeasonalHint = ({ seasonKey }: SeasonalHintProps) => {
  const text = appConfig.seasonalHints[seasonKey] ?? appConfig.seasonalHints.default;
  const emoji = SEASON_EMOJIS[seasonKey] ?? SEASON_EMOJIS.default;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="mt-5 flex items-center gap-3 bg-secondary/50 px-5 py-3 rounded-lg"
    >
      <span className="text-lg">{emoji}</span>
      <span className="text-sm text-foreground/70 italic">{text}</span>
    </motion.div>
  );
};

export default SeasonalHint;
