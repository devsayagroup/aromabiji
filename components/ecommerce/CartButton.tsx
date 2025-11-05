"use client";

import Link from "next/link";
import { useCart } from "@/components/ecommerce/CartContext";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";

export default function CartButton() {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="relative"
    >
      <Link
        href="/cart"
        className="flex items-center justify-center bg-[#3F2410] text-white p-3 rounded-full shadow-md hover:bg-[#6E4B2F] transition-all"
      >
        <ShoppingBag size={20} />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-[#E2C097] text-[#3F2410] text-xs font-semibold rounded-full px-2 py-[2px] shadow">
            {totalItems}
          </span>
        )}
      </Link>
    </motion.div>
  );
}
