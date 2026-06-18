"use client";

import { useCart } from "@/components/ecommerce/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Trash2, Plus, Minus } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function CartDrawer() {
  const { cartItems, removeFromCart, clearCart, addToCart } = useCart();
  const [open, setOpen] = useState(false);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const updateQuantity = (item: any, delta: number) => {
    const newQty = item.quantity + delta;
    if (newQty <= 0) {
      removeFromCart(item.variant.id);
    } else {
      addToCart(item.product, item.variant, delta);
    }
  };

  // ─── SEPARATE ITEMS BY CATEGORY ──────────────────────────────────────────
  const coffeeItems = cartItems.filter((item) => item.product.category === "coffee");
  const chocolateItems = cartItems.filter((item) => item.product.category === "chocolate");

  // ─── FORMAT WHATSAPP MESSAGE ─────────────────────────────────────────────
  let msg = `*Aroma Biji Collection Inquiry*\n---------------------------\n\n`;
  
  if (coffeeItems.length > 0) {
    msg += `*COFFEE COLLECTION*\n`;
    msg += coffeeItems.map((item, index) => 
      `${index + 1}. ${item.product.name}\n   • Variant: ${item.variant.type} (${item.variant.weight})\n   • Quantity: ${item.quantity}`
    ).join("\n\n");
    msg += `\n\n`;
  }

  if (chocolateItems.length > 0) {
    msg += `*CHOCOLATE EDITIONS*\n`;
    msg += chocolateItems.map((item, index) => 
      `${index + 1}. ${item.product.name}\n   • Variant: ${item.variant.type} (${item.variant.weight})\n   • Quantity: ${item.quantity}`
    ).join("\n\n");
    msg += `\n\n`;
  }

  msg += `---------------------------\nPlease let me know the availability for this collection. Thank you!`;
  
  const whatsappMessage = encodeURIComponent(msg);

  return (
    <>
      {/* ─── FLOATING CART BUTTON ─────────────────────────────────────────── */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-8 right-8 z-[99] bg-ink text-canvas p-4 md:p-5 rounded-full shadow-[0_8px_30px_rgba(42,31,29,0.3)] hover:scale-105 transition-all active:scale-95 group"
      >
        <ShoppingBag size={22} className="group-hover:rotate-12 transition-transform duration-300" />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-canvas text-ink text-[10px] font-bold rounded-full h-6 w-6 flex items-center justify-center shadow-lg border border-ink/10">
            {totalItems}
          </span>
        )}
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-ink/40 backdrop-blur-md z-[100]"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-[420px] bg-canvas z-[101] flex flex-col shadow-2xl font-text"
            >
              {/* HEADER */}
              <div className="flex justify-between items-center px-8 py-6 border-b border-muted/10">
                <div>
                  <h2 className="font-style text-3xl text-ink tracking-tight">Your Cart</h2>
                  <p className="text-[9px] uppercase tracking-[0.25em] text-pantone/60 font-medium mt-1">
                    {totalItems} Selected Items
                  </p>
                </div>
                <button onClick={() => setOpen(false)} className="h-10 w-10 flex items-center justify-center rounded-full text-ink hover:bg-muted/20 transition-colors">
                  <X size={20} strokeWidth={1.5} />
                </button>
              </div>

              {/* ITEMS LIST */}
              <div className="flex-1 overflow-y-auto px-8 py-8 custom-scrollbar">
                {cartItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                    <ShoppingBag size={42} strokeWidth={1} className="text-pantone mb-4" />
                    <p className="font-text text-sm font-light text-ink tracking-wide">Your collection is empty.</p>
                  </div>
                ) : (
                  <div className="space-y-10">
                    
                    {/* Render Coffee Items */}
                    {coffeeItems.length > 0 && (
                      <div className="space-y-6">
                        <h3 className="text-[10px] font-semibold text-pantone/60 uppercase tracking-[0.25em] border-b border-muted/10 pb-2">
                          Coffee Collection
                        </h3>
                        {coffeeItems.map((item) => (
                          <CartItemCard key={item.variant.id} item={item} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
                        ))}
                      </div>
                    )}

                    {/* Render Chocolate Items */}
                    {chocolateItems.length > 0 && (
                      <div className="space-y-6">
                        <h3 className="text-[10px] font-semibold text-pantone/60 uppercase tracking-[0.25em] border-b border-muted/10 pb-2">
                          Chocolate Editions
                        </h3>
                        {chocolateItems.map((item) => (
                          <CartItemCard key={item.variant.id} item={item} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
                        ))}
                      </div>
                    )}

                  </div>
                )}
              </div>

              {/* FOOTER */}
              {cartItems.length > 0 && (
                <div className="p-8 bg-canvas border-t border-muted/10">
                  <a
                    href={`https://wa.me/6282221871409?text=${whatsappMessage}`}
                    target="_blank"
                    className="flex items-center justify-center w-full bg-ink text-canvas h-14 rounded-full font-medium text-[11px] uppercase tracking-[0.2em] hover:bg-pantone transition-colors shadow-[0_8px_20px_rgba(42,31,29,0.15)]"
                  >
                    Inquire via WhatsApp
                  </a>
                  <button
                    onClick={clearCart}
                    className="w-full text-[9px] uppercase tracking-[0.25em] font-medium text-pantone/50 hover:text-ink mt-5 transition-colors"
                  >
                    Clear Cart
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

// ─── HELPER COMPONENT FOR CLEANER CODE ───────────────────────────────────────
function CartItemCard({ item, removeFromCart, updateQuantity }: { item: any, removeFromCart: any, updateQuantity: any }) {
  return (
    <div className="flex gap-5 group">
      <div className="relative h-24 w-20 bg-white border border-muted/10 rounded-xl flex-shrink-0 shadow-sm">
        <Image
          src={item.variant.image ?? item.product.image ?? "/placeholder.png"}
          alt={item.product.name}
          fill
          className="object-contain p-2 drop-shadow-sm"
        />
      </div>
      
      <div className="flex-1 flex flex-col justify-center">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-sm font-medium text-ink tracking-tight leading-tight">
            {item.product.name}
          </h3>
          <button onClick={() => removeFromCart(item.variant.id)} className="text-pantone/40 hover:text-red-900 transition-colors">
            <Trash2 size={14} />
          </button>
        </div>
        <p className="text-[10px] text-pantone/80 uppercase tracking-widest font-medium mb-4">
          {item.variant.type} • {item.variant.weight}
        </p>

        <div className="flex items-center border border-muted/20 rounded-full overflow-hidden bg-white h-8 w-24 shadow-sm">
          <button onClick={() => updateQuantity(item, -1)} className="w-8 h-full flex items-center justify-center hover:bg-muted/20 text-ink transition-colors">
            <Minus size={10} strokeWidth={2} />
          </button>
          <span className="flex-1 text-center text-[11px] font-medium tabular-nums text-ink">
            {item.quantity}
          </span>
          <button onClick={() => updateQuantity(item, 1)} className="w-8 h-full flex items-center justify-center hover:bg-muted/20 text-ink transition-colors">
            <Plus size={10} strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  );
}