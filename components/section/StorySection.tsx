
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function StorySection() {
  const ref = useRef<HTMLElement | null>(null);

  return (
    <section ref={ref} className="relative w-full overflow-hidden text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_18%_18%,rgba(255,236,214,0.10),transparent_55%),radial-gradient(900px_circle_at_82%_32%,rgba(192,140,86,0.14),transparent_60%),linear-gradient(180deg,#0A0A0A_0%,#0E0D0B_45%,#0B0A08_100%)]" />
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
                width={32}
                height={32}
                className="opacity-90"
              />
              <div className="flex items-center gap-3">
                {/* <span className="h-px w-10 bg-gradient-to-r from-transparent via-white/45 to-transparent" /> */}
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
            </motion.div>
          </div>

          <div className="relative w-full h-[520px] md:h-[560px]">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-10 top-10 h-64 w-64 rounded-full blur-3xl bg-[radial-gradient(circle_at_50%_50%,rgba(255,220,170,0.14),transparent_62%)]" />
              <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full blur-3xl bg-[radial-gradient(circle_at_50%_50%,rgba(192,140,86,0.12),transparent_62%)]" />
            </div>

            {/* image 1 */}
            <motion.div className="absolute top-6 left-1/2 -translate-x-1/2 w-[86%] md:w-[72%]">
              <div className="relative overflow-hidden rounded-2xl bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
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
            <motion.div className="absolute bottom-4 left-8 md:left-0 w-[68%] md:w-[48%]" >
              <div className="relative overflow-hidden rounded-2xl bg-white/5 shadow-[0_36px_90px_rgba(0,0,0,0.55)]">
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
          </div>
        </div>
      </div>
    </section>
  );
}
