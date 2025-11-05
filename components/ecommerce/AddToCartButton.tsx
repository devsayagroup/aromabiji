"use client";

import { motion } from "framer-motion";
import { Product, Variant } from "@/types/product";
import { useCart } from "./CartContext";

interface Props {
  product: Product;
  small?: boolean;
}

export default function AddToCartButton({ product, small }: Props) {
   const { addToCart } = useCart();
  const variant = product.variants[0];

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={`${
        small ? "px-4 py-1 text-sm" : "px-6 py-2"
      } bg-[#6E4B2F] hover:bg-[#3F2410] text-white rounded-full transition-colors font-medium`}
      onClick={() => addToCart(product, variant)}
    >
      {small ? "add" : "Add to Cart"}
    </motion.button>
  );
}
