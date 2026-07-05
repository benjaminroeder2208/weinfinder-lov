import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { wines } from "@/data/wines";

export default defineTool({
  name: "get_wine",
  title: "Get wine details",
  description: "Return full details for a single wine by its ID.",
  inputSchema: {
    id: z.string().min(1).describe("Wine ID, e.g. wein_001."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ id }) => {
    const wine = wines.find((w) => w.id === id);
    if (!wine) {
      return {
        content: [{ type: "text", text: `No wine found with id ${id}.` }],
        isError: true,
      };
    }
    return {
      content: [{ type: "text", text: JSON.stringify(wine, null, 2) }],
      structuredContent: { wine },
    };
  },
});