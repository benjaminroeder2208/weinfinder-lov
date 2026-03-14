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
}
