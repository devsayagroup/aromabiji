// "use client";

// import { motion, Variants } from "framer-motion";
// import Image from "next/image";

// export default function AboutSection() {
//   // Staggered animation variants for the paragraphs
//   const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.15, delayChildren: 0.2 },
//     },
//   };

//   const itemVariants: Variants = {
//     hidden: { opacity: 0, y: 15 },
//     visible: { 
//       opacity: 1, 
//       y: 0, 
//       transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
//     },
//   };

//   return (
//     <section className="relative w-full bg-ink font-text overflow-hidden">
//       {/* Changed to lg:min-h-screen so it stacks cleanly on mobile without pushing text off-screen */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-screen">
        
//         {/* ─── LEFT COLUMN: FULL BLEED IMAGE ────────────────────────────── */}
//         <div className="relative w-full h-[60vh] lg:h-full min-h-[400px] bg-ink/50">
//           <Image
//             src="/images/blur.png" 
//             alt="Aroma Biji Display"
//             fill
//             // Added object-left to anchor the image strictly to the center-left
//             className="object-cover object-left opacity-90 grayscale-[10%]"
//             priority
//             sizes="(max-width: 1024px) 100vw, 50vw"
//           />
//           {/* Subtle gradient to blend the edge smoothly if needed */}
//           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-ink/20 hidden lg:block" />
//           <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent lg:hidden" />
//         </div>

//         {/* ─── RIGHT COLUMN: EDITORIAL COPY & LOGO ──────────────────────── */}
//         <div className="relative z-10 flex flex-col justify-between px-8 py-16 md:px-16 md:py-20 lg:px-20 lg:py-24">
          
//           {/* Top Anchor: Icon (Top Right) */}
//           <motion.div 
//             initial={{ opacity: 0, x: 15 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, margin: "-10%" }}
//             transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
//             className="mb-16 lg:mb-0 flex justify-end w-full"
//           >
//             <Image 
//               src="/logo/Icon-Logo.png" 
//               alt="Aroma Biji Icon" 
//               width={64} 
//               height={64} 
//               className="object-contain opacity-80"
//             />
//           </motion.div>

//           {/* Bottom Anchor: Text Copy */}
//           <motion.div 
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             // Adjusted viewport margin so it reliably triggers before you scroll all the way to the bottom
//             viewport={{ once: true, margin: "0px 0px -50px 0px" }}
//             className="flex flex-col gap-6 md:gap-4 max-w-xl text-left mt-auto"
//           >
//             <motion.h2 variants={itemVariants} className="font-headline text-3xl md:text-4xl lg:text-4xl text-canvas tracking-wider uppercase mb-2">
//               Our Story
//             </motion.h2>

//             <motion.p variants={itemVariants} className="text-sm md:text-base text-canvas/80 font-light leading-[1.8] md:leading-[2]">
//               With over 40 years of experience in the coffee industry, we have devoted decades to perfecting our craft, guided by an unwavering commitment to filling every cup with the finest coffee.
//             </motion.p>
            
//             <motion.p variants={itemVariants} className="text-sm md:text-base text-canvas/80 font-light leading-[1.8] md:leading-[2]">
//               Our end-to-end process upholds the highest ethical standards, with every stage carried out with precision and care. From the careful selection of each bean to its natural refinement, every individual behind our brand contributes to a shared pursuit of excellence, shaping a legacy founded on integrity, authenticity, and respect for tradition.
//             </motion.p>
            
//             <motion.p variants={itemVariants} className="text-sm md:text-base text-canvas/80 font-light leading-[1.8] md:leading-[2]">
//               Ethically producing the world&apos;s rarest coffee is both a privilege and a challenge. For this reason, our production remains exceptionally limited as a reflection of our commitment to responsible sourcing and uncompromising quality.
//             </motion.p>
            
//             <motion.p variants={itemVariants} className="text-sm md:text-base text-canvas/80 font-light leading-[1.8] md:leading-[2]">
//               Immerse yourself in the richness of Indonesian coffee heritage and discover the rare distinction of our Wild Luwak Coffee.
//             </motion.p>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  // Staggered animation variants for the paragraphs
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  return (
    <section className="relative w-full bg-ink font-text overflow-hidden">
      {/* 50/50 Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-screen">
        
        {/* ─── LEFT COLUMN: FULL BLEED IMAGE ────────────────────────────── */}
        <div className="relative w-full h-[60vh] lg:h-full min-h-[400px] bg-ink/50">
          <Image
            src="/images/blur.png" 
            alt="Aroma Biji Display"
            fill
            className="object-cover object-left opacity-90 grayscale-[10%]"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Subtle gradient to blend the edge smoothly if needed */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-ink/20 hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent lg:hidden" />
        </div>

        {/* ─── RIGHT COLUMN: EDITORIAL COPY & LOGO ──────────────────────── */}
        <div className="relative z-10 flex flex-col justify-between px-8 py-16 md:px-16 md:py-20 lg:px-20 lg:py-24 overflow-hidden">
          
          {/* ─── TEXTURE OVERLAY ────────────────────────────────────────── */}
          {/* Sits behind the text, blending into the dark ink background */}
          <div className="absolute inset-0 -z-10 opacity-70 mix-blend-overlay pointer-events-none">
            <Image 
              src="/background/texture.png" 
              alt="Paper Texture" 
              fill 
              className="object-cover object-left" 
            />
          </div>
          
          {/* Top Anchor: Icon (Top Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-20 lg:mb-0 flex justify-end w-full"
          >
            <Image 
              src="/logo/Icon-Logo.png" 
              alt="Aroma Biji Icon" 
              width={64} 
              height={64} 
              className="object-contain opacity-80"
            />
          </motion.div>

          {/* Bottom Anchor: Text Copy */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            // Adjusted viewport margin so it reliably triggers before you scroll all the way to the bottom
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            className="flex flex-col gap-6  md:gap-4 max-w-xl text-left mt-auto"
          >
            <motion.h2 variants={itemVariants} className="font-headline text-3xl md:text-4xl lg:text-4xl text-canvas tracking-wider uppercase mb-2">
              Our Story
            </motion.h2>

            <motion.p variants={itemVariants} className="text-sm md:text-base text-canvas/80 font-light leading-[1.8] md:leading-[2]">
              With over 40 years of experience in the coffee industry, we have devoted decades to perfecting our craft, guided by an unwavering commitment to filling every cup with the finest coffee.
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-sm md:text-base text-canvas/80 font-light leading-[1.8] md:leading-[2]">
              Our end-to-end process upholds the highest ethical standards, with every stage carried out with precision and care. From the careful selection of each bean to its natural refinement, every individual behind our brand contributes to a shared pursuit of excellence, shaping a legacy founded on integrity, authenticity, and respect for tradition.
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-sm md:text-base text-canvas/80 font-light leading-[1.8] md:leading-[2]">
              Ethically producing the world&apos;s rarest coffee is both a privilege and a challenge. For this reason, our production remains exceptionally limited as a reflection of our commitment to responsible sourcing and uncompromising quality.
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-sm md:text-base text-canvas/80 font-light leading-[1.8] md:leading-[2]">
              Immerse yourself in the richness of Indonesian coffee heritage and discover the rare distinction of our Wild Luwak Coffee.
            </motion.p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}