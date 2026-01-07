'use client'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import { PRODUCTS } from '@/lib/data'
import LuxuryButton from '../ui/LuxuryButton'

export default function ProductSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-32 pb-[12rem] md:pb-[14rem]">
      <Marquee
        gradient={false}
        speed={70}
        pauseOnHover={true}
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
        <h1 className='max-w-3xl text-3xl md:text-5xl font-style leading-tight uppercase'>Immerse in the Richness of Indonesian Coffee</h1>
          <LuxuryButton
            label="Explore Our Collection" 
            href="/product"
            className='mt-4'
          />
      </div>
    </section>
  )
}
