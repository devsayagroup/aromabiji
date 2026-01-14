import { products } from "@/lib/products";

export function getProduct(id: string) {
  return products.find(p => p.id === id);
}
