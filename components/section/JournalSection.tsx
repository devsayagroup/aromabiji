"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function JournalSection() {
  return (
    <section className="h-screen w-full bg-brown text-white overflow-hidden flex items-center">
      <div className="relative container mx-auto px-6 md:px-14 py-30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center items-center max-w-xl mb-20 md:items-center">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl  font-style tracking-wider leading-tight  uppercase"
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
              <p className="font-text text-lg mb-4 leading-relaxed">
                The journey of our coffee begins in Indonesia’s fertile highlands, where the climate and soil create the perfect environment for rich, flavorful beans. Our farmers handpick only the best cherries, ensuring each one meets our quality standards.
              </p>
            </motion.div>
          </div>
        </div>
        

      </div>
    </section>
  );
}