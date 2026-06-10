'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

// ─── Product Data ─────────────────────────────────────────────────────────────
const PRODUCTS = [
  {
    id: 'alur-badak',
    name: 'Alur Badak',
    origin: 'Sumatra',
    region: 'Aceh Highlands',
    altitude: '1,500 m',
    cocoa: '55%',
    weight: '80g',
    notes: ['Wild Luwak', 'Earthy', 'Dark Fruit'],
    description: 'Untamed Aceh terroir. Complex, bold, and unyielding wild Luwak fermentation.',
    tasting: 'Dark fruit · Tobacco · Mineral earth',
    img: '/products/3d-alurbadak.png',
    number: '01',
    accentBg: '#F5F0EB',
  },
  {
    id: 'java-preanger',
    name: 'Java Preanger',
    origin: 'Java',
    region: 'Priangan Plateau',
    altitude: '1,400 m',
    cocoa: '55%',
    weight: '80g',
    notes: ['Floral', 'Caramel', 'Spice'],
    description: 'Silky and fragrant Arabica from Java\'s most storied growing region.',
    tasting: 'Caramel · Jasmine · Warm spice',
    img: '/products/3d-javapreanger.png',
    number: '02',
    accentBg: '#EEF3EE',
  },
  {
    id: 'red-bourbon',
    name: 'Red Bourbon',
    origin: 'Sumatra',
    region: 'Kerinci Valley',
    altitude: '1,600 m',
    cocoa: '55%',
    weight: '80g',
    notes: ['Cherry', 'Tobacco', 'Deep Cocoa'],
    description: 'A rare Kerinci varietal that burns with red fruit intensity and a smoky finish.',
    tasting: 'Red cherry · Dark cocoa · Cedar smoke',
    img: '/products/3d-redbourbon.png',
    number: '03',
    accentBg: '#F5ECEC',
  },
  {
    id: 'toraja',
    name: 'Toraja',
    origin: 'Sulawesi',
    region: 'Tana Toraja',
    altitude: '1,800 m',
    cocoa: '55%',
    weight: '80g',
    notes: ['Dark Cocoa', 'Cedar', 'Mineral'],
    description: 'Born in the sacred highlands of Sulawesi. Deep, ancient, and unmistakably Indonesian.',
    tasting: 'Bitter cocoa · Cedar · Wet stone',
    img: '/products/3d-toraja.png',
    number: '04',
    accentBg: '#EEE9E3',
  },
  {
    id: 'aceh-gayo',
    name: 'Aceh Gayo',
    origin: 'Sumatra',
    region: 'Gayo Mountains',
    altitude: '1,700 m',
    cocoa: '55%',
    weight: '80g',
    notes: ['Honey', 'Cream', 'Jasmine'],
    description: 'The rarest expression of highland terroir. Bone-dry clean with a honeyed floral lift.',
    tasting: 'Wild honey · Vanilla cream · White jasmine',
    img: '/products/3d-acehgayo.png',
    number: '05',
    accentBg: '#F5F2E8',
  },
  {
    id: 'lintong-nihuta',
    name: 'Lintong Nihuta',
    origin: 'Sumatra',
    region: 'Lake Toba Rim',
    altitude: '1,550 m',
    cocoa: '55%',
    weight: '80g',
    notes: ['Blueberry', 'Clove', 'Herbal'],
    description: 'Volcanic Lake Toba minerals and wild berries. Complex and defiant.',
    tasting: 'Blueberry · Clove · Herbal finish',
    img: '/products/3d-lintongnihuta.png',
    number: '06',
    accentBg: '#EBF0F5',
  },
  {
    id: 'mandailing',
    name: 'Mandailing',
    origin: 'Sumatra',
    region: 'Bukit Barisan',
    altitude: '1,400 m',
    cocoa: '55%',
    weight: '80g',
    notes: ['Dark Cocoa', 'Sweet Spice', 'Earthy'],
    description: 'A heavy, full-bodied profile defined by deep cocoa and exotic spice.',
    tasting: 'Dark chocolate · Sweet spice · Earthy finish',
    img: '/products/3d-acehgayo.png', 
    number: '07',
    accentBg: '#EFEAE4',
  },
];

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y       = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden bg-transparent">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-style text-[16vw] font-bold text-[#2C1A0E]/[0.02] leading-none tracking-tight whitespace-nowrap">
          AROMA BIJI
        </span>
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }}
          className="text-[#6B3D1E] text-[11px] uppercase tracking-[0.45em] mb-6 font-light">
          The Pride of Indonesia
        </motion.p>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-style text-[#2C1A0E] text-[clamp(3.5rem,9vw,8rem)] font-light tracking-tight leading-[0.95] mb-8">
         Dark Chocolate
        </motion.h1>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}
          className="text-[#2C1A0E]/60 text-lg md:text-xl font-light max-w-2xl mx-auto">
          Wild Luwak Arabica infused with 55% single-origin cocoa.<br />Uncompromising depth in every bite.
        </motion.p>
      </motion.div>
    </section>
  );
}

// ─── ParallaxA ────────────────────────────────────────────────────────────────
function ParallaxA({ product }: { product: typeof PRODUCTS[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  const boxScale  = useTransform(scrollYProgress, [0, 0.40, 0.72, 1], [1, 1.45, 1.20, 1]);
  const boxRotate = useTransform(scrollYProgress, [0, 0.38, 0.68, 1], [0, -13, 11, 0]);

  const t1Opacity = useTransform(scrollYProgress, [0.26, 0.37, 0.51, 0.60], [0, 1, 1, 0]);
  const t1X       = useTransform(scrollYProgress, [0.26, 0.37, 0.60], [-28, 0, -28]);

  const t2Opacity = useTransform(scrollYProgress, [0.60, 0.70, 0.83, 0.92], [0, 1, 1, 0]);
  const t2X       = useTransform(scrollYProgress, [0.60, 0.70, 0.92], [28, 0, 28]);

  return (
    <section ref={ref} className="relative h-[300vh] bg-transparent">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        <motion.div style={{ opacity: t1Opacity, x: t1X }}
          className="absolute left-[10%] top-[10%] md:top-1/2 md:-translate-y-1/2 z-10 max-w-[300px] md:max-w-[280px] text-left pointer-events-none">
          <h2 className="font-style text-4xl md:text-5xl font-light tracking-tight leading-tight text-[#2C1A0E]">
            Sourced from ancient volcanic terroir.
          </h2>
        </motion.div>

        <motion.div style={{ scale: boxScale, rotate: boxRotate }} className="relative z-20 drop-shadow-2xl">
          <Image src={product.img} alt={product.name} width={450} height={800} priority className="object-contain" />
        </motion.div>

        <motion.div style={{ opacity: t2Opacity, x: t2X }}
          className="absolute right-[10%] bottom-[10%] md:top-1/2 md:-translate-y-1/2 z-10 max-w-[300px] md:max-w-[280px] text-right pointer-events-none">
          <h2 className="font-style text-4xl md:text-5xl font-light tracking-tight leading-tight text-[#2C1A0E]">
            Artisan roasted.<br />Delivered fresh.
          </h2>
        </motion.div>
      </div>
    </section>
  );
}

// ─── ParallaxB ────────────────────────────────────────────────────────────────
function ParallaxB() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const s1o = useTransform(scrollYProgress, [0.18, 0.38], [0, 1]);
  const s1y = useTransform(scrollYProgress, [0.18, 0.38], [36, 0]);
  const s2o = useTransform(scrollYProgress, [0.28, 0.48], [0, 1]);
  const s2y = useTransform(scrollYProgress, [0.28, 0.48], [36, 0]);
  const s3o = useTransform(scrollYProgress, [0.38, 0.58], [0, 1]);
  const s3y = useTransform(scrollYProgress, [0.38, 0.58], [36, 0]);

  return (
    <section 
      ref={ref} 
      className="relative overflow-hidden py-40 shadow-inner"
      style={{
        background: 'linear-gradient(160deg, #1A0F0A 0%, #2C1A0E 50%, #3D2616 100%)'
      }}
    >
      <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-12">
        {[
          { n: '1,800', unit: 'm', label: 'Altitude', body: 'Where Arabica beans develop ultimate complexity.' },
          { n: '100',   unit: '%', label: 'Single-Origin', body: 'Traceable terroir. No blends. Pure provenance.' },
          { n: '55',    unit: '%', label: 'Dark Cocoa', body: 'The perfect balance of rich cocoa and wild fermentation.' },
        ].map(({ n, unit, label, body }, i) => (
          <motion.div key={i} style={{ opacity: [s1o, s2o, s3o][i], y: [s1y, s2y, s3y][i] }}>
            <p className="mb-6">
              <span className="text-7xl font-style md:text-8xl font-light text-white">{n}</span>
              <span className="text-3xl font-text text-white ml-2 font-light">{unit}</span>
            </p>
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/60 mb-4 font-light">
              {label}
            </p>
            <p className="text-white/50 text-[15px] leading-[1.6] font-light max-w-[250px]">
              {body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ─── ParallaxC ────────────────────────────────────────────────────────────────
function ParallaxC({ product }: { product: typeof PRODUCTS[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  const l1o = useTransform(scrollYProgress, [0.05, 0.20, 0.32, 0.42], [0, 1, 1, 0]);
  const l1y = useTransform(scrollYProgress, [0.05, 0.20, 0.42], [48, 0, -48]);
  const l2o = useTransform(scrollYProgress, [0.38, 0.52, 0.64, 0.74], [0, 1, 1, 0]);
  const l2y = useTransform(scrollYProgress, [0.38, 0.52, 0.74], [48, 0, -48]);
  const l3o = useTransform(scrollYProgress, [0.70, 0.82, 0.94, 1.0], [0, 1, 1, 0]);
  const l3y = useTransform(scrollYProgress, [0.70, 0.82, 1.0], [48, 0, -48]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.06, 0.94]);

  return (
    <section ref={ref} className="relative h-[350vh] bg-transparent">
      <div className="sticky top-0 h-screen w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        
        <div className="relative h-full flex items-center justify-center bg-[#F2EDE6]/40">
          <motion.div style={{ scale: imgScale }} className="relative w-[280px] md:w-[340px] drop-shadow-2xl">
            <Image src={product.img} alt={product.name} width={340} height={500} className="object-contain" />
          </motion.div>
        </div>

        <div className="relative h-full flex items-center justify-center px-10 md:px-16 overflow-hidden bg-transparent">
          {[
            { label: 'Harvest', lines: ['Wild collected.', 'Sun dried.', 'Hand sorted.'], o: l1o, y: l1y },
            { label: 'Profile', lines: ['55% dark cocoa.', 'Luwak Arabica.', 'Small batches.'], o: l2o, y: l2y },
            { label: 'Palate',  lines: [product.notes[0] + '.', product.notes[1] + '.', product.notes[2] + '.'], o: l3o, y: l3y },
          ].map(({ label, lines, o, y }) => (
            <motion.div key={label} style={{ opacity: o, y }} className="absolute text-left w-full px-10 md:px-24">
              <span className="block text-[11px] uppercase tracking-[0.3em] text-[#6B3D1E]/50 mb-6 font-light">{label}</span>
              <h2 className="font-style text-4xl md:text-6xl font-light tracking-tight leading-tight text-[#2C1A0E]">
                {lines.map((l, i) => <span key={i}>{l}<br /></span>)}
              </h2>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── NEW: All Variants 3D Parallax Showcase ───────────────────────────────────
function AllVariantsShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  // Creating different scroll speeds for columns to create a staggered parallax effect
  const yCol1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const yCol2 = useTransform(scrollYProgress, [0, 1], [160, -160]); // Middle column moves faster
  const yCol3 = useTransform(scrollYProgress, [0, 1], [40, -40]);

  // Split 7 products into 3 columns (3 items in the middle)
  const col1 = [PRODUCTS[0], PRODUCTS[3]];              // Holds 2 items
  const col2 = [PRODUCTS[1], PRODUCTS[4], PRODUCTS[6]]; // Holds 3 items
  const col3 = [PRODUCTS[2], PRODUCTS[5]];              // Holds 2 items

  return (
    <section ref={ref} className="relative py-40 px-6 md:px-12 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8 }}
          className="text-center mb-32"
        >
          <p className="text-[#6B3D1E] text-[11px] uppercase tracking-[0.45em] mb-6 font-light">
            The Complete Collection
          </p>
          <h2 className="font-style text-[#2C1A0E] text-[clamp(3rem,6vw,5rem)] font-light tracking-tight leading-none">
            Seven Origins.<br />One Archive.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 perspective-1000">
          {[
            { items: col1, y: yCol1, mt: '' },
            { items: col2, y: yCol2, mt: 'md:-mt-50' }, // Correct Tailwind negative margin for staggered look
            { items: col3, y: yCol3, mt: '' }
          ].map((col, colIndex) => (
            <motion.div key={colIndex} style={{ y: col.y }} className={`flex flex-col gap-12 ${col.mt}`}>
              {col.items.map((product) => (
                <motion.div 
                  key={product.id}
                  whileHover={{ rotateX: 5, rotateY: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative flex flex-col items-center cursor-pointer"
                >
                  <div 
                    className="w-full aspect-[4/5] rounded-[32px] mb-8 flex items-center justify-center overflow-hidden transition-shadow duration-500 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
                    style={{ backgroundColor: product.accentBg }}
                  >
                    <Image 
                      src={product.img} 
                      alt={product.name} 
                      width={350} 
                      height={500} 
                      className="object-contain drop-shadow-xl transition-transform duration-700 group-hover:scale-105" 
                    />
                  </div>
                  <div className="text-center px-4">
                    <p className="text-[#6B3D1E]/60 text-[10px] font-semibold uppercase tracking-[0.3em] mb-2">
                        {product.origin}
                    </p>
                    <h3 className="font-style text-[#2C1A0E] text-4xl md:text-3xl font-light tracking-tight mb-3">
                      {product.name}
                    </h3>
                    <p className="text-[#2C1A0E]/50 text-sm md:text-md leading-relaxed md:max-w-[350px] mx-auto font-light">
                      {product.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Manifesto ────────────────────────────────────────────────────────────────
function Manifesto() {
  return (
    <section className="relative bg-[#111111] py-40 px-8 flex items-center justify-center overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="text-white/40 text-[11px] uppercase tracking-[0.45em] mb-12 font-light">
          Our Promise
        </motion.p>
        
        <motion.h2 initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-style leading-[1.1] text-white/90 mb-10 text-[clamp(2.5rem,6vw,5rem)] font-light">
          Wild origins.<br />
          Small batches.<br />
          Absolute focus.
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-white/50 text-[16px] leading-[1.8] max-w-xl mx-auto font-light">
          We don’t believe in mass production. We believe in provenance. By pairing wild-foraged Luwak Arabica with single-origin 55% dark cocoa, we capture the honest, unfiltered soul of the Indonesian highlands.
        </motion.p>
      </div>
    </section>
  );
}

// ─── Feature Grid ─────────────────────────────────────────────────────────────
function FeatureGrid() {
  return (
    <section className="bg-transparent py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-style text-[#2C1A0E] text-center mb-24 tracking-tight text-[clamp(3rem,5vw,4.5rem)] font-light">
          The Anatomy of<br />Luxury Chocolate.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: 'Single-Origin Terroir', body: 'Traceable to a single Indonesian harvest. No blends. Just pure provenance.', bg: '#FFFFFF' },
            { title: 'Wild Luwak Arabica', body: 'Ethically sourced, naturally fermented from the most elusive coffee origin.', bg: '#FFFFFF' },
            { title: 'Artisan Small Batches', body: 'Roasted to order to ensure peak flavor, aroma, and absolute freshness.', bg: '#FFFFFF' },
            { title: 'Direct Farmer Trade', body: 'Empowering local highlands with fair prices and direct, lasting relationships.', bg: '#FFFFFF' },
          ].map(({ title, body, bg }, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-[32px] p-12 md:p-16 h-72 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-black/5"
              style={{ background: bg }}>
              <h4 className="font-style text-3xl font-light tracking-tight text-[#2C1A0E]">
                {title}
              </h4>
              <p className="text-[15px] leading-[1.6] font-light max-w-sm text-[#2C1A0E]/60">
                {body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA ──────────────────────────────────────────────────────────────────────
function CallToAction() {
  return (
    <section className="bg-transparent py-40 px-6 text-center flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl"
      >
        <p className="text-[#6B3D1E]/55 text-[11px] uppercase tracking-[0.45em] mb-8 font-light">
          Secure Yours
        </p>
        <h2 className="font-style text-[#2C1A0E] text-[clamp(3.5rem,7vw,6rem)] font-light tracking-tight mb-8 leading-none">
          Claim Your Origin.
        </h2>
        <p className="text-[#2C1A0E]/50 text-lg font-light mb-14 max-w-lg mx-auto leading-relaxed">
          Experience limited-edition Indonesian dark chocolate. Reserve your batch today before the harvest runs out.
        </p>
        <button className="bg-[#111111] text-white text-[13px] uppercase tracking-[0.2em] font-light px-12 py-5 rounded-full hover:scale-105 hover:bg-[#2C1A0E] transition-all duration-500 shadow-2xl shadow-black/10">
          Shop the Archive
        </button>
      </motion.div>
    </section>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────
export default function AromaBijiChocolateClient() {
  return (
    <>
      <Hero />
      <ParallaxA product={PRODUCTS[2]} />
      <ParallaxB />
      <ParallaxC product={PRODUCTS[1]} />
      <AllVariantsShowcase />
      <Manifesto />
      {/* <FeatureGrid /> */}
      <CallToAction />
    </>
  );
}