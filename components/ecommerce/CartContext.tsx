// // components/CartContext.tsx
// "use client";
// import React, { createContext, useContext, useEffect, useState } from "react";

// type CartItem = {
//   id: string;
//   name: string;
//   price_idr: number | null;
//   qty: number;
//   image?: string;
//   weight?: string;
// };

// type CartContextValue = {
//   items: CartItem[];
//   addItem: (item: CartItem) => void;
//   removeItem: (id: string) => void;
//   updateQty: (id: string, qty: number) => void;
//   clear: () => void;
//   total: number;
// };

// const CartContext = createContext<CartContextValue | undefined>(undefined);

// export const CartProvider = ({ children }: { children: React.ReactNode }) => {
//   const [items, setItems] = useState<CartItem[]>([]);

//   useEffect(() => {
//     const raw = localStorage.getItem("ab_cart");
//     if (raw) setItems(JSON.parse(raw));
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("ab_cart", JSON.stringify(items));
//   }, [items]);

//   const addItem = (item: CartItem) => {
//     setItems((prev) => {
//       const existing = prev.find((p) => p.id === item.id);
//       if (existing) return prev.map(p => p.id === item.id ? { ...p, qty: p.qty + item.qty } : p);
//       return [...prev, { ...item }];
//     });
//   };

//   const removeItem = (id: string) => setItems((prev) => prev.filter(i => i.id !== id));
//   const updateQty = (id: string, qty: number) => setItems(prev => prev.map(i => i.id === id ? { ...i, qty: Math.max(1, qty) } : i));
//   const clear = () => setItems([]);

//   const total = items.reduce((s, it) => s + (it.price_idr ? it.price_idr * it.qty : 0), 0);

//   return (
//     <CartContext.Provider value={{ items, addItem, removeItem, updateQty, clear, total }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   const ctx = useContext(CartContext);
//   if (!ctx) throw new Error("useCart must be used inside CartProvider");
//   return ctx;
// };

// "use client";

// import { createContext, useContext, useEffect, useState } from "react";
// import { CartItem } from "@/types/cart";

// interface CartContextType {
//   cart: CartItem[];
//   addToCart: (item: CartItem) => void;
//   removeFromCart: (variantId: string) => void;
//   clearCart: () => void;
//   totalPrice: number;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const CartProvider = ({ children }: { children: React.ReactNode }) => {
//   const [cart, setCart] = useState<CartItem[]>([]);

//   useEffect(() => {
//     const stored = localStorage.getItem("aromabiji-cart");
//     if (stored) setCart(JSON.parse(stored));
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("aromabiji-cart", JSON.stringify(cart));
//   }, [cart]);

//   const addToCart = (item: CartItem) => {
//     setCart((prev) => {
//       const existing = prev.find((i) => i.variantId === item.variantId);
//       if (existing) {
//         return prev.map((i) =>
//           i.variantId === item.variantId
//             ? { ...i, quantity: i.quantity + item.quantity }
//             : i
//         );
//       }
//       return [...prev, item];
//     });
//   };

//   const removeFromCart = (variantId: string) => {
//     setCart((prev) => prev.filter((i) => i.variantId !== variantId));
//   };

//   const clearCart = () => setCart([]);

//   const totalPrice = cart.reduce(
//     (acc, item) => acc + item.price_idr * item.quantity,
//     0
//   );

//   return (
//     <CartContext.Provider
//       value={{ cart, addToCart, removeFromCart, clearCart, totalPrice }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   const ctx = useContext(CartContext);
//   if (!ctx) throw new Error("useCart must be used within CartProvider");
//   return ctx;
// };
