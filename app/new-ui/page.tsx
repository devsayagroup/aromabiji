// // 'use client';

// // import { useRef } from 'react';
// // import Image from 'next/image';
// // import { motion, useScroll, useTransform } from 'framer-motion';

// // export default function AromaBijiAppleRedesign() {
// //   const scrollContainerRef = useRef<HTMLDivElement>(null);

// //   const { scrollYProgress } = useScroll({
// //     target: scrollContainerRef,
// //     offset: ['start start', 'end end'],
// //   });

// //   const boxScale = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [1, 1.3, 1.1, 1]);
// //   const boxRotate = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, -12, 10, 0]);
// //   const boxY = useTransform(scrollYProgress, [0, 1], ['5vh', '-5vh']);

// //   const text1Opacity = useTransform(scrollYProgress, [0.1, 0.2, 0.3], [0, 1, 0]);
// //   const text1Y = useTransform(scrollYProgress, [0.1, 0.2, 0.3], [10, 0, -10]);

// //   const text2Opacity = useTransform(scrollYProgress, [0.4, 0.5, 0.6], [0, 1, 0]);
// //   const text2Y = useTransform(scrollYProgress, [0.4, 0.5, 0.6], [10, 0, -10]);

// //   return (
// //     <div className="bg-[#f5f5f7] text-[#1d1d1f] font-sans overflow-hidden">
// //       <section className="h-screen flex flex-col items-center justify-center text-center px-6">
// //         <motion.h1 
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8, ease: 'easeOut' }}
// //           className="text-6xl md:text-8xl font-semibold tracking-tight"
// //         >
// //           Aroma Biji.
// //         </motion.h1>
// //         <motion.p 
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           transition={{ delay: 0.3, duration: 0.8 }}
// //           className="mt-4 text-2xl md:text-3xl font-medium text-[#86868b] max-w-2xl"
// //         >
// //           Kopi Nusantara, redefined. <br/> Heavy on flavor. Light on compromise.
// //         </motion.p>
// //       </section>

// //       {/* 2. SCROLLYTELLING / PARALLAX SECTION */}
// //       <section ref={scrollContainerRef} className="h-[200vh] relative">
// //         {/* FIX: Changed `top-40` to `top-0 pt-24`. 
// //             This keeps the height strictly to 100vh so the bottom doesn't get cut off, 
// //             while pt-24 ensures the box doesn't hit your top navigation bar. */}
// //         <div className="sticky top-0 pt-24 h-screen w-full flex items-center justify-center overflow-hidden">
          
// //           {/* Background Text 1 */}
// //           <motion.div 
// //             style={{ opacity: text1Opacity, y: text1Y }}
// //             // FIX: Safely anchored at 15% from the top
// //             className="absolute top-[25%] text-center z-10 w-full px-6"
// //           >
// //             <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
// //               Sourced directly from <br/> the highlands.
// //             </h2>
// //           </motion.div>

// //           {/* Background Text 2 */}
// //           <motion.div 
// //             style={{ opacity: text2Opacity, y: text2Y }}
// //             // FIX: Safely anchored at 15% from the bottom, preventing clipping
// //             className="absolute bottom-[10%] text-center z-10 w-full px-6"
// //           >
// //             <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
// //               Roasted to perfection. <br/> Delivered fresh.
// //             </h2>
// //           </motion.div>

// //           <motion.div
// //             style={{
// //               scale: boxScale,
// //               rotate: boxRotate,
// //               y: boxY,
// //             }}
// //             className="relative z-20"
// //           >
// //             <div style={{ perspective: 1000 }}>
// //               <Image 
// //                 src="/products/ab-1.png" 
// //                 alt="Aroma Biji Premium Packaging"
// //                 width={400}
// //                 height={600}
// //                 priority
// //               />
// //             </div>
// //           </motion.div>
// //         </div>
// //       </section>

// //       <section className="min-h-screen bg-white py-24 px-6 md:px-12 lg:px-24">
// //         <div className="max-w-6xl mx-auto">
// //           <h3 className="text-4xl md:text-5xl font-semibold tracking-tight mb-12 text-center">
// //             Uncompromising quality in every detail.
// //           </h3>
          
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //             <motion.div 
// //               whileHover={{ scale: 1.02 }}
// //               className="md:col-span-2 bg-[#f5f5f7] rounded-3xl p-10 h-80 flex flex-col justify-between"
// //             >
// //               <h4 className="text-2xl font-semibold">Single Origin Focus</h4>
// //               <p className="text-[#86868b] text-lg max-w-md">Every batch is traceable right back to the farmers who nurtured the trees.</p>
// //             </motion.div>

// //             <motion.div 
// //               whileHover={{ scale: 1.02 }}
// //               className="bg-[#f5f5f7] rounded-3xl p-10 h-80 flex flex-col justify-between"
// //             >
// //               <h4 className="text-2xl font-semibold">Artisan Roast</h4>
// //               <p className="text-[#86868b] text-lg">Small batches. Maximum control.</p>
// //             </motion.div>
// //           </div>
// //         </div>
// //       </section>

// //     </div>
// //   );
// // }



// 'use client';

// import { useRef } from 'react';
// import Image from 'next/image';
// import { motion, useScroll, useTransform } from 'framer-motion';

// // ─────────────────────────────────────────────
// // SECTION A — Box tilt + text reveal
// // Triggered: when section enters viewport (offset: 'start start')
// // ─────────────────────────────────────────────
// function ParallaxA() {
//   const ref = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ['start start', 'end end'],
//   });

//   // Box: scales up as you scroll, tilts left then right, then resets
//   const boxScale  = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [1, 2, 1.5, 1]);
//   const boxRotate = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0, -14, 12, 0]);

//   // Text 1 appears in the middle window (30%–55%), sits left of the box
//   const t1Opacity = useTransform(scrollYProgress, [0.25, 0.35, 0.50, 0.58], [0, 1, 1, 0]);
//   const t1X       = useTransform(scrollYProgress, [0.25, 0.35, 0.58], [-30, 0, -30]);

//   // Text 2 appears after text 1 (60%–85%), sits right of the box
//   const t2Opacity = useTransform(scrollYProgress, [0.58, 0.67, 0.80, 0.90], [0, 1, 1, 0]);
//   const t2X       = useTransform(scrollYProgress, [0.58, 0.67, 0.90], [30, 0, 30]);

//   return (
//     // h-[300vh] gives enough scroll runway — box stays in viewport for the middle 200vh
//     <section ref={ref} className="relative h-[300vh]">
//       <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

//         {/* LEFT text */}
//         <motion.div
//           style={{ opacity: t1Opacity, x: t1X }}
//           className="absolute left-[6%] md:left-[10%] top-1/2 -translate-y-1/2 z-10 max-w-[220px] md:max-w-[280px] text-left pointer-events-none"
//         >
//           <p className="text-xs uppercase tracking-[0.2em] text-[#86868b] mb-3">Origin</p>
//           <h2 className="text-3xl md:text-5xl font-style font-semibold tracking-tight leading-tight text-[#1d1d1f]">
//             Sourced directly from the highlands.
//           </h2>
//         </motion.div>

//         {/* CENTER box */}
//         <motion.div
//           style={{ scale: boxScale, rotate: boxRotate }}
//           className="relative z-20"
//         >
//           <Image
//             src="/products/ab-1.png"
//             alt="Aroma Biji Premium Packaging"
//             width={340}
//             height={500}
//             priority
//           />
//         </motion.div>

//         {/* RIGHT text */}
//         <motion.div
//           style={{ opacity: t2Opacity, x: t2X }}
//           className="absolute right-[6%] md:right-[10%] top-1/2 -translate-y-1/2 z-10 max-w-[220px] md:max-w-[280px] text-right pointer-events-none"
//         >
//           <p className="text-xs uppercase tracking-[0.2em] text-[#86868b] mb-3">Craft</p>
//           <h2 className="text-3xl md:text-5xl font-style font-semibold tracking-tight leading-tight text-[#1d1d1f]">
//             Roasted to perfection. Delivered fresh.
//           </h2>
//         </motion.div>

//       </div>
//     </section>
//   );
// }

// // ─────────────────────────────────────────────
// // SECTION B — Horizontal text marquee + fade-in stats
// // A dark section that contrasts with the light hero
// // ─────────────────────────────────────────────
// function ParallaxB() {
//   const ref = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ['start end', 'end start'],
//   });

//   // Marquee moves right-to-left as you scroll down
//   const marqueeX = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);

//   // Stats fade in staggered
//   const stat1Opacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
//   const stat1Y       = useTransform(scrollYProgress, [0.2, 0.4], [40, 0]);

//   const stat2Opacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
//   const stat2Y       = useTransform(scrollYProgress, [0.3, 0.5], [40, 0]);

//   const stat3Opacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
//   const stat3Y       = useTransform(scrollYProgress, [0.4, 0.6], [40, 0]);

//   return (
//     <section ref={ref} className="relative bg-[#1d1d1f] text-white overflow-hidden py-32">

//       {/* Scrolling marquee */}
//       <div className="overflow-hidden mb-20">
//         <motion.div
//           style={{ x: marqueeX }}
//           className="flex gap-12 whitespace-nowrap will-change-transform"
//         >
//           {['Luwak Arabica', '·', 'Sumatera', '·', 'Medium Roast', '·', 'Highlands 1700 MSL', '·', 'Ground Coffee', '·', 'Alur Badak', '·', 'Luwak Arabica', '·', 'Sumatera', '·', 'Medium Roast', '·'].map((word, i) => (
//             <span
//               key={i}
//               className={`text-5xl md:text-7xl font-semibold tracking-tight ${word === '·' ? 'text-[#86868b]' : 'text-white'}`}
//             >
//               {word}
//             </span>
//           ))}
//         </motion.div>
//       </div>

//       {/* Stats grid */}
//       <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6">
//         <motion.div style={{ opacity: stat1Opacity, y: stat1Y }}>
//           <p className="text-6xl font-semibold tracking-tight">1700<span className="text-[#86868b] text-3xl ml-1">m</span></p>
//           <p className="mt-3 text-[#86868b] text-lg">Highland altitude. Where the best Arabica grows slow and complex.</p>
//         </motion.div>

//         <motion.div style={{ opacity: stat2Opacity, y: stat2Y }}>
//           <p className="text-6xl font-semibold tracking-tight">100<span className="text-[#86868b] text-3xl ml-1">%</span></p>
//           <p className="mt-3 text-[#86868b] text-lg">Single origin. Every bag traceable back to one farm, one harvest.</p>
//         </motion.div>

//         <motion.div style={{ opacity: stat3Opacity, y: stat3Y }}>
//           <p className="text-6xl font-semibold tracking-tight">48<span className="text-[#86868b] text-3xl ml-1">hr</span></p>
//           <p className="mt-3 text-[#86868b] text-lg">From roast to your door. Freshness isn&apos;t a promise, it&apos;s a system.</p>
//         </motion.div>
//       </div>

//     </section>
//   );
// }

// // ─────────────────────────────────────────────
// // SECTION C — Pinned image + side text crawl
// // Image stays fixed while text lines scroll past it
// // ─────────────────────────────────────────────
// function ParallaxC() {
//   const ref = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ['start start', 'end end'],
//   });

//   const line1Opacity = useTransform(scrollYProgress, [0.05, 0.20, 0.32, 0.42], [0, 1, 1, 0]);
//   const line1Y       = useTransform(scrollYProgress, [0.05, 0.20, 0.42], [50, 0, -50]);

//   const line2Opacity = useTransform(scrollYProgress, [0.38, 0.50, 0.62, 0.72], [0, 1, 1, 0]);
//   const line2Y       = useTransform(scrollYProgress, [0.38, 0.50, 0.72], [50, 0, -50]);

//   const line3Opacity = useTransform(scrollYProgress, [0.68, 0.80, 0.92, 1.0], [0, 1, 1, 0]);
//   const line3Y       = useTransform(scrollYProgress, [0.68, 0.80, 1.0], [50, 0, -50]);

//   // Image gently scales down as text crawls
//   const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, 0.95]);

//   return (
//     <section ref={ref} className="relative h-[350vh] bg-[#f5f5f7]">
//       <div className="sticky top-0 h-screen w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden">

//         {/* LEFT — pinned product image */}
//         <div className="relative h-full flex items-center justify-center bg-[#ebebed]">
//           <motion.div style={{ scale: imgScale }} className="relative w-64 md:w-80">
//             <Image
//               src="/products/ab-1.png"
//               alt="Aroma Biji detail"
//               width={320}
//               height={480}
//             />
//           </motion.div>
//           {/* Subtle label */}
//           <p className="absolute bottom-8 left-8 text-xs uppercase tracking-[0.2em] text-[#86868b]">
//             Exclusive Collection — Sumatera
//           </p>
//         </div>

//         {/* RIGHT — text lines that crawl */}
//         <div className="relative h-full flex items-center justify-center px-10 md:px-16 overflow-hidden">

//           <motion.div
//             style={{ opacity: line1Opacity, y: line1Y }}
//             className="absolute text-center md:text-left"
//           >
//             <span className="block text-xs uppercase tracking-[0.25em] text-[#86868b] mb-4">Process</span>
//             <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-[#1d1d1f]">
//               Wild-collected.<br />Sun-dried.<br />Hand-sorted.
//             </h2>
//           </motion.div>

//           <motion.div
//             style={{ opacity: line2Opacity, y: line2Y }}
//             className="absolute text-center md:text-left"
//           >
//             <span className="block text-xs uppercase tracking-[0.25em] text-[#86868b] mb-4">Roast</span>
//             <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-[#1d1d1f]">
//               Medium roast.<br />Low acidity.<br />Full body.
//             </h2>
//           </motion.div>

//           <motion.div
//             style={{ opacity: line3Opacity, y: line3Y }}
//             className="absolute text-center md:text-left"
//           >
//             <span className="block text-xs uppercase tracking-[0.25em] text-[#86868b] mb-4">Taste</span>
//             <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-[#1d1d1f]">
//               Dark chocolate.<br />Earthy tobacco.<br />Clean finish.
//             </h2>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }

// // ─────────────────────────────────────────────
// // MAIN EXPORT
// // ─────────────────────────────────────────────
// export default function AromaBijiAppleRedesign() {
//   return (
//     <div className="bg-[#f5f5f7] text-[#1d1d1f] font-sans">

//       {/* ① HERO */}
//       <section className="h-screen flex flex-col items-center justify-center text-center px-6">
//         <motion.h1
//           initial={{ opacity: 0, y: 24 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
//           className="text-6xl md:text-8xl font-style font-semibold tracking-tight"
//         >
//           Aroma Biji.
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4, duration: 0.9 }}
//           className="mt-4 text-xl md:text-2xl font-text font-medium text-[#86868b] max-w-2xl"
//         >
//           Kopi Nusantara, redefined.<br />Heavy on flavor. Light on compromise.
//         </motion.p>
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.8, duration: 0.8 }}
//           className="mt-10 flex gap-4"
//         >
//           <a
//             href="#"
//             className="px-7 py-3 bg-[#1d1d1f] text-white text-sm font-medium rounded-full hover:bg-[#3a3a3c] transition-colors"
//           >
//             Shop now
//           </a>
//           <a
//             href="#"
//             className="px-7 py-3 border border-[#1d1d1f]/30 text-[#1d1d1f] text-sm font-medium rounded-full hover:border-[#1d1d1f]/70 transition-colors"
//           >
//             Learn more
//           </a>
//         </motion.div>
//       </section>

//       {/* ② PARALLAX A — box tilt + left/right text reveal */}
//       <ParallaxA />

//       {/* ③ PARALLAX B — dark marquee + stats */}
//       <ParallaxB />

//       {/* ④ PARALLAX C — split: pinned image + text crawl */}
//       <ParallaxC />

//       {/* ⑤ FEATURE GRID */}
//       <section className="min-h-screen bg-white py-24 px-6 md:px-12 lg:px-24">
//         <div className="max-w-6xl mx-auto">
//           <motion.h3
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.7 }}
//             className="text-4xl md:text-5xl font-semibold tracking-tight mb-12 text-center"
//           >
//             Uncompromising quality<br />in every detail.
//           </motion.h3>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.2 }}
//               transition={{ duration: 0.6, delay: 0.0 }}
//               whileHover={{ scale: 1.02 }}
//               className="md:col-span-2 bg-[#f5f5f7] rounded-3xl p-10 h-80 flex flex-col justify-between"
//             >
//               <h4 className="text-2xl font-semibold">Single Origin Focus</h4>
//               <p className="text-[#86868b] text-lg max-w-md">
//                 Every batch is traceable right back to the farmers who nurtured the trees.
//               </p>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.2 }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//               whileHover={{ scale: 1.02 }}
//               className="bg-[#f5f5f7] rounded-3xl p-10 h-80 flex flex-col justify-between"
//             >
//               <h4 className="text-2xl font-semibold">Artisan Roast</h4>
//               <p className="text-[#86868b] text-lg">Small batches. Maximum control.</p>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.2 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               whileHover={{ scale: 1.02 }}
//               className="bg-[#1d1d1f] text-white rounded-3xl p-10 h-80 flex flex-col justify-between"
//             >
//               <h4 className="text-2xl font-semibold">Wild Luwak</h4>
//               <p className="text-[#86868b] text-lg">Natural fermentation. Unmatched depth.</p>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.2 }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//               whileHover={{ scale: 1.02 }}
//               className="md:col-span-2 bg-[#f5f5f7] rounded-3xl p-10 h-80 flex flex-col justify-between"
//             >
//               <h4 className="text-2xl font-semibold">Direct Trade</h4>
//               <p className="text-[#86868b] text-lg max-w-md">
//                 We work directly with highland farmers in Alur Badak, Sumatera — no middlemen, fair prices, real relationships.
//               </p>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// }



'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

// ─────────────────────────────────────────────
// SECTION A — Box tilt + text reveal
// Triggered: when section enters viewport (offset: 'start start')
// ─────────────────────────────────────────────


function ParallaxA() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  // Box: scales up as you scroll, tilts left then right, then resets
  const boxScale  = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [1, 2, 1.5, 1]);
  const boxRotate = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0, -14, 12, 0]);

  // Text 1 appears in the middle window (30%–55%), sits left of the box
  const t1Opacity = useTransform(scrollYProgress, [0.25, 0.35, 0.50, 0.58], [0, 1, 1, 0]);
  const t1X       = useTransform(scrollYProgress, [0.25, 0.35, 0.58], [-30, 0, -30]);

  // Text 2 appears after text 1 (60%–85%), sits right of the box
  const t2Opacity = useTransform(scrollYProgress, [0.58, 0.67, 0.80, 0.90], [0, 1, 1, 0]);
  const t2X       = useTransform(scrollYProgress, [0.58, 0.67, 0.90], [30, 0, 30]);

  return (
    // h-[300vh] gives enough scroll runway — box stays in viewport for the middle 200vh
    <section ref={ref} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

        {/* LEFT text */}
        <motion.div
          style={{ opacity: t1Opacity, x: t1X }}
          className="absolute left-[6%] md:left-[10%] top-1/2 -translate-y-1/2 z-10 max-w-[220px] md:max-w-[280px] text-left pointer-events-none"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[#86868b] mb-3">Origin</p>
          <h2 className="text-3xl md:text-5xl font-style font-semibold tracking-tight leading-tight text-[#1d1d1f]">
            Grown in rich <br /> volcanic soils.
          </h2>
        </motion.div>

        {/* CENTER box */}
        <motion.div
          style={{ scale: boxScale, rotate: boxRotate }}
          className="relative z-20"
        >
          <Image
            src="/products/ab-1.png"
            alt="Aroma Biji Red Bourbon Packaging"
            width={340}
            height={500}
            priority
          />
        </motion.div>

        <motion.div
          style={{ opacity: t2Opacity, x: t2X }}
          // FIX: Increased max-w to 350px (mobile) and 500px (desktop) so "Uncompromising" 
          // fits completely inside the bounding box and aligns flush right.
          className="absolute right-[6%] md:right-[10%] top-1/2 -translate-y-1/2 z-10 max-w-[350px] md:max-w-[500px] flex flex-col items-end pointer-events-none"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[#86868b] mb-3 w-full text-right">Varietal</p>
          <h2 className="text-3xl md:text-5xl font-style font-semibold tracking-tight leading-tight text-[#1d1d1f] w-full text-right">
            A rare mutation.<br/>Uncompromising sweetness.
          </h2>
        </motion.div>

      </div>
    </section>
  );
}
// ─────────────────────────────────────────────
// SECTION B — Horizontal text marquee + fade-in stats
// ─────────────────────────────────────────────
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
    <section ref={ref} className="relative bg-[#1d1d1f] text-white overflow-hidden py-32">

      {/* Scrolling marquee */}
      <div className="overflow-hidden mb-20">
        <motion.div
          style={{ x: marqueeX }}
          // FIX: Added py-4 so descenders (like the tail of 'g' in Highlands) don't get cropped by overflow-hidden
          className="flex gap-12 whitespace-nowrap will-change-transform py-4"
        >
          {['Indonesia', '·', 'Red Bourbon', '·', 'Light Roast', '·', 'Highlands', '·', 'Single Varietal', '·', 'Hand-picked', '·', 'Indonesia', '·', 'Red Bourbon', '·', 'Light Roast', '·'].map((word, i) => (
            <span
              key={i}
              className={`text-5xl md:text-7xl font-semibold tracking-tight ${word === '·' ? 'text-[#86868b]' : 'text-white'}`}
            >
              {word}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Stats grid */}
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6">
        <motion.div style={{ opacity: stat1Opacity, y: stat1Y }}>
          <p className="text-6xl font-semibold tracking-tight">1600<span className="text-[#86868b] text-3xl ml-1">m</span></p>
          <p className="mt-3 text-[#86868b] text-lg">Highland altitude. Where the Red Bourbon cherries mature slowly for maximum sweetness.</p>
        </motion.div>

        <motion.div style={{ opacity: stat2Opacity, y: stat2Y }}>
          <p className="text-6xl font-semibold tracking-tight">100<span className="text-[#86868b] text-3xl ml-1">%</span></p>
          <p className="mt-3 text-[#86868b] text-lg">Pure Red Bourbon. A singular, unfiltered expression of Indonesian terroir.</p>
        </motion.div>

        <motion.div style={{ opacity: stat3Opacity, y: stat3Y }}>
          <p className="text-6xl font-semibold tracking-tight">48<span className="text-[#86868b] text-3xl ml-1">hr</span></p>
          <p className="mt-3 text-[#86868b] text-lg">From roast to your door. Preserving the delicate floral and berry notes.</p>
        </motion.div>
      </div>

    </section>
  );
}

// ─────────────────────────────────────────────
// SECTION C — Pinned image + side text crawl
// Image stays fixed while text lines scroll past it
// ─────────────────────────────────────────────
function ParallaxC() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  const line1Opacity = useTransform(scrollYProgress, [0.05, 0.20, 0.32, 0.42], [0, 1, 1, 0]);
  const line1Y       = useTransform(scrollYProgress, [0.05, 0.20, 0.42], [50, 0, -50]);

  const line2Opacity = useTransform(scrollYProgress, [0.38, 0.50, 0.62, 0.72], [0, 1, 1, 0]);
  const line2Y       = useTransform(scrollYProgress, [0.38, 0.50, 0.72], [50, 0, -50]);

  const line3Opacity = useTransform(scrollYProgress, [0.68, 0.80, 0.92, 1.0], [0, 1, 1, 0]);
  const line3Y       = useTransform(scrollYProgress, [0.68, 0.80, 1.0], [50, 0, -50]);

  // Image gently scales down as text crawls
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, 0.95]);

  return (
    <section ref={ref} className="relative h-[350vh] bg-[#f5f5f7]">
      <div className="sticky top-0 h-screen w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden">

        {/* LEFT — pinned product image */}
        <div className="relative h-full flex items-center justify-center bg-[#ebebed]">
          <motion.div style={{ scale: imgScale }} className="relative w-64 md:w-80">
            <Image
              src="/products/ab-1.png"
              alt="Aroma Biji Red Bourbon detail"
              width={320}
              height={480}
            />
          </motion.div>
          {/* Subtle label */}
          <p className="absolute bottom-8 left-8 text-xs uppercase tracking-[0.2em] text-[#86868b]">
            Exclusive Collection — Indonesia Red Bourbon
          </p>
        </div>

        {/* RIGHT — text lines that crawl */}
        <div className="relative h-full flex items-center justify-center px-10 md:px-16 overflow-hidden">

          <motion.div
            style={{ opacity: line1Opacity, y: line1Y }}
            className="absolute text-center md:text-left"
          >
            <span className="block text-xs uppercase tracking-[0.25em] text-[#86868b] mb-4">Process</span>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-[#1d1d1f]">
              Fully washed.<br />Sun-dried.<br />Hand-sorted.
            </h2>
          </motion.div>

          <motion.div
            style={{ opacity: line2Opacity, y: line2Y }}
            className="absolute text-center md:text-left"
          >
            <span className="block text-xs uppercase tracking-[0.25em] text-[#86868b] mb-4">Roast</span>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-[#1d1d1f]">
              Light-medium roast.<br />Bright acidity.<br />Silky body.
            </h2>
          </motion.div>

          <motion.div
            style={{ opacity: line3Opacity, y: line3Y }}
            className="absolute text-center md:text-left"
          >
            <span className="block text-xs uppercase tracking-[0.25em] text-[#86868b] mb-4">Taste</span>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-[#1d1d1f]">
              Red berries.<br />Caramel sweetness.<br />Floral finish.
            </h2>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// MAIN EXPORT
// ─────────────────────────────────────────────
export default function AromaBijiAppleRedesign() {
  return (
    <div className="bg-[#f5f5f7] text-[#1d1d1f] font-sans">

      {/* ① HERO */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl font-style font-semibold tracking-tight"
        >
          Aroma Biji
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="mt-4 text-xl md:text-2xl font-text font-medium text-[#86868b] max-w-2xl"
        >
          The Red Bourbon.<br />Heavy on flavor. Light on compromise.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-10 flex gap-4"
        >
          <a
            href="#"
            className="px-7 py-3 bg-[#1d1d1f] text-white text-sm font-medium rounded-full hover:bg-[#3a3a3c] transition-colors"
          >
            Shop now
          </a>
          <a
            href="#"
            className="px-7 py-3 border border-[#1d1d1f]/30 text-[#1d1d1f] text-sm font-medium rounded-full hover:border-[#1d1d1f]/70 transition-colors"
          >
            Learn more
          </a>
        </motion.div>
      </section>

      {/* ② PARALLAX A — box tilt + left/right text reveal */}
      <ParallaxA />

      {/* ③ PARALLAX B — dark marquee + stats */}
      <ParallaxB />

      {/* ④ PARALLAX C — split: pinned image + text crawl */}
      <ParallaxC />

      {/* ⑤ FEATURE GRID */}
      <section className="min-h-screen bg-white py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-semibold tracking-tight mb-12 text-center"
          >
            Uncompromising quality<br />in every detail.
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.0 }}
              whileHover={{ scale: 1.02 }}
              className="md:col-span-2 bg-[#f5f5f7] rounded-3xl p-10 h-80 flex flex-col justify-between"
            >
              <h4 className="text-2xl font-semibold">Single Varietal Focus</h4>
              <p className="text-[#86868b] text-lg max-w-md">
                We isolate the rare Red Bourbon mutation to showcase its distinct, vibrant profile, untainted by blends.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-[#f5f5f7] rounded-3xl p-10 h-80 flex flex-col justify-between"
            >
              <h4 className="text-2xl font-semibold">Artisan Roast</h4>
              <p className="text-[#86868b] text-lg">Tailored roasting to highlight complex sugars and floral aromas.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-[#1d1d1f] text-white rounded-3xl p-10 h-80 flex flex-col justify-between"
            >
              <h4 className="text-2xl font-semibold">Vibrant Complexity</h4>
              <p className="text-[#86868b] text-lg">A symphony of stone fruit and berry notes, clean and lingering.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="md:col-span-2 bg-[#f5f5f7] rounded-3xl p-10 h-80 flex flex-col justify-between"
            >
              <h4 className="text-2xl font-semibold">Direct Trade</h4>
              <p className="text-[#86868b] text-lg max-w-md">
                We work directly with dedicated farmers cultivating these rare cherries — ensuring exceptional quality and sustainability at the source.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}