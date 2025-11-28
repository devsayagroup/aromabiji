// import { Variant } from "./product";

// export interface CartItem {
//   productId: string;
//   variantId: string;
//   name: string;         // product name (e.g. "Java Preanger")
//   variantName: string;  // variant type (e.g. "Bean 100 g")
//   price_idr: number;
//   quantity: number;
//   image: string;
// }

// export interface Cart {
//   items: CartItem[];
//   totalItems: number;
//   totalPrice: number;
// }


import { Product, Variant } from "./product";

export interface CartItem {
  id: string; // unique per variant
  name: string;
  variant: Variant;
  quantity: number;
  price_idr: number;
  image: string;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, variant: Variant) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  totalPrice: number;
}

