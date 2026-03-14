import type { Wine } from "@/types/wine";
import type { QuizAnswers } from "@/types/quiz";

interface ScoredWine {
  wine: Wine;
  score: number;
}

/**
 * Matches wines against user answers and returns top recommendations.
 *
 * Scoring rules:
 * - Color is a hard filter (unless "egal")
 * - Style match: +3
 * - Food pairing match: +2
 * - Occasion match: +2
 * - Price category match: +1 (ignored if "egal")
 */
export function matchWines(
  allWines: Wine[],
  answers: QuizAnswers,
  maxResults = 3
): Wine[] {
  // Hard filter by color
  const filtered =
    answers.color !== "egal"
      ? allWines.filter((w) => w.color === answers.color)
      : allWines;

  // Score each wine
  const scored: ScoredWine[] = filtered.map((wine) => {
    let score = 0;
    if (wine.style === answers.style) score += 3;
    if (wine.food_pairing.includes(answers.food)) score += 2;
    if (wine.occasion.includes(answers.occasion)) score += 2;
    if (answers.price !== "egal" && wine.price_category === answers.price) score += 1;
    return { wine, score };
  });

  // Sort descending by score
  scored.sort((a, b) => b.score - a.score);

  return scored.slice(0, maxResults).map((s) => s.wine);
}
