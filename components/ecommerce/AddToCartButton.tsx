// // // "use client";

// // // import { motion } from "framer-motion";
// // // import { Product, Variant } from "@/types/product";
// // // import { useCart } from "./CartContext";

// // // interface Props {
// // //   product: Product;
// // //   small?: boolean;
// // // }

// // // export default function AddToCartButton({ product, small }: Props) {
// // //    const { addToCart } = useCart();
// // //   const variant = product.variants[0];

// // //   return (
// // //     <motion.button
// // //       whileTap={{ scale: 0.95 }}
// // //       className={`${
// // //         small ? "px-4 py-1 text-sm" : "px-6 py-2"
// // //       } bg-[#6E4B2F] hover:bg-[#3F2410] text-white rounded-full transition-colors font-medium`}
// // //       onClick={() => addToCart(product, variant)}
// // //     >
// // //       {small ? "add" : "Add to Cart"}
// // //     </motion.button>
// // //   );
// // // }


// // "use client";

// // import { motion } from "framer-motion";
// // import { Product } from "@/types/product";
// // import { useCart } from "./CartContext";

// // interface Props {
// //   product: Product;
// //   small?: boolean;
// //   className?: string;
// // }

// // export default function AddToCartButton({ product, small, className }: Props) {
// //   const { addToCart } = useCart();
// //   const variant = product.variants[0];

// //   return (
// //     <motion.button
// //       type="button"
// //       whileTap={{ scale: 0.98 }}
// //       onClick={() => addToCart(product, variant)}
// //       className={[
// //         "group inline-flex items-center justify-center rounded-full cursor-pointer",
// //         "uppercase tracking-[0.28em] text-[11px] font-medium",
// //         "bg-[#12110F] text-white",
// //         "transition focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20",
// //         "shadow-[0_16px_40px_rgba(0,0,0,0.18)]",
// //         "hover:shadow-[0_18px_46px_rgba(0,0,0,0.22)]",
// //         small ? "px-4 py-2" : "px-6 py-3",
// //         className ?? "",
// //       ].join(" ")}
// //     >
// //       <span className="relative">
// //         {small ? "Add to Cart" : "Add to Cart"}
// //         <span
// //           className={[
// //             "pointer-events-none absolute left-0 -bottom-2 h-px w-full",
// //             "scale-x-0 origin-left transition-transform duration-500",
// //             "bg-gradient-to-r from-transparent via-white/70 to-transparent",
// //             "group-hover:scale-x-100",
// //           ].join(" ")}
// //         />
// //       </span>

// //       <span className="ml-3 text-white/55 transition group-hover:text-white/85">
// //         ↗
// //       </span>
// //     </motion.button>
// //   );
// // }

// "use client";

// import { motion } from "framer-motion";
// import { Product, Variant } from "@/types/product";
// import { useCart } from "./CartContext";

// interface Props {
//   product: Product;
//   selectedVariant: Variant; 
//   quantity?: number;
//   showPrice?: boolean;
//   className?: string;
// }

// export default function AddToCartButton({ 
//   product, 
//   selectedVariant, 
//   quantity = 1, 
//   showPrice = false,
//   className 
// }: Props) {
//   const { addToCart } = useCart();
//   const price = selectedVariant?.price_idr ?? 0;
//   const totalPrice = price * quantity;
//   const handleAdd = () => {
//     // If your context only takes 2 args, we call it in a loop or 
//     // update your Context to handle quantity. 
//     // Assuming you'll update Context to: addToCart(product, variant, qty)
//     // For now, I will use the 3-arg call. 
//     // If the error persists, you must update your CartContext definition.
//     addToCart(product, selectedVariant, quantity);
//   };

//   return (
//     <motion.button
//       type="button"
//       whileTap={{ scale: 0.97 }}
//       whileHover={{ filter: "brightness(1.1)" }} 
//       onClick={handleAdd}
//       className={// Inside AddToCartButton.tsx className array:
//     [
//       "relative w-full group inline-flex items-center justify-between rounded-2xl cursor-pointer",
//       "uppercase tracking-[0.15em] text-[10px] sm:text-[11px] font-bold h-14 sm:h-16 px-6 sm:px-8", 
//       "bg-[#6B0F12] text-white overflow-hidden transition-all duration-300",
//       "shadow-xl shadow-[#6B0F12]/20 active:scale-[0.98]",
//       className ?? "",
//     ].join(" ")}
//     >
//       <span className="relative z-10">
//         Add to Collection
//       </span>

//       {showPrice && (
//         <span className="relative z-10 font-text text-base lg:text-lg ml-4 opacity-90">
//           Rp {totalPrice.toLocaleString("id-ID")}
//         </span>
//       )}

//       <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//     </motion.button>
//   );
// }


"use client";

import { motion } from "framer-motion";
import { Product, Variant } from "@/types/product";
import { useCart } from "./CartContext";

interface Props {
  product: Product;
  selectedVariant: Variant; 
  quantity?: number;
  className?: string;
}

export default function AddToCartButton({ 
  product, 
  selectedVariant, 
  quantity = 1, 
  className 
}: Props) {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.97 }}
      whileHover={{ filter: "brightness(1.1)" }} 
      onClick={handleAdd}
      className={[
        "relative w-full group inline-flex items-center justify-center rounded-2xl cursor-pointer",
        "uppercase tracking-[0.2em] text-[10px] sm:text-[11px] font-bold h-14 sm:h-16 px-6 sm:px-8", 
        "bg-[#6B0F12] text-white overflow-hidden transition-all duration-300",
        "shadow-xl shadow-[#6B0F12]/20 active:scale-[0.98]",
        className ?? "",
      ].join(" ")}
    >
      <span className="relative z-10">
        Add to Collection
      </span>

      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.button>
  );
}