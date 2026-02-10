// "use client";

// import { motion } from "framer-motion";
// import { Product, Variant } from "@/types/product";
// import { useCart } from "./CartContext";

// interface Props {
//   product: Product;
//   small?: boolean;
// }

// export default function AddToCartButton({ product, small }: Props) {
//    const { addToCart } = useCart();
//   const variant = product.variants[0];

//   return (
//     <motion.button
//       whileTap={{ scale: 0.95 }}
//       className={`${
//         small ? "px-4 py-1 text-sm" : "px-6 py-2"
//       } bg-[#6E4B2F] hover:bg-[#3F2410] text-white rounded-full transition-colors font-medium`}
//       onClick={() => addToCart(product, variant)}
//     >
//       {small ? "add" : "Add to Cart"}
//     </motion.button>
//   );
// }


"use client";

import { motion } from "framer-motion";
import { Product } from "@/types/product";
import { useCart } from "./CartContext";

interface Props {
  product: Product;
  small?: boolean;
  className?: string;
}

export default function AddToCartButton({ product, small, className }: Props) {
  const { addToCart } = useCart();
  const variant = product.variants[0];

  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.98 }}
      onClick={() => addToCart(product, variant)}
      className={[
        "group inline-flex items-center justify-center rounded-full cursor-pointer",
        "uppercase tracking-[0.28em] text-[11px] font-medium",
        "bg-[#12110F] text-white",
        "transition focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20",
        "shadow-[0_16px_40px_rgba(0,0,0,0.18)]",
        "hover:shadow-[0_18px_46px_rgba(0,0,0,0.22)]",
        small ? "px-4 py-2" : "px-6 py-3",
        className ?? "",
      ].join(" ")}
    >
      <span className="relative">
        {small ? "Add to Cart" : "Add to Cart"}
        <span
          className={[
            "pointer-events-none absolute left-0 -bottom-2 h-px w-full",
            "scale-x-0 origin-left transition-transform duration-500",
            "bg-gradient-to-r from-transparent via-white/70 to-transparent",
            "group-hover:scale-x-100",
          ].join(" ")}
        />
      </span>

      <span className="ml-3 text-white/55 transition group-hover:text-white/85">
        ↗
      </span>
    </motion.button>
  );
}
