"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function StoryPage() {
  return (
    <main className="min-h-screen pt-20 bg-gradient-to-b from-white via-gray-50 to-amber-50 text-gray-900">
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 py-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-style uppercase leading-tight text-gray-900">
              From Passion to Perfection
            </h1>
            <p className="text-lg text-gray-700 max-w-xl">
              Every story begins with a spark. Ours was born from passion of love for the aroma, the ritual, and the art
              of coffee. Over four decades later, Aroma Biji stands as a symbol of heritage, sustainability, and
              craftsmanship, representing the finest taste of Indonesian coffee.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-96 md:h-[420px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/foto-product-7.jpg"
              alt="Coffee beans and brewing ritual"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden h-96 shadow-lg">
            <Image src="/images/full-product.jpeg" alt="Legacy of Aroma Biji" fill className="object-cover" />
          </div>

          <div>
            <h2 className="text-3xl font-style mb-4">A Legacy in Every Bean</h2>
            <p className="text-gray-700 mb-6">
              What began as a humble pursuit has evolved into a lifelong dedication. For more than forty years, we have
              refined every detail from cultivation to roasting, guided by honesty and authenticity. We believe that
              great coffee is not created by chance, but through intention and respect for nature.
            </p>
            <p className="text-gray-700">
              Each generation has passed down knowledge, preserving the values that make Aroma Biji unique. Every bean is
              a reflection of tradition, ethics, and the deep connection between people and land.
            </p>
          </div>
        </div>
      </section>

      {/* <section className="bg-white border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-style mb-4">From Land to Cup</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We take every step into account. Our farmers, our methods, and our standards are aligned with one mission
              to deliver excellence. From the soil where our coffee trees grow to the final roast, every process reflects
              our commitment to quality and ethics.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="space-y-3">
              <Image src="/images/placement.png" alt="Coffee plantation" width={400} height={150} className="rounded-xl shadow" />
              <h4 className="text-xl font-style">Sustainably Grown</h4>
              <p className="text-gray-600">Our beans are cultivated in harmony with the environment and local communities.</p>
            </div>

            <div className="space-y-3">
              <Image src="/images/placement.png" alt="Coffee roasting" width={400} height={150} className="rounded-xl shadow" />
              <h4 className="text-xl font-style">Expertly Roasted</h4>
              <p className="text-gray-600">Each roast is handcrafted by masters who understand the rhythm of flavor and aroma.</p>
            </div>

            <div className="space-y-3">
              <Image src="/images/placement.png" alt="Coffee cup presentation" width={400} height={150} className="rounded-xl shadow" />
              <h4 className="text-xl font-style">Beautifully Served</h4>
              <p className="text-gray-600">From our hands to yours, we serve coffee that embodies warmth, care, and prestige.</p>
            </div>
          </div>
        </div>
      </section> */}

      <section id="sustainability" className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-style mb-4">Sustainability in Every Sip</h2>
            <p className="text-gray-700 mb-4">
              We care deeply about our planet, our home. Our ambition is to take part in a more sustainable future by
              minimizing our environmental footprint and supporting circular practices.
            </p>
            <p className="text-gray-700 mb-6">
              From using eco-friendly, paper-based packaging to aiming for 100% compostable pouches by 2025, we are
              committed to protecting what we love most. We encourage every customer to reuse and regenerate together,
              we can make each cup meaningful.
            </p>
            {/* <Link
              href="/journal/sustainability-in-every-sip"
              className="inline-block bg-amber-700 text-white px-6 py-3 rounded-xl shadow hover:scale-[1.02] transition-transform"
            >
              Learn More
            </Link> */}
          </div>

          <div className="relative rounded-2xl overflow-hidden h-96 shadow-lg">
            <Image src="/images/foto-product-3.jpg" alt="Sustainability practices" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-amber-700 to-amber-500 text-white">
        <div className="max-w-7xl mx-auto px-6 py-14 rounded-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-3xl font-style">Every Cup Has a Story</h3>
              <p className="mt-2 text-gray-100">
                Immerse yourself in the richness of our prestigious Indonesian coffee and discover the uniqueness of our
                Wild Luwak blend, ethically crafted and limited by nature.
              </p>
            </div>
            <div className="flex gap-4 justify-start md:justify-end">
              <Link href="/product" className="bg-white text-amber-700 px-6 py-3 rounded-xl font-medium shadow">
                Taste the Collection
              </Link>
              <Link href="/contact" className="border border-white px-6 py-3 rounded-xl text-white font-medium">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
