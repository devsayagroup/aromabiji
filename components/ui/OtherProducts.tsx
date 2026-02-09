"use client";

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/product";
import Marquee from "react-fast-marquee";
import { useRef } from "react";
import { getThemeTokens } from "@/lib/theme-tokens"; 

export default function OtherProducts({
  products = [],
  currentId,
}: {
  products?: Product[];
  currentId: string;
}) {
  const others = products.filter((p) => p.id !== currentId);
  if (!others.length) return null;

  const marqueeRef = useRef<any>(null);

  return (
    <section className="relative bg-white overflow-hidden py-14 md:py-18">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="h-px w-10 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
              <p className="text-[11px] tracking-[0.35em] uppercase text-black/55">
                Explore
              </p>
            </div>
            <h3 className="font-style text-2xl md:text-3xl uppercase tracking-wider text-black">
              Other Selections
            </h3>
          </div>

          <Link
            href="/product#list"
            className="hidden sm:inline-flex items-center gap-2 text-[11px] tracking-[0.30em] uppercase text-black/55 hover:text-black transition"
          >
            View all <span className="opacity-70">↗</span>
          </Link>
        </div>
      </div>

      <Marquee
        ref={marqueeRef}
        speed={90}
        pauseOnHover
        gradient={false}
        className="relative overflow-hidden pt-6 pb-12"
      >
        {others.map((product) => {
          const t = getThemeTokens(product.theme);

          return (
            <div key={product.id} className="mx-2 md:mx-3 w-[250px] md:w-[320px]">
              <Link href={`/product/${product.id}`} className="group block">
                <article
                  className={[
                    "rounded-2xl overflow-hidden bg-white",
                    t.ring,
                  ].join(" ")}
                >
                  <div className="relative aspect-[4/4] bg-white">
                    <Image
                      src={product.variants?.[0]?.image}
                      alt={product.name}
                      fill
                      className="object-contain p-8 md:p-10 transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(min-width: 768px) 320px, 250px"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_circle_at_50%_25%,rgba(192,140,86,0.10),transparent_60%)]" />
                  </div>

                  <div className="px-5 md:px-6 pb-6 pt-4">
                    <div className="flex items-center gap-3 mb-2">
                      <p className="text-[10px] tracking-[0.32em] uppercase text-black/50">
                        {product.origin}
                      </p>
                      <span className="h-px flex-1 bg-black/10" />
                    </div>

                    <h4 className="font-style text-lg md:text-xl uppercase tracking-wide text-black leading-tight">
                      {product.name}
                    </h4>

                    <div className="mt-3 inline-flex items-center gap-2 text-[11px] tracking-[0.30em] uppercase text-black/55">
                      <span className="relative">
                        View details
                        <span
                          className={[
                            "pointer-events-none absolute left-0 -bottom-2 h-px w-full scale-x-0 origin-left",
                            "transition-transform duration-500 group-hover:scale-x-100",
                            t.underline, 
                          ].join(" ")}
                        />
                      </span>
                      <span className="opacity-70 group-hover:opacity-100 transition">↗</span>
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          );
        })}
      </Marquee>

      <div className="relative h-2" />
    </section>
  );
}
