import { motion } from "framer-motion";
import type { Wine } from "@/types/wine";
import { formatPrice } from "@/lib/helpers";
import { appConfig } from "@/data/config";
import { trackEvent } from "@/lib/analytics";
import TasteProfile from "@/components/TasteProfile";
import FoodPairingTags from "@/components/FoodPairingTags";
import RecommendationReason from "@/components/RecommendationReason";

interface ResultCardProps {
  wine: Wine;
  reason: string;
}

const ResultCard = ({ wine, reason }: ResultCardProps) => {
  const handleCta = () => {
    trackEvent("wine_cta_clicked", { wineId: wine.id, wineName: wine.name });
    if (wine.link) window.open(wine.link, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-card rounded-lg shadow-hero p-6 md:p-8 mb-4 border border-primary/10"
    >
      <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-4 block">
        {appConfig.topRecommendationLabel}
      </span>

      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1">
        {wine.name}
      </h2>
      <p className="text-muted-foreground text-sm mb-1">{wine.weingut}</p>

      {/* Details row */}
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground mt-2 mb-4">
        {wine.grape_variety && <span>{wine.grape_variety}</span>}
        {wine.region && <span>{wine.region}</span>}
        {wine.vintage && <span>{wine.vintage}</span>}
        {wine.alcohol && <span>{wine.alcohol} % vol.</span>}
        {wine.serving_temp && <span>🌡️ {wine.serving_temp}</span>}
      </div>

      <p className="text-foreground/80 text-base mb-2 leading-relaxed">{wine.description}</p>

      {wine.aroma_notes && wine.aroma_notes.length > 0 && (
        <p className="text-sm text-muted-foreground mb-4">
          <span className="font-medium">Aromen:</span> {wine.aroma_notes.join(", ")}
        </p>
      )}

      <div className="flex items-center justify-between mb-2">
        <span className="font-display text-2xl font-bold text-primary">
          {formatPrice(wine.price)}
        </span>
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleCta}
          className="bg-primary text-primary-foreground font-medium px-6 py-2.5 rounded-lg shadow-card text-sm"
        >
          {appConfig.ctaWineLabel}
        </motion.button>
      </div>

      <TasteProfile wine={wine} />
      <FoodPairingTags pairings={wine.food_pairing} />
      <RecommendationReason reason={reason} />
    </motion.div>
  );
};

export default ResultCard;
