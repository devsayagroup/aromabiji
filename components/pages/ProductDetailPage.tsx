// "use client";

// import { motion, useReducedMotion } from "framer-motion";
// import Image from "next/image";
// import { useMemo, useState } from "react";
// import { Product } from "@/types/product";
// import OtherProducts from "@/components/ui/OtherProducts";
// import { getThemeTokens } from "@/lib/theme-tokens"; 
// import AddToCartButton from "../ecommerce/AddToCartButton";
// // import LuxeButton from "../ui/LuxeButton";
// import Script from "next/script";
// import { breadcrumbJsonLd, productJsonLd } from "@/lib/seo/jsonLd";
// import { SITE } from "@/lib/seo/site";


// export default function DetailPage({
//   product,
//   allProducts,
// }: {
//   product: Product;
//   allProducts: Product[];
// }) {
//   const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
//   const reduceMotion = useReducedMotion();
//   const t = useMemo(() => getThemeTokens(product.theme), [product.theme]);
    
//   const crumbs = breadcrumbJsonLd([
//     { name: "Home", url: SITE.url },
//     { name: "Product", url: `${SITE.url}/product` },
//     { name: product.name, url: `${SITE.url}/product/${product.id}` },
//   ]);

//   return (
//     <main className="bg-white text-black">
//       <Script id="crumbs" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
//       <Script id="product" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd(product)) }} />
//       {/* HERO */}
//       {product.bg ? (
//         <OriginHero
//           name={product.name}
//           origin={product.origin}
//           description={product.description}
//           bg={product.bg}
//           t={t}
//         />
//       ) : null}

//       <section className="max-w-7xl mx-auto px-6 py-14 md:py-14">
//         <div className="grid lg:grid-cols-2 gap-10 md:gap-24 items-start">
//           <motion.div>
//             <div className={`relative aspect-[1/1] md:aspect-[9/5] rounded-2xl overflow-hidden bg-white ${t.ring}`}>
//               <Image
//                 src={selectedVariant.image}
//                 alt={`${product.name} ${selectedVariant.type} | Luwak Coffee`}
//                 fill
//                 className="object-contain p-6 md:p-10"
//                 sizes="(min-width: 1024px) 50vw, 100vw"
//                 priority
//               />
//               <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_50%_30%,rgba(192,140,86,0.10),transparent_60%)]" />
//             </div>

//             <div className="mt-4 flex items-center justify-between text-[10px] tracking-[0.35em] uppercase text-black/45">
//               <span>Selected</span>
//               <span>{selectedVariant.weight}</span>
//             </div>
//           </motion.div>

//           {/* Info */}
//           <motion.div
//             initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
//             animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//             transition={{
//               duration: 0.9,
//               delay: reduceMotion ? 0 : 0.06,
//               ease: [0.2, 0.7, 0.2, 1],
//             }}
//             className="space-y-8"
//           >
//             {/* <div>
//               <div className="flex items-center gap-3 mb-3">
//                 <span className="h-px w-10 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
//                 <span className="text-[11px] tracking-[0.35em] uppercase text-black/55">
//                   {product.origin}
//                 </span>
//               </div>

//               <h1 className="text-3xl md:text-5xl font-style uppercase tracking-wider text-black leading-[1.05]">
//                 {product.name}
//               </h1>

//               <p className="mt-4 text-sm md:text-base font-text text-black/60 leading-relaxed max-w-xl">
//                 {product.description}
//               </p>
//             </div> */}

//             <VariantSelector
//               variants={product.variants}
//               selected={selectedVariant}
//               onSelect={setSelectedVariant}
//             />
       
//             {/* {typeof selectedVariant.price_idr === "number" ? (
//               <div className="pt-6 border-t border-black/10">
//                 <div className="text-[10px] tracking-[0.35em] uppercase text-black/45">
//                   Price
//                 </div>
//                 <div className="mt-2 text-2xl font-style tracking-wide text-black">
//                   IDR {selectedVariant.price_idr.toLocaleString("id-ID")}
//                 </div>
//               </div>
//             ) : null}

//             <AddToCartButton
//               product={{ ...product, variants: [selectedVariant] }}
//               small
//             /> */}

//             {/* <div className="pt-2 flex flex-col sm:flex-row gap-3">
//               <LuxeButton href="/product" label="Back to collection" />
//               <LuxeButton href="/product" label="Shop now"/>
//             </div> */}
//           </motion.div>
//         </div>
//       </section>

//       <OtherProducts products={allProducts} currentId={product.id} />
//     </main>
//   );
// }

// function OriginHero({
//   name,
//   origin,
//   description,
//   bg,
//   t,
// }: {
//   name: string;
//   origin: string;
//   description: string;
//   bg: string;
//   t: ReturnType<typeof getThemeTokens>;
// }) {
//   return (
//     <section className="pt-18">
//       <div className="relative overflow-hidden">
//         <div className="absolute inset-0">
//           <Image src={bg} alt={`${name} background`} fill className="object-cover" sizes="100vw" priority />
//         </div>

//         <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
//             <div>
//               <div className="flex items-center gap-3 mb-4">
//                 <span className={`h-px w-10 bg-gradient-to-r from-transparent ${t.line} to-transparent`} />
//                 {/* <span className={`text-[11px] tracking-[0.35em] uppercase ${t.meta}`}>
//                   Origin
//                 </span> */}
//               </div>

//               <h2 className={`font-style text-4xl md:text-5xl uppercase tracking-wider leading-[1.02] ${t.title}`}>
//                 {name}
//               </h2>

//               <p className={`mt-2 text-[11px] tracking-[0.35em] uppercase ${t.meta}`}>
//                 {origin}
//               </p>
//             </div>

//             {/* <p className={`max-w-xl lg:justify-self-end text-sm md:text-base leading-relaxed ${t.body}`}>
//               {description}
//             </p> */}
//           </div>
//         </div>

//         <div className="relative h-px w-full bg-black/5" />
//       </div>
//     </section>
//   );
// }

// function VariantSelector({
//   variants,
//   selected,
//   onSelect,
// }: {
//   variants: any[];
//   selected: any;
//   onSelect: (v: any) => void;
// }) {
//   return (
//     <div className="space-y-4">
//       <div className="flex items-center gap-3">
//         <span className="h-px w-10 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
//         <p className="text-[11px] tracking-[0.35em] uppercase text-black/55">
//           Choose Variant
//         </p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//         {variants.map((v) => {
//           const active = selected.id === v.id;
//           return (
//             <button
//               key={v.id}
//               onClick={() => onSelect(v)}
//               className={[
//                 "text-left rounded-2xl px-5 py-4 transition ring-1",
//                 active
//                   ? "bg-black text-white ring-black/10 shadow-[0_16px_50px_rgba(0,0,0,0.18)]"
//                   : "bg-white text-black ring-black/10 hover:bg-black/[0.03]",
//               ].join(" ")}
//             >
//               <div className="flex items-start justify-between gap-3">
//                 <div>
//                   <p className="text-[12px] tracking-[0.30em] uppercase">
//                     {v.type}
//                   </p>
//                   <p className={active ? "text-white/75 text-sm mt-1" : "text-black/60 text-sm mt-1"}>
//                     {v.packaging} · {v.weight}
//                   </p>
//                 </div>
//                 <span className={active ? "text-white/80" : "text-black/35"}>↗</span>
//               </div>
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// }


// "use client";

// import { motion, useReducedMotion } from "framer-motion";
// import Image from "next/image";
// import Script from "next/script";
// import { useMemo, useState } from "react";

// import { Product } from "@/types/product";
// import OtherProducts from "@/components/ui/OtherProducts";
// import { breadcrumbJsonLd, productJsonLd } from "@/lib/seo/jsonLd";
// import { SITE } from "@/lib/seo/site";

// export default function DetailPage({
//   product,
//   allProducts,
// }: {
//   product: Product;
//   allProducts: Product[];
// }) {
//   const reduceMotion = useReducedMotion();

//   const variants = product.variants ?? [];
//   const [selectedVariant, setSelectedVariant] = useState(variants?.[0]);
//   const [qty, setQty] = useState(1);

//   const crumbs = breadcrumbJsonLd([
//     { name: "Home", url: SITE.url },
//     { name: "Product", url: `${SITE.url}/product` },
//     { name: product.name, url: `${SITE.url}/product/${product.id}` },
//   ]);

//   const vIndex = useMemo(() => {
//     if (!selectedVariant) return 0;
//     const idx = variants.findIndex((v: any) => v?.id === (selectedVariant as any)?.id);
//     return idx < 0 ? 0 : idx;
//   }, [variants, selectedVariant]);

//   const canSlide = variants.length > 1;

//   const goPrev = () => {
//     if (!canSlide) return;
//     const next = (vIndex - 1 + variants.length) % variants.length;
//     setSelectedVariant(variants[next]);
//   };

//   const goNext = () => {
//     if (!canSlide) return;
//     const next = (vIndex + 1) % variants.length;
//     setSelectedVariant(variants[next]);
//   };

//   const price = (selectedVariant as any)?.price_idr ?? (product as any)?.price_idr;
//   const priceCompact = formatIDRCompact(price);

//   // Fallback fields (sesuaikan kalau schema kamu beda)
//   const process = (selectedVariant as any)?.process ?? (product as any)?.process;
//   const netto = (selectedVariant as any)?.weight ?? (product as any)?.netto;
//   const composition = (selectedVariant as any)?.composition ?? (product as any)?.composition;
//   const tasteNotes = (selectedVariant as any)?.tasteNotes ?? (product as any)?.tasteNotes ?? (product as any)?.notes;
//   const insidePackage = (selectedVariant as any)?.insidePackage ?? (product as any)?.insidePackage;

//   const ratings = (product as any)?.ratings ?? {
//     sweetness: (product as any)?.sweetness ?? 4,
//     acidity: (product as any)?.acidity ?? 3,
//     body: (product as any)?.body ?? 3,
//   };

//   const grindNote =
//     (product as any)?.grindNote ??
//     "Kindly let us know if you’d like your beans ground. Please provide a note before checkout.";
//   const grindSizes = (product as any)?.grindSizes ?? ["Coarse", "Medium", "Fine"];

//   const details = [
//     { label: "Origin", value: product.origin },
//     { label: "Process", value: process },
//     { label: "Netto", value: netto },
//     { label: "Composition", value: composition },
//     { label: "Taste Notes", value: tasteNotes },
//     { label: "Inside the package", value: insidePackage },
//   ].filter((x) => Boolean(x.value));

//   return (
//     <main className="bg-white text-black">
//       <Script id="crumbs" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
//       <Script
//         id="product"
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd(product)) }}
//       />

//       <section className="max-w-7xl mx-auto px-6 py-12 md:py-28">
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
//           {/* LEFT: Gallery */}
//           <motion.div
//             initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
//             animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//             transition={{
//               duration: 0.9,
//               delay: reduceMotion ? 0 : 0.02,
//               ease: [0.2, 0.7, 0.2, 1],
//             }}
//           >
//             <div className="relative rounded-2xl overflow-hidden bg-[#f3f0e8] shadow-[0_18px_60px_rgba(0,0,0,0.08)]">
//               <div className="relative aspect-[4/3] sm:aspect-[1/1]">
//                 <Image
//                   src={(selectedVariant as any)?.image}
//                   alt={`${product.name} ${(selectedVariant as any)?.type ?? ""}`}
//                   fill
//                   className="object-contain p-10"
//                   sizes="(min-width: 1024px) 50vw, 100vw"
//                   priority
//                 />
//                 <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_circle_at_45%_30%,rgba(0,0,0,0.06),transparent_55%)]" />
//               </div>

//               {/* Arrows (mimic screenshot) */}
//               {canSlide ? (
//                 <>
//                   <button
//                     type="button"
//                     aria-label="Previous"
//                     onClick={goPrev}
//                     className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 grid place-items-center text-black/70 hover:text-black transition"
//                   >
//                     <span className="text-2xl leading-none">←</span>
//                   </button>
//                   <button
//                     type="button"
//                     aria-label="Next"
//                     onClick={goNext}
//                     className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 grid place-items-center text-black/70 hover:text-black transition"
//                   >
//                     <span className="text-2xl leading-none">→</span>
//                   </button>
//                 </>
//               ) : null}
//             </div>

//             {/* <div className="mt-4 flex items-center justify-between text-[10px] tracking-[0.35em] uppercase text-black/45">
//               <span>Selected</span>
//               <span>{(selectedVariant as any)?.weight ?? ""}</span>
//             </div> */}

//             {/* Optional: variant chooser (kalau kamu mau) */}
//             {variants.length > 1 ? (
//               <div className="mt-6">
//                 <div className="text-[10px] tracking-[0.35em] uppercase text-black/45 mb-3">Variants</div>
//                 <div className="flex flex-wrap gap-2">
//                   {variants.map((v: any) => {
//                     const active = (selectedVariant as any)?.id === v.id;
//                     return (
//                       <button
//                         key={v.id}
//                         type="button"
//                         onClick={() => setSelectedVariant(v)}
//                         className={[
//                           "rounded-full px-4 py-2 text-[11px] tracking-[0.25em] uppercase transition border",
//                           active
//                             ? "bg-black text-white border-black"
//                             : "bg-white text-black border-black/15 hover:border-black/40",
//                         ].join(" ")}
//                       >
//                         {v.type ?? v.weight ?? "Variant"}
//                       </button>
//                     );
//                   })}
//                 </div>
//               </div>
//             ) : null}
//           </motion.div>

//           {/* RIGHT: Info */}
//           <motion.div
//             initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
//             animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//             transition={{
//               duration: 0.9,
//               delay: reduceMotion ? 0 : 0.06,
//               ease: [0.2, 0.7, 0.2, 1],
//             }}
//             className="relative"
//           >
//             {/* Share button */}
//             <button
//               type="button"
//               onClick={() => shareProduct(product)}
//               aria-label="Share product"
//               className="absolute right-0 top-0 h-12 w-12 rounded-2xl border border-black/20 grid place-items-center hover:bg-black/[0.03] transition"
//               title="Share"
//             >
//               <span className="text-lg">⤴</span>
//             </button>

//             <div className="pr-16">
//               <div className="text-[12px] tracking-[0.35em] uppercase font-semibold">
//                 COFFEE BEANS
//                 <div className="h-px w-20 bg-black/60 mt-2" />
//               </div>

//               <h1 className="mt-3 font-style text-3xl md:text-4xl italic tracking-wide">
//                 {product.name}
//               </h1>

//               {/* Key-value list */}
//               <div className="mt-6 space-y-2 text-[13px] leading-relaxed">
//                 {details.map((d) => (
//                   <p key={d.label}>
//                     <span className="font-semibold">{d.label}:</span>{" "}
//                     <span className="text-black/85">{String(d.value)}</span>
//                   </p>
//                 ))}
//               </div>

//               {/* Grind note */}
//               <div className="mt-7 text-[13px] text-black/80 leading-relaxed">
//                 <p>{grindNote}</p>
//                 <p className="mt-2">
//                   Available grind sizes:{" "}
//                   <span className="font-semibold">
//                     {Array.isArray(grindSizes) ? grindSizes.join(", ") : String(grindSizes)}
//                   </span>
//                   .
//                 </p>
//               </div>

//               {/* Spec table + ratings */}
//               <div className="mt-6">
//                 <div className="grid grid-cols-[140px_1fr] gap-y-3 text-[12px]">
//                   <div className="uppercase tracking-[0.18em] font-semibold">Origin</div>
//                   <div className="uppercase tracking-[0.04em] font-semibold">
//                     {String(product.origin ?? "-")}
//                   </div>

//                   <div className="uppercase tracking-[0.18em] font-semibold">Taste Notes</div>
//                   <div className="uppercase tracking-[0.04em] font-semibold">
//                     {String(tasteNotes ?? "-")}
//                   </div>
//                 </div>

//                 <div className="h-px w-full bg-black/25 my-4" />

//                 <div className="grid grid-cols-[140px_1fr] gap-y-3 text-[12px] items-center">
//                   <div className="uppercase tracking-[0.18em] font-semibold">Sweetness</div>
//                   <RatingPips value={clampInt(ratings?.sweetness ?? 0, 0, 5)} />

//                   <div className="uppercase tracking-[0.18em] font-semibold">Acidity</div>
//                   <RatingPips value={clampInt(ratings?.acidity ?? 0, 0, 5)} />

//                   <div className="uppercase tracking-[0.18em] font-semibold">Body</div>
//                   <RatingPips value={clampInt(ratings?.body ?? 0, 0, 5)} />
//                 </div>
//               </div>

//               {/* Cart bar */}
//               <div className="mt-10 flex items-center gap-4">
//                 <QtyControl value={qty} onChange={setQty} />

//                 <button
//                   type="button"
//                   className="flex-1 h-12 rounded-2xl bg-[#6B0F12] text-white font-semibold tracking-[0.08em] uppercase text-[11px] shadow-[0_18px_60px_rgba(0,0,0,0.14)] hover:brightness-110 transition"
//                   // TODO: sambungkan ke cart logic kamu
//                   onClick={() => {
//                     // contoh: addToCart(product, selectedVariant, qty)
//                     console.log("ADD TO CART", { productId: product.id, variantId: (selectedVariant as any)?.id, qty });
//                   }}
//                 >
//                   {priceCompact ? `${priceCompact} - ADD TO CART` : "ADD TO CART"}
//                 </button>

//                 {/* Kalau kamu mau pakai komponen cart kamu:
//                 <AddToCartButton product={{ ...product, variants: [selectedVariant] }} small />
//                 */}
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       <OtherProducts products={allProducts} currentId={product.id} />
//     </main>
//   );
// }

// /* ---------------- helpers ---------------- */

// function QtyControl({
//   value,
//   onChange,
// }: {
//   value: number;
//   onChange: (n: number) => void;
// }) {
//   return (
//     <div className="h-12 rounded-2xl bg-white border border-[#6B0F12]/40 shadow-[0_18px_60px_rgba(0,0,0,0.10)] flex items-center overflow-hidden">
//       <button
//         type="button"
//         className="w-14 h-full grid place-items-center text-xl text-black/70 hover:bg-black/[0.03] transition"
//         onClick={() => onChange(Math.max(1, value - 1))}
//         aria-label="Decrease quantity"
//       >
//         –
//       </button>
//       <div className="w-14 text-center text-[12px] font-semibold">{value}</div>
//       <button
//         type="button"
//         className="w-14 h-full grid place-items-center text-xl text-black/70 hover:bg-black/[0.03] transition"
//         onClick={() => onChange(Math.min(99, value + 1))}
//         aria-label="Increase quantity"
//       >
//         +
//       </button>
//     </div>
//   );
// }

// function RatingPips({ value }: { value: number }) {
//   const total = 5;
//   return (
//     <div className="flex items-center gap-2">
//       {Array.from({ length: total }).map((_, i) => {
//         const active = i < value;
//         return (
//           <span
//             key={i}
//             className={[
//               "h-4 w-4 inline-block border border-black/25",
//               active ? "bg-black/20" : "bg-transparent",
//             ].join(" ")}
//           />
//         );
//       })}
//     </div>
//   );
// }

// function clampInt(n: number, min: number, max: number) {
//   return Math.max(min, Math.min(max, Math.floor(n)));
// }

// function formatIDRCompact(price?: number) {
//   if (typeof price !== "number" || !Number.isFinite(price)) return "";
//   // 169000 => "IDR 169K"
//   if (price >= 1000) return `IDR ${Math.round(price / 1000)}K`;
//   return `IDR ${price.toLocaleString("id-ID")}`;
// }

// async function shareProduct(product: Product) {
//   try {
//     const url =
//       typeof window !== "undefined"
//         ? window.location.href
//         : `${SITE.url}/product/${product.id}`;

//     const title = product.name ?? "Product";
//     const text = (product as any)?.shareText ?? "";

//     // native share
//     // @ts-ignore
//     if (navigator?.share) {
//       // @ts-ignore
//       await navigator.share({ title, text, url });
//       return;
//     }

//     // fallback copy
//     await navigator.clipboard.writeText(url);
//   } catch {
//     // no-op
//   }
// }




// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import { useState } from "react";
// import { Product, Variant } from "@/types/product";

// export default function CompactDetailPage({ product }: { product: Product }) {
//   const variants = product.variants ?? [];
//   const [selectedVariant, setSelectedVariant] = useState<Variant>(variants[0]);
//   const [qty, setQty] = useState(1);

//   const price = selectedVariant?.price_idr ?? 0;

//   return (
//     // h-screen and overflow-hidden ensures no scrolling on the main container
//     <main className="relative h-screen w-full bg-white overflow-hidden flex flex-col lg:flex-row">
      
//       {/* LEFT: VISUAL (Fixed 100vh on Desktop) */}
//       <section className="relative w-full lg:w-1/2 h-1/2 lg:h-full bg-[#f3f0e8] flex items-center justify-center p-6">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={selectedVariant?.id}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.5 }}
//             className="relative w-full h-full max-h-[500px] flex items-center justify-center"
//           >
//             {product.bg && (
//               <Image
//                 src={product.bg}
//                 alt=""
//                 fill
//                 className="object-cover opacity-20 mix-blend-multiply pointer-events-none"
//               />
//             )}
//             <Image
//               src={selectedVariant?.image ?? product.image}
//               alt={product.name}
//               width={450}
//               height={450}
//               className="object-contain drop-shadow-2xl z-10"
//               priority
//             />
//           </motion.div>
//         </AnimatePresence>
        
//         {/* Branding Overlay */}
//         <div className="absolute top-8 left-8">
//            <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-black/30">Aroma Biji</span>
//         </div>
//       </section>

//       {/* RIGHT: CONTENT (Fixed 100vh with Internal Scroll if needed) */}
//       <section className="w-full lg:w-1/2 h-1/2 lg:h-full flex flex-col p-6 md:p-12 lg:p-16 justify-between bg-white">
        
//         {/* Top: Info */}
//         <div className="space-y-4">
//           <header>
//             <div className="flex items-center gap-2 mb-2">
//               <span className="text-[9px] tracking-[0.3em] uppercase text-[#6B0F12] font-bold">{product.origin}</span>
//               <div className="h-px w-8 bg-[#6B0F12]/20" />
//             </div>
//             <h1 className="text-3xl md:text-5xl font-style uppercase tracking-wider">{product.name}</h1>
//           </header>

//           <p className="text-black/60 text-sm leading-relaxed max-w-md line-clamp-3 md:line-clamp-none">
//             {product.description}
//           </p>

//           {/* Variants Grid - Compact */}
//           <div className="pt-4">
//             <span className="text-[9px] tracking-[0.2em] uppercase text-black/40 font-bold mb-3 block">Select Edition</span>
//             <div className="flex flex-wrap gap-2">
//               {variants.map((v) => (
//                 <button
//                   key={v.id}
//                   onClick={() => setSelectedVariant(v)}
//                   className={`px-4 py-2 rounded-full text-[10px] tracking-wider uppercase transition-all border ${
//                     selectedVariant.id === v.id ? "bg-black text-white border-black" : "border-black/10 hover:border-black/30"
//                   }`}
//                 >
//                   {v.type}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Bottom: Specs & CTA */}
//         <div className="mt-auto pt-6 border-t border-black/5">
//           {/* Quick Specs Row */}
//           <div className="flex gap-8 mb-8">
//             <div>
//               <p className="text-[9px] uppercase text-black/40 mb-1">Netto</p>
//               <p className="text-xs font-bold">{selectedVariant.weight}</p>
//             </div>
//             <div>
//               <p className="text-[9px] uppercase text-black/40 mb-1">Packaging</p>
//               <p className="text-xs font-bold">{selectedVariant.packaging}</p>
//             </div>
//             <div>
//               <p className="text-[9px] uppercase text-black/40 mb-1">Rating</p>
//               <div className="flex gap-1 mt-1">
//                 {[1, 2, 3, 4].map((i) => <div key={i} className="h-1 w-3 bg-[#6B0F12] rounded-full" />)}
//               </div>
//             </div>
//           </div>

//           {/* Action Bar */}
//           <div className="flex items-center gap-4">
//             <div className="flex items-center border border-black/10 rounded-xl h-12">
//               <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-10 h-full hover:bg-black/5">–</button>
//               <span className="w-8 text-center text-xs font-bold">{qty}</span>
//               <button onClick={() => setQty(qty + 1)} className="w-10 h-full hover:bg-black/5">+</button>
//             </div>

//             <button className="flex-1 bg-[#6B0F12] text-white h-12 rounded-xl flex items-center justify-between px-6 hover:brightness-110 transition-all shadow-lg shadow-[#6B0F12]/10">
//               <span className="text-[10px] font-bold tracking-widest uppercase">Add to Cart</span>
//               <span className="text-sm font-bold">Rp {(price * qty).toLocaleString("id-ID")}</span>
//             </button>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Script from "next/script";
import { useMemo, useState } from "react";
import AddToCartButton from "../ecommerce/AddToCartButton";
import { Product, Variant } from "@/types/product";
import OtherProducts from "@/components/ui/OtherProducts";
import { breadcrumbJsonLd, productJsonLd } from "@/lib/seo/jsonLd";
import { SITE } from "@/lib/seo/site";

export default function DetailPage({
  product,
  allProducts,
}: {
  product: Product;
  allProducts: Product[];
}) {
  const reduceMotion = useReducedMotion();
  const variants = product.variants ?? [];
const [selectedVariant, setSelectedVariant] = useState<Variant>(variants[0]);  
const [qty, setQty] = useState(1);

  const crumbs = breadcrumbJsonLd([
    { name: "Home", url: SITE.url },
    { name: "Product", url: `${SITE.url}/product` },
    { name: product.name, url: `${SITE.url}/product/${product.id}` },
  ]);

  // Pricing logic
  const price = selectedVariant?.price_idr ?? 0;
  const priceCompact = formatIDR(price);

  // Dynamic Technical Metadata
  const technicalSpecs = [
    { label: "Origin", value: product.origin },
    { label: "Altitude", value: selectedVariant?.type.match(/\d+–\d+ MSL/)?.[0] || "Highlands" },
    { label: "Process", value: (product as any).process || "Specialty Process" },
    { label: "Weight", value: selectedVariant?.weight },
    // { label: "Packaging", value: selectedVariant?.packaging },
  ].filter((x) => Boolean(x.value));

  const ratings = (product as any)?.ratings ?? { sweetness: 4, acidity: 3, body: 4 };

  return (
    <main className="bg-white text-black min-h-screen pt-16 md:pt-18">
      <Script id="crumbs" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <Script id="product" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd(product)) }} />

      <section className="relative flex flex-col lg:flex-row min-h-[90vh]">
        
        {/* LEFT: THE CINEMATIC VISUAL */}
        <div className="relative w-full lg:w-1/2 h-[40vh] lg:h-auto overflow-hidden bg-[#f3f0e8]">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedVariant?.id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              {/* Heritage Background */}
              {product.bg && (
                <Image
                  src={product.bg}
                  alt="Heritage background"
                  fill
                  className="object-cover opacity-80"
                />
              )}
              
              {/* Product Pack */}
              <div className="relative z-10 w-full h-full flex items-center justify-center p-12">
                <Image
                  src={selectedVariant?.image ?? product.image ?? "/placeholder-coffee.png"}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="object-contain drop-shadow-[0_35px_60px_rgba(0,0,0,0.15)]"
                  priority
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Share Button Floating */}
          <button
            onClick={() => shareProduct(product)}
            className="absolute top-10 left-10 z-20 h-12 w-12 rounded-full border border-black/10 bg-white/50 backdrop-blur-md flex items-center justify-center hover:bg-white transition-all shadow-sm"
          >
            <span className="text-lg">⤴</span>
          </button>
        </div>

        {/* RIGHT: THE STORY & SELECTION */}
        <div className="w-full lg:w-1/2 p-8 md:px-16 md:py-8 md:pr-48 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <header className="mb-4">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] tracking-[0.4em] uppercase text-[#6B0F12] font-bold">
                  {product.origin}
                </span>
                <span className="h-px w-12 bg-[#6B0F12]/20" />
              </div>
              <h1 className="text-4xl md:text-6xl font-style uppercase tracking-wider leading-none">
                {product.name}
              </h1>
            </header>

            {/* TECHNICAL CARD */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {technicalSpecs.map((spec) => (
                <div key={spec.label}>
                  <p className="text-[10px] tracking-widest uppercase text-black/40 mb-1">{spec.label}</p>
                  <p className="text-sm font-medium">{spec.value}</p>
                </div>
              ))}
            </div>

            {/* TASTING NOTES PIPS */}
            <div className="mb-8 space-y-4">
              <div className="grid grid-cols-[100px_1fr] items-center">
                <span className="text-[10px] tracking-widest uppercase text-black/40">Body</span>
                <RatingPips value={ratings.body} />
              </div>
              <div className="grid grid-cols-[100px_1fr] items-center">
                <span className="text-[10px] tracking-widest uppercase text-black/40">Acidity</span>
                <RatingPips value={ratings.acidity} />
              </div>
              <div className="grid grid-cols-[100px_1fr] items-center">
                <span className="text-[10px] tracking-widest uppercase text-black/40">Sweetness</span>
                <RatingPips value={ratings.sweetness} />
              </div>
            </div>

            <div className="mb-8">
              <label className="text-[10px] tracking-[0.3em] uppercase text-black/40 mb-4 block font-bold">
                Select Edition
              </label>
              <div className="flex flex-wrap gap-3">
                {variants.map((v) => {
                  const isActive = selectedVariant?.id === v.id;
                  return (
                    <button
                      key={v.id}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-6 py-3 rounded-full text-[11px] tracking-widest uppercase transition-all border ${
                        isActive 
                        ? "bg-black text-white border-black" 
                        : "bg-transparent text-black border-black/10 hover:border-black/30"
                      }`}
                    >
                      {v.type}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch gap-4">
              <QtyControl value={qty} onChange={setQty} />
              <AddToCartButton 
                product={product} 
                selectedVariant={selectedVariant} 
                quantity={qty} 
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER: OTHER BEANS */}
      <section className="bg-[#f9f9f9]">
        <OtherProducts products={allProducts} currentId={product.id} />
      </section>
    </main>
  );
}

/* ---------------- HELPERS ---------------- */

function RatingPips({ value }: { value: number }) {
  return (
    <div className="flex gap-1.5">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={`h-1.5 w-8 rounded-full transition-colors ${
            i < value ? "bg-[#6B0F12]" : "bg-black/5"
          }`}
        />
      ))}
    </div>
  );
}
function QtyControl({ value, onChange }: { value: number; onChange: (n: number) => void }) {
  return (
    <div className="grid grid-cols-3 items-center border border-black/10 rounded-2xl h-14 w-full lg:w-40 bg-white shadow-sm overflow-hidden">
      <button 
        onClick={() => onChange(Math.max(1, value - 1))} 
        className="h-full flex items-center justify-center hover:bg-black/5 active:bg-black/10 transition-colors text-xl"
      >
        –
      </button>
      <span className="flex items-center justify-center font-bold text-sm tabular-nums">
        {value}
      </span>
      <button 
        onClick={() => onChange(value + 1)} 
        className="h-full flex items-center justify-center hover:bg-black/5 active:bg-black/10 transition-colors text-xl"
      >
        +
      </button>
    </div>
  );
}

function formatIDR(price: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(price);
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