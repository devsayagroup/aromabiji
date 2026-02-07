// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { Product } from "@/types/product";
// import { motion } from "framer-motion";
// import { useRef } from "react";

// export default function OtherProducts({
//   products = [],
//   currentId,
// }: {
//   products?: Product[];
//   currentId: string;
// }) {
//   const others = products.filter(p => p.id !== currentId);
//   if (!others.length) return null;

//   const containerRef = useRef<HTMLDivElement>(null);

//   const scroll = (dir: "left" | "right") => {
//     if (!containerRef.current) return;
//     const width = containerRef.current.clientWidth;
//     containerRef.current.scrollBy({
//       left: dir === "left" ? -width * 0.8 : width * 0.8,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <section className="py-20 px-6 md:px-18 relative">
//       {/* HEADER */}
//       <div className="flex items-center justify-between mb-6">
//         <h3 className="uppercase tracking-widest text-sm opacity-70">
//           Other Products
//         </h3>

//         <div className="flex gap-2">
//           <button
//             onClick={() => scroll("left")}
//             className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center hover:bg-black/5 transition"
//           >
//             ←
//           </button>
//           <button
//             onClick={() => scroll("right")}
//             className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center hover:bg-black/5 transition"
//           >
//             →
//           </button>
//         </div>
//       </div>

//       {/* CAROUSEL */}
//       <motion.div
//         ref={containerRef}
//         className="flex gap-6 overflow-x-auto scroll-smooth cursor-grab active:cursor-grabbing pb-4 snap-x snap-mandatory"
//         drag="x"
//         dragConstraints={{ left: -1000, right: 0 }}
//         dragElastic={0.1}
//         style={{
//           scrollbarWidth: "none",
//         }}
//       >
//         <style jsx>{`
//           div::-webkit-scrollbar {
//             display: none;
//           }
//         `}</style>

//         {others.map(product => (
//           <motion.div
//             key={product.id}
//             whileHover={{ y: -6 }}
//             transition={{ type: "spring", stiffness: 200, damping: 18 }}
//             className="min-w-[260px] sm:min-w-[330px]"
//           >
//             <Link href={`/product/${product.id}`}>
//               <article className="rounded-2xl overflow-hidden bg-[#EFE5D8] hover:shadow-xl transition">
//                 <div className="relative aspect-[5/5]">
//                   <Image
//                     src={product.variants[0].image}
//                     alt={product.name}
//                     fill
//                     className="object-contain p-6"
//                   />
//                 </div>

//                 <div className="p-4">
//                   <p className="text-xs uppercase opacity-60">
//                     {product.origin}
//                   </p>
//                   <h4 className="font-serif text-lg">
//                     {product.name}
//                   </h4>
//                 </div>
//               </article>
//             </Link>
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// }

// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { Product } from "@/types/product";
// import Marquee from "react-fast-marquee";
// import { useRef } from "react";

// export default function OtherProducts({
//   products = [],
//   currentId,
// }: {
//   products?: Product[];
//   currentId: string;
// }) {
//   const others = products.filter(p => p.id !== currentId);
//   if (!others.length) return null;

//   const marqueeRef = useRef<any>(null);

//   const scrollLeft = () => {
//     marqueeRef.current?.marquee?.container?.scrollBy({
//       left: -300,
//       behavior: "smooth",
//     });
//   };

//   const scrollRight = () => {
//     marqueeRef.current?.marquee?.container?.scrollBy({
//       left: 300,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <section className="bg-gray-100 py-12 relative overflow-hidden">
//       <div className="px-6 md:px-18 mb-8 flex items-center justify-between">
//         <div>
//           <p className="uppercase tracking-[0.25em] text-xs opacity-50 mb-1">
//             Explore
//           </p>
//           <h3 className="font-style text-2xl md:text-3xl">
//             Other Selections
//           </h3>
//         </div>

//         {/* <div className="flex gap-2">
//           <button
//             onClick={scrollLeft}
//             className="w-10 h-10 border border-black/20 rounded-full flex items-center justify-center text-sm hover:bg-black/5 transition"
//             aria-label="Scroll left"
//           >
//             ←
//           </button>
//           <button
//             onClick={scrollRight}
//             className="w-10 h-10 border border-black/20 rounded-full flex items-center justify-center text-sm hover:bg-black/5 transition"
//             aria-label="Scroll right"
//           >
//             →
//           </button>
//         </div> */}
//       </div>

//       {/* MARQUEE */}
//       <Marquee
//         ref={marqueeRef}
//         speed={50}
//         pauseOnHover
//         gradient={false}
//         className="overflow-hidden"
//       >
//         {others.map(product => (
//           <div
//             key={product.id}
//             className="mx-2 w-[240px] md:w-[300px]"
//           >
//             <Link href={`/product/${product.id}`}>
//               <article className="border border-black/10 rounded-xl overflow-hidden bg-[#EFE5D8]">
                
//                 {/* IMAGE */}
//                 <div className="relative aspect-square">
//                   <Image
//                     src={product.variants[0].image}
//                     alt={product.name}
//                     fill
//                     className="object-contain p-8"
//                   />
//                 </div>

//                 {/* TEXT */}
//                 <div className="px-5 pb-5 pt-2">
//                   <p className="text-[10px] tracking-widest uppercase opacity-50 mb-1">
//                     {product.origin}
//                   </p>
//                   <h4 className="font-style text-lg leading-tight">
//                     {product.name}
//                   </h4>
//                 </div>
//               </article>
//             </Link>
//           </div>
//         ))}
//       </Marquee>
//     </section>
//   );
// }

"use client";

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/product";
import Marquee from "react-fast-marquee";
import { useRef } from "react";
import { getThemeTokens } from "@/lib/theme-tokens"; // adjust path

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

      {/* Marquee */}
      <Marquee
        ref={marqueeRef}
        speed={42}
        pauseOnHover
        gradient={false}
        className="relative overflow-hidden pt-6 pb-24"
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
                    t.shadow,
                  ].join(" ")}
                >
                  {/* IMAGE */}
                  <div className="relative aspect-[4/4] bg-white">
                    <Image
                      src={product.variants?.[0]?.image}
                      alt={product.name}
                      fill
                      className="object-contain p-8 md:p-10 transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(min-width: 768px) 320px, 250px"
                    />
                    {/* tiny warm highlight */}
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_circle_at_50%_25%,rgba(192,140,86,0.10),transparent_60%)]" />
                  </div>

                  {/* TEXT */}
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
                            t.underline, // ✅ uses your token accent
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

      {/* small bottom spacing */}
      <div className="relative h-2" />
    </section>
  );
}
