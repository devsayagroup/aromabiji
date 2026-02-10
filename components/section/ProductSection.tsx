'use client'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import { motion } from "framer-motion";
import { PRODUCTS } from '@/lib/data'
import LuxeButton from '../ui/LuxeButton'

export default function ProductSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-32 pb-[12rem] md:pb-[14rem]">
      <Marquee
        gradient={false}
        speed={54}
        // pauseOnHover={true}
        className="w-full"
      >
        {PRODUCTS.map((project, i) => (
          <div
            key={i}
            className="relative w-[60vw] h-[350px] md:w-[18vw] md:h-[450px] mx-6 flex-shrink-0 overflow-hidden rounded-xl group"
          >
            <Image
              src={project.image}
              alt="Project"
              fill
              className="object-cover transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>
        ))}
      </Marquee>
      <div className="h-40 mt-[-80px] bg-white rounded-t-[100%] flex flex-col justify-center items-center text-center relative z-40"></div>

          
      <div className="absolute left-0 right-0 mt-[-80px] flex flex-col justify-center items-center text-center mx-8 z-45 md:mx-20">
          <div className="mb-4 flex items-center gap-3">
           <span className="h-px w-10 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
           <span className="text-[11px] tracking-[0.35em] uppercase text-black/70">
             Collection
           </span>
           <span className="h-px w-10 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
         </div>

         <h1 className="max-w-4xl text-3xl md:text-5xl font-style leading-[1.05] uppercase tracking-wider text-black">
           Immerse in the Richness of Indonesian Coffee
         </h1>
         <LuxeButton label="Explore Our Collection" href="/product" className="mt-6" />

      </div>
    </section>
  )
}
