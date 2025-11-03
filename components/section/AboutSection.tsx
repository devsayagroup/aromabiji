"use client"
import Link from "next/link";
import Image from "next/image";

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
                <div className="max-w-2xl">
                    <h1 className="text-3xl font-style md:text-4xl font-medium uppercase">
                        Crafted Through Generations
                    </h1>
                    <p className="text-sm mt-4 leading-relaxed">
                      Starting from a small passion and growing into a lifelong commitment, our journey has been shaped by experience, tradition, and care. Every bean we roast reflects decades of devotion and the hands of those who make it possible.
                      We believe true excellence begins at the source. That is why every step, from our coffee plantations to our roasting rooms, follows the same principle: to bring out the purest flavor nature has to offer.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row mx-auto mt-6 justify-start gap-2 md:gap-4">
                    <Link href="/about" scroll className="border border-white px-4 py-2 rounded-lg transform transition-transform duration-300 hover:translate-x-2">
                        Learn more about us
                    </Link>
                </div>
            </div>
        </div>
    </section>
  );
}