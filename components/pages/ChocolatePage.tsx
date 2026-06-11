'use client';

import { useRef, useEffect, useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const VARIANTS = [
  { name: 'Java Preanger',  img: '/products/3d-javapreanger.png',  origin: 'Java, West Java',  slug: 'java-preanger',  tagline: 'Earthy. Herbal. Unapologetic.',     color: '#2D5A3D' },
  { name: 'Alur Badak',     img: '/products/3d-alurbadak.png',     origin: 'North Sumatra',    slug: 'alur-badak',     tagline: 'Bold body. Wild finish.',           color: '#4A2C6E' },
  { name: 'Lintong Nihuta', img: '/products/3d-lintongnihuta.png', origin: 'North Sumatra',    slug: 'lintong-nihuta', tagline: 'Cedar notes. Highland soul.',       color: '#1E3A5F' },
  { name: 'Red Bourbon',    img: '/products/3d-redbourbon.png',    origin: 'South Sumatra',    slug: 'red-bourbon',    tagline: 'Berry-bright. Rarely found.',       color: '#8B1A1A' },
  { name: 'Toraja',         img: '/products/3d-toraja.png',        origin: 'Sulawesi',         slug: 'toraja',         tagline: 'Ancient terroir. Dark velvet.',     color: '#2C4A1E' },
  { name: 'Aceh Gayo',      img: '/products/3d-acehgayo.png',      origin: 'Aceh, Sumatra',    slug: 'aceh-gayo',      tagline: 'Clean. Bright. Fearless.',          color: '#D4C5A9' },
  { name: 'Andung Sari',    img: '/products/3d-andungsari.png',    origin: 'East Java',        slug: 'andung-sari',    tagline: 'Floral depth. Quiet power.',        color: '#8B7355' },
  { name: 'Mandailing',     img: '/products/3d-mandailing.png',    origin: 'North Sumatra',    slug: 'mandailing',     tagline: 'Full-bodied. Tobacco warmth.',      color: '#C4B99A' },
];

const FEATURES = [
  {
    number: '01',
    title: 'Single Origin',
    body: 'Every bar traces to one farm, one harvest. No blends. No ambiguity. Pure provenance.',
  },
  {
    number: '02',
    title: 'Wild Luwak',
    body: 'Natural fermentation from the most elusive source in Indonesian coffee culture.',
  },
  {
    number: '03',
    title: 'Dark Cocoa',
    body: 'Enough cocoa to be honest. Enough restraint to let the origin speak.',
  },
  {
    number: '04',
    title: 'Artisan Roast',
    body: 'Small batches, roasted to order. Delivered within 48 hours of sealing.',
  },
];

// ══════════════════════════════════════════════════════════════════════════════
// FAN MATH
//
// 6 boxes — equally spaced fan, hero (index 0) at leftmost slot.
// GAP_VW = 17vw between centers.
// Total span = 5 * 17 = 85vw. Half = 42.5vw.
// Position i = -42.5 + i * 17  (vw)
//   i=0 → -42.5   (hero, leftmost)
//   i=1 → -25.5
//   i=2 →  -8.5
//   i=3 →  +8.5
//   i=4 → +25.5
//   i=5 → +42.5   (rightmost)
// ══════════════════════════════════════════════════════════════════════════════
const GAP_VW = 10;
const FAN_POS = VARIANTS.map((_, i) => -35.5 + i * GAP_VW);

// Logical size for anchor math (actual visual size via CSS clamp below)
const BOX_BASE = 450; // px — larger base for math, visual via clamp

// ══════════════════════════════════════════════════════════════════════════════
// HERO SCROLL SECTION
//
// 400vh scroll track (up from 300vh) — more dwell time for the fan reveal.
//
// PHASE MAP (all mapped to 0..1 progress):
//   0.00–0.18  §1  Large hero, headline + CTA
//   0.18–0.28  §1→§2 transition
//   0.30–0.55  §2  Box drifts left, about copy slides in
//   0.55–0.68  §2→§3 transition
//   0.68–0.80  §3  Hero locks to leftmost slot
//   0.78–1.00  §3  Siblings cascade — all land well before p=1.0
//              §3  Labels fade in at 0.88
// ══════════════════════════════════════════════════════════════════════════════
function HeroScroll() {
  const trackRef = useRef<HTMLDivElement>(null);

  // Raw scroll progress over the 400vh track
  const { scrollYProgress: raw } = useScroll({
    target: trackRef,
    offset: ['start start', 'end end'],
  });

  // Spring-smooth the progress
  const p = useSpring(raw, { stiffness: 70, damping: 22, mass: 1 });

  // ── §1 HEADLINE ────────────────────────────────────────────────────────────
  const h1O = useTransform(p, [0, 0.20, 0.30], [1, 1, 0]);
  const h1Y = useTransform(p, [0.20, 0.30], [0, -32]);

  // ── §1 CTA ─────────────────────────────────────────────────────────────────
  const ctaO = useTransform(p, [0, 0.14, 0.26], [1, 1, 0]);
  const ctaY = useTransform(p, [0.14, 0.26], [0, -20]);

  // ── §2 ABOUT COPY ──────────────────────────────────────────────────────────
  const abtO = useTransform(p, [0.32, 0.46, 0.58, 0.68], [0, 1, 1, 0]);
  const abtX = useTransform(p, [0.32, 0.46, 0.68], [52, 0, 52]);

  // ── §3 COLLECTION HEADER ───────────────────────────────────────────────────
  const colO = useTransform(p, [0.70, 0.82], [0, 1]);
  const colY = useTransform(p, [0.70, 0.82], [18, 0]);

  // ── §3 LABELS ──────────────────────────────────────────────────────────────
  // Labels fade in after siblings have landed
  const lblO = useTransform(p, [0.88, 0.97], [0, 1]);

  // ── HERO BOX MOTION ────────────────────────────────────────────────────────
  // §1: scale=1.15, centered (x=0)
  // §2: scale=0.82, drifts left to -12vw
  // §3: scale=0.72, locks to fan slot 0 at -42.5vw

  const isMobile = useIsMobile();

const bxScale = useTransform(
  p,
  [0,    0.30,  0.65,  0.80,  1.00],
  isMobile
    ? [2.2,  2.2,   1.4,   0.72,  0.72]   // mobile/tablet: starts huge, collapses to sibling size
    : [1.15, 1.15,  0.82,  0.72,  0.70],  // desktop: unchanged
);
//   const bxScale = useTransform(
//     p,
//     [0,    0.30,  0.65,  0.80,  1.00],
//     [1.15, 1.15,  0.82,  0.72,  0.70],
//   );
  const bxX = useTransform(
    p,
    [0,       0.30,      0.55,       0.80,                    1.00],
    ['0vw',   '0vw',   '-12vw',  `${FAN_POS[0]}vw`,  `${FAN_POS[0]}vw`],
  );
  
    function useIsMobile() {
        const [isMobile, setIsMobile] = useState(false);
        useEffect(() => {
            const mq = window.matchMedia('(max-width: 1024px)');
            setIsMobile(mq.matches);
            const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
            mq.addEventListener('change', handler);
            return () => mq.removeEventListener('change', handler);
        }, []);
        return isMobile;
    }

  // ── SIBLING MOTION ─────────────────────────────────────────────────────────
  //
  // BUG FIX: Previously stagger of 0.032 caused last sibling (si=4) to have
  // animation window s=0.798, e=1.028 — exceeding p=1.0 so it never reached
  // its target position, causing the visual "tighter gap" on Toraja+Aceh Gayo.
  //
  // FIX: Tighter stagger (0.022), earlier start (0.68), shorter travel window.
  // si=0 Alur Badak:   s=0.680, e=0.860  ✓
  // si=1 Lintong:      s=0.702, e=0.882  ✓
  // si=2 Red Bourbon:  s=0.724, e=0.904  ✓
  // si=3 Toraja:       s=0.746, e=0.926  ✓
  // si=4 Aceh Gayo:    s=0.768, e=0.948  ✓  ← all land before p=1.0
  //
  const siblingMotion = VARIANTS.slice(1).map((v, si) => {
    const vi      = si + 1;
    const stagger = si * 0.022;
    const s       = 0.680 + stagger;
    const e       = 0.860 + stagger;
    return {
      v,
      // eslint-disable-next-line react-hooks/rules-of-hooks
      x:       useTransform(p, [s, e], [`${FAN_POS[0]}vw`, `${FAN_POS[vi]}vw`]),
      // eslint-disable-next-line react-hooks/rules-of-hooks
      opacity: useTransform(p, [s, s + 0.05, e], [0, 1, 1]),
    };
  });

  return (
    <div ref={trackRef} className="relative h-[400vh]">
      <div
        className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center"
        style={{ perspective: '1200px' }}
      >
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none z-0 opacity-[0.022]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '180px',
          }}
        />

        <motion.div
          style={{ opacity: h1O, y: h1Y }}
          className="absolute top-[14%] max-w-4xl mx-auto inset-x-0 text-center pointer-events-none z-10 px-5"
        >
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="text-[10px] tracking-[0.48em] uppercase text-[#8B5E3C] font-medium mb-4"
          >
            The Pride of Indonesia
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-light leading-[1.2] tracking-[-0.025em] text-brown font-style text-[4rem] md:text-[7rem]"
          >
            Dark Chocolate
          </motion.h1>
        </motion.div>

        <motion.div
          style={{ opacity: ctaO, y: ctaY }}
          className="absolute bottom-[12%] md:bottom-[8%] inset-x-0 flex flex-col items-center gap-6 pointer-events-none z-20"
        >
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}
                className="text-[#2C1A0E]/60 text-md md:text-xl text-center font-light max-w-sm md:max-w-2xl mx-auto">
                Wild Luwak Arabica infused with 55% single-origin cocoa.<br />Uncompromising depth in every bite.
            </motion.p>
        </motion.div>

        <motion.div
          style={{ opacity: abtO, x: abtX }}
          className="absolute right-[25%] md:right-[10%] top-[55%] -mt-[-200px] md:-mt-[110px] w-[min(700px,_70vw)] md:w-[min(400px,_40vw)] pointer-events-none z-20"
        >
          <h2
            className="font-medium leading-[1.1] tracking-[-0.015em] text-[#1E0F06] font-style text-2xl md:text-4xl mb-2 md:mb-4"
          >
            Eight origins.<br />One masterpiece.
          </h2>
          <p className="text-sm md:text-lg leading-[1.90] text-[rgba(30, 15, 6, 0.68)] font-light">
            Pure single-origin Arabica from the highlands of Sumatra, Java, and Sulawesi
            fused with 55% dark chocolate. Nothing added. Nothing hidden.
          </p>
        </motion.div>

        <motion.div
          style={{ opacity: colO, y: colY }}
          className="absolute top-[16%] inset-x-0 text-center pointer-events-none z-20 px-5"
        >
          <p className="text-[10px] tracking-[0.44em] uppercase text-[rgb(139, 94, 60)] font-light mb-2">
            Aroma Biji
          </p>
          <h2
            className="font-medium leading-[1.06] tracking-[-0.022em] text-[#1E0F06] font-style text-7xl"
          >
            The Collection
          </h2>
        </motion.div>

        <div
            className="absolute z-20"
            style={{ 
                width: 0, 
                height: 0, 
                transformStyle: 'preserve-3d',
                top: '55%',
                left: '50%',
            }}
            >
            <motion.div
                style={{
                position: 'absolute',
                top:    'calc(clamp(180px, 30vw, 450px) / -2)',
                left:   'calc(clamp(180px, 30vw, 450px) / -2)',
                width:  'clamp(180px, 30vw, 500px)',
                height: 'clamp(180px, 30vw, 500px)',
                x: bxX,
                scale: bxScale,
                zIndex: 0,           // ← behind siblings
                transformOrigin: '50% 50%',
                willChange: 'transform',
                }}
            >
                <Image
                src={VARIANTS[0].img}
                alt={VARIANTS[0].name}
                fill
                sizes="(max-width:640px) 180px, (max-width:1024px) 30vw, 450px"
                className="object-contain drop-shadow-[0_20px_48px_rgba(30,15,6,0.20)]"
                priority
                />
                <motion.div
                style={{ opacity: lblO, position: 'absolute', bottom: '-2.8rem', left: 0, right: 0 }}
                className="text-center pointer-events-none hidden md:block"
                >
                <p className="text-[15px] md:text-xl tracking-[0.18em] uppercase text-[rgba(139,94,60,0.82)] font-medium">
                    {VARIANTS[0].name}
                </p>
                </motion.div>
            </motion.div>

            {siblingMotion.map(({ v, x, opacity }, si) => (
                <motion.div
                key={v.name}
                style={{
                    position: 'absolute',
                    top:    'calc(clamp(180px, 30vw, 450px) / -2)',
                    left:   'calc(clamp(180px, 30vw, 450px) / -2)',
                    width:  'clamp(180px, 30vw, 500px)',
                    height: 'clamp(180px, 30vw, 500px)',
                    x,
                    scale: 0.72,
                    opacity,
                    zIndex: si + 1,    // ← each sibling above hero
                    transformOrigin: '50% 50%',
                    willChange: 'transform, opacity',
                }}
                >
                <Image
                    src={v.img}
                    alt={v.name}
                    fill
                    sizes="(max-width:640px) 180px, (max-width:1024px) 30vw, 450px"
                    className="object-contain drop-shadow-[0_10px_28px_rgba(30,15,6,0.13)]"
                />
                <motion.div
                    style={{ opacity: lblO, position: 'absolute', bottom: '-2.8rem', left: 0, right: 0 }}
                    className="text-center pointer-events-none hidden md:block"
                >
                    <p className="text-[15px] md:text-xl tracking-[0.18em] uppercase text-[rgba(139,94,60,0.82)] font-medium">
                    {v.name}
                    </p>
                </motion.div>
                </motion.div>
            ))}
            </div>
      </div>
    </div>
  );
}

function ParallaxB() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const marqueeX = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);

  return (
    <section 
      ref={ref} 
      className="relative overflow-hidden py-12 md:py-32"
      style={{
        background: 'linear-gradient(160deg, #1A0F0A 0%, #2C1A0E 50%, #3D2616 100%)'
      }}
    >
      <div className="overflow-hidden">
        <motion.div
          style={{ x: marqueeX }}
          className="flex gap-4 md:gap-12 whitespace-nowrap will-change-transform py-4"
        >
          {['Indonesia', '·', 'Red Bourbon', '·', 'Light Roast', '·', 'Highlands', '·', 'Single Varietal', '·', 'Hand-picked', '·', 'Indonesia', '·', 'Red Bourbon', '·', 'Light Roast', '·'].map((word, i) => (
            <span
              key={i}
              className="text-2xl md:text-7xl font-light font-style tracking-tight text-[#FDFBF9]/90"
            >
              {word}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


function VariantsSection() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (dir: 'left' | 'right') => {
        if (!scrollRef.current) return;
        scrollRef.current.scrollBy({ left: dir === 'right' ? 420 : -420, behavior: 'smooth' });
    };

    const leftPadding = 'max(24px, min(30px, 20vw))';

  return (
    <section className="bg-[#FBFBFD] py-20 md:py-32 overflow-hidden">
      <div className="mx-auto pl-6 md:pl-80" >
        <div className="flex items-end justify-between mb-12 md:mb-20 md:mr-80">          
            <div>
                <motion.p
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[11px] uppercase tracking-[0.4em] text-[#86868B] font-semibold mb-4"
                >
                The Archive
                </motion.p>
                <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="font-style font-light text-3xl md:text-6xl text-[#1D1D1F] tracking-tight leading-[1.1]"
                >
                Eight origins.<br className="hidden md:block" /> One obsession.
                </motion.h2>
            </div>

            {/* Prev/Next — desktop */}
            <div className="hidden md:flex items-center gap-3">
                <button
                onClick={() => scroll('left')}
                className="w-11 h-11 rounded-full border border-[#1E0F06]/20 flex items-center justify-center hover:border-[#1E0F06]/50 hover:bg-[#1E0F06]/5 transition-all duration-200"
                aria-label="Previous"
                >
                <span className="text-[#1E0F06] text-base leading-none">‹</span>
                </button>
                <button
                onClick={() => scroll('right')}
                className="w-11 h-11 rounded-full border border-[#1E0F06]/20 flex items-center justify-center hover:border-[#1E0F06]/50 hover:bg-[#1E0F06]/5 transition-all duration-200"
                aria-label="Next"
                >
                <span className="text-[#1E0F06] text-base leading-none">›</span>
                </button>
            </div>
        </div>

        {/* Scrollable row — left-padded, bleeds right */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide pb-6 snap-x snap-mandatory"
        >
          {VARIANTS.map((v, i) => (
            <motion.div
              key={v.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="flex-none w-[58vw] sm:w-[38vw] md:w-[300px] lg:w-[320px] snap-start"
            >
              {/* Glassmorphism card */}
              <Link href={`/chocolate/${v.slug}`} className="block group mb-6">
                <div
                    className="relative w-full aspect-[3/4] rounded-[28px] md:rounded-[36px] overflow-hidden"
                    style={{
                        background: `linear-gradient(160deg, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.55) 100%)`,
                        boxShadow: `0 4px 24px ${v.color}18, 0 1px 0 rgba(255,255,255,0.9) inset`,
                        border: `1px solid rgba(255,255,255,0.75)`,
                    }}
                    >
                    {/* Color tint pooled at bottom — gives each card its identity */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                        background: `radial-gradient(ellipse at 50% 110%, ${v.color}30 0%, transparent 65%)`,
                        }}
                    />
                    {/* Very subtle top sheen */}
                    <div
                        className="absolute inset-x-0 top-0 h-1/3 pointer-events-none"
                        style={{
                        background: `linear-gradient(180deg, rgba(255,255,255,0.35) 0%, transparent 100%)`,
                        }}
                    />

                  <motion.div
                    whileHover={{ scale: 1.05, y: -6 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={v.img}
                      alt={v.name}
                      fill
                      sizes="(max-width:640px) 78vw, (max-width:1024px) 55vw, 400px"
                      className="object-contain p-8 md:p-10 drop-shadow-[0_20px_48px_rgba(30,15,6,0.22)]"
                    />
                  </motion.div>
                </div>
              </Link>

              {/* Text */}
              <div className="mb-6 px-1">
                <h3 className="font-style text-2xl md:text-3xl font-medium text-[#1D1D1F] tracking-[-0.01em] mb-1">
                  {v.name}
                </h3>
                <p className="text-[10px] tracking-[0.22em] uppercase text-[#8B5E3C]/70 font-light mb-3">
                  {v.origin}
                </p>
                <p className="text-sm md:text-base text-[#1D1D1F]/40 font-light italic leading-relaxed">
                  {v.tagline}
                </p>
              </div>

              <div className="px-1">
                <Link
                  href={`/chocolate/${v.slug}`}
                  className="bg-[#1E0F06] text-[#FAF3EF] rounded-full px-6 py-3 text-[13px] font-medium hover:bg-[#3D2616] transition-colors duration-200 inline-block"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}

          {/* Right breathing room — bleeds to edge */}
          <div className="flex-none w-8 md:w-16" aria-hidden />
        </div>

        <div
          className="flex md:hidden items-center gap-3 mt-8"
        >
          <button
            onClick={() => scroll('left')}
            className="w-11 h-11 rounded-full border border-[#1E0F06]/20 flex items-center justify-center hover:border-[#1E0F06]/50 transition-all duration-200"
            aria-label="Previous"
          >
            <span className="text-[#1E0F06] text-base leading-none">‹</span>
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-11 h-11 rounded-full border border-[#1E0F06]/20 flex items-center justify-center hover:border-[#1E0F06]/50 transition-all duration-200"
            aria-label="Next"
          >
            <span className="text-[#1E0F06] text-base leading-none">›</span>
          </button>
        </div>

      </div>
    </section>
  );
}


function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null);
  
  return (
    <section ref={ref} className="bg-[#FBFBFD] py-20 md:py-32 ">
      <div className="container mx-auto px-6 md:px-32">
        
        <div className="mb-12 md:mb-32">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] uppercase tracking-[0.4em] text-[#86868B] font-semibold mb-6"
          >
            The Aroma Biji Standard
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#1D1D1F] tracking-tight font-style text-3xl md:text-7xl font-light leading-tight"
          >
            Design, heritage, and<br className="hidden md:block" /> absolute provenance.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 md:gap-y-24">
          {FEATURES.map((f, i) => (
            <motion.div
                key={f.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col relative overflow-hidden py-8 px-6 md:py-8 md:px-12 rounded-[24px] md:rounded-[32px]"
                style={{
                    background: 'linear-gradient(160deg, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.55) 100%)',
                    boxShadow: '0 4px 24px rgba(139,94,60,0.08), inset 0 1px 0 rgba(255,255,255,0.9)',
                    border: '1px solid rgba(255,255,255,0.75)',
                }}
                >
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                    background: 'radial-gradient(ellipse at 50% 110%, rgba(139,94,60,0.12) 0%, transparent 65%)',
                    }}
                />
                <div
                    className="absolute inset-x-0 top-0 h-1/3 pointer-events-none"
                    style={{
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.35) 0%, transparent 100%)',
                    }}
                />
                <h3 className="text-[#1D1D1F] mb-4 font-style font-semibold text-xl md:text-2xl relative z-10">
                    {f.title}
                </h3>
                <p className="text-md md:text-xl leading-[1.6] text-brown font-light max-w-sm relative z-10">
                    {f.body}
                </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
function CallToAction() {
  return (
    <section className="py-24 bg-[#FBFBFD]">
      <div className="container mx-auto px-6 md:px-32">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl font-style font-semibold text-[#1D1D1F] mb-8 md:mb-10 ml-2 md:ml-4"
        >
          Uncompromising. That is Aroma Biji.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="relative rounded-[40px] overflow-hidden flex flex-col md:flex-row min-h-[450px] md:min-h-[550px]"
          style={{
            background: 'linear-gradient(135deg, #2C1A0E 0%, #1A0F0A 50%, #0A0503 100%)',
            boxShadow: '0 32px 80px rgba(10,5,3,0.35)',
            border: '1px solid rgba(255,255,255,0.10)',
          }}
        >
          {/* Glass rim — top edge highlight */}
          <div
            className="absolute inset-x-0 top-0 h-px pointer-events-none z-10"
            style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.18) 30%, rgba(255,255,255,0.18) 70%, transparent 100%)' }}
          />

          {/* Glass sheen sweep across top */}
          <div
            className="absolute inset-x-0 top-0 h-[50%] pointer-events-none z-0"
            style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.055) 0%, transparent 100%)' }}
          />

          {/* Glass inner reflection — bottom left corner */}
          <div
            className="absolute bottom-0 left-0 w-[40%] h-[35%] pointer-events-none z-0"
            style={{ background: 'radial-gradient(ellipse at 0% 100%, rgba(255,255,255,0.04) 0%, transparent 70%)' }}
          />

          {/* Warm glow behind product image */}
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[55%] h-[80%] pointer-events-none z-0"
            style={{ background: 'radial-gradient(ellipse at 60% 50%, rgba(139,94,60,0.20) 0%, transparent 70%)' }}
          />

          {/* Text side */}
          <div className="flex-1 flex flex-col justify-center items-start p-10 md:p-20 z-10">
            <h3 className="text-3xl md:text-5xl text-[#F5F5F7] font-style font-medium leading-[1.2] max-w-xl mb-8">
              The Archive. A collection that is truly limited.
            </h3>

            <Link
              href="/chocolate"
              className="relative overflow-hidden rounded-full px-6 py-3 text-[15px] font-medium transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(160deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,1), 0 4px 16px rgba(0,0,0,0.25)',
                color: '#1E0F06',
              }}
            >
              <span
                className="absolute inset-x-0 top-0 h-1/2 pointer-events-none"
                style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.4) 0%, transparent 100%)', borderRadius: 'inherit' }}
              />
              <span className="relative z-10">Shop the Collection</span>
            </Link>
          </div>

          {/* Product image */}
          <div className="relative flex-1 w-full min-h-[400px] md:min-h-0 flex items-center justify-center md:justify-end z-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-[400px] md:h-full flex items-center justify-center p-0 md:pr-16"
            >
              <Image
                src="/products/3d-redbourbon.png"
                alt="Red Bourbon Dark Chocolate"
                fill
                className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function ChocolatePage() {
  return (
    <>
      <main className="bg-[#FAF3EF] font-text">
        <HeroScroll />
        <div className="-mt-32 md:-mt-20 lg:mt-0">
            <ParallaxB/>
        </div>
        <VariantsSection/>
        <FeaturesSection />
        <CallToAction/>
      </main>
    </>
  );
}