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
//   removeFromCart: (variant: string) => void;
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
//       const existing = prev.find((i) => i.variant === item.variant);
//       if (existing) {
//         return prev.map((i) =>
//           i.variant === item.variant
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

"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { CartItem, CartContextType } from "@/types/cart";
import { Product, Variant } from "@/types/product";

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  // ✅ Optional: Load cart from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) setCart(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add to cart
  const addToCart = (product: Product, variant: Variant) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === variant.id);
      if (existing) {
        return prev.map((item) =>
          item.id === variant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [
          ...prev,
          {
            id: variant.id,
            name: `${product.name} - ${variant.type}`,
            variant,
            quantity: 1,
            price_idr: variant.price_idr ?? 0,
            image: variant.image,
          },
        ];
      }
    });
  };

  // Remove one item
  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
  };

  // Calculate total
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price_idr * item.quantity,
    0
  );

  const value: CartContextType = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
