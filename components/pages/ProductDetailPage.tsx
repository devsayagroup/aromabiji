"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Script from "next/script";
import { useState } from "react";
import AddToCartButton from "@/components/ecommerce/AddToCartButton";
import { Product, Variant } from "@/types/product";
import OtherProducts from "@/components/ui/OtherProducts";
import { breadcrumbJsonLd, productJsonLd } from "@/lib/seo/jsonLd";
import { SITE } from "@/lib/seo/site";

export default function ProductDetailPage({
  product,
  allProducts,
}: {
  product: Product;
  allProducts: Product[];
}) {
  const variants = product.variants ?? [];
  const [selectedVariant, setSelectedVariant] = useState<Variant>(variants[0]);  
  const [qty, setQty] = useState(1);

  const crumbs = breadcrumbJsonLd([
    { name: "Home", url: SITE.url },
    { name: "Coffee", url: `${SITE.url}/coffee` },
    { name: product.name, url: `${SITE.url}/coffee/${product.id}` },
  ]);

  // Dynamic Technical Metadata mapped to the grid
  const technicalSpecs = [
    { label: "Altitude", value: selectedVariant?.type.match(/\d+–\d+ MSL/)?.[0] || "Highlands" },
    { label: "Process", value: (product as any).process || "Specialty Process" },
    { label: "Weight", value: selectedVariant?.weight },
  ].filter((x) => Boolean(x.value));

  return (
    <main className="bg-canvas text-pantone min-h-screen pt-16 md:pt-24 font-text">
      <Script id="crumbs" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <Script id="product" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd(product)) }} />

      <section className="relative flex flex-col lg:flex-row min-h-[85vh]">
        
        {/* ─── LEFT SIDE: GALLERY ────────────────────────────────────────── */}
        <div className="relative w-full lg:w-1/2 h-[50vh] lg:h-auto overflow-hidden bg-white/30">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedVariant?.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex items-center justify-center p-12 md:p-24"
            >
              {/* RGBA 90, 71, 67 matches --color-pantone (#5A4743) */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(90,71,67,0.04)_0%,transparent_60%)] pointer-events-none" />
              
              <Image
                src={selectedVariant?.image ?? product.image ?? "/placeholder-coffee.png"}
                alt={product.name}
                width={600}
                height={600}
                className="object-contain drop-shadow-[0_24px_48px_rgba(42,31,29,0.15)] z-10"
                priority
              />
            </motion.div>
          </AnimatePresence>

          <button
            onClick={() => shareProduct(product)}
            className="absolute top-8 left-8 md:top-12 md:left-12 z-20 h-11 w-11 rounded-full border border-muted/60 bg-canvas/60 backdrop-blur-md flex items-center justify-center hover:bg-canvas hover:border-pantone transition-all shadow-sm text-pantone"
            aria-label="Share product"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
              <polyline points="16 6 12 2 8 6"></polyline>
              <line x1="12" y1="2" x2="12" y2="15"></line>
            </svg>
          </button>
        </div>

        {/* ─── RIGHT SIDE: DETAILS ───────────────────────────────────────── */}
        <div className="w-full lg:w-1/2 p-8 md:p-16 lg:py-20 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl"
          >
            <header className="mb-10">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[10px] tracking-[0.3em] uppercase text-muted font-semibold">
                  {product.origin}
                </span>
                <span className="h-px w-8 bg-muted" />
              </div>
              
              <h1 className="text-5xl md:text-7xl font-style text-pantone tracking-tight leading-none mb-4">
                {product.name}
              </h1>
              
              <p className="text-lg md:text-xl text-pantone/70 font-light leading-relaxed">
                {product.description}
              </p>
            </header>

             {/* ─── TECHNICAL SPECS ───────────────────────────────────────── */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-8 mb-12 border-t border-b border-muted/20 py-8">
              {technicalSpecs.map((spec) => (
                <div key={spec.label}>
                  <p className="text-[9px] tracking-[0.25em] uppercase text-muted mb-1.5 font-semibold">
                    {spec.label}
                  </p>
                  <p className="text-sm text-pantone font-medium">
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>

            {/* ─── VARIANT SELECTOR ──────────────────────────────────────── */}
            <div className="mb-10">
              <div className="flex flex-wrap gap-2">
                {variants.map((v) => {
                  const isActive = selectedVariant?.id === v.id;
                  return (
                    <button
                      key={v.id}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-5 py-2.5 rounded-full text-xs tracking-widest uppercase transition-all duration-300 border ${
                        isActive 
                        ? "bg-pantone text-canvas border-pantone" 
                        : "bg-transparent text-pantone/80 border-muted/40 hover:border-pantone/60"
                      }`}
                    >
                      {v.type}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ─── ACTIONS ───────────────────────────────────────────────── */}
            <div className="flex flex-col sm:flex-row items-stretch gap-4">
              <QtyControl value={qty} onChange={setQty} />
              <div className="flex-1">
                <AddToCartButton 
                  product={product} 
                  selectedVariant={selectedVariant} 
                  quantity={qty} 
                  className="w-full h-14 bg-ink text-canvas font-medium tracking-widest uppercase text-xs rounded-full hover:bg-pantone transition-colors duration-300 shadow-[0_8px_20px_rgba(42,31,29,0.15)] flex items-center justify-center"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FOOTER: CROSS-SELL ────────────────────────────────────────── */}
      <section className="bg-canvas">
        <OtherProducts products={allProducts} currentId={product.id} />
      </section>
    </main>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
                                   HELPERS
────────────────────────────────────────────────────────────────────────────── */

function QtyControl({ value, onChange }: { value: number; onChange: (n: number) => void }) {
  return (
    <div className="grid grid-cols-3 items-center border border-muted/50 rounded-full h-14 w-full sm:w-36 bg-canvas/50 shadow-sm overflow-hidden text-pantone">
      <button 
        onClick={() => onChange(Math.max(1, value - 1))} 
        className="h-full flex items-center justify-center hover:bg-muted/20 transition-colors text-xl font-light"
      >
        –
      </button>
      <span className="flex items-center justify-center font-medium text-sm tabular-nums">
        {value}
      </span>
      <button 
        onClick={() => onChange(value + 1)} 
        className="h-full flex items-center justify-center hover:bg-muted/20 transition-colors text-xl font-light"
      >
        +
      </button>
    </div>
  );
}

async function shareProduct(product: Product) {
  try {
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (navigator?.share) {
      await navigator.share({ title: product.name, url });
    } else {
      await navigator.clipboard.writeText(url);
    }
  } catch (e) {}
}