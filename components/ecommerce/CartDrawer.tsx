"use client";

import { useCart } from "@/components/ecommerce/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function CartDrawer() {
  const { cart, removeFromCart, clearCart, totalPrice } = useCart();
  const [open, setOpen] = useState(false);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const whatsappMessage = encodeURIComponent(
    `🛍️ *Aroma Biji Order*%0A%0A${cart
      .map(
        (item) =>
          `• ${item.name} — ${item.variant.weight} x ${item.quantity} = Rp ${(item.price_idr *
            item.quantity).toLocaleString("id-ID")}`
      )
      .join("%0A")}%0A%0A*Total:* Rp ${totalPrice.toLocaleString(
      "id-ID"
    )}%0A%0A📍 Please confirm my order.`
  );

  return (
    <>
      {/* Floating cart icon */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-8 right-8 z-50 bg-[#3F2410] text-white p-4 rounded-full shadow-lg hover:bg-[#6E4B2F] transition-all"
      >
        <ShoppingBag size={20} />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-[#E2C097] text-[#3F2410] text-xs font-semibold rounded-full px-2 py-[2px] shadow">
            {totalItems}
          </span>
        )}
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-80 md:w-96 bg-[#F9F6F3] shadow-2xl z-50 flex flex-col"
            >
              <div className="flex justify-between items-center px-6 py-4 border-b border-[#E5D8C5]">
                <h2 className="font-serif text-2xl text-[#3F2410]">Your Cart</h2>
                <button
                  onClick={() => setOpen(false)}
                  className="text-[#3F2410]/70 hover:text-[#3F2410]"
                >
                  <X size={22} />
                </button>
              </div>

              {/* CART ITEMS */}
              <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                {cart.length === 0 ? (
                  <p className="text-center text-gray-500 mt-10">
                    Your cart is empty.
                  </p>
                ) : (
                  cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-center border-b pb-3"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-14 h-14 object-cover rounded-lg"
                        />
                        <div>
                          <p className="text-sm font-medium text-[#3F2410]">
                            {item.name}
                          </p>
                          <p className="text-xs text-[#8B6F56]">
                            {item.variant.weight} × {item.quantity}
                          </p>
                        </div>
                      </div>

                      <div className="text-right">
                        <p className="text-sm font-semibold text-[#3F2410]">
                          Rp {(item.price_idr * item.quantity).toLocaleString(
                            "id-ID"
                          )}
                        </p>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-xs text-red-500 hover:underline mt-1"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* FOOTER */}
              {cart.length > 0 && (
                <div className="border-t border-[#E5D8C5] p-6 space-y-4">
                  <div className="flex justify-between text-[#3F2410] font-medium">
                    <span>Total:</span>
                    <span>Rp {totalPrice.toLocaleString("id-ID")}</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <a
                      href={`https://wa.me/6281234567890?text=${whatsappMessage}`}
                      target="_blank"
                      className="w-full bg-[#3F2410] text-white py-2 rounded-full text-center font-medium hover:bg-[#6E4B2F] transition-all"
                    >
                      Proceed to Checkout
                    </a>

                    <button
                      onClick={clearCart}
                      className="w-full text-sm text-[#8B6F56] hover:text-[#3F2410]"
                    >
                      Clear Cart
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
