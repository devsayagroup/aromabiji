"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function NewHeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-ink">
      
      {/* ─── VIDEO BACKGROUND ─────────────────────────────────────────────── */}
      <div className="absolute inset-0 h-full w-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          // Add a highly compressed placeholder image here to fix loading delays
          poster="/images/hero-poster.jpg" 
          className="h-full w-full object-cover opacity-100"
        >
          {/* Replace with your actual compressed video path */}
          <source src="/background/hero-video.mp4" type="video/mp4" />
        </video>

        {/* 
          The Cinematic Vignette 
          This is the secret to making a portrait video look good on desktop.
          It fades the edges into the dark ink background. 
        */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#2A1F1D_100%)] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/60" />
      </div>

      {/* ─── CONTENT ──────────────────────────────────────────────────────── */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 font-text text-[10px] font-semibold uppercase tracking-[0.4em] text-canvas"
        >
          Aroma Biji Indonesia
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-style text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-canvas max-w-4xl uppercase"
        >
          Pride of Indonesia
        </motion.h1>

        {/* <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-lg font-text text-sm md:text-base font-light leading-relaxed text-canvas/70"
        >
          Coffee defined by time, not shortcuts. We honor forty years of Indonesian tradition to bring you beans as honest as the land they come from.
        </motion.p> */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12"
        >
          <Link
            href="/coffee"
            className="group inline-flex h-14 items-center justify-center rounded-full bg-canvas px-10 font-text text-[11px] font-medium uppercase tracking-[0.2em] text-ink transition-transform duration-300 hover:scale-105"
          >
            Discover Our Collection
          </Link>
        </motion.div>
      </div>

      {/* ─── SCROLL INDICATOR ─────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-canvas/40"
      >
        <span className="font-text text-[9px] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown size={14} className="animate-bounce" strokeWidth={1.5} />
      </motion.div>
    </section>
  );
}