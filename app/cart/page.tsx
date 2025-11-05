"use client";

import { useCart } from "@/components/ecommerce/CartContext";
import { motion } from "framer-motion";

export default function CartPage() {
  const { cart, removeFromCart, clearCart, totalPrice } = useCart();

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl md:text-4xl font-style text-[#3F2410] mb-8">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-6">
            {cart.map((item) => (
              <motion.div
                key={item.id}
                className="flex items-center justify-between border-b pb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-semibold text-[#3F2410]">{item.name}</h3>
                    <p className="text-sm text-gray-500">x{item.quantity}</p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-medium text-[#3F2410]">
                    Rp {(item.price_idr * item.quantity).toLocaleString("id-ID")}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-sm text-red-600 hover:underline mt-1"
                  >
                    Remove
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex justify-between items-center border-t pt-6">
            <p className="text-lg font-semibold text-[#3F2410]">
              Total: Rp {totalPrice.toLocaleString("id-ID")}
            </p>
            <button
              onClick={clearCart}
              className="bg-[#3F2410] text-white px-6 py-2 rounded-full hover:bg-[#6E4B2F] transition"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </section>
  );
}
