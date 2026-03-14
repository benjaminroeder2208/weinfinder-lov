import { motion } from "framer-motion";
import { appConfig } from "@/data/config";
import { foodPairingLabels } from "@/lib/helpers";

interface FoodPairingTagsProps {
  pairings: string[];
}

const FoodPairingTags = ({ pairings }: FoodPairingTagsProps) => {
  if (!pairings.length) return null;

  return (
    <div className="mt-5">
      <h4 className="font-display text-sm font-semibold text-foreground mb-3 tracking-wide uppercase">
        {appConfig.foodPairingLabel}
      </h4>
      <div className="flex flex-wrap gap-2">
        {pairings.map((p, i) => {
          const info = foodPairingLabels[p];
          if (!info) return null;
          return (
            <motion.span
              key={p}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + i * 0.08 }}
              className="inline-flex items-center gap-1.5 bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full text-sm font-medium"
            >
              <span>{info.emoji}</span>
              <span>{info.label}</span>
            </motion.span>
          );
        })}
      </div>
    </div>
  );
};

export default FoodPairingTags;
