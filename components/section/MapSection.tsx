"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

const PIN_CONFIG: Record<string, { top: string; left: string }> = {
  "aceh-gayo": { top: "12%", left: "3%" },
  "lintong-nihuta": { top: "24%", left: "9%" },
  "mandailing": { top: "33%", left: "9%" },
  "andung-sari": { top: "51%", left: "15%" },
  "alur-badak": { top: "53%", left: "21%" },
  "lampung": { top: "65%", left: "22%" },
  "java-preanger": { top: "76%", left: "27%" },
  "the-java": { top: "78%", left: "32%" },
  "toraja": { top: "53%", left: "54%" },
  "collections": { top: "80%", left: "15%" },
};

export default function MapSection() {
  const [activeProductId, setActiveProductId] = useState<string | null>(null);

  const activeProduct = products.find((p) => p.id === activeProductId);

  useEffect(() => {
    document.body.style.overflow = activeProductId ? "hidden" : "";
  }, [activeProductId]);

  return (
    <div className="relative w-full min-h-[60vh] md:min-h-screen bg-canvas py-32 px-4 md:px-10 font-text">
        <div className="max-w-7xl mx-auto">
            <section className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 md:px-10">
                    <div className="text-center">
                        <div className="mb-4 flex items-center justify-center gap-3">
                        <span className="text-[11px] tracking-[0.4em] uppercase text-pantone/60 font-medium">
                            Heritage & Terroir
                        </span>
                        </div>

                        <h1 className="text-3xl md:text-6xl font-style uppercase tracking-wider text-pantone">
                        The Archipelago Map
                        </h1>
                    </div>
                </div>
            </section>

            {/* ─── SCROLLABLE MOBILE WRAPPER ──────────────────────────────────
                Allows the map to remain large and readable on mobile phones by 
                letting the user swipe left/right to explore the archipelago. */}
            <div className="w-full mt-12 md:mt-20 overflow-x-auto md:overflow-visible pb-10 hide-scrollbar">
                
                {/* ─── THE LOCKED BOX ───────────────────────────────────────────
                    We force the minimum width to 800px on mobile so it doesn't shrink.
                    The aspect ratio is strictly locked to 2.5/1 across ALL devices. */}
                <div className="relative min-w-[800px] md:min-w-full w-full aspect-[2.5/1] overflow-visible mx-auto">
                    
                    {/* ─── MAP LAYER ────────────────────────────────────────── */}
                    <div 
                        className="absolute inset-0 bg-pantone drop-shadow-[0_10px_20px_rgba(42,31,29,0.08)]"
                        style={{
                            WebkitMaskImage: 'url(/misc/indonesia.svg)',
                            WebkitMaskPosition: 'center',
                            WebkitMaskRepeat: 'no-repeat',
                            // FIX: Changed from 'contain' to '100% 100%' so the 
                            // SVG stretches to perfectly fit our locked container bounds
                            WebkitMaskSize: '100% 100%', 
                            maskImage: 'url(/misc/indonesia.svg)',
                            maskPosition: 'center',
                            maskRepeat: 'no-repeat',
                            maskSize: '100% 100%' 
                        }}
                    />
                    
                    {/* ─── PINS CONTAINER ───────────────────────────────────── */}
                    <div className="absolute inset-0 pointer-events-none">
                      {products.map((product) => {
                          const pos = PIN_CONFIG[product.id] || { top: "50%", left: "50%" };
                          return (
                          <div
                              key={product.id}
                              style={{ top: pos.top, left: pos.left }}
                              className="absolute -translate-x-1/2 -translate-y-1/2 group z-10 hover:z-50 pointer-events-auto"
                          >
                              <div className="absolute bottom-8 mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50">
                                  <div className="bg-ink text-canvas text-[10px] md:text-xs py-2 px-4 rounded-full shadow-[0_8px_16px_rgba(42,31,29,0.15)] whitespace-nowrap tracking-wider">
                                      {product.name}
                                  </div>
                              </div>
                              
                              <button
                                  onClick={() => setActiveProductId(product.id)}
                                  className="relative z-10 flex items-center justify-center w-8 h-8 md:w-10 md:h-10"
                                  aria-label={`View ${product.name}`}
                              >
                                  <div className="relative flex items-center justify-center w-4 h-4 md:w-5 md:h-5 group-hover:scale-125 transition-transform duration-300">
                                      <div className="absolute w-full h-full bg-pantone border-[1.5px] border-canvas rounded-full rounded-br-none -rotate-315 shadow-[0_4px_8px_rgba(42,31,29,0.3)]" />
                                      <div className="absolute w-1 h-1 md:w-1.5 md:h-1.5 bg-canvas rounded-full shadow-inner" />
                                  </div>
                              </button>
                          </div>
                          );
                      })}
                    </div>
                </div>
            </div>
        </div>

        <AnimatePresence>
            {activeProduct && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-ink/20 transition-all"
            >
                <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                className="bg-canvas w-full max-w-5xl rounded-2xl md:rounded-[24px] overflow-hidden shadow-[0_40px_80px_rgba(42,31,29,0.2)] flex flex-col md:flex-row max-h-[90vh] border border-muted/30"
                >
                <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                    <Image 
                    src={activeProduct.bg || activeProduct.image} 
                    alt={activeProduct.name} 
                    fill 
                    className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2A1F1D]/90 via-[#2A1F1D]/40 to-transparent flex items-end p-10">
                    <div>
                        <span className="text-canvas/70 text-[10px] font-medium uppercase tracking-[0.4em] mb-2 block">{activeProduct.origin}</span>
                        <h2 className="text-4xl md:text-5xl font-style text-canvas uppercase leading-none">{activeProduct.name}</h2>
                    </div>
                    </div>
                    <button 
                    onClick={() => setActiveProductId(null)}
                    className="absolute top-6 left-6 w-10 h-10 rounded-full bg-canvas/20 backdrop-blur-md text-canvas flex items-center justify-center hover:bg-canvas/40 transition-all"
                    >
                    <X size={20} strokeWidth={1.5} />
                    </button>
                </div>
                
                <div className="w-full md:w-1/2 p-8 md:p-14 flex flex-col overflow-y-auto custom-scrollbar bg-canvas">
                    <h3 className="text-[10px] font-semibold text-pantone/60 uppercase tracking-widest mb-6">Available Variants</h3>
                    <div className="space-y-3">
                        {activeProduct.variants.map((v) => (
                            <div key={v.id} className="group flex items-center gap-4 p-3 rounded-2xl border border-muted/40 hover:border-pantone/40 hover:bg-pantone/5 transition-all">
                                <div className="relative w-14 h-14 bg-white/50 rounded-lg overflow-hidden flex-shrink-0">
                                    <Image src={v.image} alt={v.type} fill className="object-contain p-1 drop-shadow-sm" />
                                </div>
                                <div className="flex-1">
                                    <p className="font-medium text-ink text-sm leading-tight">{v.type}</p>
                                    <p className="text-[10px] tracking-wider text-pantone/60 uppercase mt-1"> {v.weight}</p>
                                </div>
                                {/* <div className="text-right">
                                    <p className="text-pantone font-medium text-sm">Rp {v.price_idr.toLocaleString('id-ID')}</p>
                                </div> */}
                            </div>
                        ))}
                    </div>
                    <div className="mt-auto pt-10 flex flex-col gap-4">
                    <Link
                        href={`/product/${activeProduct.id}`}
                        className="w-full bg-ink text-canvas font-medium text-[11px] uppercase tracking-[0.2em] py-5 rounded-full hover:bg-pantone transition-all flex items-center justify-center gap-3 shadow-[0_8px_20px_rgba(42,31,29,0.15)]"
                    >
                        View Origin Details <ArrowRight size={16} strokeWidth={1.5} />
                    </Link>
                    <button
                        onClick={() => setActiveProductId(null)}
                        className="w-full text-pantone/50 font-medium text-[10px] uppercase tracking-[0.25em] py-2 hover:text-ink transition-colors"
                    >
                        Back to Map
                    </button>
                    </div>
                </div>
                </motion.div>
            </motion.div>
            )}
        </AnimatePresence>
    </div>
  );
}