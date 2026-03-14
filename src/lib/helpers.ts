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
