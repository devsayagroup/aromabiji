// "use client"
// import Link from "next/link";
// import Image from "next/image";
// import UnderlineButton from "../ui/UnderlineButton";
// export default function AboutSection() {
//   return (
//     <section className="relative md:h-[70vh] bg-brown flex mx-6 md:mx-12 py-12 items-center rounded-lg overflow-hidden">
//         <div className="container mx-auto bg-brown flex mx-6 md:mx-12 py-12 items-center">
     
            
//             <div className="absolute inset-0 bg-gradient-to-l from-black via-cream/75 to-transparent z-10" />

//             <div className="relative grid grid-cols-1 md:grid-cols-2 place-items-center z-20 text-left text-white px-6 md:px-8">
//                <div className="relative w-full flex justify-center">
//                 <Image
//                   src="/images/foto-product-2.jpg"
//                   alt="Aroma Biji"
//                   width={500}
//                   height={500}
//                   className="rounded-md"
//                 />
                
    

//                 <Image 
//                   src="/logo/Icon-Logo.png" 
//                   alt="Aroma biji" 
//                   className="absolute top-5/6 md:top-70 left-1/2 md:left-[13%] -translate-x-1/2 rounded-lg" 
//                   width={100} 
//                   height={100} />

//               </div>
//               <div className="mt-22 md:mt-0 ">
//                   {/* <Image src="/logo/Icon-packaging.png" alt="icon logo aroma biji" className="mb-4 ml-[-12]" width={50} height={50} /> */}
              
//                 <h1 className="text-3xl font-style md:text-5xl font-medium leading-tight uppercase">
//                     Crafted Through Generations
//                 </h1>
              
//                 <p className="text-sm md:text-md font-text mt-4 leading-loose max-w-xl">
//                   For over 40 years, we’ve dedicated our hearts to the art of coffee making. 
//                   From humble beginnings to a legacy of craftsmanship, Aroma Biji stands as a symbol of authenticity. 
//                   Our journey is guided by generations who believe that great coffee comes from respect for nature, for people, 
//                   and for tradition.
//                 </p>

              

//                 <div className="flex flex-col md:flex-row mx-auto mt-6 justify-start gap-2 md:gap-4">
//                   <UnderlineButton
//                     href="/about"
//                     label="Learn more about us"
//                     theme="dark"
//                     underlineWeight="thin"
//                   />
//                 </div>
//               </div>
//             </div>
//         </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import UnderlineButton from "../ui/UnderlineButton";

/**
 * Luxury AboutSection (matches hero/header vibe)
 * - Dark editorial backdrop + warm glow + grain
 * - Subtle parallax on image + ornament
 * - Better spacing/typography + premium chips
 * - Keeps your existing UnderlineButton
 */

export default function AboutSection() {
  const ref = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], reduceMotion ? ["0%", "0%"] : ["-4%", "4%"]);
  const badgeY = useTransform(scrollYProgress, [0, 1], reduceMotion ? ["0%", "0%"] : ["-10%", "10%"]);
  const textY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [10, -10]);

  return (
    <section ref={ref} className="relative mx-6 md:mx-12 my-10 overflow-hidden rounded-2xl">
      {/* BACKDROP */}
      <div className="absolute inset-0">
        {/* base gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_15%_20%,rgba(255,236,214,0.10),transparent_55%),radial-gradient(900px_circle_at_85%_35%,rgba(192,140,86,0.14),transparent_60%),linear-gradient(180deg,#0A0A0A_0%,#0E0D0B_45%,#0B0A08_100%)]" />

        {/* vignette */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(70% 70% at 50% 35%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.75) 100%)",
          }}
        />

        {/* grain */}
        <div
          className="absolute inset-0 opacity-[0.10] mix-blend-overlay"
          style={{
            backgroundImage:
              "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22160%22 height=%22160%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%22160%22 height=%22160%22 filter=%22url(%23n)%22 opacity=%220.45%22/></svg>')",
          }}
        />

        {/* hairline */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-6 md:px-10 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* IMAGE BLOCK */}
            <div className="relative">
              <motion.div
                style={{ y: imgY }}
                initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1.0, ease: [0.2, 0.7, 0.2, 1] }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-2xl bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
              >
                <Image
                  src="/images/foto-product-2.jpg"
                  alt="Aroma Biji"
                  width={900}
                  height={900}
                  priority={false}
                  className="h-[340px] md:h-[420px] w-full object-cover opacity-95"
                />

                {/* image overlay for premium contrast */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/55 via-black/10 to-transparent" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_65%_40%,rgba(255,220,170,0.14),transparent_62%)]" />
              </motion.div>

              {/* FLOATING LOGO BADGE */}
              {/* <motion.div
                style={{ y: badgeY }}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.2, 0.7, 0.2, 1] }}
                viewport={{ once: true }}
                className="absolute -bottom-6 left-6 md:left-10"
              >
                <div className="rounded-2xl border border-white/14 bg-black/40 backdrop-blur-xl p-4 shadow-[0_18px_50px_rgba(0,0,0,0.45)]">
                  <Image
                    src="/logo/Icon-Logo.png"
                    alt="Aroma Biji emblem"
                    width={84}
                    height={84}
                    className="opacity-95"
                  />
                </div>
              </motion.div> */}

              {/* <div className="pointer-events-none absolute right-4 top-4 hidden md:flex flex-col gap-2">
                <div className="rounded-full border border-white/18 bg-white/5 px-4 py-2 text-[10px] tracking-[0.32em] uppercase text-white/70 backdrop-blur-md">
                  Since 1980s
                </div>
                <div className="rounded-full border border-white/18 bg-white/5 px-4 py-2 text-[10px] tracking-[0.32em] uppercase text-white/70 backdrop-blur-md">
                  Small Batch
                </div>
              </div> */}
            </div>

            {/* TEXT BLOCK */}
            <motion.div
              style={{ y: textY }}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, ease: [0.2, 0.7, 0.2, 1] }}
              viewport={{ once: true }}
              className="text-white"
            >
              {/* Eyebrow */}
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-gradient-to-r from-transparent via-white/45 to-transparent" />
                <span className="text-[11px] tracking-[0.35em] uppercase text-white/65">
                  Our Story
                </span>
                <span className="h-px w-10 bg-gradient-to-r from-transparent via-white/45 to-transparent" />
              </div>

              <h2 className="font-style uppercase tracking-wider leading-[1.05] text-3xl md:text-5xl">
                Crafted Through Generations
              </h2>

              <p className="mt-5 font-text text-sm md:text-base leading-relaxed text-white/78 max-w-xl">
                For over 40 years, we’ve dedicated our hearts to the art of coffee making. From humble
                beginnings to a legacy of craftsmanship, Aroma Biji stands as a symbol of authenticity.
                Our journey is guided by generations who believe great coffee comes from respect for
                nature, for people, and for tradition.
              </p>

              {/* Value chips (reusable element) */}
              <div className="mt-6 flex flex-wrap gap-2">
                {["Single Origin", "Roasted with Care", "Indonesia Heritage"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/14 bg-white/5 px-4 py-2 text-[10px] tracking-[0.30em] uppercase text-white/70 backdrop-blur-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* bottom fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
      </div>
    </section>
  );
}
