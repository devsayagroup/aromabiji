"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Feature = {
  title: string;
  desc: string;
  icon?: React.ReactNode;
};

const FEATURES: Feature[] = [
  {
    title: "Heritage Roasting",
    desc: "Over 40 years of family craftsmanship shaping beans into refined experiences.",
  },
  {
    title: "Ethical Sourcing",
    desc: "Direct partnership with farmers ensures fairness, traceability and respect for the land.",
  },
  {
    title: "Limited Harvests",
    desc: "Small-batch, rare coffees selected only when nature and season are perfect.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20 bg-gradient-to-b from-white via-gray-50 to-amber-50 text-gray-900">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 py-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-style uppercase leading-tight text-gray-900">
              A legacy of taste
            </h1>
            <p className="font-text text-md text-gray-700 max-w-lg">
              For over four decades, Aroma Biji has been crafting coffee that speaks of place and care. We combine
              generational knowledge with modern stewardship to deliver rare, honest, and luxurious beans from the
              heart of Indonesia to your cup.
            </p>
            <div className="flex gap-4">
              <Link
                href="/product"
                className="inline-block bg-amber-700 text-white px-6 py-3 rounded-lg shadow-lg font-medium hover:scale-[1.01] transition-transform"
              >
                Explore Our Collection
              </Link>
              <a
                href="#sustainability"
                className="inline-block border border-amber-700 text-amber-700 px-6 py-3 rounded-lg font-medium hover:bg-amber-50 transition"
              >
                Our Commitment
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-96 md:h-[400px] rounded-xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/foto-product-5.jpg"
              alt="Aroma Biji coffee beans and cup"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-6 left-6 bg-brown/90 backdrop-blur-sm py-4 px-8 rounded-lg">
              <p className="text-lg text-gray-100 flex">40 <span className="text-sm">+&ensp;</span>Years</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY US / FEATURES */}
      <section className="bg-brown border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            {FEATURES.map((f) => (
              <div key={f.title} className="space-y-3">
                <h3 className="text-xl text-gray-100 font-semibold font-serif">{f.title}</h3>
                <p className="text-gray-200">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HISTORY / TIMELINE */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="relative rounded-2xl overflow-hidden h-96 shadow-lg">
            <Image src="/images/foto-product-1.jpg" alt="Coffee farm" fill className="object-cover" />
          </div>

          <div className="">
            <h2 className="text-4xl font-style mb-4">Our Story</h2>
            <p className="text-gray-700 mb-6">
              Starting from passionate beginnings, Aroma Biji grew into a family of artisans that cherish every step of
              production. We nurture relationships with farmers, steward the land with care, and roast each batch to
              reveal its best character.
            </p>

            <ol className="space-y-6">
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 grid place-items-center font-semibold text-amber-700">1980s</div>
                <div>
                  <h4 className="font-semibold">Roots</h4>
                  <p className="text-gray-600">Small family farms and early roasting experiments lay the foundation.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 grid place-items-center font-semibold text-amber-700">1990s</div>
                <div>
                  <h4 className="font-semibold">Craft</h4>
                  <p className="text-gray-600">Expanded partnerships and refined roasting techniques define our flavor.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 grid place-items-center font-semibold text-amber-700">2020s</div>
                <div>
                  <h4 className="font-semibold">Sustainability</h4>
                  <p className="text-gray-600">A commitment to eco packaging and fair trade principles.</p>
                </div>
              </li>
            </ol>
          </div>

         
        </div>
      </section>

      {/* SUSTAINABILITY */}
      <section id="sustainability" className="bg-amber-50">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-serif mb-4">Sustainability is part of our craft</h3>
              <p className="text-gray-700 mb-6">
                We take responsibility for the land and people who make our coffee possible. From reducing our carbon
                footprint to switching to compostable pouches by 2025, every choice is intentional.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li>• Eco-friendly, paper-based packaging</li>
                <li>• Local farmer partnerships with fair pricing</li>
                <li>• Small-batch production to minimize waste</li>
              </ul>
            </div>

            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="rounded-xl bg-white p-6 shadow">
                <h4 className="text-3xl font-style mb-2">2025</h4>
                <p className="text-sm text-gray-600">Target: Full transition to compostable pouches</p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow">
                <h4 className="text-3xl font-style mb-2">100 <span className="font-text">+</span></h4>
                <p className="text-sm text-gray-600">Farmers and families supported through direct programs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-amber-700 to-amber-500 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 rounded-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-4xl font-style">Taste the legacy</h3>
              <p className="mt-2 text-gray-100">Join our journey, ethically sourced coffee that honors place and people.</p>
            </div>
            <div className="flex gap-4 justify-start md:justify-end">
              <Link href="/product" className="bg-white text-amber-700 px-6 py-3 rounded-lg font-medium shadow">
                Shop Now
              </Link>
              {/* <Link href="/contact" className="border border-white px-6 py-3 rounded-xl text-white font-medium">
                Contact Us
              </Link> */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
