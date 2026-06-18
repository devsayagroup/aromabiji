// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import { useRef } from "react";

// export default function StorySection() {
//   const ref = useRef<HTMLElement | null>(null);

//   return (
//     <section ref={ref} className="relative w-full overflow-hidden text-canvas bg-ink">
//       <div className="absolute inset-0">
//         {/* Replaced harsh black gradient with a rich --color-ink (#2A1F1D) base. 
//             Replaced bright glows with soft --color-muted and --color-pantone glows. */}
//         <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_18%_18%,rgba(209,197,194,0.06),transparent_55%),radial-gradient(900px_circle_at_82%_32%,rgba(90,71,67,0.12),transparent_60%),linear-gradient(180deg,#2A1F1D_0%,#241A18_45%,#1A1211_100%)]" />
//         {/* Top decorative line removed for absolute minimalism */}
//       </div>

//       <div className="relative container mx-auto px-6 md:px-20 py-20 md:py-24">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-14 items-center">
//           <div className="flex flex-col justify-center items-start max-w-xl">
//             <motion.div
//               initial={{ opacity: 0, y: 14 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
//               viewport={{ once: true }}
//               className="flex items-center gap-3 mb-5"
//             >
//               <div className="flex items-center gap-3">
//                 <span className="text-[10px] tracking-[0.4em] uppercase text-canvas/50">
//                   The Journey
//                 </span>
//               </div>
//             </motion.div>

//             <motion.h2
//               initial={{ opacity: 0, y: 22, filter: "blur(8px)" }}
//               whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//               transition={{ duration: 1.05, ease: [0.2, 0.7, 0.2, 1] }}
//               viewport={{ once: true }}
//               className="text-4xl md:text-5xl font-style tracking-wider leading-[1.05] uppercase text-canvas"
//             >
//               {/* Updated to avoid the word "cup" as requested previously */}
//               From the Highlands to Your Ritual
//             </motion.h2>

//             <motion.p
//               initial={{ opacity: 0, y: 18 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.95, delay: 0.1 }}
//               viewport={{ once: true }}
//               className="mt-6 font-text text-sm md:text-base leading-[1.6] text-canvas/70 font-light"
//             >
//               The journey of our coffee begins in Indonesia’s fertile highlands, where climate and soil
//               shape rich, nuanced flavor. Our farmers handpick only the best cherries, so every lot meets
//               our standard before it ever reaches the roast.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 14 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.9, delay: 0.25 }}
//               viewport={{ once: true }}
//               className="mt-10 flex items-center gap-5"
//             >
//               {/* Replaced boxed button with the minimalist editorial line-extending link */}
//               <Link
//                 href="/story"
//                 className="group flex items-center gap-4 text-[10px] tracking-[0.25em] uppercase text-canvas/60 hover:text-canvas transition-colors duration-500"
//               >
//                 <span>Read the full story</span>
//                 <span className="block h-px w-6 bg-canvas/30 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-12 group-hover:bg-canvas" />
//               </Link>
//             </motion.div>
//           </div>

//           <div className="relative w-full h-[520px] md:h-[560px]">
//             <div className="pointer-events-none absolute inset-0">
//               {/* Background glows updated to Muted and Pantone rgba equivalents */}
//               <div className="absolute left-10 top-10 h-64 w-64 rounded-full blur-3xl bg-[radial-gradient(circle_at_50%_50%,rgba(209,197,194,0.08),transparent_62%)]" />
//               <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full blur-3xl bg-[radial-gradient(circle_at_50%_50%,rgba(90,71,67,0.12),transparent_62%)]" />
//             </div>

//             <motion.div className="absolute top-6 left-1/2 -translate-x-1/2 w-[86%] md:w-[72%]">
//               {/* Shadows tinted with rgba(42,31,29) to match --color-ink instead of pure black */}
//               <div className="relative overflow-hidden rounded-2xl bg-canvas/5 shadow-[0_30px_80px_rgba(42,31,29,0.55)]">
//                 <Image
//                   src="/background/story-1.png"
//                   alt="Aroma Biji Story 1"
//                   width={900}
//                   height={900}
//                   className="h-[320px] md:h-[360px] w-full object-cover opacity-90"
//                 />
//                 {/* Overlays updated to use ink color for a seamless blend */}
//                 <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-ink/60 via-ink/10 to-transparent" />
//               </div>
//             </motion.div>

//             <motion.div className="absolute bottom-4 left-8 md:left-0 w-[68%] md:w-[48%]" >
//               <div className="relative overflow-hidden rounded-2xl bg-canvas/5 shadow-[0_36px_90px_rgba(42,31,29,0.65)]">
//                 <Image
//                   src="/background/story-2.png"
//                   alt="Aroma Biji Story 2"
//                   width={700}
//                   height={700}
//                   className="h-[240px] md:h-[270px] w-full object-cover opacity-90"
//                 />
//                 <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-ink/70 via-ink/10 to-transparent" />
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";

const processSteps = [
  { 
    id: "beans", 
    title: "beans", 
    src: "/images/beans.webp",
    copy: "Meticulously sourced single origin cacao and exclusive coffee beans."
  },
  { 
    id: "ground", 
    title: "ground", 
    src: "/images/ground.webp",
    copy: "Reflecting our deep dedication to quality in every single grain."
  },
  { 
    id: "paste", 
    title: "paste", 
    src: "/images/paste.webp",
    copy: "An unparalleled blend, refining raw passion into smooth perfection."
  },
  { 
    id: "bar", 
    title: "bar", 
    src: "/images/bar.webp",
    copy: "From our plantation to your palate, the ultimate indulgence."
  },
];

export default function ChocolateProcess() {
  return (
    <section className="relative w-full overflow-hidden bg-ink border-t border-white/10">
      {/* ─── FULL VIEWPORT GRID ─────────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full h-[120vh] sm:h-[100vh] lg:h-[85vh]">
        
        {processSteps.map((step) => (
          <div 
            key={step.id}
            className="relative group w-full h-full overflow-hidden border-b sm:border-b-0 sm:border-r border-white/10 last:border-0"
          >
            {/* ─── SMOOTH PARALLAX BACKGROUND ─────────────────────────────── */}
            <Image
              src={step.src}
              alt={`Process: ${step.title}`}
              fill
              className="object-cover opacity-80 transition-transform duration-[2000ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.05] group-hover:opacity-100"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            
            {/* ─── PERMANENT SUBTLE GRADIENT ──────────────────────────────── */}
            {/* Ensures text is always legible regardless of the image behind it */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent opacity-80 transition-opacity duration-[2000ms] group-hover:opacity-90" />

            {/* ─── COPY (Matched to reference image) ────────────────────── */}
            <div className="absolute bottom-0 right-0 p-8 md:p-10 flex flex-col items-end text-right w-full">
              <h3 className="font-style text-4xl md:text-5xl lg:text-6xl text-canvas italic font-light tracking-tight mb-3">
                {step.title}
              </h3>
              
              <p className="text-[10px] uppercase tracking-[0.2em] text-canvas/60 max-w-[180px] font-medium leading-relaxed">
                {step.copy}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}