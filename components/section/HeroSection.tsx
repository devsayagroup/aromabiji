"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import UnderlineButton from "../ui/UnderlineButton";

export default function HeroSection() {
  return (
    <section className="h-screen w-full bg-gray text-black overflow-hidden flex items-center">
      <div className="relative container mx-auto px-6 md:px-14">
        <div className="flex flex-col justify-center items-center md:items-center">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl mb-2 font-style tracking-wider leading-tight text-center uppercase"
          >
            Aroma Biji
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-style tracking-wider leading-tight text-center uppercase"
          >
            Meet the original taste
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-4 max-w-lg"
          >
            {/* <p className="font-text text-lg mb-4 leading-relaxed">
              For over 40 years, Aroma Biji has been dedicated to the art of coffee.
              A story of passion, craftsmanship, and authenticity poured into every cup.
            </p> */}

            <p className="font-text text-lg mb-4 leading-relaxed">
              Aroma Biji is where legacy meets perfection. Every bean we craft carries decades of mastery, 
              from soil to soul, from our land to your cup. Taste the essence of Indonesia’s finest coffee.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <UnderlineButton
                href="/product"
                label="Discover Our Coffee"
                theme="light"
                underlineWeight="thin"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}