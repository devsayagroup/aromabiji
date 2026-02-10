"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import { Product } from "@/types/product";
import OtherProducts from "@/components/ui/OtherProducts";
import { getThemeTokens } from "@/lib/theme-tokens"; 
import AddToCartButton from "../ecommerce/AddToCartButton";
// import LuxeButton from "../ui/LuxeButton";
import Script from "next/script";
import { breadcrumbJsonLd, productJsonLd } from "@/lib/seo/jsonLd";
import { SITE } from "@/lib/seo/site";


export default function DetailPage({
  product,
  allProducts,
}: {
  product: Product;
  allProducts: Product[];
}) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const reduceMotion = useReducedMotion();
  const t = useMemo(() => getThemeTokens(product.theme), [product.theme]);
    
  const crumbs = breadcrumbJsonLd([
    { name: "Home", url: SITE.url },
    { name: "Product", url: `${SITE.url}/product` },
    { name: product.name, url: `${SITE.url}/product/${product.id}` },
  ]);

  return (
    <main className="bg-white text-black">
      <Script id="crumbs" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <Script id="product" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd(product)) }} />
      {/* HERO */}
      {product.bg ? (
        <OriginHero
          name={product.name}
          origin={product.origin}
          description={product.description}
          bg={product.bg}
          t={t}
        />
      ) : null}

      <section className="max-w-7xl mx-auto px-6 py-14 md:py-14">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-24 items-start">
          <motion.div>
            <div className={`relative aspect-[1/1] md:aspect-[9/5] rounded-2xl overflow-hidden bg-white ${t.ring}`}>
              <Image
                src={selectedVariant.image}
                alt={`${product.name} ${selectedVariant.type}`}
                fill
                className="object-contain p-6 md:p-10"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_50%_30%,rgba(192,140,86,0.10),transparent_60%)]" />
            </div>

            <div className="mt-4 flex items-center justify-between text-[10px] tracking-[0.35em] uppercase text-black/45">
              <span>Selected</span>
              <span>{selectedVariant.weight}</span>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.9,
              delay: reduceMotion ? 0 : 0.06,
              ease: [0.2, 0.7, 0.2, 1],
            }}
            className="space-y-8"
          >
            {/* <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-10 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
                <span className="text-[11px] tracking-[0.35em] uppercase text-black/55">
                  {product.origin}
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl font-style uppercase tracking-wider text-black leading-[1.05]">
                {product.name}
              </h1>

              <p className="mt-4 text-sm md:text-base font-text text-black/60 leading-relaxed max-w-xl">
                {product.description}
              </p>
            </div> */}

            <VariantSelector
              variants={product.variants}
              selected={selectedVariant}
              onSelect={setSelectedVariant}
            />
       
            {/* {typeof selectedVariant.price_idr === "number" ? (
              <div className="pt-6 border-t border-black/10">
                <div className="text-[10px] tracking-[0.35em] uppercase text-black/45">
                  Price
                </div>
                <div className="mt-2 text-2xl font-style tracking-wide text-black">
                  IDR {selectedVariant.price_idr.toLocaleString("id-ID")}
                </div>
              </div>
            ) : null}

            <AddToCartButton
              product={{ ...product, variants: [selectedVariant] }}
              small
            /> */}

            {/* <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <LuxeButton href="/product" label="Back to collection" />
              <LuxeButton href="/product" label="Shop now"/>
            </div> */}
          </motion.div>
        </div>
      </section>

      <OtherProducts products={allProducts} currentId={product.id} />
    </main>
  );
}

function OriginHero({
  name,
  origin,
  description,
  bg,
  t,
}: {
  name: string;
  origin: string;
  description: string;
  bg: string;
  t: ReturnType<typeof getThemeTokens>;
}) {
  return (
    <section className="pt-16">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src={bg} alt={`${name} background`} fill className="object-cover" sizes="100vw" priority />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className={`h-px w-10 bg-gradient-to-r from-transparent ${t.line} to-transparent`} />
                <span className={`text-[11px] tracking-[0.35em] uppercase ${t.meta}`}>
                  Origin
                </span>
              </div>

              <h2 className={`font-style text-4xl md:text-6xl uppercase tracking-wider leading-[1.02] ${t.title}`}>
                {name}
              </h2>

              <p className={`mt-4 text-[11px] tracking-[0.35em] uppercase ${t.meta}`}>
                {origin}
              </p>
            </div>

            <p className={`max-w-xl lg:justify-self-end text-sm md:text-base leading-relaxed ${t.body}`}>
              {description}
            </p>
          </div>
        </div>

        <div className="relative h-px w-full bg-black/5" />
      </div>
    </section>
  );
}

function VariantSelector({
  variants,
  selected,
  onSelect,
}: {
  variants: any[];
  selected: any;
  onSelect: (v: any) => void;
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <span className="h-px w-10 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
        <p className="text-[11px] tracking-[0.35em] uppercase text-black/55">
          Choose Variant
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {variants.map((v) => {
          const active = selected.id === v.id;
          return (
            <button
              key={v.id}
              onClick={() => onSelect(v)}
              className={[
                "text-left rounded-2xl px-5 py-4 transition ring-1",
                active
                  ? "bg-black text-white ring-black/10 shadow-[0_16px_50px_rgba(0,0,0,0.18)]"
                  : "bg-white text-black ring-black/10 hover:bg-black/[0.03]",
              ].join(" ")}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[12px] tracking-[0.30em] uppercase">
                    {v.type}
                  </p>
                  <p className={active ? "text-white/75 text-sm mt-1" : "text-black/60 text-sm mt-1"}>
                    {v.packaging} · {v.weight}
                  </p>
                </div>
                <span className={active ? "text-white/80" : "text-black/35"}>↗</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}