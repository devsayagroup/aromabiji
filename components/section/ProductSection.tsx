'use client'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import { PRODUCTS } from '@/lib/data'

export default function ProjectShowcase() {
  return (
    <section className="relative w-full overflow-hidden bg-gray py-24 my-20">
      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={true}
        className="w-full"
      >
        {PRODUCTS.map((project, i) => (
          <div
            key={i}
            className="relative w-[40vw] h-[250px] md:w-[18vw] md:h-[500px] mx-6 flex-shrink-0 overflow-hidden rounded-xl group"
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
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gray rounded-t-[80%] flex flex-col justify-center items-center text-center z-30"></div>
    </section>
  )
}
