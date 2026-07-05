import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { matchWines } from "../../matchWines";
import { wines } from "../../../data/wines";
import type { QuizAnswers } from "../../../types/quiz";

export default defineTool({
  name: "recommend_wine",
  title: "Recommend wine",
  description:
    "Run the Weinfinder matching algorithm and return the top wine plus alternatives for a set of quiz answers.",
  inputSchema: {
    occasion: z.string().describe("Occasion, e.g. abend, essen, party, geschenk."),
    color: z.string().describe("Preferred color: weiss, rot, rose, egal."),
    style: z.string().describe("Taste style, e.g. leicht_frisch, fruchtig_aromatisch, kraeftig_intensiv."),
    food: z.string().describe("Food pairing, e.g. fisch, fleisch, pasta, kaese, vegetarisch, keine."),
    price: z.string().describe("Price bracket: unter10, 10-20, ueber20, egal."),
    acidity: z.string().describe("Acidity preference: niedrig, mittel, hoch, egal."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: (input) => {
    const answers = input as unknown as QuizAnswers;
    const { top, alternative, alternative2, valueTip } = matchWines(wines, answers);
    if (!top) {
      return {
        content: [{ type: "text", text: "No matching wine found for these preferences." }],
        isError: true,
      };
    }
    const payload = { top, alternative, alternative2, valueTip };
    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});