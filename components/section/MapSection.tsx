"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";
import { motion, AnimatePresence } from "framer-motion";
import { MdLocationPin } from "react-icons/md";
import { X, ArrowRight } from "lucide-react";

const PIN_CONFIG: Record<string, { top: string; left: string }> = {
  "aceh-gayo": { top: "22%", left: "8%" },
  "mandailing": { top: "35%", left: "12.5%" },
  "lintong-nihuta": { top: "27%", left: "11.4%" },
  "alur-badak": { top: "53%", left: "21%" },
  "java-preanger": { top: "68%", left: "28%" },
  "andung-sari": { top: "47%", left: "17.4%" },
  "lampung": { top: "60%", left: "24%" },
  "toraja": { top: "53%", left: "54%" },
  "collections": { top: "10%", left: "85%" },
};

export default function MapSection() {
  const [activeProductId, setActiveProductId] = useState<string | null>(null);

  const activeProduct = products.find((p) => p.id === activeProductId);

  useEffect(() => {
    document.body.style.overflow = activeProductId ? "hidden" : "";
  }, [activeProductId]);

  return (
    <div className="relative w-full min-h-screen bg-[#FEFEFE] py-32 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
            <section className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 md:px-10">
                    <div className="text-center">
                        <div className="mb-4 flex items-center justify-center gap-3">
                        <span className="h-px w-10 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
                        <span className="text-[11px] tracking-[0.35em] uppercase text-black/55">
                            Heritage & Terroir
                        </span>
                        <span className="h-px w-10 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
                        </div>

                        <h1 className="text-3xl md:text-5xl font-style uppercase tracking-wider text-black">
                        The Archipelago Map
                        </h1>
                    </div>
                </div>
            </section>

            <div className="relative w-full aspect-[2/1] md:aspect-[2/1] bg-black  overflow-hidden">
                <Image
                    src="/images/indonesia-map.png" 
                    alt="Indonesia Coffee Map"
                    fill
                    priority
                    className="object-cover object-center scale-100 md:scale-100" 
                />
                <div className="absolute inset-0 pointer-events-none" />
                {products.map((product) => {
                    const pos = PIN_CONFIG[product.id] || { top: "50%", left: "50%" };
                    return (
                    <div
                        key={product.id}
                        style={{ top: pos.top, left: pos.left }}
                        className="absolute -translate-x-1/2 -translate-y-1/2 group z-10"
                    >
                        <div className="absolute bottom-8 mb-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none ">
                            <div className="bg-stone-900 text-white text-[10px] md:text-xs py-1.5 px-3 rounded-full shadow-xl whitespace-nowrap z-99">
                                {product.name}
                            </div>
                        </div>
                        <button
                            onClick={() => setActiveProductId(product.id)}
                            className="relative flex items-center justify-center w-8 h-8 md:w-12 md:h-12"
                            >
                            <MdLocationPin className="relative w-3 h-3 md:w-6 md:h-6 text-brown border-white group-hover:scale-125 transition-transform"/>
                        </button>
                    </div>
                    );
                })}
            </div>
        </div>

        <AnimatePresence>
            {activeProduct && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-xl transition-all"
            >
                <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                className="bg-white w-full max-w-5xl rounded-2xl md:rounded-[20px] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] border border-black/5"
                >
                <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                    <Image 
                    src={activeProduct.bg || activeProduct.image} 
                    alt={activeProduct.name} 
                    fill 
                    className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-10">
                    <div>
                        <span className="text-[#F3F0E8] text-[10px] font-bold uppercase tracking-[0.4em] mb-2 block">{activeProduct.origin}</span>
                        <h2 className="text-4xl font-style text-white uppercase leading-none">{activeProduct.name}</h2>
                    </div>
                    </div>
                    <button 
                    onClick={() => setActiveProductId(null)}
                    className="absolute top-6 left-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/40 transition-all"
                    >
                    <X size={20} />
                    </button>
                </div>
                <div className="w-full md:w-1/2 p-8 md:p-14 flex flex-col overflow-y-auto custom-scrollbar">
                    <h3 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-4">Available Variants</h3>
                    <div className="space-y-3">
                        {activeProduct.variants.map((v) => (
                            <div key={v.id} className="group flex items-center gap-4 p-3 rounded-2xl border border-stone-100 hover:border-amber-200 hover:bg-amber-50/30 transition-all">
                                <div className="relative w-14 h-14 bg-stone-50 rounded-lg overflow-hidden flex-shrink-0">
                                    <Image src={v.image} alt={v.type} fill className="object-contain p-1" />
                                </div>
                                <div className="flex-1">
                                    <p className="font-bold text-stone-800 text-sm leading-tight">{v.type}</p>
                                    <p className="text-[11px] text-stone-400 uppercase mt-0.5"> {v.weight}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-amber-900 font-bold text-sm">Rp {v.price_idr.toLocaleString('id-ID')}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-10 flex flex-col gap-3">
                    <Link
                        href={`/product/${activeProduct.id}`}
                        className="w-full bg-[#6B0F12] text-white font-bold text-[11px] uppercase tracking-[0.2em] py-5 rounded-2xl hover:brightness-110 transition-all flex items-center justify-center gap-3 shadow-xl shadow-[#6B0F12]/20"
                    >
                        View Origin Details <ArrowRight size={14} />
                    </Link>
                    <button
                        onClick={() => setActiveProductId(null)}
                        className="w-full text-black/40 font-bold text-[9px] uppercase tracking-widest py-2 hover:text-black transition-colors"
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