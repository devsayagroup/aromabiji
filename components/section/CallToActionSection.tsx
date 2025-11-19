"use client"
import Link from "next/link";
import Image from "next/image";
import UnderlineButton from "../ui/UnderlineButton";
export default function AboutSection() {
  return (
    <section className="relative h-[70vh] bg-brown flex mx-6 md:mx-12 items-center rounded-lg overflow-hidden">
        <div className="container mx-auto">
            {/* <Image
                src="https://images.unsplash.com/photo-1617526738882-1ea945ce3e56?q=80&w=2095&auto=format&fit=crop"
                alt="background"
                className="absolute inset-0 w-full h-full object-cover z-0"
                priority
                fill
            /> */}
            
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-transparent z-10" />

            <div className="relative z-20 text-left text-white md:ml-8 px-6 md:px-8">
                <h1 className="text-3xl font-style md:text-4xl font-medium uppercase">
                    Crafted Through Generations
                </h1>
                <p className="text-sm md:text-md mt-4 leading-relaxed max-w-xl">
                  Aroma Biji was born from a lifelong devotion to the art of coffee. For over 40 years, our family has nurtured 
                  a tradition of excellence, transforming passion into a legacy that continues to define Indonesian coffee culture.
                </p>
                <p className="text-sm md:text-md mt-4 leading-relaxed max-w-xl">
                  Aroma Biji is not just coffee. <br /> It is a timeless expression of heritage, dedication, and pride in every cup.
                </p>
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
    </section>
  );
}