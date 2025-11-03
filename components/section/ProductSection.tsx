'use client'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import { PRODUCTS } from '@/lib/data'

export default function ProductSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gray py-24 md:my-20">
      <Marquee
        gradient={false}
        speed={50}
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
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>
        ))}
      </Marquee>
      <div className="h-20 mt-[-50px] bg-gray rounded-t-[80%] flex flex-col justify-center items-center text-center relative z-50"></div>

      <div className="mx-8 md:mx-20 max-w-3xl">
        <h1 className='text-4xl md:text-6xl font-style leading-tight uppercase'>Immerse in the Richness of Indonesian Coffee</h1>
      </div>
    </section>
  )
}
