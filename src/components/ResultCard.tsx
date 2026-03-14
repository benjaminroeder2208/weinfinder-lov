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
      transition={{ delay: 0.2, duration: 0.5 }}
      className="bg-card rounded-xl shadow-hero p-7 md:p-9 mb-6 border border-border"
    >
      {/* Label */}
      <div className="flex items-center gap-2 mb-5">
        <div className="h-px flex-1 bg-accent/30" />
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {appConfig.topRecommendationLabel}
        </span>
        <div className="h-px flex-1 bg-accent/30" />
      </div>

      {/* Wine name & winery */}
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1 leading-tight">
        {wine.name}
      </h2>
      <p className="text-muted-foreground text-sm mb-4 font-medium">{wine.weingut}</p>

      {/* Metadata grid */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-muted-foreground mb-5 py-4 border-y border-border">
        {wine.grape_variety && (
          <div>
            <span className="text-xs uppercase tracking-wide text-muted-foreground/70 block">Rebsorte</span>
            <span className="text-foreground/80 font-medium">{wine.grape_variety}</span>
          </div>
        )}
        {wine.region && (
          <div>
            <span className="text-xs uppercase tracking-wide text-muted-foreground/70 block">Region</span>
            <span className="text-foreground/80 font-medium">{wine.region}</span>
          </div>
        )}
        {wine.vintage && (
          <div>
            <span className="text-xs uppercase tracking-wide text-muted-foreground/70 block">Jahrgang</span>
            <span className="text-foreground/80 font-medium">{wine.vintage}</span>
          </div>
        )}
        {wine.alcohol && (
          <div>
            <span className="text-xs uppercase tracking-wide text-muted-foreground/70 block">Alkohol</span>
            <span className="text-foreground/80 font-medium">{wine.alcohol} % vol.</span>
          </div>
        )}
      </div>

      {/* Description */}
      <p className="text-foreground/80 text-base mb-5 leading-relaxed">{wine.description}</p>

      {/* Aroma notes */}
      {wine.aroma_notes && wine.aroma_notes.length > 0 && (
        <p className="text-sm text-muted-foreground mb-5 italic">
          {wine.aroma_notes.join(" · ")}
        </p>
      )}

      {/* Price & CTA */}
      <div className="flex items-center justify-between mb-6 pt-2">
        <span className="font-display text-3xl font-bold text-foreground">
          {formatPrice(wine.price)}
        </span>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleCta}
          className="bg-primary text-primary-foreground font-medium px-8 py-3 rounded-full shadow-card hover:shadow-card-hover transition-shadow text-sm tracking-wide"
        >
          {appConfig.ctaWineLabel}
        </motion.button>
      </div>

      {/* Sub-sections */}
      <TasteProfile wine={wine} />
      <FoodPairingTags pairings={wine.food_pairing} />
      <RecommendationReason reason={reason} />
    </motion.div>
  );
};

export default ResultCard;
