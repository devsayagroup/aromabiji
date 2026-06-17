"use client";

import { motion, useReducedMotion } from "framer-motion";
import { products } from "@/lib/products";
import { Product } from "@/types/product";
import Link from "next/link";
import Image from "next/image";
import { getThemeTokens } from "@/lib/theme-tokens";
import { trackEvent } from "@/lib/analytics";

export default function ProductPage() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="bg-white px-6">
      <section className="relative overflow-hidden pt-28 md:pt-32 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
              <span className="text-[11px] tracking-[0.35em] uppercase text-black/55">
                Collection
              </span>
              <span className="h-px w-10 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
            </div>
            <h1 className="text-3xl md:text-5xl font-style uppercase tracking-wider text-black">
              Aroma Biji Collection
            </h1>
            <p className="text-black/60 mt-4 max-w-2xl mx-auto md:text-lg font-text leading-relaxed">
              Discover Indonesia’s finest specialty coffees. Curated by origin, crafted with heritage.
            </p>
          </div>
        </div>
      </section>

      <section id="list" className="max-w-7xl mx-auto pb-28">
        <div className="grid grid-cols-1 gap-8 md:gap-10">
          {(products as Product[]).map((coffee, idx) => {
            const t = getThemeTokens(coffee.theme);

            return (
              <motion.div
                key={coffee.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                viewport={{ once: true, margin: "-80px" }}
              >
                <Link
                  href={`/coffee/${coffee.id}`}
                  onClick={() => {
                    trackEvent("select_item", {
                      item_list_id: "aroma_biji_collection",
                      item_list_name: "Aroma Biji Collection",
                      placement: "product_grid",
                      to: `/product/${coffee.id}`,
                      items: [
                        {
                          item_id: coffee.id,
                          item_name: coffee.name,
                          item_brand: "Aroma Biji",
                          item_category: "Coffee",
                          item_variant: coffee.variants?.[0]?.id,
                          origin: coffee.origin,
                          theme: coffee.theme,
                        },
                      ],
                    });
                  }}
                  className="group relative block w-full aspect-[16/9] md:aspect-[21/7] overflow-hidden rounded-[32px] bg-neutral-100"
                >
                  {coffee.bg && (
                    <Image
                      src={coffee.bg}
                      alt={coffee.name}
                      fill
                      className="object-cover"
                      priority={idx < 2}
                    />
                  )}
                  
                  {/* DYNAMIC GRADIENT BASED ON THEME (Optional - adjust opacity based on theme lightness) */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent`} />

                  {/* CONTENT LAYOUT */}
                  <div className="relative h-full w-full flex items-center px-8 md:px-20">
                    <div className="max-w-xl">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`text-[10px] tracking-[0.4em] uppercase font-bold ${t.meta}`}>
                          {coffee.origin}
                        </span>
                        <span className={`h-px w-8 ${t.line || 'bg-white/30'}`} />
                      </div>

                      <h2 className={`text-3xl md:text-5xl font-style uppercase tracking-tight mb-4 ${t.title}`}>
                        {coffee.name}
                      </h2>

                      <p className={`text-sm md:text-base leading-relaxed mb-6 font-text line-clamp-2 max-w-md ${t.body}`}>
                        {coffee.description}
                      </p>

                      <div className="inline-flex items-center gap-2 group/cta">
                        <span className={`text-[10px] font-bold uppercase tracking-[0.4em] ${t.meta}`}>
                          Explore Origin
                        </span>
                        <div className={`w-9 h-9 flex items-center justify-center transition-all duration-300 ${t.meta}`}>
                           <span className="text-base">↗</span>
                        </div>
                      </div>
                    </div>

                    {/* 1. REDUCED HEIGHT VARIANT IMAGE */}
                    <div className="hidden lg:flex flex-1 justify-end items-center pr-10">
                       <motion.div 
                        whileHover={{ y: -8 }}
                        className="relative w-[350px] h-[350px] drop-shadow-[0_20px_20px_rgba(0,0,0,0.3)]"
                       >
                         <Image 
                          src={coffee.variants?.[0]?.image ?? coffee.image} 
                          alt={coffee.name}
                          fill
                          className="object-contain"
                         />
                       </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>
    </main>
  );
}