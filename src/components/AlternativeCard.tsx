import { motion } from "framer-motion";
import type { Wine } from "@/types/wine";
import { formatPrice } from "@/lib/helpers";
import { appConfig } from "@/data/config";
import { trackEvent } from "@/lib/analytics";

interface AlternativeCardProps {
  wine: Wine;
  label: string;
  index: number;
}

const AlternativeCard = ({ wine, label, index }: AlternativeCardProps) => {
  const handleCta = () => {
    trackEvent("wine_cta_clicked", { wineId: wine.id, wineName: wine.name });
    if (wine.link) window.open(wine.link, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + index * 0.1 }}
      className="bg-card rounded-lg shadow-card p-5 border border-border/50"
    >
      <span className="text-xs font-semibold uppercase tracking-widest text-primary/70 mb-2 block">
        {label}
      </span>
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1 min-w-0">
          <h4 className="font-display text-base font-semibold text-foreground truncate">
            {wine.name}
          </h4>
          <p className="text-muted-foreground text-xs">{wine.weingut}</p>
          <p className="text-foreground/70 text-sm mt-1 line-clamp-2">{wine.description}</p>
          {wine.grape_variety && (
            <p className="text-xs text-muted-foreground mt-1">{wine.grape_variety} · {wine.region}</p>
          )}
        </div>
        <div className="flex flex-col items-end gap-2 shrink-0">
          <span className="font-display text-lg font-bold text-primary whitespace-nowrap">
            {formatPrice(wine.price)}
          </span>
          {wine.link && (
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleCta}
              className="bg-primary text-primary-foreground font-medium px-4 py-1.5 rounded-lg text-xs"
            >
              {appConfig.ctaWineLabel}
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default AlternativeCard;
