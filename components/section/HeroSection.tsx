"use client";

import React, { useRef, useEffect, useCallback } from "react";
import { motion, useReducedMotion,} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function easeInOutQuart(t: number) {
  return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
}
function easeOutExpo(t: number) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}
function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
function clamp(v: number, a: number, b: number) {
  return Math.max(a, Math.min(b, v));
}
function remap(v: number, a: number, b: number, c: number, d: number) {
  return c + (d - c) * clamp((v - a) / (b - a), 0, 1);
}
function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}


export default function HomeMorphSection() {
  const shouldReduceMotion = useReducedMotion();

  const outerRef        = useRef<HTMLDivElement | null>(null);
  const panelRef        = useRef<HTMLDivElement | null>(null);
  const heroContentRef  = useRef<HTMLDivElement | null>(null);
  const aboutContentRef = useRef<HTMLDivElement | null>(null);
  const progressRef     = useRef<HTMLDivElement | null>(null);
  const rafRef          = useRef<number>(0);

  const animate = useCallback(() => {
    const outer  = outerRef.current;
    const panel  = panelRef.current;
    const hero   = heroContentRef.current;
    const about  = aboutContentRef.current;
    const progEl = progressRef.current;

    if (!outer || !panel || !hero || !about) {
      rafRef.current = requestAnimationFrame(animate);
      return;
    }

    const rect   = outer.getBoundingClientRect();
    const totalH = outer.offsetHeight - window.innerHeight;
    const scrolled = -rect.top;
    const p = clamp(scrolled / totalH, 0, 1);

    if (progEl) progEl.style.width = (p * 100) + "%";

    if (shouldReduceMotion) {
      hero.style.opacity  = p < 0.4 ? "1" : "0";
      about.style.opacity = p > 0.5 ? "1" : "0";
      about.style.pointerEvents = p > 0.5 ? "auto" : "none";
      rafRef.current = requestAnimationFrame(animate);
      return;
    }

    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // Responsive contracted-card margins
    // Mobile: tight sides, moderate top (below navbar)
    // Tablet: medium sides
    // Desktop: wide sides matching lg:mx-[16rem]
    const targetMX = vw < 768
      ? 16
      : vw < 1024
        ? 64
        : 256;
    const targetMY = vw < 768
      ? Math.max(vh * 0.08, 144)
      : vw < 1024
        ? 96
        : 144;

    // Phase 1: hero fades + drifts up [0 → 0.28]
    const heroFade  = clamp(remap(p, 0, 0.28, 1, 0), 0, 1);
    const heroSlide = easeInOutCubic(1 - heroFade);
    hero.style.opacity   = String(heroFade);
    hero.style.transform = `translateY(${-heroSlide * 68}px)`;

    // Phase 2: panel contracts [0.18 → 0.76]
    const morphRaw = clamp(remap(p, 0.18, 0.76, 0, 1), 0, 1);
    const morphT   = easeInOutQuart(morphRaw);

    panel.style.top          = lerp(0, targetMY,     morphT) + "px";
    panel.style.bottom       = lerp(0, targetMY + 8, morphT) + "px";
    panel.style.left         = lerp(0, targetMX,     morphT) + "px";
    panel.style.right        = lerp(0, targetMX,     morphT) + "px";
    panel.style.borderRadius = lerp(0, 28,           morphT) + "px";

    // Phase 3: about fades in [0.52 → 0.85]
    const aboutRaw   = clamp(remap(p, 0.52, 0.85, 0, 1), 0, 1);
    const aboutEased = easeOutExpo(aboutRaw);
    about.style.opacity       = String(aboutRaw);
    about.style.transform     = `translateY(${lerp(28, 0, aboutEased)}px)`;
    about.style.pointerEvents = aboutRaw > 0.05 ? "auto" : "none";

    rafRef.current = requestAnimationFrame(animate);
  }, [shouldReduceMotion]);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [animate]);

  return (
    <div ref={outerRef} className="relative w-full" style={{ height: "350vh" }}>

      <div
        className="sticky top-0 h-screen w-full overflow-hidden"
        style={{ background: "#FBF9F8" }}
      >
        <div
          ref={progressRef}
          className="absolute top-0 left-0 h-px z-50 pointer-events-none"
          style={{ width: "0%", background: "rgba(209,197,194,0.5)", transition: "width 0.05s linear" }}
        />

        <div
          ref={panelRef}
          className="absolute overflow-hidden"
          style={{
            top: 0, bottom: 0, left: 0, right: 0,
            borderRadius: 0,
            background: "linear-gradient(160deg, #2A1F1D 0%, #241A18 52%, #1A1211 100%)",
            willChange: "top, bottom, left, right, border-radius",
          }}
        >
          {/* Ambient glow — top left */}
          <div className="absolute pointer-events-none" style={{
            top: "-10%", left: "-5%", width: "70%", height: "70%",
            background: "radial-gradient(ellipse at 30% 30%, rgba(209,197,194,0.07) 0%, transparent 65%)",
          }} />
          {/* Ambient glow — bottom right */}
          <div className="absolute pointer-events-none" style={{
            bottom: "-20%", right: "-10%", width: "80%", height: "80%",
            background: "radial-gradient(ellipse at 70% 70%, rgba(90,71,67,0.18) 0%, transparent 60%)",
          }} />

          {/* ── HERO CONTENT ── */}
          <div
            ref={heroContentRef}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 md:px-14 text-center"
            style={{ willChange: "opacity, transform" }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 36, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.2, ease: [0.2, 0.7, 0.2, 1] }}
              className="font-style font-medium uppercase tracking-wider leading-[1.2] text-4xl md:text-7xl lg:text-8xl text-canvas"
            >
              Meet the<br />Original Taste
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.18, ease: [0.2, 0.7, 0.2, 1] }}
              className="mt-5 max-w-lg font-text text-md md:text-lg leading-relaxed text-canvas/65"
            >
              Coffee defined by time, not shortcuts. We honor forty years of Indonesian
              tradition to bring you beans as honest as the land they come from.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.32, ease: [0.2, 0.7, 0.2, 1] }}
              className="mt-10"
            >
              <Link
                href="/product"
                className="group flex items-center gap-4 font-sans text-[10px] tracking-[0.25em] uppercase text-canvas/45 hover:text-canvas transition-colors duration-500"
              >
                <span>Discover Our Coffee</span>
                <span className="block h-px w-6 bg-canvas/30 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-12 group-hover:bg-canvas" />
              </Link>
            </motion.div>
          </div>

          <div
            ref={aboutContentRef}
            className="absolute inset-0 z-10 overflow-hidden"
            style={{
              opacity: 0,
              transform: "translateY(28px)",
              pointerEvents: "none",
              willChange: "opacity, transform",
            }}
          >

            <div className="flex flex-col h-full md:hidden">
              <div className="relative flex-shrink-0 overflow-hidden" style={{ height: "30%" }}>
                <Image
                  src="/images/foto-product-2.jpg"
                  alt="Aroma Biji Luwak Coffee"
                  fill
                  sizes="100vw"
                  className="object-cover object-center opacity-90"
                  style={{ filter: "grayscale(15%) contrast(1.05)" }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-ink/20 to-ink/80" />
              </div>

              <div className="flex flex-col justify-center flex-1 px-8 pb-6 pt-3 text-canvas">
                <p className="mb-3 font-sans text-[9px] tracking-[0.4em] uppercase text-canvas/38">
                  Our Story
                </p>
                <h2 className="font-style uppercase tracking-wider leading-[1.12] text-[1.8rem] text-canvas">
                  Crafted Through<br />Generations
                </h2>
                <p className="mt-3 font-text text-[15px] leading-[1.8] text-canvas/58 font-light">
                  For over 40 years, we&apos;ve dedicated our hearts to the art of coffee making.
                  From humble beginnings to a legacy of craftsmanship, Aroma Biji stands as
                  a symbol of authenticity. Our journey is guided by generations who believe
                  great coffee comes from respect for nature, for people, and for tradition.
                </p>
              </div>
            </div>

            <div className="hidden md:flex lg:hidden h-full items-center gap-8 px-10 py-8">
              <div
                className="relative flex-shrink-0 overflow-hidden rounded-2xl"
                style={{ width: "42%", height: "78%" }}
              >
                <Image
                  src="/images/foto-product-2.jpg"
                  alt="Aroma Biji Luwak Coffee"
                  fill
                  sizes="42vw"
                  className="object-cover object-center opacity-90"
                  style={{ filter: "grayscale(15%) contrast(1.05)" }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
              </div>

              <div className="flex flex-col justify-center text-canvas min-w-0 flex-1">
                <p className="mb-5 font-sans text-[9px] tracking-[0.4em] uppercase text-canvas/38">
                  Our Story
                </p>
                <h2 className="font-style uppercase tracking-wider leading-[1.08] text-3xl md:text-4xl text-canvas">
                  Crafted Through<br />Generations
                </h2>
                <p className="mt-5 font-text text-sm leading-[1.9] text-canvas/58 font-light">
                  For over 40 years, we&apos;ve dedicated our hearts to the art of coffee making.
                  From humble beginnings to a legacy of craftsmanship, Aroma Biji stands as
                  a symbol of authenticity. Our journey is guided by generations who believe
                  great coffee comes from respect for nature, for people, and for tradition.
                </p>
              </div>
            </div>

            <div className="hidden lg:grid h-full grid-cols-2 items-center gap-16 px-12 py-14">
              {/* Image */}
              <div
                className="relative overflow-hidden rounded-[1.5rem]"
                style={{ height: "85%" }}
              >
                <Image
                  src="/images/foto-product-2.jpg"
                  alt="Aroma Biji Luwak Coffee"
                  fill
                  sizes="50vw"
                  className="object-cover object-center opacity-90"
                  style={{ filter: "grayscale(15%) contrast(1.05)" }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
              </div>

              {/* Text */}
              <div className="text-canvas">
                <p className="mb-7 font-sans text-[9px] tracking-[0.45em] uppercase text-canvas/38">
                  Our Story
                </p>
                <h2 className="font-style uppercase tracking-wider leading-[1.08] text-4xl lg:text-5xl text-canvas">
                  Crafted Through<br />Generations
                </h2>
                <p className="mt-7 font-text text-base leading-[1.95] text-canvas/60 font-light max-w-md">
                  For over 40 years, we&apos;ve dedicated our hearts to the art of coffee making.
                  From humble beginnings to a legacy of craftsmanship, Aroma Biji stands as
                  a symbol of authenticity. Our journey is guided by generations who believe
                  great coffee comes from respect for nature, for people, and for tradition.
                </p>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink/75 to-transparent z-20" />
        </div>
      </div>

    </div>
  );
}