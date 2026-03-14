import { motion } from "framer-motion";
import type { Wine } from "@/types/wine";
import { appConfig } from "@/data/config";

interface TasteProfileProps {
  wine: Wine;
}

const LEVELS: Record<string, number> = {
  niedrig: 1,
  leicht: 1,
  mittel: 2,
  hoch: 3,
  voll: 3,
  halbtrocken: 2,
  trocken: 1,
  lieblich: 3,
};

function getLevelFromValue(val: string | undefined): number {
  if (!val) return 2;
  return LEVELS[val] ?? 2;
}

const ProfileBar = ({ label, level, delay }: { label: string; level: number; delay: number }) => (
  <div className="flex items-center gap-3">
    <span className="text-sm text-muted-foreground w-16 shrink-0">{label}</span>
    <div className="flex-1 flex gap-1.5">
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: delay + i * 0.1, duration: 0.3 }}
          className={`h-2 flex-1 rounded-full origin-left ${
            i <= level ? "bg-primary" : "bg-secondary"
          }`}
        />
      ))}
    </div>
  </div>
);

const TasteProfile = ({ wine }: TasteProfileProps) => {
  // Map body to "Frucht" visual level (body = leicht → lighter fruit)
  const fruitLevel = wine.body === "voll" ? 3 : wine.body === "mittel" ? 2 : 1;
  const bodyLevel = getLevelFromValue(wine.body);
  const acidityLevel = getLevelFromValue(wine.acidity);

  return (
    <div className="mt-4">
      <h4 className="font-display text-sm font-semibold text-foreground mb-3 tracking-wide uppercase">
        {appConfig.tasteProfileLabel}
      </h4>
      <div className="flex flex-col gap-2.5">
        <ProfileBar label="Frucht" level={fruitLevel} delay={0.3} />
        <ProfileBar label="Körper" level={bodyLevel} delay={0.4} />
        <ProfileBar label="Frische" level={acidityLevel} delay={0.5} />
      </div>
    </div>
  );
};

export default TasteProfile;
