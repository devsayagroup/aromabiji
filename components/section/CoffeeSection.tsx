// 'use client'
// import Image from 'next/image'
// import Marquee from 'react-fast-marquee'
// import { motion } from "framer-motion";
// import { PRODUCTS } from '@/lib/data'
// import LuxeButton from '../ui/LuxeButton'

// export default function ProductSection() {
//   return (
//     <section className="relative w-full overflow-hidden bg-canvas pt-32 pb-[12rem] md:pb-[18rem]">
//       <Marquee
//         gradient={false}
//         speed={54}
//         // pauseOnHover={true}
//         className="w-full"
//       >
//         {PRODUCTS.map((project, i) => (
//           <div
//             key={i}
//             className="relative w-[60vw] h-[350px] md:w-[18vw] md:h-[450px] lg:h-[550px] mx-6 flex-shrink-0 overflow-hidden rounded-xl group"
//           >
//             <Image
//               src={project.image}
//               alt="Project"
//               fill
//               className="object-cover transition-transform duration-700"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
//           </div>
//         ))}
//       </Marquee>
//       <div className="h-40 mt-[-80px] bg-canvas rounded-t-[100%] flex flex-col justify-center items-center text-center relative z-40"></div>

          
//       <div className="absolute left-0 right-0 mt-[-80px] flex flex-col justify-center items-center text-center mx-8 z-45 md:mx-20">
//           <div className="mb-4 flex items-center gap-3">
//            <span className="h-px w-10 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
//            <span className="text-[11px] tracking-[0.35em] uppercase text-black/70">
//              Collection
//            </span>
//            <span className="h-px w-10 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
//          </div>

//          <h1 className="max-w-4xl text-3xl md:text-5xl font-style leading-[1.05] uppercase tracking-wider text-black">
//            Immerse in the Richness of Indonesian Coffee
//          </h1>
//          <LuxeButton label="Explore Our Collection" href="/product" className="mt-6" />
//       </div>
//     </section>
//   )
// }


'use client'
import Image from 'next/image'
import Link from 'next/link';
import Marquee from 'react-fast-marquee'
import { products } from '@/lib/products' 

export default function CoffeeSection() {
  return (
    <section id="collection" className="relative w-full overflow-hidden bg-canvas pt-24 pb-24 md:pt-32 md:pb-32 border-t border-ink/10">
      
      {/* ─── CENTERED HEADER ───────────────────────────────────────────── */}
      <div className="flex flex-col justify-center items-center text-center mx-6 md:mx-20 mb-16 md:mb-20 z-40 relative">
         <h2 className="max-w-6xl text-4xl md:text-6xl lg:text-7xl font-style leading-[1.05] tracking-tight text-ink uppercase">
           Our Coffee Collection
         </h2>
      </div>

      <Marquee
        gradient={false}
        speed={54}
        // pauseOnHover={true}
        className="w-full pb-8"
      >
        {products.map((project, i) => (
          <div
            key={i}
            className="relative w-[60vw] h-[350px] md:w-[20vw] md:h-[450px] lg:h-[550px] mx-6 flex-shrink-0 overflow-hidden rounded-xl group shadow-[0_10px_40px_rgba(42,31,29,0.08)] border border-muted/20"
            style={{
              background: 'linear-gradient(145deg, #2A1F1D 0%, #5A4743 100%)'
            }}
          >
            <div className="absolute top-2 md:top-8 inset-x-0 p-6 md:p-8 flex flex-col items-center text-center z-30">
              <h3 className="font-style text-xl md:text-4xl text-canvas tracking-wide font-light">
                {project.name}
              </h3>
            </div>

            <div className="absolute inset-x-0 top-0 h-6/8 bg-gradient-to-b from-[#FBF9F8]/10 to-transparent pointer-events-none z-0" />

            <Image
              src={project.variants[0].image} 
              alt={project.name}
              fill
              className="object-contain p-8 md:p-12 pb-24 md:pb-26 transition-transform duration-700 group-hover:scale-105 drop-shadow-[0_20px_30px_rgba(0,0,0,0.4)] z-10"
            />

             <div className="absolute bottom-20 md:bottom-26 inset-x-0 p-6 md:p-8 flex flex-col items-center text-center z-30">
              <p className="text-[9px] md:text-[14px] tracking-normal uppercase text-canvas/70 font-medium">
                {project.point}
              </p>
            </div>

            <div className="absolute inset-x-0 top-0 h-6/8 bg-gradient-to-b from-[#FBF9F8]/10 to-transparent pointer-events-none z-0" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#2A1F1D]/90 via-[#2A1F1D]/10 to-transparent pointer-events-none z-20"></div>
          </div>
        ))}
      </Marquee>
      
      <div className="h-30 mt-[-100px] bg-canvas rounded-t-[98%] flex flex-col justify-center items-center text-center relative z-40"></div>
          
      {/* ─── BUTTON ────────────────────────────────────────────────────── */}
      <div className="flex flex-col justify-center items-center text-center mx-8 md:mx-20 z-40 relative">
         <Link
           href="/chocolate"
           className="h-14 px-10 bg-ink text-canvas font-medium tracking-widest uppercase text-[10px] rounded-full hover:bg-pantone transition-colors duration-300 shadow-[0_8px_20px_rgba(42,31,29,0.15)] inline-flex items-center justify-center"
         >
           Explore More
         </Link>
      </div>

    </section>
   
  )
}
