import { motion } from "framer-motion";
import type { Wine } from "@/types/wine";
import { formatPrice } from "@/lib/helpers";

interface AlternativeCardProps {
  wine: Wine;
  index: number;
}

const AlternativeCard = ({ wine, index }: AlternativeCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + index * 0.1 }}
      className="bg-card rounded-lg shadow-card p-4 border border-border/50 flex justify-between items-center gap-4"
    >
      <div className="flex-1 min-w-0">
        <h4 className="font-display text-base font-semibold text-foreground truncate">
          {wine.name}
        </h4>
        <p className="text-muted-foreground text-xs">{wine.weingut}</p>
        <p className="text-foreground/70 text-sm mt-1 line-clamp-1">{wine.description}</p>
      </div>
      <span className="font-display text-lg font-bold text-primary whitespace-nowrap">
        {formatPrice(wine.price)}
      </span>
    </motion.div>
  );
};

export default AlternativeCard;
