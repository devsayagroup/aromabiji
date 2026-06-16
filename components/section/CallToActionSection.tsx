"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function CtaSection() {
  const containerRef = useRef<HTMLElement | null>(null);

  // Smooth scroll reveals for the bento box
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  // The bento box scales up and fades in seamlessly as you scroll down to it
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full bg-canvas py-24 px-4 md:px-8 lg:px-12 flex items-center justify-center"
    >
      {/* ─── THE BENTO CONTAINER ──────────────────────────────────────────── 
          A single, massive rounded card creating a contained, editorial frame. */}
      <motion.div 
        style={{ scale, opacity }}
        className="relative flex h-[20vh] min-h-[550px] w-full max-w-7xl flex-col items-center justify-center overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] bg-ink shadow-[0_20px_60px_rgba(42,31,29,0.15)]"
      >
        {/* Parallax Image Background inside the Bento Box */}
        <div className="absolute inset-0 h-full w-full">
          <Image
            src="/images/foto-product-2.jpg" 
            alt="Aroma Biji Harvest"
            fill
            className="object-cover opacity-40 grayscale-[20%]"
            quality={100}
          />
          {/* Smooth radial vignette to draw absolute focus to the text */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#2A1F1D_90%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-ink/40" />
        </div>

        {/* ─── CONTENT ────────────────────────────────────────────────────── */}
        <div className="relative z-10 flex w-full max-w-2xl flex-col items-center px-6 text-center">
          
          {/* Eyebrow */}
          <p className="mb-4 font-text text-[10px] font-semibold uppercase tracking-[0.4em] text-canvas/50">
            The Standard
          </p>

          {/* Strong, unpretentious headline */}
          <h2 className="mb-6 font-style text-5xl leading-[1.05] tracking-tight text-canvas md:text-7xl">
            Taste the Origin.
          </h2>

          {/* Simple, definitive sub-copy */}
          <p className="mb-10 font-text text-sm font-light leading-relaxed text-canvas/70 md:text-lg">
            Unblended, single-origin harvests. Experience the authentic depth of Indonesia’s highest altitudes.
          </p>

          {/* ─── CTA BUTTON ─────────────────────────────────────────────────── */}
          <Link
            href="/product"
            className="group flex h-12 md:h-14 items-center justify-center rounded-full bg-canvas px-8 md:px-10 font-text text-[12px] font-medium uppercase tracking-widest text-ink transition-all duration-300 hover:scale-105 hover:bg-white"
          >
            Shop the Collection
          </Link>
          
        </div>
      </motion.div>
    </section>
  );
}