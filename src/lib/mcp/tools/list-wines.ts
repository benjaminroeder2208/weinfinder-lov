import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { wines } from "../../../data/wines";

export default defineTool({
  name: "list_wines",
  title: "List wines",
  description:
    "List wines from the Weinfinder catalog with optional filters by color, style, price category, or food pairing.",
  inputSchema: {
    color: z.enum(["weiss", "rot", "rose"]).optional().describe("Filter by wine color."),
    style: z.string().optional().describe("Filter by taste style, e.g. leicht_frisch, fruchtig_aromatisch."),
    price_category: z
      .enum(["unter10", "10-20", "ueber20"])
      .optional()
      .describe("Filter by price bracket."),
    food_pairing: z
      .string()
      .optional()
      .describe("Filter to wines matching this food pairing tag, e.g. fisch, pasta, kaese."),
    limit: z.number().int().min(1).max(50).optional().describe("Max results, default 20."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ color, style, price_category, food_pairing, limit }) => {
    const filtered = wines.filter(
      (w) =>
        (!color || w.color === color) &&
        (!style || w.style === style) &&
        (!price_category || w.price_category === price_category) &&
        (!food_pairing || w.food_pairing?.includes(food_pairing)),
    );
    const results = filtered.slice(0, limit ?? 20).map((w) => ({
      id: w.id,
      name: w.name,
      weingut: w.weingut,
      price: w.price,
      color: w.color,
      style: w.style,
      grape_variety: w.grape_variety,
      region: w.region,
      food_pairing: w.food_pairing,
      link: w.link,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify({ total: filtered.length, results }, null, 2) }],
      structuredContent: { total: filtered.length, results },
    };
  },
});