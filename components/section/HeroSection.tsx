// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import UnderlineButton from "../ui/UnderlineButton";

// export default function HeroSection() {
//   return (
//     <section className="h-screen w-full bg-white text-black overflow-hidden flex items-center">
//       <div className="relative container mx-auto px-6 md:px-14">
//         <div className="flex flex-col justify-center items-center md:items-center">
//           <motion.h1
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             viewport={{ once: true }}
//             className="text-xl md:text-2xl mb-2 font-style tracking-wider leading-tight text-center uppercase"
//           >
//             Aroma Biji
//           </motion.h1>

//           <motion.h1
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-6xl font-style tracking-wider leading-tight text-center uppercase"
//           >
//             Meet the original taste
//           </motion.h1>

//           <motion.div
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.3 }}
//             viewport={{ once: true }}
//             className="text-center mt-4 max-w-lg"
//           >
//             {/* <p className="font-text text-lg mb-4 leading-relaxed">
//               For over 40 years, Aroma Biji has been dedicated to the art of coffee.
//               A story of passion, craftsmanship, and authenticity poured into every cup.
//             </p> */}

//             <p className="font-text text-lg mb-4 leading-relaxed">
//               Aroma Biji is where legacy meets perfection. Every bean we craft carries decades of mastery, 
//               from soil to soul, from our land to your cup. Taste the essence of Indonesia’s finest coffee.
//             </p>

//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//               viewport={{ once: true }}
//             >
//               <UnderlineButton
//                 href="/product"
//                 label="Discover Our Coffee"
//                 theme="light"
//                 underlineWeight="thin"
//               />
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import React, { useMemo, useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";
import UnderlineButton from "../ui/UnderlineButton";

export default function HeroSection() {
  const ref = useRef<HTMLElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Text parallax (very subtle)
  const titleY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, -22]);
  const bodyY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, -10]);
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.9, 0.35]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden text-white flex items-center"
    >
      
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_18%_18%,rgba(255,236,214,0.10),transparent_55%),radial-gradient(900px_circle_at_82%_32%,rgba(192,140,86,0.14),transparent_60%),linear-gradient(180deg,#0A0A0A_0%,#0E0D0B_45%,#0B0A08_100%)]" />
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>


      <div className="relative z-10 w-full md:pt-30">
        <div className="container mx-auto px-6 md:px-14">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="mb-4 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
              <span className="text-[11px] tracking-[0.35em] uppercase text-white/70">
                Aroma Biji
              </span>
              <span className="h-px w-10 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
            </motion.div>
            
            <motion.h1
              style={{ y: titleY }}
              initial={{ opacity: 0, y: 36, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.15, ease: [0.2, 0.7, 0.2, 1] }}
              viewport={{ once: true }}
              className="font-style uppercase tracking-wider leading-[1.03] text-4xl md:text-6xl lg:text-7xl"
            >
              Meet the Original Taste
            </motion.h1>

            <motion.div
              style={{ opacity: glowOpacity }}
              className="pointer-events-none absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 h-[320px] w-[720px] max-w-[92vw] rounded-full blur-3xl"
            >
              <div className="h-full w-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,220,170,0.18),transparent_62%)]" />
            </motion.div>

            {/* Body copy */}
            <motion.div
              style={{ y: bodyY }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15 }}
              viewport={{ once: true }}
              className="mt-5 max-w-2xl"
            >
              <p className="font-text text-sm md:text-md leading-relaxed text-white/78">
                Aroma Biji is where legacy meets perfection. Every bean we craft carries decades of mastery,
                from soil to soul, from our land to your cup. Taste the essence of Indonesia’s finest coffee.
              </p>

              {/* CTA row */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.35 }}
                viewport={{ once: true }}
                className="mt-7 flex flex-col items-center gap-3"
              >
                <UnderlineButton
                  href="/product"
                  label="Discover Our Coffee"
                  theme="dark" // if your component supports it; otherwise keep "light"
                  underlineWeight="thin"
                />

                {/* Secondary micro-link for luxury UX */}
                {/* <a
                  href="/story"
                  className="text-[11px] uppercase tracking-[0.28em] text-white/65 hover:text-white transition"
                >
                  Explore our heritage
                </a> */}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="pt-10 flex flex-col items-center gap-2 text-white/55"
            >
              <motion.div
                animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
                transition={shouldReduceMotion ? {} : { duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="h-8 w-px bg-gradient-to-b from-white/40 to-transparent"
              />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent" />
    </section>
  );
}
