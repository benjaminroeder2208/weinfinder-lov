import { motion } from "framer-motion";
import { Wine } from "@/data/wines";

interface ResultScreenProps {
  wines: Wine[];
  onRestart: () => void;
}

const ResultScreen = ({ wines, onRestart }: ResultScreenProps) => {
  const top = wines[0];
  const others = wines.slice(1, 3);

  const formatPrice = (price: number) =>
    price.toLocaleString("de-DE", { style: "currency", currency: "EUR" });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col px-4 pt-8 pb-16"
    >
      <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
        Dein Wein-Match 🍷
      </h1>

      <p className="text-muted-foreground text-sm mb-8">
        Basierend auf deinen Antworten empfehlen wir dir diese Weine.
      </p>

      {/* Top recommendation */}
      {top && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-lg shadow-hero p-6 mb-3 border border-primary/10"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">
            Top Empfehlung
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1">
            {top.name}
          </h2>
          <p className="text-muted-foreground text-sm mb-3">{top.weingut}</p>
          <p className="text-foreground/80 text-base mb-4">{top.description}</p>
          <div className="flex items-center justify-between">
            <span className="font-display text-2xl font-bold text-primary">
              {formatPrice(top.price)}
            </span>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="bg-primary text-primary-foreground font-medium px-6 py-2.5 rounded-lg shadow-card text-sm"
            >
              Zum Wein
            </motion.button>
          </div>
        </motion.div>
      )}

      {/* Other recommendations */}
      {others.length > 0 && (
        <>
          <h3 className="font-display text-lg font-semibold text-foreground mt-6 mb-3">
            Weitere Empfehlungen
          </h3>
          <div className="flex flex-col gap-3">
            {others.map((wine, i) => (
              <motion.div
                key={wine.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
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
            ))}
          </div>
        </>
      )}

      {/* Restart */}
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={onRestart}
        className="mt-10 mx-auto text-muted-foreground hover:text-foreground font-medium text-sm underline underline-offset-4 transition-colors"
      >
        Nochmal starten
      </motion.button>
    </motion.div>
  );
};

export default ResultScreen;
