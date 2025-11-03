"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="h-screen w-full bg-gray text-black overflow-hidden flex items-center">
      <div className="relative container mx-auto px-6 md:px-14 py-30">
        <div className="flex flex-col justify-center items-center mb-20 md:items-center">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-style leading-tight text-center"
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
            <p className="font-text text-lg mb-4 leading-relaxed">
              For over 40 years, Aroma Biji has been dedicated to the art of coffee.
              A story of passion, craftsmanship, and authenticity poured into every cup.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Link
                href="/product"
                className="text-sm font-medium border-b border-gray-500 hover:border-white transition-all duration-300"
              >
                Discover Our Coffee
              </Link>
            </motion.div>
          </motion.div>
        </div>
{/* 
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="grid grid-cols-3 gap-[1px]"
        >
          {["/images/goa1.jpg", "/images/goa2.jpg", "/images/goa3.jpg"].map(
            (src, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8 }}
                className="relative h-[300px] w-full overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`Restaurant image ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover brightness-90 hover:brightness-100 transition-all duration-700 scale-105 hover:scale-110"
                />
              </motion.div>
            )
          )}
        </motion.div> */}
      </div>
    </section>
  );
}