// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";

// export default function StorySection() {
//   return (
//     <section className="relative w-full bg-brown text-white overflow-hidden flex items-center">
//       <Image
//         src="/background/pattern.svg"
//         alt="Aroma Biji background"
//         fill
//         className="object-cover opacity-10 pointer-events-none"
//       />
//       <div className="relative container mx-auto px-6 md:px-20 py-24">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div className="flex flex-col justify-center items-start max-w-xl">
//             <Image src="/logo/Icon-Logo.png" alt="icon logo aroma biji" className="mb-4" width={50} height={50} />
//             <motion.h1
//               initial={{ opacity: 0, y: 60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1 }}
//               viewport={{ once: true }}
//               className="text-4xl md:text-5xl font-style tracking-wider leading-tight  uppercase"
//             >
//               From the Highlands to Your Cup
//             </motion.h1>

//             <motion.div
//               initial={{ opacity: 0, y: 60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: 0.3 }}
//               viewport={{ once: true }}
//               className="mt-4"
//             >
//               <p className="font-text text-md leading-loose">
//                 The journey of our coffee begins in Indonesia’s fertile highlands, where the climate and soil create the perfect environment for rich, flavorful beans. Our farmers handpick only the best cherries, ensuring each one meets our quality standards.
//               </p>
//             </motion.div>
//           </div>
//           <div className="relative w-full h-[500px] flex justify-center">
//             <Image
//               src="/background/story-1.png"
//               alt="Aroma Biji Story 1"
//               width={380}
//               height={380}
//               className="absolute top-10 left-1/2 -translate-x-1/2 rounded-lg shadow-lg"
//             />
//             <Image
//               src="/background/story-2.png"
//               alt="Aroma Biji Story 2"
//               width={260}
//               height={260}
//               className="absolute top-60 left-[50%] md:left-[20%] -translate-x-1/2 rounded-lg shadow-2xl"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

/**
 * Luxury StorySection:
 * - Editorial dark backdrop (matches hero/header)
 * - Subtle parallax on pattern + stacked images
 * - Cleaner typography + chips + CTA
 * - More premium image framing (borders, soft shadow, overlay)
 */

export default function StorySection() {
  const ref = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const patternY = useTransform(scrollYProgress, [0, 1], reduceMotion ? ["0%", "0%"] : ["-3%", "3%"]);
  const img1Y = useTransform(scrollYProgress, [0, 1], reduceMotion ? ["0%", "0%"] : ["-6%", "6%"]);
  const img2Y = useTransform(scrollYProgress, [0, 1], reduceMotion ? ["0%", "0%"] : ["-10%", "10%"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.9, 0.5]);

  return (
    <section ref={ref} className="relative w-full overflow-hidden text-white">
      {/* BACKDROP */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_18%_18%,rgba(255,236,214,0.10),transparent_55%),radial-gradient(900px_circle_at_82%_32%,rgba(192,140,86,0.14),transparent_60%),linear-gradient(180deg,#0A0A0A_0%,#0E0D0B_45%,#0B0A08_100%)]" />

        {/* pattern (parallax) */}
        <motion.div style={{ y: patternY }} className="absolute inset-0 opacity-10">
          <Image
            src="/background/pattern.svg"
            alt="Aroma Biji pattern"
            fill
            className="object-cover pointer-events-none"
          />
        </motion.div>

        {/* vignette */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(70% 70% at 50% 35%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.75) 100%)",
          }}
        />

        {/* warm glow */}
        <motion.div style={{ opacity: glowOpacity }} className="absolute inset-0">
          <div className="absolute -left-28 top-24 h-[520px] w-[520px] rounded-full blur-3xl bg-[radial-gradient(circle_at_50%_50%,rgba(255,220,170,0.18),transparent_62%)]" />
          <div className="absolute -right-40 top-0 h-[620px] w-[620px] rounded-full blur-3xl bg-[radial-gradient(circle_at_50%_50%,rgba(192,140,86,0.16),transparent_62%)]" />
        </motion.div>

        {/* grain */}
        <div
          className="absolute inset-0 opacity-[0.10] mix-blend-overlay"
          style={{
            backgroundImage:
              "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22160%22 height=%22160%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%22160%22 height=%22160%22 filter=%22url(%23n)%22 opacity=%220.45%22/></svg>')",
          }}
        />

        {/* hairline */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>

      <div className="relative container mx-auto px-6 md:px-20 py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-14 items-center">
          {/* TEXT */}
          <div className="flex flex-col justify-center items-start max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-5"
            >
              <Image
                src="/logo/Icon-Logo.png"
                alt="Aroma Biji emblem"
                width={46}
                height={46}
                className="opacity-90"
              />
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-gradient-to-r from-transparent via-white/45 to-transparent" />
                <span className="text-[11px] tracking-[0.35em] uppercase text-white/65">
                  The Journey
                </span>
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 22, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.05, ease: [0.2, 0.7, 0.2, 1] }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-style tracking-wider leading-[1.05] uppercase"
            >
              From the Highlands to Your Cup
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-5 font-text text-sm md:text-base leading-relaxed text-white/78"
            >
              The journey of our coffee begins in Indonesia’s fertile highlands, where climate and soil
              shape rich, nuanced flavor. Our farmers handpick only the best cherries—so every lot meets
              our standard before it ever reaches the roast.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25 }}
              viewport={{ once: true }}
              className="mt-8 flex items-center gap-5"
            >
              <Link
                href="/story"
                className="group inline-flex items-center gap-3 rounded-full border border-white/16 bg-white/6 px-6 py-3 text-[11px] uppercase tracking-[0.28em] text-white hover:bg-white/10 hover:border-white/22 transition"
              >
                Read the full story
                <span className="text-white/55 group-hover:text-white/80 transition">↗</span>
              </Link>

              {/* <Link
                href="/product"
                className="text-[11px] uppercase tracking-[0.28em] text-white/60 hover:text-white transition"
              >
                Explore coffee ↗
              </Link> */}
            </motion.div>
          </div>

          {/* IMAGES */}
          <div className="relative w-full h-[520px] md:h-[560px]">
            {/* card glow */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-10 top-10 h-64 w-64 rounded-full blur-3xl bg-[radial-gradient(circle_at_50%_50%,rgba(255,220,170,0.14),transparent_62%)]" />
              <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full blur-3xl bg-[radial-gradient(circle_at_50%_50%,rgba(192,140,86,0.12),transparent_62%)]" />
            </div>

            {/* image 1 */}
            <motion.div
              style={{ y: img1Y }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: [0.2, 0.7, 0.2, 1] }}
              viewport={{ once: true }}
              className="absolute top-6 left-1/2 -translate-x-1/2 w-[86%] md:w-[72%]"
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
                <Image
                  src="/background/story-1.png"
                  alt="Aroma Biji Story 1"
                  width={900}
                  height={900}
                  className="h-[320px] md:h-[360px] w-full object-cover opacity-95"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/55 via-black/10 to-transparent" />
              </div>
            </motion.div>

            {/* image 2 */}
            <motion.div
              style={{ y: img2Y }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.08, ease: [0.2, 0.7, 0.2, 1] }}
              viewport={{ once: true }}
              className="absolute bottom-4 left-8 md:left-0 w-[68%] md:w-[48%]"
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-white/5 shadow-[0_36px_90px_rgba(0,0,0,0.55)]">
                <Image
                  src="/background/story-2.png"
                  alt="Aroma Biji Story 2"
                  width={700}
                  height={700}
                  className="h-[240px] md:h-[270px] w-full object-cover opacity-95"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/60 via-black/10 to-transparent" />
              </div>
            </motion.div>

            {/* <div className="pointer-events-none absolute right-4 top-4 rounded-full border border-white/14 bg-white/5 px-4 py-2 text-[10px] tracking-[0.32em] uppercase text-white/70 backdrop-blur-md">
              Highlands • Harvest
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
