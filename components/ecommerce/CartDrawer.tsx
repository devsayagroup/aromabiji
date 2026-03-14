// // "use client";

// // import { useCart } from "@/components/ecommerce/CartContext";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { X, ShoppingBag, Trash2 } from "lucide-react";
// // import { useState } from "react";
// // import Image from "next/image";

// // export default function CartDrawer() {
// //   const { cartItems, removeFromCart, clearCart } = useCart();
// //   const [open, setOpen] = useState(false);

// //   // Calculate totals based on the new CartItem structure
// //   const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
// //   const totalPrice = cartItems.reduce(
// //     (sum, item) => sum + (item.variant.price_idr * item.quantity), 
// //     0
// //   );

// //   const whatsappMessage = encodeURIComponent(
// //     `*Aroma Biji Order*\n` +
// //     `---------------------------\n` +
// //     cartItems
// //       .map(
// //         (item, index) =>
// //           `${index + 1}. ${item.product.name}\n` +
// //           `   • Variant: ${item.variant.type} (${item.variant.weight})\n` +
// //           `   • Qty: ${item.quantity}\n` +
// //           `   • Subtotal: Rp ${(item.variant.price_idr * item.quantity).toLocaleString("id-ID")}`
// //       )
// //       .join("\n\n") +
// //     `\n---------------------------\n` +
// //     `Total: Rp ${totalPrice.toLocaleString("id-ID")}\n\n` +
// //     `Please confirm my order. Thank you!`
// //   );

// //   return (
// //     <>
// //       {/* FLOATING TRIGGER */}
// //       <button
// //         onClick={() => setOpen(true)}
// //         className="fixed bottom-8 right-8 z-[99] bg-[#6B0F12] text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-all active:scale-95 group"
// //       >
// //         <ShoppingBag size={24} className="group-hover:rotate-12 transition-transform" />
// //         {totalItems > 0 && (
// //           <span className="absolute -top-1 -right-1 bg-white text-[#6B0F12] text-[10px] font-bold rounded-full h-6 w-6 flex items-center justify-center shadow-lg border border-[#6B0F12]/10">
// //             {totalItems}
// //           </span>
// //         )}
// //       </button>

// //       <AnimatePresence>
// //         {open && (
// //           <>
// //             {/* BACKDROP */}
// //             <motion.div
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               exit={{ opacity: 0 }}
// //               onClick={() => setOpen(false)}
// //               className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
// //             />

// //             {/* DRAWER */}
// //             <motion.div
// //               initial={{ x: "100%" }}
// //               animate={{ x: 0 }}
// //               exit={{ x: "100%" }}
// //               transition={{ type: "spring", damping: 25, stiffness: 200 }}
// //               className="fixed top-0 right-0 h-full w-full max-w-[400px] bg-white z-[101] shadow-[-20px_0_50px_rgba(0,0,0,0.1)] flex flex-col"
// //             >
// //               {/* HEADER */}
// //               <div className="flex justify-between items-center px-8 py-6 border-b border-black/5">
// //                 <div>
// //                   <h2 className="font-style text-3xl text-black tracking-tight">Your Collection</h2>
// //                   <p className="text-[10px] uppercase tracking-widest text-black/40 font-bold mt-1">
// //                     {totalItems} Items Selected
// //                   </p>
// //                 </div>
// //                 <button
// //                   onClick={() => setOpen(false)}
// //                   className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors"
// //                 >
// //                   <X size={20} />
// //                 </button>
// //               </div>

// //               {/* CART ITEMS LIST */}
// //               <div className="flex-1 overflow-y-auto px-8 py-6 custom-scrollbar">
// //                 {cartItems.length === 0 ? (
// //                   <div className="h-full flex flex-col items-center justify-center text-center opacity-30">
// //                     <ShoppingBag size={48} strokeWidth={1} />
// //                     <p className="mt-4 font-medium italic">The collection is currently empty.</p>
// //                   </div>
// //                 ) : (
// //                   <div className="space-y-8">
// //                     {cartItems.map((item) => (
// //                       <div key={item.variant.id} className="flex gap-4 group">
// //                         <div className="relative h-20 w-20 bg-[#f3f0e8] rounded-xl overflow-hidden flex-shrink-0">
// //                           <Image
// //                             src={item.variant.image ?? item.product.image ?? "/placeholder-coffee.png"}
// //                             alt={item.product.name}
// //                             fill
// //                             className="object-contain p-2"
// //                           />
// //                         </div>
                        
// //                         <div className="flex-1 flex flex-col justify-between py-1">
// //                           <div>
// //                             <div className="flex justify-between items-start">
// //                               <h3 className="text-sm font-bold uppercase tracking-tight leading-tight w-2/3">
// //                                 {item.product.name}
// //                               </h3>
// //                               <p className="text-sm font-medium">
// //                                 Rp {(item.variant.price_idr * item.quantity).toLocaleString("id-ID")}
// //                               </p>
// //                             </div>
// //                             <p className="text-[10px] text-black/40 uppercase tracking-widest font-bold mt-1">
// //                               {item.variant.type} • {item.variant.weight}
// //                             </p>
// //                           </div>

// //                           <div className="flex justify-between items-center mt-2">
// //                             <span className="text-xs font-medium text-black/60">Qty: {item.quantity}</span>
// //                             <button
// //                               onClick={() => removeFromCart(item.variant.id)}
// //                               className="text-black/20 hover:text-red-600 transition-colors"
// //                             >
// //                               <Trash2 size={14} />
// //                             </button>
// //                           </div>
// //                         </div>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 )}
// //               </div>

// //               {/* FOOTER */}
// //               {cartItems.length > 0 && (
// //                 <div className="p-8 bg-[#fcfcfc] border-t border-black/5">
// //                   <div className="flex justify-between items-end mb-6">
// //                     <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-black/40">Estimated Total</span>
// //                     <span className="text-2xl font-text">Rp {totalPrice.toLocaleString("id-ID")}</span>
// //                   </div>

// //                   <div className="space-y-3">
// //                     <a
// //                       href={`https://wa.me/6285210063606?text=${whatsappMessage}`}
// //                       target="_blank"
// //                       className="flex items-center justify-center w-full bg-[#6B0F12] text-white h-14 rounded-2xl font-bold text-[11px] uppercase tracking-widest hover:brightness-110 transition-all shadow-xl shadow-[#6B0F12]/10"
// //                     >
// //                       Complete Order via WhatsApp
// //                     </a>

// //                     <button
// //                       onClick={clearCart}
// //                       className="w-full text-[9px] uppercase tracking-widest font-bold text-black/30 hover:text-black transition-colors py-2"
// //                     >
// //                       Reset Collection
// //                     </button>
// //                   </div>
// //                 </div>
// //               )}
// //             </motion.div>
// //           </>
// //         )}
// //       </AnimatePresence>
// //     </>
// //   );
// // }


// "use client";

// import { useCart } from "@/components/ecommerce/CartContext";
// import { motion, AnimatePresence } from "framer-motion";
// import { X, ShoppingBag, Trash2, Plus, Minus } from "lucide-react";
// import { useState } from "react";
// import Image from "next/image";

// export default function CartDrawer() {
//   // Destructure addToCart to handle quantity updates
//   const { cartItems, removeFromCart, clearCart, addToCart } = useCart();
//   const [open, setOpen] = useState(false);

//   const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
//   const totalPrice = cartItems.reduce(
//     (sum, item) => sum + (item.variant.price_idr * item.quantity), 
//     0
//   );

//   // Helper to update quantity (+1 or -1)
//   const updateQuantity = (item: any, delta: number) => {
//     const newQty = item.quantity + delta;
//     if (newQty <= 0) {
//       removeFromCart(item.variant.id);
//     } else {
//       // Since addToCart in our logic adds TO the existing quantity, 
//       // passing delta (+1 or -1) updates it correctly.
//       addToCart(item.product, item.variant, delta);
//     }
//   };

//   const whatsappMessage = encodeURIComponent(
//     `*Aroma Biji Order*\n` +
//     `---------------------------\n` +
//     cartItems
//       .map(
//         (item, index) =>
//           `${index + 1}. ${item.product.name}\n` +
//           `   • Variant: ${item.variant.type} (${item.variant.weight})\n` +
//           `   • Qty: ${item.quantity}\n` +
//           `   • Subtotal: Rp ${(item.variant.price_idr * item.quantity).toLocaleString("id-ID")}`
//       )
//       .join("\n\n") +
//     `\n---------------------------\n` +
//     `Total: Rp ${totalPrice.toLocaleString("id-ID")}\n\n` +
//     `Please confirm my order. Thank you!`
//   );

//   return (
//     <>
//       {/* FLOATING TRIGGER */}
//       <button
//         onClick={() => setOpen(true)}
//         className="fixed bottom-8 right-8 z-[99] bg-[#6B0F12] text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-all active:scale-95 group"
//       >
//         <ShoppingBag size={24} className="group-hover:rotate-12 transition-transform" />
//         {totalItems > 0 && (
//           <span className="absolute -top-1 -right-1 bg-white text-[#6B0F12] text-[10px] font-bold rounded-full h-6 w-6 flex items-center justify-center shadow-lg border border-[#6B0F12]/10">
//             {totalItems}
//           </span>
//         )}
//       </button>

//       <AnimatePresence>
//         {open && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setOpen(false)}
//               className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
//             />

//             <motion.div
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "100%" }}
//               transition={{ type: "spring", damping: 25, stiffness: 200 }}
//               className="fixed top-0 right-0 h-full w-full max-w-[400px] bg-white z-[101] shadow-[-20px_0_50px_rgba(0,0,0,0.1)] flex flex-col"
//             >
//               {/* HEADER */}
//               <div className="flex justify-between items-center px-8 py-6 border-b border-black/5">
//                 <div>
//                   <h2 className="font-style text-3xl text-black tracking-tight">Your Collection</h2>
//                   <p className="text-[10px] uppercase tracking-widest text-black/40 font-bold mt-1">
//                     {totalItems} Items Total
//                   </p>
//                 </div>
//                 <button onClick={() => setOpen(false)} className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors">
//                   <X size={20} />
//                 </button>
//               </div>

//               {/* CART ITEMS LIST */}
//               <div className="flex-1 overflow-y-auto px-8 py-6 custom-scrollbar">
//                 {cartItems.length === 0 ? (
//                   <div className="h-full flex flex-col items-center justify-center text-center opacity-30 italic">
//                     <ShoppingBag size={48} strokeWidth={1} />
//                     <p className="mt-4">Empty collection</p>
//                   </div>
//                 ) : (
//                   <div className="space-y-10">
//                     {cartItems.map((item) => (
//                       <div key={item.variant.id} className="flex gap-4">
//                         {/* Image */}
//                         <div className="relative h-24 w-20 bg-[#f3f0e8] rounded-xl overflow-hidden flex-shrink-0">
//                           <Image
//                             src={item.variant.image ?? item.product.image ?? "/placeholder-coffee.png"}
//                             alt={item.product.name}
//                             fill
//                             className="object-contain p-2"
//                           />
//                         </div>
                        
//                         {/* Details */}
//                         <div className="flex-1 flex flex-col">
//                           <div className="flex justify-between items-start mb-1">
//                             <h3 className="text-xs font-bold uppercase tracking-tight w-2/3 leading-tight">
//                               {item.product.name}
//                             </h3>
//                             <button
//                               onClick={() => removeFromCart(item.variant.id)}
//                               className="text-black/20 hover:text-red-600 transition-colors"
//                             >
//                               <Trash2 size={14} />
//                             </button>
//                           </div>
//                           <p className="text-[10px] text-black/40 uppercase tracking-widest font-bold mb-3">
//                             {item.variant.type} • {item.variant.weight}
//                           </p>

//                           {/* NORMAL CART CONTROLS */}
//                           <div className="flex items-center justify-between mt-auto">
//                             <div className="flex items-center border border-black/10 rounded-lg overflow-hidden bg-white h-8">
//                               <button 
//                                 onClick={() => updateQuantity(item, -1)}
//                                 className="w-8 h-full flex items-center justify-center hover:bg-black/5 transition-colors"
//                               >
//                                 <Minus size={10} />
//                               </button>
//                               <span className="w-8 text-center text-[11px] font-bold tabular-nums">
//                                 {item.quantity}
//                               </span>
//                               <button 
//                                 onClick={() => updateQuantity(item, 1)}
//                                 className="w-8 h-full flex items-center justify-center hover:bg-black/5 transition-colors"
//                               >
//                                 <Plus size={10} />
//                               </button>
//                             </div>
                            
//                             <p className="text-sm font-bold">
//                               Rp {(item.variant.price_idr * item.quantity).toLocaleString("id-ID")}
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* FOOTER */}
//               {cartItems.length > 0 && (
//                 <div className="p-8 bg-[#fcfcfc] border-t border-black/5">
//                   <div className="flex justify-between items-end mb-6">
//                     <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-black/40">Grand Total</span>
//                     <span className="text-xl font-bold font-text">Rp {totalPrice.toLocaleString("id-ID")}</span>
//                   </div>

//                   <div className="space-y-3">
//                     <a
//                       href={`https://wa.me/6282221871409?text=${whatsappMessage}`}
//                       target="_blank"
//                       className="flex items-center justify-center w-full bg-[#6B0F12] text-white h-14 rounded-2xl font-bold text-[11px] uppercase tracking-widest hover:brightness-110 transition-all shadow-xl shadow-[#6B0F12]/10"
//                     >
//                       Checkout via WhatsApp
//                     </a>
//                     <button
//                       onClick={clearCart}
//                       className="w-full text-[9px] uppercase tracking-widest font-bold text-black/30 hover:text-black py-2"
//                     >
//                       Clear All
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }


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

  const whatsappMessage = encodeURIComponent(
    `*Aroma Biji Collection Inquiry*\n` +
    `---------------------------\n` +
    cartItems
      .map(
        (item, index) =>
          `${index + 1}. ${item.product.name}\n` +
          `   • Variant: ${item.variant.type} (${item.variant.weight})\n` +
          `   • Quantity: ${item.quantity}`
      )
      .join("\n\n") +
    `\n---------------------------\n` +
    `Please let me know the availability for this collection. Thank you!`
  );

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-8 right-8 z-[99] bg-[#6B0F12] text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-all active:scale-95 group"
      >
        <ShoppingBag size={24} className="group-hover:rotate-12 transition-transform" />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-white text-[#6B0F12] text-[10px] font-bold rounded-full h-6 w-6 flex items-center justify-center shadow-lg border border-[#6B0F12]/10">
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
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-[400px] bg-white z-[101] flex flex-col"
            >
              {/* HEADER */}
              <div className="flex justify-between items-center px-8 py-6 border-b border-black/5">
                <div>
                  <h2 className="font-style text-3xl text-black tracking-tight">Your Collection</h2>
                  <p className="text-[10px] uppercase tracking-widest text-black/40 font-bold mt-1">
                    {totalItems} Selected Items
                  </p>
                </div>
                <button onClick={() => setOpen(false)} className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-black/5">
                  <X size={20} />
                </button>
              </div>

              {/* ITEMS LIST */}
              <div className="flex-1 overflow-y-auto px-8 py-6">
                {cartItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-30 italic">
                    <ShoppingBag size={48} strokeWidth={1} />
                    <p className="mt-4 font-text">Collection is empty</p>
                  </div>
                ) : (
                  <div className="space-y-10">
                    {cartItems.map((item) => (
                      <div key={item.variant.id} className="flex gap-4">
                        <div className="relative h-24 w-20 bg-[#f3f0e8] rounded-xl flex-shrink-0">
                          <Image
                            src={item.variant.image ?? item.product.image ?? "/placeholder-coffee.png"}
                            alt={item.product.name}
                            fill
                            className="object-contain p-2"
                          />
                        </div>
                        
                        <div className="flex-1 flex flex-col justify-center">
                          <div className="flex justify-between items-start mb-1">
                            <h3 className="text-xs font-bold uppercase tracking-tight leading-tight">
                              {item.product.name}
                            </h3>
                            <button onClick={() => removeFromCart(item.variant.id)} className="text-black/20 hover:text-red-600">
                              <Trash2 size={14} />
                            </button>
                          </div>
                          <p className="text-[10px] text-black/40 uppercase tracking-widest font-bold mb-4">
                            {item.variant.type} • {item.variant.weight}
                          </p>

                          <div className="flex items-center border border-black/10 rounded-lg overflow-hidden bg-white h-8 w-24">
                            <button onClick={() => updateQuantity(item, -1)} className="w-8 h-full flex items-center justify-center hover:bg-black/5">
                              <Minus size={10} />
                            </button>
                            <span className="flex-1 text-center text-[11px] font-bold tabular-nums">
                              {item.quantity}
                            </span>
                            <button onClick={() => updateQuantity(item, 1)} className="w-8 h-full flex items-center justify-center hover:bg-black/5">
                              <Plus size={10} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* FOOTER */}
              {cartItems.length > 0 && (
                <div className="p-8 bg-[#fcfcfc] border-t border-black/5">
                  <a
                    href={`https://wa.me/6282221871409?text=${whatsappMessage}`}
                    target="_blank"
                    className="flex items-center justify-center w-full bg-[#6B0F12] text-white h-14 rounded-2xl font-bold text-[11px] uppercase tracking-widest hover:brightness-110 transition-all shadow-xl shadow-[#6B0F12]/10"
                  >
                    Inquire via WhatsApp
                  </a>
                  <button
                    onClick={clearCart}
                    className="w-full text-[9px] uppercase tracking-widest font-bold text-black/30 hover:text-black mt-4"
                  >
                    Clear All
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