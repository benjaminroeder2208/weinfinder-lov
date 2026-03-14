import { motion } from "framer-motion";
import type { Wine } from "@/types/wine";
import { appConfig } from "@/data/config";

interface TasteProfileProps {
  wine: Wine;
}

const LEVELS: Record<string, number> = {
  niedrig: 1, leicht: 1,
  mittel: 2,
  hoch: 3, voll: 3,
  halbtrocken: 2, trocken: 1, lieblich: 3,
};

function getLevelFromValue(val: string | undefined): number {
  if (!val) return 2;
  return LEVELS[val] ?? 2;
}

const DotIndicator = ({ level, delay }: { level: number; delay: number }) => (
  <div className="flex gap-1.5">
    {[1, 2, 3, 4, 5].map((i) => (
      <motion.div
        key={i}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: delay + i * 0.06, duration: 0.25 }}
        className={`w-2.5 h-2.5 rounded-full transition-colors ${
          i <= level ? "bg-accent" : "bg-secondary"
        }`}
      />
    ))}
  </div>
);

const ProfileRow = ({ label, level, delay }: { label: string; level: number; delay: number }) => {
  // Map 1-3 to 1-5 scale for visual
  const mapped = level === 1 ? 2 : level === 2 ? 3 : 5;
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-foreground/70 w-20 shrink-0">{label}</span>
      <DotIndicator level={mapped} delay={delay} />
    </div>
  );
};

const TasteProfile = ({ wine }: TasteProfileProps) => {
  const fruitLevel = wine.body === "voll" ? 3 : wine.body === "mittel" ? 2 : 1;
  const bodyLevel = getLevelFromValue(wine.body);
  const acidityLevel = getLevelFromValue(wine.acidity);

  return (
    <div className="mt-6 pt-5 border-t border-border">
      <h4 className="font-display text-lg font-semibold text-foreground mb-4">
        {appConfig.tasteProfileLabel}
      </h4>
      <div className="flex flex-col gap-3">
        <ProfileRow label="Frucht" level={fruitLevel} delay={0.3} />
        <ProfileRow label="Körper" level={bodyLevel} delay={0.4} />
        <ProfileRow label="Frische" level={acidityLevel} delay={0.5} />
      </div>
    </div>
  );
};

export default TasteProfile;
