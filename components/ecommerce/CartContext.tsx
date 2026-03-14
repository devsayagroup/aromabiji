
// // "use client";

// // import { createContext, useContext, useState, ReactNode, useEffect } from "react";
// // import { CartItem, CartContextType } from "@/types/cart";
// // import { Product, Variant } from "@/types/product";

// // const CartContext = createContext<CartContextType | undefined>(undefined);

// // export function CartProvider({ children }: { children: ReactNode }) {
// //   const [cart, setCart] = useState<CartItem[]>([]);

// //   // ✅ Optional: Load cart from localStorage
// //   useEffect(() => {
// //     const stored = localStorage.getItem("cart");
// //     if (stored) setCart(JSON.parse(stored));
// //   }, []);

// //   useEffect(() => {
// //     localStorage.setItem("cart", JSON.stringify(cart));
// //   }, [cart]);

// //   // Add to cart
// //   const addToCart = (product: Product, variant: Variant) => {
// //     setCart((prev) => {
// //       const existing = prev.find((item) => item.id === variant.id);
// //       if (existing) {
// //         return prev.map((item) =>
// //           item.id === variant.id
// //             ? { ...item, quantity: item.quantity + 1 }
// //             : item
// //         );
// //       } else {
// //         return [
// //           ...prev,
// //           {
// //             id: variant.id,
// //             name: `${product.name} - ${variant.type}`,
// //             variant,
// //             quantity: 1,
// //             price_idr: variant.price_idr ?? 0,
// //             image: variant.image,
// //           },
// //         ];
// //       }
// //     });
// //   };

// //   // Remove one item
// //   const removeFromCart = (id: string) => {
// //     setCart((prev) => prev.filter((item) => item.id !== id));
// //   };

// //   // Clear cart
// //   const clearCart = () => {
// //     setCart([]);
// //   };

// //   // Calculate total
// //   const totalPrice = cart.reduce(
// //     (sum, item) => sum + item.price_idr * item.quantity,
// //     0
// //   );

// //   const value: CartContextType = {
// //     cart,
// //     addToCart,
// //     removeFromCart,
// //     clearCart,
// //     totalPrice,
// //   };

// //   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// // }

// // export function useCart() {
// //   const context = useContext(CartContext);
// //   if (!context) {
// //     throw new Error("useCart must be used within a CartProvider");
// //   }
// //   return context;
// // }


// "use client";

// import React, { createContext, useContext, useState, ReactNode } from "react";
// import { Product, Variant } from "@/types/product";

// // 1. Define what a Cart Item looks like
// export interface CartItem {
//   product: Product;
//   variant: Variant;
//   quantity: number;
// }

// // 2. Define the Context Type
// interface CartContextType {
//   cartItems: CartItem[];
//   addToCart: (product: Product, variant: Variant, quantity: number) => void;
//   removeFromCart: (variantId: string) => void;
//   clearCart: () => void;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export function CartProvider({ children }: { children: ReactNode }) {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);

//   // 3. Implement the logic you provided
//   const addToCart = (product: Product, variant: Variant, quantity: number) => {
//     setCartItems((prev) => {
//       const existing = prev.find((item) => item.variant.id === variant.id);
      
//       if (existing) {
//         return prev.map((item) =>
//           item.variant.id === variant.id 
//             ? { ...item, quantity: item.quantity + quantity } 
//             : item
//         );
//       }
      
//       return [...prev, { product, variant, quantity }];
//     });
//   };

//   const removeFromCart = (variantId: string) => {
//     setCartItems((prev) => prev.filter((item) => item.variant.id !== variantId));
//   };

//   const clearCart = () => setCartItems([]);

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// }

// // 4. Create the Hook for easy access
// export function useCart() {
//   const context = useContext(CartContext);
//   if (context === undefined) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// }


"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { Product, Variant } from "@/types/product";

export interface CartItem {
  product: Product;
  variant: Variant;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, variant: Variant, quantity: number) => void;
  removeFromCart: (variantId: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product, variant: Variant, quantity: number) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.variant.id === variant.id);
      if (existing) {
        return prev.map((item) =>
          item.variant.id === variant.id 
            ? { ...item, quantity: item.quantity + quantity } 
            : item
        );
      }
      return [...prev, { product, variant, quantity }];
    });
  };

  const removeFromCart = (variantId: string) => {
    setCartItems((prev) => prev.filter((item) => item.variant.id !== variantId));
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}