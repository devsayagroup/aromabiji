"use client";

import { motion } from "framer-motion";
import { Product } from "@/types/product";
import { ShoppingCart } from "lucide-react";

interface Props {
  product: Product;
  small?: boolean;
}

export default function AddToCartButton({ product, small }: Props) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={`${
        small ? "px-4 py-1 text-sm" : "px-6 py-2"
      } bg-[#6E4B2F] hover:bg-[#3F2410] text-white rounded-full transition-colors font-medium`}
      onClick={() => console.log("Added to cart:", product.name)}
    >
      {small ? "add" : "Add to Cart"}
    </motion.button>
  );
}
