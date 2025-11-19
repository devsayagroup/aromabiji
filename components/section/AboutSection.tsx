"use client"
import Link from "next/link";
import Image from "next/image";
import UnderlineButton from "../ui/UnderlineButton";
export default function AboutSection() {
  return (
    <section className="relative md:h-[70vh] bg-brown flex mx-6 md:mx-12 py-12 items-center rounded-lg overflow-hidden">
        <div className="container mx-auto">
            {/* <Image
                src="https://images.unsplash.com/photo-1617526738882-1ea945ce3e56?q=80&w=2095&auto=format&fit=crop"
                alt="background"
                className="absolute inset-0 w-full h-full object-cover z-0"
                priority
                fill
            /> */}
            
            <div className="absolute inset-0 bg-gradient-to-l from-black via-cream/75 to-transparent z-10" />

            <div className="relative grid grid-cols-1 md:grid-cols-2 place-items-center z-20 text-left text-white px-6 md:px-8">
               <div className="relative w-full flex justify-center">
                <Image
                  src="/images/foto-product-2.jpg"
                  alt="about aroma biji"
                  width={500}
                  height={500}
                  className="rounded-md"
                  // className="absolute top-10 left-1/2 md:left-90 -translate-x-1/2 rounded-lg shadow-lg"
                />
                
                {/* <Image
                  src="/background/story-2.png"
                  alt="story aroma biji 2"
                  width={260}
                  height={260}
                  className="absolute top-50 left-[50%] md:left-[30%] -translate-x-1/2 rounded-lg shadow-2xl"
                /> */}

                <Image 
                  src="/logo/Icon-Logo.png" 
                  alt="icon logo aroma biji" 
                  className="absolute top-5/6 md:top-70 left-1/2 md:left-[13%] -translate-x-1/2 rounded-lg" 
                  width={100} 
                  height={100} />

              </div>
              <div className="mt-22 md:mt-0 ">
                  {/* <Image src="/logo/Icon-packaging.png" alt="icon logo aroma biji" className="mb-4 ml-[-12]" width={50} height={50} /> */}
              
                <h1 className="text-3xl font-style md:text-5xl font-medium leading-tight uppercase">
                    Crafted Through Generations
                </h1>
                {/* <p className="text-sm md:text-md mt-4 leading-relaxed max-w-xl">
                  Aroma Biji was born from a lifelong devotion to the art of coffee. For over 40 years, our family has nurtured 
                  a tradition of excellence, transforming passion into a legacy that continues to define Indonesian coffee culture.
                </p>
                <p className="text-sm md:text-md mt-4 leading-relaxed max-w-xl">
                  Aroma Biji is not just coffee. <br /> It is a timeless expression of heritage, dedication, and pride in every cup.
                  For over 40 years, we’ve dedicated our hearts to the art of coffee making. From humble beginnings to a legacy of craftsmanship, Aroma Biji stands as a symbol of authenticity. Our journey is guided by generations who believe that great coffee comes from respect for nature, for people, and for tradition.
                </p> */}
                <p className="text-sm md:text-md font-text mt-4 leading-loose max-w-xl">
                  For over 40 years, we’ve dedicated our hearts to the art of coffee making. 
                  From humble beginnings to a legacy of craftsmanship, Aroma Biji stands as a symbol of authenticity. 
                  Our journey is guided by generations who believe that great coffee comes from respect for nature, for people, 
                  and for tradition.
                </p>

                {/* <p className="font-text text-lg mb-4 leading-relaxed">
                  Aroma Biji is where legacy meets perfection. Every bean we craft carries decades of mastery, 
                  from soil to soul, from our land to your cup. Taste the essence of Indonesia’s finest coffee.
                </p> */}

                <div className="flex flex-col md:flex-row mx-auto mt-6 justify-start gap-2 md:gap-4">
                  <UnderlineButton
                    href="/about"
                    label="Learn more about us"
                    theme="dark"
                    underlineWeight="thin"
                  />
                </div>
              </div>
            </div>
        </div>
    </section>
  );
}