

'use client'
import Image from 'next/image'
import Link from 'next/link';
import Marquee from 'react-fast-marquee'
import { products } from '@/lib/products' 
import { chocolateProducts } from '@/lib/products-chocolate';

export default function ChocoSection() {
  return (
    <section className="relative w-full overflow-hidden bg-canvas pt-[10rem] pb-[4rem] md:pb-[8rem]">
      <div className="absolute left-0 right-0 flex flex-col justify-center items-center text-center mx-8 z-45 md:mx-20">
         <h1 className="max-w-4xl text-3xl md:text-6xl font-style leading-[1.05] uppercase tracking-wider text-pantone">
            Our Choco Collection
         </h1>
      </div>
      <Marquee
        gradient={false}
        speed={54}
        // pauseOnHover={true}
        className="w-full pt-24 md:pt-32"
      >
        {chocolateProducts.map((project, i) => (
          <div
            key={i}
            className="relative w-[60vw] h-[350px] md:w-[20vw] md:h-[450px] lg:h-[550px] mx-6 flex-shrink-0 overflow-hidden rounded-xl group shadow-[0_10px_40px_rgba(42,31,29,0.08)] border border-muted/20"
            style={{
              background: 'linear-gradient(145deg, #2A1F1D 0%, #5A4743 100%)'
            }}
          >
            <div className="absolute top-4 md:top-8 inset-x-0 p-6 md:p-8 flex flex-col items-center text-center z-30">
              <h3 className="font-style text-2xl md:text-4xl text-canvas tracking-wide">
                {project.name}
              </h3>
            </div>

            <div className="absolute inset-x-0 top-0 h-6/8 bg-gradient-to-b from-[#FBF9F8]/10 to-transparent pointer-events-none z-0" />

            <Image
              src={project.image} 
              alt={project.name}
              fill
              className="object-contain p-8 md:p-12 pb-16 md:pb-26 transition-transform duration-700 group-hover:scale-105 drop-shadow-[0_20px_30px_rgba(0,0,0,0.4)] z-10"
            />

            <div className="absolute inset-x-0 top-0 h-6/8 bg-gradient-to-b from-[#FBF9F8]/10 to-transparent pointer-events-none z-0" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#2A1F1D]/90 via-[#2A1F1D]/10 to-transparent pointer-events-none z-20"></div>
          </div>
        ))}
      </Marquee>
      
      <div className="h-40 mt-[-80px] bg-canvas rounded-t-[100%] flex flex-col justify-center items-center text-center relative z-40"></div>
          
      <div className="absolute left-0 right-0 mt-[-80px] flex flex-col justify-center items-center text-center mx-8 z-45 md:mx-20">
         <Link
            href="/chocolate"
            className="mt-10 h-14 px-10 bg-ink text-canvas font-medium tracking-widest uppercase text-[10px] rounded-full hover:bg-pantone transition-colors duration-300 shadow-[0_8px_20px_rgba(42,31,29,0.15)] inline-flex items-center justify-center"
          >
            Explore More
          </Link>
      </div>
    </section>
  )
}
