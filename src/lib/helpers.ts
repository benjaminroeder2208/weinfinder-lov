/**
 * Format a number as a Euro price string (German locale).
 */
export function formatPrice(price: number): string {
  return price.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
}

/**
 * Build a share text string for a wine recommendation.
 */
export function buildShareText(wineName: string, weingut: string, description: string): string {
  return `🍷 Mein Wein-Match: ${wineName} von ${weingut} – ${description}`;
}

/**
 * Map food pairing values to display labels with emojis.
 */
export const foodPairingLabels: Record<string, { label: string; emoji: string }> = {
  fisch: { label: "Fisch & Meeresfrüchte", emoji: "🐟" },
  fleisch: { label: "Fleisch & Grill", emoji: "🥩" },
  pasta: { label: "Pasta & Mediterran", emoji: "🍝" },
  vegetarisch: { label: "Vegetarisch", emoji: "🥗" },
  ohne_essen: { label: "Solo genießen / nach dem Essen", emoji: "🍷" },
};
