"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function StorySection() {
  return (
    <section className="w-full bg-brown/90 rounded-b-[50px] md:rounded-b-[100px] text-white overflow-hidden flex items-center">
      <div className="relative container mx-auto px-6 md:px-20 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center items-start max-w-xl">
            <Image src="/logo/Icon-Logo.png" alt="icon logo aroma biji" className="mb-4" width={50} height={50} />
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-style tracking-wider leading-tight  uppercase"
            >
              From the Highlands to Your Cup
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-4"
            >
              <p className="font-text text-md leading-loose">
                The journey of our coffee begins in Indonesia’s fertile highlands, where the climate and soil create the perfect environment for rich, flavorful beans. Our farmers handpick only the best cherries, ensuring each one meets our quality standards.
              </p>
            </motion.div>
          </div>
          <div className="relative w-full h-[500px] flex justify-center">
            <Image
              src="/background/story-1.png"
              alt="story aroma biji 1"
              width={380}
              height={380}
              className="absolute top-10 left-1/2 -translate-x-1/2 rounded-lg shadow-lg"
            />
            <Image
              src="/background/story-2.png"
              alt="story aroma biji 2"
              width={260}
              height={260}
              className="absolute top-60 left-[50%] md:left-[20%] -translate-x-1/2 rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}