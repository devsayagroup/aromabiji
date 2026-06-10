'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const VARIANTS = [
  { name: 'Java Preanger',  img: '/products/3d-javapreanger.png',  origin: 'Java, West Java'  },
  { name: 'Alur Badak',     img: '/products/3d-alurbadak.png',     origin: 'Sumatra'          },
  { name: 'Lintong Nihuta', img: '/products/3d-lintongnihuta.png', origin: 'Sumatra'          },
  { name: 'Red Bourbon',    img: '/products/3d-redbourbon.png',    origin: 'Sumatra'          },
  { name: 'Toraja',         img: '/products/3d-toraja.png',        origin: 'Sulawesi'         },
  { name: 'Aceh Gayo',      img: '/products/3d-acehgayo.png',      origin: 'Aceh, Sumatra'   },
  { name: 'Mandailing',      img: '/products/3d-acehgayo.png',      origin: 'Aceh, Sumatra'   }
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
const GAP_VW = 12;
const FAN_POS = VARIANTS.map((_, i) => -35.5 + i * GAP_VW);

// Logical size for anchor math (actual visual size via CSS clamp below)
const BOX_BASE = 480; // px — larger base for math, visual via clamp

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
  const bxScale = useTransform(
    p,
    [0,    0.30,  0.65,  0.80,  1.00],
    [1.15, 1.15,  0.82,  0.72,  0.70],
  );
  const bxX = useTransform(
    p,
    [0,       0.30,      0.55,       0.80,                    1.00],
    ['0vw',   '0vw',   '-12vw',  `${FAN_POS[0]}vw`,  `${FAN_POS[0]}vw`],
  );

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
        {/* Subtle grain texture */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none z-0 opacity-[0.022]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '180px',
          }}
        />

        {/* §1 — HEADLINE */}
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
            className="font-light leading-[1.2] tracking-[-0.025em] text-brown font-style text-6xl md:text-[7rem]"
          >
            Dark Chocolate
          </motion.h1>
        </motion.div>

        {/* §1 — CTA */}
        <motion.div
          style={{ opacity: ctaO, y: ctaY }}
          className="absolute bottom-[12%] inset-x-0 flex flex-col items-center gap-6 pointer-events-none z-20"
        >
          {/* <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.9 }}
            className="text-[11px] tracking-[0.28em] uppercase text-[rgba(139,94,60,0.55)] font-light"
          >
            Seven Origins · Wild Luwak · 55% Cocoa
          </motion.p> */}
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}
                className="text-[#2C1A0E]/60 text-lg md:text-xl text-center font-light max-w-2xl mx-auto">
                Wild Luwak Arabica infused with 55% single-origin cocoa.<br />Uncompromising depth in every bite.
            </motion.p>
          {/* <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.9 }}
            className="flex gap-3 pointer-events-auto"
          >
            <button className="px-8 py-3 bg-[#1E0F06] text-[#F9F7F4] rounded-full text-[10px] tracking-[0.26em] uppercase font-medium">
              Shop Now
            </button>
            <button className="px-8 py-3 bg-transparent text-[rgba(30,15,6,0.6)] border border-[rgba(30,15,6,0.18)] rounded-full text-[10px] tracking-[0.26em] uppercase font-light">
              Our Story
            </button>
          </motion.div> */}
        </motion.div>

        {/* §2 — ABOUT COPY */}
        <motion.div
          style={{ opacity: abtO, x: abtX }}
          className="absolute right-[20%] top-1/2 -mt-[110px] w-[min(400px,_40vw)] pointer-events-none z-20"
        >
          <h2
            className="font-medium leading-[1.08] tracking-[-0.015em] text-[#1E0F06] font-style text-4xl mb-5"
          >
            Seven origins.<br />One masterpiece.
          </h2>
          <p className="text-lg leading-[1.90] text-[rgba(30, 15, 6, 0.68)] font-light">
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
          className="absolute top-5/9 left-1/2 z-10"
          style={{ width: 0, height: 0, transformStyle: 'preserve-3d' }}
        >
          {siblingMotion.map(({ v, x, opacity }) => (
            <motion.div
              key={v.name}
              style={{
                position: 'absolute',
                top:  -(BOX_BASE / 2),
                left: -(BOX_BASE / 2),
                width:  '460px',
                height: '460px',
                x,
                scale: 0.72,
                opacity,
                transformOrigin: '50% 50%',
                willChange: 'transform, opacity',
              }}
            >
              <Image
                src={v.img}
                alt={v.name}
                fill
                sizes="(max-width:640px) 200px, (max-width:1024px) 28vw, 460px"
                className="object-contain drop-shadow-[0_10px_28px_rgba(30,15,6,0.13)]"
              />
              {/* Label */}
              <motion.div
                style={{ opacity: lblO, position: 'absolute', bottom: '-2.8rem', left: 0, right: 0 }}
                className="text-center pointer-events-none"
              >
                <p className="text-[15px] md:text-xl tracking-[0.18em] uppercase text-[rgba(139,94,60,0.82)] font-medium">
                  {v.name}
                </p>
                {/* <p className="text-md tracking-[0.22em] uppercase text-[rgb(139, 94, 60)] font-medium mt-0.5">
                  {v.origin}
                </p> */}
              </motion.div>
            </motion.div>
          ))}

          {/* HERO BOX — Java Preanger (phases 1 → 3) */}
          <motion.div
            style={{
              position: 'absolute',
              top:  -(BOX_BASE / 2),
              left: -(BOX_BASE / 2),
              width:  '460px',
              height: '460px',
              x: bxX,
              scale: bxScale,
              zIndex: 50,
              transformOrigin: '50% 50%',
              willChange: 'transform',
            }}
          >
            <Image
              src={VARIANTS[0].img}
              alt={VARIANTS[0].name}
              fill
              sizes="(max-width:640px) 200px, (max-width:1024px) 28vw, 460px"
              className="object-contain drop-shadow-[0_20px_48px_rgba(30,15,6,0.20)]"
              priority
            />
            {/* §3 fan label for hero */}
            <motion.div
              style={{ opacity: lblO, position: 'absolute', bottom: '-2.8rem', left: 0, right: 0 }}
              className="text-center pointer-events-none"
            >
              <p className="text-[15px] md:text-xl tracking-[0.18em] uppercase text-[rgba(139,94,60,0.82)] font-medium">
                {VARIANTS[0].name}
              </p>
              {/* <p className="text-[10px] tracking-[0.22em] uppercase text-[rgba(139,94,60,0.40)] font-light mt-0.5">
                {VARIANTS[0].origin}
              </p> */}
            </motion.div>
          </motion.div>
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

  const stat1Opacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const stat1Y       = useTransform(scrollYProgress, [0.2, 0.4], [40, 0]);

  const stat2Opacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const stat2Y       = useTransform(scrollYProgress, [0.3, 0.5], [40, 0]);

  const stat3Opacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const stat3Y       = useTransform(scrollYProgress, [0.4, 0.6], [40, 0]);

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

      {/* Stats grid */}
      {/* <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6">
        {[
          { n: '1600', unit: 'm', label: 'Highland altitude', body: 'Where the Red Bourbon cherries mature slowly for maximum natural sweetness.' },
          { n: '100', unit: '%', label: 'Single Varietal', body: 'Pure Red Bourbon. A singular, unfiltered expression of Indonesian terroir.' },
          { n: '48', unit: 'hr', label: 'Peak Freshness', body: 'From roast to your door. Preserving the delicate floral and berry notes.' },
        ].map((stat, i) => {
            const opacity = [stat1Opacity, stat2Opacity, stat3Opacity][i];
            const y = [stat1Y, stat2Y, stat3Y][i];
            return (
              <motion.div key={i} style={{ opacity, y }}>
                <p className="font-text text-6xl font-light tracking-tight text-[#FDFBF9]">
                  {stat.n} {stat.unit}
                </p>
                <p className="mt-6 text-[10px] uppercase tracking-[0.3em] font-light text-[#C4956A]/70">{stat.label}</p>
                <p className="mt-3 text-[#FDFBF9]/60 text-base font-light leading-relaxed max-w-[280px]">{stat.body}</p>
              </motion.div>
            )
        })}
      </div> */}
    </section>
  );
}


function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null);
  
  return (
    <section ref={ref} className="bg-[#FBFBFD] py-32 md:py-48 ">
      <div className="container mx-auto px-6 md:px-24">
        
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
              className="flex flex-col bg-brownyellow/5 py-8 px-6 md:py-8 md:px-12 md:rounded-[24px] md:rounded-[32px]"
            >
              <h3
                className="text-[#1D1D1F]  mb-4 font-style font-semibold text-xl md:text-2xl"
              >
                {f.title}
              </h3>
              
              <p className="text-md md:text-xl leading-[1.6] text-brown font-light max-w-sm">
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
      <div className="container mx-auto px-6 md:px-24">
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
          className="relative bg-gradient-to-br from-[#2C1A0E] via-[#1A0F0A] to-[#0A0503] rounded-[40px] overflow-hidden flex flex-col md:flex-row min-h-[450px] md:min-h-[550px] shadow-2xl shadow-black/10"
        >
          <div className="flex-1 flex flex-col justify-center items-start p-10 md:p-20 z-10">
            <h3 className="text-3xl md:text-5xl text-[#F5F5F7] font-style font-medium mb-8 leading-[1.2] max-w-xl">
              The Archive. A collection that is truly limited.
            </h3>
            <Link 
              href="/chocolate"
              className="bg-[#FFFFFF] text-[#000000] rounded-full px-6 py-3 text-[15px] font-medium hover:scale-105 hover:bg-gray-100 transition-all duration-300"
            >
              Shop the Collection
            </Link>
          </div>

          <div className="relative flex-1 w-full min-h-[400px] md:min-h-0 flex items-center justify-center md:justify-end">
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
        <ParallaxB/>
        <FeaturesSection />
        <CallToAction/>
      </main>
    </>
  );
}