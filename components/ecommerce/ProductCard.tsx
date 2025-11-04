"use client";

import { Product } from "@/types/product";
import Link from "next/link";
import { motion } from "framer-motion";
import AddToCartButton from "./AddToCartButton";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 180, damping: 16 }}
      className="group relative bg-white/95 backdrop-blur-md rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(63,36,16,0.08)] hover:shadow-[0_20px_50px_rgba(63,36,16,0.12)] transition-all duration-500"
    >
      <Link href={`/product/${product.slug}`} className="block overflow-hidden">
        {/* <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        /> */}

      <div className="p-6 space-y-2">
        <div>
          <h3 className="font-style text-2xl font-semibold text-[#3F2410] tracking-tight group-hover:text-[#5c3b1d] transition-colors">
            {product.name}
          </h3>
          <p className="font-text text-sm text-[#8B6F56] mt-1">{product.origin}</p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex flex-col">
            <span className="text-xs text-[#A98B70]">{product.weight}</span>
            <span className="text-lg font-medium text-[#3F2410]">
              Rp {product.price_idr?.toLocaleString("id-ID") || "–"}
            </span>
          </div>

          <motion.div whileTap={{ scale: 0.95 }}>
            <AddToCartButton product={product} small />
          </motion.div>
        </div>
      </div>

      {/* Subtle gradient accent line (coffee tones) */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#5C3B1D]/80 via-[#B58A5C]/60 to-[#7C4E1D]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        layoutId="hoverLine"
      />
      </Link>

    </motion.div>
  );
}
