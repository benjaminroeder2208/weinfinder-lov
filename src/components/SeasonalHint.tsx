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
      className="mt-4 flex items-center gap-2 text-sm text-muted-foreground italic"
    >
      <span>{emoji}</span>
      <span>{text}</span>
    </motion.div>
  );
};

export default SeasonalHint;
