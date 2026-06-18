"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  // Staggered animation variants for the paragraphs
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.4 },
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
    <section className="relative w-full bg-ink font-text overflow-hidden border-t border-white/10">
      
      {/* ─── TOP HALF: CINEMATIC LANDSCAPE IMAGE ──────────────────────── */}
      <div className="relative w-full h-[50vh] md:h-[65vh] lg:h-[75vh]">
        <Image
          // Replace this with the actual shelf image from the screenshot
          src="/webp/cilandak1.webp" 
          alt="Aroma Biji Display"
          fill
          className="object-cover opacity-90 grayscale-[10%]"
          priority
        />
        
        {/* Heavy gradient to smoothly blend the image into the dark text block below */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink/40 to-ink" />
        
        {/* The "ABOUT US" Title - Positioned perfectly at the fade intersection */}
        <div className="absolute bottom-0 left-0 w-full text-center translate-y-1/2 z-10 px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-[7rem] font-style text-pantone tracking-[0.15em] uppercase font-light drop-shadow-2xl"
          >
            About Us
          </motion.h2>
        </div>
      </div>

      {/* ─── BOTTOM HALF: EDITORIAL COPY ──────────────────────────────── */}
      <div className="relative z-20 w-full px-6 pt-24 pb-24 md:pt-32 md:pb-40 flex flex-col items-center text-center">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-8 md:gap-10 max-w-3xl lg:max-w-4xl"
        >
          <motion.p variants={itemVariants} className="text-sm md:text-base lg:text-lg text-canvas/80 font-light leading-[1.8] md:leading-[2]">
            With over 40 years of experience in the coffee industry, we have devoted decades to perfecting our craft, guided by an unwavering commitment to filling every cup with the finest coffee.
          </motion.p>
          
          <motion.p variants={itemVariants} className="text-sm md:text-base lg:text-lg text-canvas/80 font-light leading-[1.8] md:leading-[2]">
            Our end-to-end process upholds the highest ethical standards, with every stage carried out with precision and care. From the careful selection of each bean to its natural refinement, every individual behind our brand contributes to a shared pursuit of excellence, shaping a legacy founded on integrity, authenticity, and respect for tradition.
          </motion.p>
          
          <motion.p variants={itemVariants} className="text-sm md:text-base lg:text-lg text-canvas/80 font-light leading-[1.8] md:leading-[2]">
            This collective devotion allows us to create a coffee experience of remarkable character and distinction.
          </motion.p>
          
          <motion.p variants={itemVariants} className="text-sm md:text-base lg:text-lg text-canvas/80 font-light leading-[1.8] md:leading-[2]">
            Ethically producing the world&apos;s rarest coffee is both a privilege and a challenge. For this reason, our production remains exceptionally limited as a reflection of our commitment to responsible sourcing and uncompromising quality.
          </motion.p>
          
          <motion.p variants={itemVariants} className="text-sm md:text-base lg:text-lg text-canvas/80 font-light leading-[1.8] md:leading-[2]">
            Immerse yourself in the richness of Indonesian coffee heritage and discover the rare distinction of our Wild Luwak Coffee.
          </motion.p>
        </motion.div>
      </div>
      
    </section>
  );
}