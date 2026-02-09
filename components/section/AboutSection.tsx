"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import UnderlineButton from "../ui/UnderlineButton";

export default function AboutSection() {
  const ref = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [10, -10]);

  return (
    <section ref={ref} className="relative mx-6 md:mx-12 my-24 overflow-hidden rounded-2xl">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_15%_20%,rgba(255,236,214,0.10),transparent_55%),radial-gradient(900px_circle_at_85%_35%,rgba(192,140,86,0.14),transparent_60%),linear-gradient(180deg,#0A0A0A_0%,#0E0D0B_45%,#0B0A08_100%)]" />
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(70% 70% at 50% 35%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.75) 100%)",
          }}
        />
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-6 md:px-10 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="relative">
              <motion.div
                className="relative overflow-hidden rounded-2xl bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
              >
                <Image
                  src="/images/foto-product-2.jpg"
                  alt="Aroma Biji"
                  width={800}
                  height={800}
                  priority={false}
                  className="h-[340px] md:h-[420px] w-full object-cover opacity-95"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/55 via-black/10 to-transparent" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_65%_40%,rgba(255,220,170,0.14),transparent_62%)]" />
              </motion.div>
            </div>

            <motion.div
              style={{ y: textY }}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, ease: [0.2, 0.7, 0.2, 1] }}
              viewport={{ once: true }}
              className="text-white"
            >
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
                  <span className="text-[11px] tracking-[0.35em] uppercase text-white/65">
                    Our Story
                  </span>
                </div>
              </motion.div>

              <h2 className="font-style uppercase tracking-wider leading-[1.05] text-3xl md:text-5xl">
                Crafted Through Generations
              </h2>

              <p className="mt-5 font-text text-sm md:text-base leading-relaxed text-white/78 max-w-xl">
                For over 40 years, we’ve dedicated our hearts to the art of coffee making. From humble
                beginnings to a legacy of craftsmanship, Aroma Biji stands as a symbol of authenticity.
                Our journey is guided by generations who believe great coffee comes from respect for
                nature, for people, and for tradition.
              </p>

            </motion.div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
      </div>
    </section>
  );
}
