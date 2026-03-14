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
  link?: string;
  image?: string;
  body?: "leicht" | "mittel" | "voll" | "kraeftig";
  acidity?: "niedrig" | "mittel" | "hoch";
  sweetness?: "trocken" | "halbtrocken" | "lieblich";
  aroma_notes?: string[];
  grape_variety?: string;
  region?: string;
  vintage?: number;
  alcohol?: number;
  gift_score?: number;
  classic_score?: number;
  discovery_score?: number;
  serving_temp?: string;
  featured_score?: number;
}
