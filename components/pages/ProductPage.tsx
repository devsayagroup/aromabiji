"use client";

import { motion, useReducedMotion } from "framer-motion";
import { products } from "@/lib/products";
import { Product } from "@/types/product";
import Link from "next/link";
import Image from "next/image";
import { getThemeTokens } from "@/lib/theme-tokens";

export default function ProductPage() {
  const reduceMotion = useReducedMotion();

  return (
      <main className="bg-white px-6">
        <section className="relative overflow-hidden pt-28 md:pt-36 pb-12">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {(products as Product[]).map((coffee, idx) => {
              const t = getThemeTokens(coffee.theme);

              return (
                <motion.div
                  key={coffee.id}
                  initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.85, delay: reduceMotion ? 0 : idx * 0.04, ease: [0.2, 0.7, 0.2, 1] }}
                  viewport={{ once: true, margin: "-80px" }}
                >
                  <Link
                    href={`/product/${coffee.id}`}
                    className={`group block overflow-hidden rounded-2xl bg-white ${t.shadow} ${t.ring}`}
                  >
                    <div className="relative h-[240px] md:h-[360px]">
                      {coffee.bg ? (
                        <Image
                          src={coffee.bg}
                          alt={`${coffee.name} background`}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 50vw, 100vw"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-neutral-200" />
                      )}

                      {/* ✅ THIS IS THE KEY: theme-based overlay */}
                      {/* <div className={`absolute inset-0 ${t.overlay}`} />
                      <div className={`absolute inset-0 ${t.vignette}`} /> */}

                      <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`text-[10px] tracking-[0.32em] uppercase ${t.meta}`}>
                            {coffee.origin}
                          </span>
                          <span className={`h-px flex-1 ${t.line}`} />
                        </div>

                        <h2 className={`text-2xl md:text-3xl font-style uppercase tracking-wider ${t.title}`}>
                          {coffee.name}
                        </h2>

                        <p className={`mt-2 text-sm line-clamp-2 max-w-xl ${t.body}`}>
                          {coffee.description}
                        </p>

                        <div className={`mt-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.30em] ${t.meta}`}>
                          <span className="relative">
                            View details
                            <span
                              className={`pointer-events-none absolute left-0 -bottom-2 h-px w-full scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 ${t.underline}`}
                            />
                          </span>
                          <span className="opacity-70 group-hover:opacity-100 transition">↗</span>
                        </div>
                      </div>

                      <div className="pointer-events-none absolute -left-1/2 top-[-40%] h-[200%] w-[140%] rotate-12 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.16),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
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

