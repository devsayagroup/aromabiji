"use client";

import Link from "next/link";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useRef } from "react";
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
  // Using your new Minimalist Luxury palette (Canvas, Ink, Pantone)
  const sectionClass = "relative bg-canvas overflow-hidden py-14 md:py-18 border-t border-muted/20";

  const titleClass = isChoco
    ? "font-style text-2xl md:text-3xl text-pantone tracking-tight"
    : "font-style text-2xl md:text-3xl text-ink tracking-tight";

  const linkClass = isChoco
    ? "hidden sm:inline-flex items-center gap-2 text-[11px] tracking-[0.30em] uppercase text-pantone/60 hover:text-pantone transition"
    : "hidden sm:inline-flex items-center gap-2 text-[11px] tracking-[0.30em] uppercase text-ink/50 hover:text-ink transition";

  const dividerClass = isChoco
    ? "h-px w-10 bg-gradient-to-r from-transparent via-pantone/40 to-transparent"
    : "h-px w-10 bg-gradient-to-r from-transparent via-ink/20 to-transparent";

  const labelClass = isChoco
    ? "text-[10px] tracking-[0.35em] uppercase text-pantone/80 font-semibold"
    : "text-[10px] tracking-[0.35em] uppercase text-ink/60 font-semibold";

  // Explicitly separate the "View All" routing
  const viewAllPath = isChoco ? "/chocolate" : "/coffee";

  // ─── RENDER HELPER: CHOCOLATE ─────────────────────────────────────────
  const renderChocolateCard = (p: ChocolateProduct) => {
    const imageUrl = p.image || "/placeholder.png";
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
              className="object-contain w-3/4 drop-shadow-[0_20px_40px_rgba(42,31,29,0.15)] transition-transform duration-700 group-hover:scale-105"
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
    // Prioritize the first variant's image for the carousel cards
    const imageUrl = p.variants?.[0]?.image || p.image || "/placeholder.png";
    const productUrl = `/coffee/${p.id}`;
    
    return (
      <div key={p.id} className="mx-2 md:mx-4 w-[280px] md:w-[320px]">
        <Link href={productUrl} className="group block">
          {/* Exact match to Chocolate: rounded-[32px], bg-white/40, border, hover shadows */}
          <div className="relative aspect-[4/5] bg-white/40 border border-muted/30 rounded-[32px] overflow-hidden mb-6 flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_12px_40px_rgba(42,31,29,0.08)]">
            {/* Subtle warm radial gradient matching the new palette */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: `radial-gradient(ellipse at 50% 110%, rgba(90,71,67,0.06) 0%, transparent 65%)` }}
            />
            <Image
              src={imageUrl}
              alt={p.name}
              width={300}
              height={400}
              className="object-contain w-3/4 drop-shadow-[0_20px_40px_rgba(42,31,29,0.12)] transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="text-center md:text-left px-2">
            <h3 className="font-style text-2xl text-ink tracking-tight mb-1 group-hover:text-pantone transition-colors">
              {p.name}
            </h3>
            <p className="text-[10px] tracking-[0.2em] uppercase text-ink/50 font-semibold">
              {p.origin}
            </p>
          </div>
        </Link>
      </div>
    );
  };

  // ─── MAIN COMPONENT RENDER ────────────────────────────────────────────
  return (
    <section className={sectionClass}>
      <div className="container relative mx-auto px-6 md:px-32">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
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
        speed={40} // Slowed down slightly for a more luxurious, deliberate feel
        pauseOnHover
        gradient={false}
        className="relative overflow-hidden pt-4 pb-12"
      >
        {others.map((p) => {
          if (isChoco) {
            return renderChocolateCard(p as ChocolateProduct);
          }
          return renderCoffeeCard(p as Product);
        })}
      </Marquee>
    </section>
  );
}