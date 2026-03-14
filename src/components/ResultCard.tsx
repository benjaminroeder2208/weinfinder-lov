import { motion } from "framer-motion";
import type { Wine } from "@/types/wine";
import { formatPrice } from "@/lib/helpers";
import { appConfig } from "@/data/config";

interface ResultCardProps {
  wine: Wine;
}

const ResultCard = ({ wine }: ResultCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-card rounded-lg shadow-hero p-6 mb-3 border border-primary/10"
    >
      <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">
        {appConfig.topRecommendationLabel}
      </span>
      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1">
        {wine.name}
      </h2>
      <p className="text-muted-foreground text-sm mb-3">{wine.weingut}</p>
      <p className="text-foreground/80 text-base mb-4">{wine.description}</p>
      <div className="flex items-center justify-between">
        <span className="font-display text-2xl font-bold text-primary">
          {formatPrice(wine.price)}
        </span>
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="bg-primary text-primary-foreground font-medium px-6 py-2.5 rounded-lg shadow-card text-sm"
        >
          {appConfig.ctaWineLabel}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ResultCard;
