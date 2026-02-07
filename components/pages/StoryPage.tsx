"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function StoryPage() {
  return (
    <main className="min-h-screen pt-20 bg-gradient-to-b from-white via-gray-50 to-amber-50 text-gray-900">
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 py-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-style uppercase leading-tight text-gray-900">
              From Passion to Perfection
            </h1>
            <p className="text-lg text-gray-700 max-w-xl">
              Every story begins with a spark. Ours was born from passion of love for the aroma, the ritual, and the art
              of coffee. Over four decades later, Aroma Biji stands as a symbol of heritage, sustainability, and
              craftsmanship, representing the finest taste of Indonesian coffee.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-96 md:h-[420px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/foto-product-7.jpg"
              alt="Coffee beans and brewing ritual"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden h-96 shadow-lg">
            <Image src="/images/full-product.jpeg" alt="Legacy of Aroma Biji" fill className="object-cover" />
          </div>

          <div>
            <h2 className="text-3xl font-style mb-4">A Legacy in Every Bean</h2>
            <p className="text-gray-700 mb-6">
              What began as a humble pursuit has evolved into a lifelong dedication. For more than forty years, we have
              refined every detail from cultivation to roasting, guided by honesty and authenticity. We believe that
              great coffee is not created by chance, but through intention and respect for nature.
            </p>
            <p className="text-gray-700">
              Each generation has passed down knowledge, preserving the values that make Aroma Biji unique. Every bean is
              a reflection of tradition, ethics, and the deep connection between people and land.
            </p>
          </div>
        </div>
      </section>

      <section id="sustainability" className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-style mb-4">Sustainability in Every Sip</h2>
            <p className="text-gray-700 mb-4">
              We care deeply about our planet, our home. Our ambition is to take part in a more sustainable future by
              minimizing our environmental footprint and supporting circular practices.
            </p>
            <p className="text-gray-700 mb-6">
              From using eco-friendly, paper-based packaging to aiming for 100% compostable pouches by 2025, we are
              committed to protecting what we love most. We encourage every customer to reuse and regenerate together,
              we can make each cup meaningful.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden h-96 shadow-lg">
            <Image src="/images/foto-product-3.jpg" alt="Sustainability practices" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-amber-700 to-amber-500 text-white">
        <div className="max-w-7xl mx-auto px-6 py-14 rounded-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-3xl font-style">Every Cup Has a Story</h3>
              <p className="mt-2 text-gray-100">
                Immerse yourself in the richness of our prestigious Indonesian coffee and discover the uniqueness of our
                Wild Luwak blend, ethically crafted and limited by nature.
              </p>
            </div>
            <div className="flex gap-4 justify-start md:justify-end">
              <Link href="/product" className="bg-white text-amber-700 px-6 py-3 rounded-xl font-medium shadow">
                Taste the Collection
              </Link>
              <Link href="/contact" className="border border-white px-6 py-3 rounded-xl text-white font-medium">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}



// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion, useReducedMotion } from "framer-motion";

// /** Minimal luxe button (matches your new UI language) */
// function LuxeButton({
//   href,
//   label,
//   variant = "primary",
//   className = "",
// }: {
//   href: string;
//   label: string;
//   variant?: "primary" | "ghost";
//   className?: string;
// }) {
//   const base =
//     "group inline-flex items-center justify-center rounded-full px-6 py-3 text-[11px] uppercase tracking-[0.28em] transition focus:outline-none focus-visible:ring-2";
//   const primary =
//     "bg-[#11110F] text-white hover:bg-[#0D0D0B] focus-visible:ring-black/15";
//   const ghost =
//     "bg-white text-black border border-black/10 hover:bg-black/[0.03] focus-visible:ring-black/15";

//   return (
//     <Link href={href} className={`${base} ${variant === "primary" ? primary : ghost} ${className}`}>
//       <span className="relative">
//         {label}
//         <span className="pointer-events-none absolute left-0 -bottom-2 h-px w-full scale-x-0 origin-left bg-gradient-to-r from-transparent via-[#C08C56] to-transparent transition-transform duration-500 group-hover:scale-x-100" />
//       </span>
//       <span className="ml-3 opacity-70 group-hover:opacity-100 transition">↗</span>
//     </Link>
//   );
// }

// export default function StoryPage() {
//   const reduceMotion = useReducedMotion();

//   return (
//     <main className="min-h-screen pt-20 bg-white text-black">
//       {/* HERO (white editorial with warm glow + grain) */}
//       <section className="relative overflow-hidden pt-14 md:pt-16">
//         <div className="pointer-events-none absolute inset-0">
//           <div className="absolute -left-40 top-10 h-[520px] w-[520px] rounded-full blur-3xl bg-[radial-gradient(circle_at_50%_50%,rgba(255,220,170,0.26),transparent_62%)]" />
//           <div className="absolute -right-44 top-[-60px] h-[620px] w-[620px] rounded-full blur-3xl bg-[radial-gradient(circle_at_50%_50%,rgba(192,140,86,0.16),transparent_62%)]" />
//           <div
//             className="absolute inset-0 opacity-[0.04] mix-blend-multiply"
//             style={{
//               backgroundImage:
//                 "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22160%22 height=%22160%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%22160%22 height=%22160%22 filter=%22url(%23n)%22 opacity=%220.35%22/></svg>')",
//             }}
//           />
//           <div className="absolute left-0 right-0 top-0 h-px bg-black/5" />
//         </div>

//         <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
//               animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//               transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
//               className="space-y-6"
//             >
//               <div className="flex items-center gap-3">
//                 <span className="h-px w-10 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
//                 <span className="text-[11px] tracking-[0.35em] uppercase text-black/55">
//                   Story
//                 </span>
//               </div>

//               <h1 className="text-4xl md:text-6xl font-style uppercase tracking-wider leading-[1.02]">
//                 From Passion to Perfection
//               </h1>

//               <p className="font-text text-sm md:text-base text-black/60 leading-relaxed max-w-xl">
//                 Every story begins with a spark. Ours was born from love for the aroma, the ritual, and the art of coffee.
//                 Over four decades later, Aroma Biji stands as a symbol of heritage, sustainability, and craftsmanship—
//                 representing the finest taste of Indonesian coffee.
//               </p>

//               <div className="flex flex-col sm:flex-row gap-3 pt-2">
//                 <LuxeButton href="#legacy" label="Read the legacy" variant="ghost" />
//                 <LuxeButton href="/product" label="Taste the collection" variant="primary" />
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
//               animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//               transition={{
//                 duration: 0.95,
//                 delay: reduceMotion ? 0 : 0.06,
//                 ease: [0.2, 0.7, 0.2, 1],
//               }}
//               className="relative h-[380px] md:h-[460px]"
//             >
//               <div className="absolute inset-0 rounded-2xl overflow-hidden bg-white shadow-[0_24px_70px_rgba(0,0,0,0.10)] ring-1 ring-black/5">
//                 <Image
//                   src="/images/foto-product-7.jpg"
//                   alt="Coffee beans and brewing ritual"
//                   fill
//                   className="object-cover"
//                   priority
//                   sizes="(min-width: 768px) 50vw, 100vw"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-tr from-black/55 via-black/10 to-transparent" />
//                 <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_60%_40%,rgba(255,220,170,0.14),transparent_62%)]" />
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* LEGACY */}
//       <section id="legacy" className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           <motion.div
//             initial={{ opacity: 0, y: 14 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.85, ease: [0.2, 0.7, 0.2, 1] }}
//             viewport={{ once: true, margin: "-80px" }}
//             className="relative h-[380px] md:h-[460px]"
//           >
//             <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-[0_24px_70px_rgba(0,0,0,0.10)] ring-1 ring-black/5">
//               <Image
//                 src="/images/full-product.jpeg"
//                 alt="Legacy of Aroma Biji"
//                 fill
//                 className="object-cover"
//                 sizes="(min-width: 768px) 50vw, 100vw"
//               />
//               <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-black/10 to-transparent" />
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 14 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.85, delay: reduceMotion ? 0 : 0.06, ease: [0.2, 0.7, 0.2, 1] }}
//             viewport={{ once: true, margin: "-80px" }}
//           >
//             <div className="flex items-center gap-3 mb-4">
//               <span className="h-px w-10 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
//               <span className="text-[11px] tracking-[0.35em] uppercase text-black/55">
//                 Heritage
//               </span>
//             </div>

//             <h2 className="text-3xl md:text-5xl font-style uppercase tracking-wider mb-4">
//               A Legacy in Every Bean
//             </h2>

//             <div className="space-y-4 text-sm md:text-base font-text text-black/60 leading-relaxed">
//               <p>
//                 What began as a humble pursuit has evolved into a lifelong dedication. For more than forty years, we’ve
//                 refined every detail—from cultivation to roasting—guided by honesty and authenticity.
//               </p>
//               <p>
//                 Each generation has passed down knowledge, preserving the values that make Aroma Biji unique. Every bean
//                 reflects tradition, ethics, and the deep connection between people and land.
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* SUSTAINABILITY */}
//       <section id="sustainability" className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           <motion.div
//             initial={{ opacity: 0, y: 14 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.85, ease: [0.2, 0.7, 0.2, 1] }}
//             viewport={{ once: true, margin: "-80px" }}
//           >
//             <div className="flex items-center gap-3 mb-4">
//               <span className="h-px w-10 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
//               <span className="text-[11px] tracking-[0.35em] uppercase text-black/55">
//                 Commitment
//               </span>
//             </div>

//             <h2 className="text-3xl md:text-5xl font-style uppercase tracking-wider mb-4">
//               Sustainability in Every Sip
//             </h2>

//             <div className="space-y-4 text-sm md:text-base font-text text-black/60 leading-relaxed">
//               <p>
//                 We care deeply about our planet—our home. Our ambition is to support a more sustainable future by
//                 minimizing our footprint and strengthening circular practices.
//               </p>
//               <p>
//                 From paper-based packaging to aiming for 100% compostable pouches by 2025, we’re committed to protecting
//                 what we love most. Together, we can make each cup meaningful.
//               </p>
//             </div>

//             <div className="mt-6 flex flex-col sm:flex-row gap-3">
//               <LuxeButton href="/product" label="Explore products" variant="primary" />
//               <LuxeButton href="/about" label="About Aroma Biji" variant="ghost" />
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 14 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.85, delay: reduceMotion ? 0 : 0.06, ease: [0.2, 0.7, 0.2, 1] }}
//             viewport={{ once: true, margin: "-80px" }}
//             className="relative h-[380px] md:h-[460px]"
//           >
//             <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-[0_24px_70px_rgba(0,0,0,0.10)] ring-1 ring-black/5">
//               <Image
//                 src="/images/foto-product-3.jpg"
//                 alt="Sustainability practices"
//                 fill
//                 className="object-cover"
//                 sizes="(min-width: 768px) 50vw, 100vw"
//               />
//               <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-black/10 to-transparent" />
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* CTA (white, rich, not amber gradient) */}
//       <section className="relative overflow-hidden py-16 md:py-20">
//         <div className="pointer-events-none absolute inset-0">
//           <div className="absolute left-0 right-0 top-0 h-px bg-black/5" />
//           <div className="absolute left-0 right-0 bottom-0 h-px bg-black/5" />
//           <div className="absolute -left-40 bottom-[-180px] h-[520px] w-[520px] rounded-full blur-3xl bg-[radial-gradient(circle_at_50%_50%,rgba(255,220,170,0.24),transparent_62%)]" />
//           <div className="absolute -right-40 top-[-220px] h-[520px] w-[520px] rounded-full blur-3xl bg-[radial-gradient(circle_at_50%_50%,rgba(192,140,86,0.16),transparent_62%)]" />
//         </div>

//         <div className="relative max-w-7xl mx-auto px-6 md:px-10">
//           <div className="rounded-3xl bg-white shadow-[0_24px_70px_rgba(0,0,0,0.10)] ring-1 ring-black/5 p-10 md:p-12">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//               <div>
//                 <div className="text-[11px] tracking-[0.35em] uppercase text-black/55">
//                   Invitation
//                 </div>
//                 <h3 className="mt-2 text-3xl md:text-5xl font-style uppercase tracking-wider text-black">
//                   Every Cup Has a Story
//                 </h3>
//                 <p className="mt-3 text-sm md:text-base text-black/60 leading-relaxed font-text">
//                   Immerse yourself in the richness of our Indonesian coffee and discover the uniqueness of Wild Luwak—
//                   ethically crafted and limited by nature.
//                 </p>
//               </div>

//               <div className="flex flex-col sm:flex-row gap-3 md:justify-end">
//                 <LuxeButton href="/product" label="Taste the collection" variant="primary" />
//                 <LuxeButton href="/contact" label="Contact us" variant="ghost" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
