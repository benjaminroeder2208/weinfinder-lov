export interface Wine {
  id: string;
  name: string;
  weingut: string;
  price: number;
  price_category: string;
  color: string;
  style: string;
  occasion: string[];
  food_pairing: string[];
  description: string;
}

export const wines: Wine[] = [
  { id: "wein_001", name: "Riesling Kabinett", weingut: "Weingut Kellerberg", price: 12.9, price_category: "10-20", color: "weiss", style: "fruchtig_aromatisch", occasion: ["abend", "dinner"], food_pairing: ["fisch", "vegetarisch"], description: "Frischer Riesling mit Apfel- und Zitrusnoten." },
  { id: "wein_002", name: "Grauburgunder Classic", weingut: "Weingut Sonnenhang", price: 13.5, price_category: "10-20", color: "weiss", style: "weich_harmonisch", occasion: ["abend", "essen"], food_pairing: ["pasta", "vegetarisch"], description: "Harmonischer Grauburgunder mit dezenter Frucht." },
  { id: "wein_003", name: "Sauvignon Blanc", weingut: "Weingut Lindenhof", price: 14.9, price_category: "10-20", color: "weiss", style: "leicht_frisch", occasion: ["party", "abend"], food_pairing: ["fisch"], description: "Aromatischer Sauvignon Blanc mit Limette und Stachelbeere." },
  { id: "wein_004", name: "Chardonnay Reserve", weingut: "Weingut Goldtal", price: 21.9, price_category: "ueber20", color: "weiss", style: "kraeftig_intensiv", occasion: ["dinner", "geschenk"], food_pairing: ["fleisch", "pasta"], description: "Vollmundiger Chardonnay mit feinen Vanillenoten." },
  { id: "wein_005", name: "Weißburgunder", weingut: "Weingut Bergblick", price: 11.5, price_category: "10-20", color: "weiss", style: "leicht_frisch", occasion: ["abend", "essen"], food_pairing: ["fisch", "vegetarisch"], description: "Eleganter Weißburgunder mit frischer Säure." },
  { id: "wein_006", name: "Rosé Sommerwein", weingut: "Weingut Rosengarten", price: 9.9, price_category: "unter10", color: "rose", style: "leicht_frisch", occasion: ["party", "abend"], food_pairing: ["vegetarisch"], description: "Fruchtiger Rosé mit Erdbeeraroma." },
  { id: "wein_007", name: "Rosé Prestige", weingut: "Weingut Falkenberg", price: 14.9, price_category: "10-20", color: "rose", style: "fruchtig_aromatisch", occasion: ["abend", "party"], food_pairing: ["pasta"], description: "Eleganter Rosé mit Himbeer- und Pfirsichnoten." },
  { id: "wein_008", name: "Spätburgunder Classic", weingut: "Weingut Kellerberg", price: 15.9, price_category: "10-20", color: "rot", style: "weich_harmonisch", occasion: ["abend", "dinner"], food_pairing: ["pasta", "fleisch"], description: "Samtiger Spätburgunder mit roten Beeren." },
  { id: "wein_009", name: "Spätburgunder Reserve", weingut: "Weingut Goldtal", price: 24.9, price_category: "ueber20", color: "rot", style: "kraeftig_intensiv", occasion: ["dinner", "geschenk"], food_pairing: ["fleisch"], description: "Kräftiger Pinot Noir mit dunklen Kirschen." },
  { id: "wein_010", name: "Dornfelder", weingut: "Weingut Sonnenhang", price: 9.5, price_category: "unter10", color: "rot", style: "fruchtig_aromatisch", occasion: ["party", "abend"], food_pairing: ["pasta", "fleisch"], description: "Fruchtiger Dornfelder mit Brombeeraromen." },
  { id: "wein_011", name: "Gewürztraminer Spätlese", weingut: "Weingut Lindenhof", price: 18.5, price_category: "10-20", color: "weiss", style: "fruchtig_aromatisch", occasion: ["geschenk", "dinner"], food_pairing: ["vegetarisch", "fisch"], description: "Aromatischer Gewürztraminer mit Rosenblüten und Litschi." },
  { id: "wein_012", name: "Müller-Thurgau", weingut: "Weingut Bergblick", price: 8.9, price_category: "unter10", color: "weiss", style: "leicht_frisch", occasion: ["party", "abend"], food_pairing: ["fisch", "vegetarisch"], description: "Leichter Müller-Thurgau mit feiner Muskatnote." },
  { id: "wein_013", name: "Merlot Barrique", weingut: "Weingut Falkenberg", price: 22.5, price_category: "ueber20", color: "rot", style: "kraeftig_intensiv", occasion: ["dinner", "geschenk"], food_pairing: ["fleisch"], description: "Gehaltvoller Merlot mit Schokoladen- und Pflaumenaromen." },
  { id: "wein_014", name: "Trollinger", weingut: "Weingut Rosengarten", price: 8.5, price_category: "unter10", color: "rot", style: "leicht_frisch", occasion: ["party", "abend"], food_pairing: ["pasta", "vegetarisch"], description: "Leichter Trollinger mit Kirscharoma." },
  { id: "wein_015", name: "Silvaner Alte Reben", weingut: "Weingut Kellerberg", price: 16.9, price_category: "10-20", color: "weiss", style: "weich_harmonisch", occasion: ["essen", "dinner"], food_pairing: ["fisch", "pasta"], description: "Mineralischer Silvaner mit feiner Kräuternote." },
  { id: "wein_016", name: "Rosé Cuvée", weingut: "Weingut Goldtal", price: 11.9, price_category: "10-20", color: "rose", style: "fruchtig_aromatisch", occasion: ["party", "abend"], food_pairing: ["vegetarisch", "pasta"], description: "Lebendiger Rosé mit Johannisbeere und Melone." },
  { id: "wein_017", name: "Cabernet Sauvignon", weingut: "Weingut Sonnenhang", price: 26.9, price_category: "ueber20", color: "rot", style: "kraeftig_intensiv", occasion: ["geschenk", "dinner"], food_pairing: ["fleisch"], description: "Komplexer Cabernet mit Cassis und Zedernholz." },
  { id: "wein_018", name: "Blanc de Noirs", weingut: "Weingut Falkenberg", price: 13.9, price_category: "10-20", color: "weiss", style: "weich_harmonisch", occasion: ["abend", "party"], food_pairing: ["fisch", "pasta"], description: "Aus roten Trauben gekeltert – cremig und elegant." },
  { id: "wein_019", name: "Lemberger", weingut: "Weingut Bergblick", price: 14.5, price_category: "10-20", color: "rot", style: "fruchtig_aromatisch", occasion: ["essen", "abend"], food_pairing: ["fleisch", "pasta"], description: "Saftiger Lemberger mit Brombeere und Pfeffer." },
  { id: "wein_020", name: "Rosé Secco", weingut: "Weingut Rosengarten", price: 7.9, price_category: "unter10", color: "rose", style: "leicht_frisch", occasion: ["party"], food_pairing: ["vegetarisch"], description: "Prickelnder Rosé Secco – perfekt für jede Feier." },
];

export interface QuizQuestion {
  question: string;
  options: { label: string; value: string }[];
}

export const questions: QuizQuestion[] = [
  {
    question: "Wann möchtest du den Wein trinken?",
    options: [
      { label: "gemütlicher Abend", value: "abend" },
      { label: "Dinner mit Freunden", value: "dinner" },
      { label: "Geschenk", value: "geschenk" },
      { label: "Party / Feier", value: "party" },
      { label: "zum Essen", value: "essen" },
    ],
  },
  {
    question: "Welcher Weinstil passt am besten zu dir?",
    options: [
      { label: "leicht & frisch", value: "leicht_frisch" },
      { label: "fruchtig & aromatisch", value: "fruchtig_aromatisch" },
      { label: "weich & harmonisch", value: "weich_harmonisch" },
      { label: "kräftig & intensiv", value: "kraeftig_intensiv" },
    ],
  },
  {
    question: "Möchtest du den Wein zu einem Essen trinken?",
    options: [
      { label: "Fisch / Meeresfrüchte", value: "fisch" },
      { label: "Fleisch / Grill", value: "fleisch" },
      { label: "Pasta / mediterran", value: "pasta" },
      { label: "vegetarisch", value: "vegetarisch" },
      { label: "ohne Essen", value: "ohne_essen" },
    ],
  },
  {
    question: "Welche Weinart möchtest du?",
    options: [
      { label: "Rotwein", value: "rot" },
      { label: "Weißwein", value: "weiss" },
      { label: "Rosé", value: "rose" },
      { label: "egal – überrasche mich", value: "egal" },
    ],
  },
  {
    question: "In welchem Preisbereich suchst du?",
    options: [
      { label: "unter 10 €", value: "unter10" },
      { label: "10–20 €", value: "10-20" },
      { label: "über 20 €", value: "ueber20" },
      { label: "egal", value: "egal" },
    ],
  },
];

export interface Answers {
  occasion: string;
  style: string;
  food: string;
  color: string;
  price: string;
}

export function getRecommendations(answers: Answers): Wine[] {
  let filtered = wines;

  // Color filter
  if (answers.color !== "egal") {
    filtered = filtered.filter((w) => w.color === answers.color);
  }

  // Score
  const scored = filtered.map((wine) => {
    let score = 0;
    if (wine.style === answers.style) score += 3;
    if (wine.food_pairing.includes(answers.food)) score += 2;
    if (wine.occasion.includes(answers.occasion)) score += 2;
    if (answers.price !== "egal" && wine.price_category === answers.price) score += 1;
    return { wine, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.map((s) => s.wine);
}
