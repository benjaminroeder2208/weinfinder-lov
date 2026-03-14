import { motion } from "framer-motion";
import { appConfig } from "@/data/config";
import { foodPairingLabels } from "@/lib/helpers";

interface FoodPairingTagsProps {
  pairings: string[];
}

const FoodPairingTags = ({ pairings }: FoodPairingTagsProps) => {
  if (!pairings.length) return null;

  return (
    <div className="mt-6 pt-5 border-t border-border">
      <h4 className="font-display text-lg font-semibold text-foreground mb-4">
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
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm"
            >
              <span className="text-base">{info.emoji}</span>
              <span className="font-medium">{info.label}</span>
            </motion.span>
          );
        })}
      </div>
    </div>
  );
};

export default FoodPairingTags;
