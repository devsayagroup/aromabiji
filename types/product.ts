export interface Variant {
  id: string;
  type: string;
  packaging: string;
  weight: string;
  price_idr: number | null;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  bg: string;
  theme: string;
  slug?: string; // optional if you plan to generate from `id`
  origin: string;
  description: string;
  image: string;
  variants: Variant[];
}
