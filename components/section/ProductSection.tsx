// 'use client'
// import Image from 'next/image'
// import Marquee from 'react-fast-marquee'
// import { PRODUCTS } from '@/lib/data'
// import LuxuryButton from '../ui/LuxuryButton'

// export default function ProductSection() {
//   return (
//     <section className="relative w-full overflow-hidden bg-white pt-32 pb-[12rem] md:pb-[14rem]">
//       <Marquee
//         gradient={false}
//         speed={70}
//         pauseOnHover={true}
//         className="w-full"
//       >
//         {PRODUCTS.map((project, i) => (
//           <div
//             key={i}
//             className="relative w-[60vw] h-[350px] md:w-[18vw] md:h-[450px] mx-6 flex-shrink-0 overflow-hidden rounded-xl group"
//           >
//             <Image
//               src={project.image}
//               alt="Project"
//               fill
//               className="object-cover transition-transform duration-700"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
//           </div>
//         ))}
//       </Marquee>
//       <div className="h-40 mt-[-80px] bg-white rounded-t-[100%] flex flex-col justify-center items-center text-center relative z-40"></div>

//       <div className="absolute left-0 right-0 mt-[-80px] flex flex-col justify-center items-center text-center mx-8 z-45 md:mx-20">
//         <h1 className='max-w-3xl text-3xl md:text-5xl font-style leading-tight uppercase'>Immerse in the Richness of Indonesian Coffee</h1>
//           <LuxuryButton
//             label="Explore Our Collection" 
//             href="/product"
//             className='mt-4'
//           />
//       </div>
//     </section>
//   )
// }

"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { PRODUCTS } from "@/lib/data";

/**
 * White background + luxury feel:
 * - clean white base
 * - subtle warm glow + grain (very light)
 * - premium cards (soft border, shadow, hover zoom)
 * - revised button: solid black, gold-ish hairline effect, minimal
 */

function LuxeButton({
  label,
  href,
  className = "",
}: {
  label: string;
  href: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={[
        "group inline-flex items-center justify-center rounded-full px-6 py-3",
        "text-[11px] uppercase tracking-[0.28em]",
        "bg-black text-white border border-black/10",
        "hover:bg-[#0B0B0B] transition",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20",
        className,
      ].join(" ")}
    >
      <span className="relative">
        {label}
        {/* gold-ish underline shimmer */}
        <span className="pointer-events-none absolute left-0 -bottom-2 h-px w-full scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 bg-gradient-to-r from-transparent via-[#C08C56] to-transparent" />
      </span>
      <span className="ml-3 opacity-70 transition group-hover:opacity-100">↗</span>
    </a>
  );
}

export default function ProductSection() {
  const ref = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const headlineY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [14, -14]
  );

  const glowY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? ["0%", "0%"] : ["-5%", "5%"]
  );

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-white pt-28 pb-32 md:pt-32 md:pb-40"
    >
      {/* subtle luxury backdrop on white */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-white" />

        {/* warm glows */}
        <motion.div style={{ y: glowY }} className="absolute inset-0">
          <div className="absolute -left-32 top-10 h-[520px] w-[520px] rounded-full blur-3xl bg-[radial-gradient(circle_at_50%_50%,rgba(255,220,170,0.30),transparent_62%)]" />
          <div className="absolute -right-40 top-[-40px] h-[620px] w-[620px] rounded-full blur-3xl bg-[radial-gradient(circle_at_50%_50%,rgba(192,140,86,0.22),transparent_62%)]" />
        </motion.div>

        {/* very light grain */}
        <div
          className="absolute inset-0 opacity-[0.05] mix-blend-multiply"
          style={{
            backgroundImage:
              "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22160%22 height=%22160%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%22160%22 height=%22160%22 filter=%22url(%23n)%22 opacity=%220.35%22/></svg>')",
          }}
        />

        {/* hairline */}
        <div className="absolute left-0 right-0 top-0 h-px bg-black/5" />
      </div>

      {/* MARQUEE */}
      <div className="relative z-10">
        <Marquee gradient={false} speed={70} pauseOnHover className="w-full">
          {PRODUCTS.map((project, i) => (
            <div
              key={i}
              className="relative mx-6 h-[440px] w-[70vw] md:h-[460px] md:w-[18vw] flex-shrink-0 overflow-hidden rounded-2xl"
            >
              {/* card */}
              <div className="absolute inset-0 rounded-2xl border border-black/10 bg-white shadow-[0_24px_70px_rgba(0,0,0,0.10)]" />

              <div className="absolute inset-[1px] overflow-hidden rounded-2xl group">
                <Image
                  src={project.image}
                  alt={"Aroma Biji Coffee"}
                  fill
                  className="object-cover"
                />

                {/* light editorial overlay (on white theme) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-transparent" />
              </div>

              {/* caption */}
              {/* <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="flex items-end justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-[10px] tracking-[0.35em] uppercase text-white/70">
                      Aroma Biji
                    </div>
                    <div className="truncate text-sm tracking-wide text-white/90">
                      {project.name ?? "Single Origin Selection"}
                    </div>
                  </div>
                  <div className="text-white/75 text-xs">↗</div>
                </div>
              </div> */}

              {/* subtle shine */}
              <div className="pointer-events-none absolute -left-1/2 top-[-40%] h-[200%] w-[140%] rotate-12 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.22),transparent)] opacity-0 hover:opacity-100 transition-opacity duration-700" />
            </div>
          ))}
        </Marquee>
      </div>

      {/* CURVE (white) */}
      <div className="relative z-20 mt-[-76px]">
        <div className="h-48 md:h-56 rounded-t-[100%] bg-white" />
        <div className="absolute inset-x-0 top-0 h-px bg-black/5" />
      </div>

      {/* HEADLINE BLOCK */}
      <motion.div
        style={{ y: headlineY }}
        className="relative z-30 -mt-36 md:-mt-40 mx-8 md:mx-20 flex flex-col items-center text-center"
      >
        {/* eyebrow */}
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-10 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
          <span className="text-[11px] tracking-[0.35em] uppercase text-black/60">
            Collection
          </span>
          <span className="h-px w-10 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
        </div>

        <h1 className="max-w-4xl text-3xl md:text-5xl font-style leading-[1.05] uppercase tracking-wider text-black">
          Immerse in the Richness of Indonesian Coffee
        </h1>

        <LuxeButton label="Explore Our Collection" href="/product" className="mt-6" />

      </motion.div>
    </section>
  );
}
