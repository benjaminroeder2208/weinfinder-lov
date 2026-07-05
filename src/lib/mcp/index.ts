import { defineMcp } from "@lovable.dev/mcp-js";
import listWinesTool from "./tools/list-wines";
import getWineTool from "./tools/get-wine";
import recommendWineTool from "./tools/recommend-wine";

export default defineMcp({
  name: "weinfinder-mcp",
  title: "Weinfinder MCP",
  version: "0.1.0",
  instructions:
    "Tools for the Weinfinder digital sommelier. Use `list_wines` to browse the catalog with filters, `get_wine` for the full detail of a specific wine, and `recommend_wine` to run the guided-quiz matching algorithm for a set of preferences.",
  tools: [listWinesTool, getWineTool, recommendWineTool],
});