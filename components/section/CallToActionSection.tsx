"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function CtaSection() {
  const containerRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full bg-canvas py-24 px-4 md:px-8 lg:px-12 flex items-center justify-center"
    >
      <motion.div 
        style={{ scale, opacity }}
        className="relative flex h-auto min-h-[550px] w-full max-w-7xl flex-col items-center justify-center overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] bg-ink shadow-[0_20px_60px_rgba(42,31,29,0.15)]"
      >
        {/* Parallax Image Background */}
        <div className="absolute inset-0 h-full w-full">
          <Image
            src="/images/foto-product-2.jpg" 
            alt="Aroma Biji Harvest"
            fill
            className="object-cover opacity-40 grayscale-[20%]"
            quality={100}
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#2A1F1D_90%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-ink/40" />
        </div>

        {/* ─── CONTENT ────────────────────────────────────────────────────── */}
        <div className="relative z-10 flex w-full max-w-2xl flex-col items-center px-6 py-20 text-center">
          
          <p className="mb-4 font-text text-[10px] font-semibold uppercase tracking-[0.4em] text-canvas/50">
            The Standard
          </p>

          <h2 className="mb-6 font-style text-5xl leading-[1.05] tracking-tight text-canvas md:text-7xl">
            Taste the Origin.
          </h2>

          <p className="mb-12 font-text text-sm font-light leading-relaxed text-canvas/70 md:text-lg max-w-md">
            Unblended, single-origin harvests. Experience the authentic depth of Indonesia’s highest altitudes.
          </p>

          {/* ─── DUAL CTA BUTTONS ─────────────────────────────────────────── */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            <Link
              href="/coffee"
              className="group flex h-14 w-full sm:w-auto items-center justify-center rounded-full bg-canvas px-10 font-text text-[11px] font-medium uppercase tracking-[0.2em] text-ink transition-all duration-300 hover:scale-105 hover:bg-white"
            >
              Coffee Collection
            </Link>
            
            <Link
              href="/chocolate"
              className="group flex h-14 w-full sm:w-auto items-center justify-center rounded-full border border-canvas/20 bg-transparent px-10 font-text text-[11px] font-medium uppercase tracking-[0.2em] text-canvas transition-all duration-300 hover:scale-105 hover:bg-canvas/10 hover:border-canvas/40"
            >
              Chocolate Editions
            </Link>
          </div>
          
        </div>
      </motion.div>
    </section>
  );
}