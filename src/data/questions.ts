import type { Question } from "@/types/quiz";

export const questions: Question[] = [
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
      { label: "ohne Essen / nach dem Essen", value: "ohne_essen" },
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
  {
    question: "Wie frisch und lebendig darf der Wein wirken?",
    options: [
      { label: "eher mild und weich", value: "niedrig" },
      { label: "ausgewogen", value: "mittel" },
      { label: "schön frisch und lebendig", value: "hoch" },
    ],
  },
];
