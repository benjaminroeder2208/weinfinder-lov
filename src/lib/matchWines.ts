import type { Wine } from "@/types/wine";
import type { QuizAnswers } from "@/types/quiz";

interface ScoredWine {
  wine: Wine;
  score: number;
  styleScore: number;
  foodOccasionScore: number;
}

const STYLE_SIMILARITY: Record<string, string[]> = {
  leicht_frisch: ["fruchtig_aromatisch"],
  fruchtig_aromatisch: ["leicht_frisch", "weich_harmonisch"],
  weich_harmonisch: ["fruchtig_aromatisch", "kraeftig_intensiv"],
  kraeftig_intensiv: ["weich_harmonisch"],
};

const BODY_STYLE_AFFINITY: Record<string, string[]> = {
  leicht: ["leicht_frisch"],
  mittel: ["fruchtig_aromatisch", "weich_harmonisch"],
  voll: ["kraeftig_intensiv", "weich_harmonisch"],
};

export interface MatchResult {
  top: Wine | null;
  alternative: Wine | null;
  valueTip: Wine | null;
  adventurous: Wine | null;
}

/**
 * Premium matching with soft similarity, premium attributes, and categorized results.
 */
export function matchWines(allWines: Wine[], answers: QuizAnswers): MatchResult {
  // Step 1: color filter
  const filtered =
    answers.color !== "egal"
      ? allWines.filter((w) => w.color === answers.color)
      : allWines;

  // Step 2 + 3 + 4: scoring
  const scored: ScoredWine[] = filtered.map((wine) => {
    let score = 0;
    let styleScore = 0;
    let foodOccasionScore = 0;

    // Base: style exact match +3
    if (wine.style === answers.style) {
      score += 3;
      styleScore += 3;
    } else if (STYLE_SIMILARITY[answers.style]?.includes(wine.style)) {
      score += 1;
      styleScore += 1;
    }

    // Base: food +2
    if (wine.food_pairing.includes(answers.food)) {
      score += 2;
      foodOccasionScore += 2;
    }

    // Base: occasion +2
    if (wine.occasion.includes(answers.occasion)) {
      score += 2;
      foodOccasionScore += 2;
    }

    // Base: price +1
    if (answers.price !== "egal" && wine.price_category === answers.price) {
      score += 1;
    }

    // Base: acidity +2
    if (wine.acidity === answers.acidity) {
      score += 2;
    } else if (
      (answers.acidity === "hoch" && wine.acidity === "mittel") ||
      (answers.acidity === "niedrig" && wine.acidity === "mittel") ||
      (answers.acidity === "mittel" && (wine.acidity === "hoch" || wine.acidity === "niedrig"))
    ) {
      score += 1; // soft proximity
    }

    // Premium: adventurousness
    if (answers.adventurousness === "klassisch" && wine.classic_score) {
      score += wine.classic_score >= 8 ? 2 : wine.classic_score >= 6 ? 1 : 0;
    } else if (answers.adventurousness === "mutig" && wine.discovery_score) {
      score += wine.discovery_score >= 7 ? 2 : wine.discovery_score >= 5 ? 1 : 0;
    } else if (answers.adventurousness === "offen") {
      const balanced = ((wine.classic_score ?? 5) + (wine.discovery_score ?? 5)) / 2;
      score += balanced >= 6 ? 1 : 0;
    }

    // Premium: gift boost
    if (answers.occasion === "geschenk" && wine.gift_score) {
      score += wine.gift_score >= 8 ? 2 : wine.gift_score >= 6 ? 1 : 0;
    }

    // Premium: body/style affinity
    if (wine.body && BODY_STYLE_AFFINITY[wine.body]?.includes(answers.style)) {
      score += 1;
    }

    // Premium: featured soft tiebreaker (fractional)
    score += (wine.featured_score ?? 0) * 0.05;

    return { wine, score, styleScore, foodOccasionScore };
  });

  // Step 5: sort
  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    if (b.styleScore !== a.styleScore) return b.styleScore - a.styleScore;
    if (b.foodOccasionScore !== a.foodOccasionScore) return b.foodOccasionScore - a.foodOccasionScore;
    return (b.wine.featured_score ?? 0) - (a.wine.featured_score ?? 0);
  });

  const top = scored[0]?.wine ?? null;
  const usedIds = new Set(top ? [top.id] : []);

  // Alternative: next best that's not the top
  const alternative = scored.find((s) => !usedIds.has(s.wine.id))?.wine ?? null;
  if (alternative) usedIds.add(alternative.id);

  // Value tip: good fit but lower price
  const valueTip =
    scored.find(
      (s) =>
        !usedIds.has(s.wine.id) &&
        s.wine.price < (top?.price ?? 999) &&
        s.score > 3
    )?.wine ?? null;
  if (valueTip) usedIds.add(valueTip.id);

  // Adventurous: high discovery score
  const adventurous =
    scored.find(
      (s) =>
        !usedIds.has(s.wine.id) &&
        (s.wine.discovery_score ?? 0) >= 5
    )?.wine ?? null;

  return { top, alternative, valueTip, adventurous };
}

/**
 * Generate a dynamic reason text for why a wine matches.
 */
export function generateMatchReason(wine: Wine, answers: QuizAnswers): string {
  const parts: string[] = [];

  const styleMap: Record<string, string> = {
    leicht_frisch: "leichten, frischen",
    fruchtig_aromatisch: "fruchtigen, aromatischen",
    weich_harmonisch: "weichen, harmonischen",
    kraeftig_intensiv: "kräftigen, intensiven",
  };

  const occasionMap: Record<string, string> = {
    abend: "einen gemütlichen Abend",
    dinner: "ein Dinner mit Freunden",
    geschenk: "ein besonderes Geschenk",
    party: "eine Party",
    essen: "ein schönes Essen",
  };

  const foodMap: Record<string, string> = {
    fisch: "Fischgerichten",
    fleisch: "Fleischgerichten",
    pasta: "Pasta",
    vegetarisch: "vegetarischen Gerichten",
  };

  if (styleMap[answers.style]) {
    parts.push(`deinem Wunsch nach einem ${styleMap[answers.style]} Wein`);
  }
  if (occasionMap[answers.occasion]) {
    parts.push(`${occasionMap[answers.occasion]}`);
  }
  if (foodMap[answers.food]) {
    parts.push(`der Kombination mit ${foodMap[answers.food]}`);
  }

  if (parts.length === 0) return `${wine.name} ist eine ausgezeichnete Wahl für dich.`;

  return `Dieser Wein passt besonders gut zu ${parts.join(", ")}.`;
}

/**
 * Get a seasonal hint based on wine and occasion.
 */
export function getSeasonalHint(wine: Wine, answers: QuizAnswers): string {
  if (answers.occasion === "geschenk" || answers.occasion === "dinner") return "festlich";
  if (wine.style === "leicht_frisch" || wine.acidity === "hoch") return "sommer";
  if (wine.style === "kraeftig_intensiv" || wine.body === "voll") return "winter";
  return "default";
}
