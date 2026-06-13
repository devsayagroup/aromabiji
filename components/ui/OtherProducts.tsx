"use client";

import Link from "next/link";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useRef } from "react";
import { getThemeTokens } from "@/lib/theme-tokens";
import { Product } from "@/types/product";
import { ChocolateProduct } from "@/lib/products-chocolate";

// Strict interface to prevent 'any' errors
interface OtherProductsProps {
  products?: (Product | ChocolateProduct)[];
  currentId: string;
  variant?: "coffee" | "chocolate";
}

export default function OtherProducts({
  products = [],
  currentId,
  variant = "coffee", // Defaults to coffee if not specified
}: OtherProductsProps) {
  const marqueeRef = useRef<HTMLDivElement>(null);

  const others = products.filter((p) => p.id !== currentId);
  if (!others.length) return null;

  // Check which variant was passed in
  const isChoco = variant === "chocolate";

  // ─── THEME SWAPPING VARIABLES ─────────────────────────────────────────
  const sectionClass = isChoco
    ? "relative bg-canvas overflow-hidden py-14 md:py-18"
    : "relative bg-white overflow-hidden py-14 md:py-18";

  const titleClass = isChoco
    ? "font-style text-2xl md:text-3xl text-pantone"
    : "font-style text-2xl md:text-3xl uppercase tracking-wider text-black";

  const linkClass = isChoco
    ? "hidden sm:inline-flex items-center gap-2 text-[11px] tracking-[0.30em] uppercase text-pantone/60 hover:text-pantone transition"
    : "hidden sm:inline-flex items-center gap-2 text-[11px] tracking-[0.30em] uppercase text-black/55 hover:text-black transition";

  const dividerClass = isChoco
    ? "h-px w-10 bg-gradient-to-r from-transparent via-muted/60 to-transparent"
    : "h-px w-10 bg-gradient-to-r from-transparent via-black/20 to-transparent";

  const labelClass = isChoco
    ? "text-[11px] tracking-[0.35em] uppercase text-muted font-semibold"
    : "text-[11px] tracking-[0.35em] uppercase text-black/55";

  // Explicitly separate the "View All" routing
  const viewAllPath = isChoco ? "/chocolate" : "/product#list";

  // ─── RENDER HELPER: CHOCOLATE ─────────────────────────────────────────
  const renderChocolateCard = (p: ChocolateProduct) => {
    const imageUrl = p.image || "/placeholder.png";
    // Forces the route to /chocolate/...
    const productUrl = `/chocolate/${p.slug || p.id}`;

    return (
      <div key={p.id} className="mx-2 md:mx-4 w-[280px] md:w-[320px]">
        <Link href={productUrl} className="group block">
          <div className="relative aspect-[4/5] bg-white/40 border border-muted/30 rounded-[32px] overflow-hidden mb-6 flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_12px_40px_rgba(42,31,29,0.08)]">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: `radial-gradient(ellipse at 50% 110%, ${p.color}15 0%, transparent 65%)` }}
            />
            <Image
              src={imageUrl}
              alt={p.name}
              width={300}
              height={400}
              className="object-contain w-3/4 drop-shadow-xl transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="text-center md:text-left px-2">
            <h3 className="font-style text-2xl text-pantone tracking-tight mb-1 group-hover:text-ink transition-colors">
              {p.name}
            </h3>
            <p className="text-[10px] tracking-[0.2em] uppercase text-pantone/60 font-semibold">
              {p.origin}
            </p>
          </div>
        </Link>
      </div>
    );
  };

  // ─── RENDER HELPER: COFFEE ────────────────────────────────────────────
  const renderCoffeeCard = (p: Product) => {
    // FIX: Prioritize the first variant's image for the carousel cards
    const imageUrl = p.variants?.[0]?.image || p.image || "/placeholder.png";
    
    const productUrl = `/product/${p.id}`;
    const t = getThemeTokens(p.theme || "default");
    
    return (
      <div key={p.id} className="mx-2 md:mx-3 w-[250px] md:w-[320px]">
        <Link href={productUrl} className="group block">
          <article
            className={[
              "rounded-2xl overflow-hidden bg-white",
              t.ring,
            ].join(" ")}
          >
            <div className="relative aspect-[4/4] bg-white">
              <Image
                src={imageUrl} // Now correctly points to /products/xx-1.png
                alt={p.name}
                fill
                className="object-contain p-8 md:p-10 transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(min-width: 768px) 320px, 250px"
              />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_circle_at_50%_25%,rgba(192,140,86,0.10),transparent_60%)]" />
            </div>

            <div className="px-5 md:px-6 pb-6 pt-4">
              <div className="flex items-center gap-3 mb-2">
                <p className="text-[10px] tracking-[0.32em] uppercase text-black/50">
                  {p.origin}
                </p>
                <span className="h-px flex-1 bg-black/10" />
              </div>

              <h4 className="font-style text-lg md:text-xl uppercase tracking-wide text-black leading-tight">
                {p.name}
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
  };

  // ─── MAIN COMPONENT RENDER ────────────────────────────────────────────
  return (
    <section className={sectionClass}>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className={dividerClass} />
              <p className={labelClass}>Explore</p>
            </div>
            <h3 className={titleClass}>
              {isChoco ? "Explore the Archive" : "Other Selections"}
            </h3>
          </div>

          <Link href={viewAllPath} className={linkClass}>
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
        {others.map((p) => {
          // Strictly route to the correct render function based on the variant prop
          if (isChoco) {
            return renderChocolateCard(p as ChocolateProduct);
          }
          return renderCoffeeCard(p as Product);
        })}
      </Marquee>

      <div className="relative h-2" />
    </section>
  );
}