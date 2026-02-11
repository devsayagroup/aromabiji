"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import LuxeButton from "../ui/LuxeButton";

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
  const reduceMotion = useReducedMotion();

  return (
    <main className="min-h-screen pt-16 md:pt-20">
      <section className="relative overflow-hidden px-6">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_18%_18%,rgba(255,236,214,0.10),transparent_55%),radial-gradient(900px_circle_at_82%_32%,rgba(192,140,86,0.14),transparent_60%),linear-gradient(180deg,#0A0A0A_0%,#0E0D0B_45%,#0B0A08_100%)]" />
          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
            className="space-y-6 text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-5"
            >
              <Image
                src="/logo/Icon-Logo.png"
                alt="Aroma Biji emblem"
                width={32}
                height={32}
                className="opacity-90"
              />
              <div className="flex items-center gap-3">
                {/* <span className="h-px w-10 bg-gradient-to-r from-transparent via-white/45 to-transparent" /> */}
                <span className="text-[11px] tracking-[0.35em] uppercase text-white/65">
                  About
                </span>
              </div>
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-style uppercase tracking-wider leading-[1.02]">
              A legacy of taste
            </h1>

            <p className="font-text text-sm md:text-base text-white/72 max-w-xl leading-relaxed">
              For over four decades, Aroma Biji has been crafting coffee that speaks of place and care.
              We combine generational knowledge with modern stewardship to deliver rare, honest, and refined
              beans from Indonesia to your cup.
            </p>

            <div className="flex flex-col mt-12 sm:flex-row gap-3">
              <LuxeButton href="/product" label="Explore Our Collection" />
            </div>
          </motion.div>

          {/* image card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: [0.2, 0.7, 0.2, 1] }}
            className="relative w-full h-[380px] md:h-[440px]"
          >
            <div className="absolute inset-0 rounded-2xl bg-white/5 shadow-[0_30px_90px_rgba(0,0,0,0.55)] overflow-hidden">
              <Image
                src="/images/foto-product-5.jpg"
                alt="Aroma Biji Luwak Coffee"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/10 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_60%_40%,rgba(255,220,170,0.12),transparent_62%)]" />
            </div>

            <div className="absolute left-6 bottom-6 rounded-2xl bg-black/55 px-6 py-4 backdrop-blur-md">
              <div className="text-[10px] tracking-[0.35em] uppercase text-white/60">
                Since
              </div>
              <div className="text-2xl font-style tracking-wide font-text text-white">
                40<span className="font-text text-base align-top">+</span> Years
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white px-6">
        <div className="max-w-7xl mx-auto py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
              viewport={{ once: true }}
              className="relative h-[380px] md:h-[480px]"
            >
              <div className="absolute inset-0 overflow-hidden rounded-2xl shadow-[0_24px_70px_rgba(0,0,0,0.12)]">
                <Image
                  src="/images/foto-product-1.jpg"
                  alt="Aroma Biji Collection"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/55 via-black/10 to-transparent" />
                <div className="absolute inset-0 ring-1 ring-black/5 rounded-2xl" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.06, ease: [0.2, 0.7, 0.2, 1] }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-10 bg-gradient-to-r from-transparent via-black/25 to-transparent" />
                <span className="text-[11px] tracking-[0.35em] uppercase text-black/60">
                  Our Story
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-style uppercase tracking-wider text-black mb-4">
                Crafted Through Generations
              </h2>

              <p className="text-sm md:text-base text-black/65 mb-8 leading-relaxed max-w-xl">
                Aroma Biji grew into a family of artisans that cherish every step from farm to roast.
                We nurture relationships with farmers, steward the land with care, and roast each batch
                to reveal its best character.
              </p>

              <ol className="relative pl-4 space-y-6">
                <span className="absolute left-[2px] top-0 bottom-0 w-px bg-black/10" />

                {[
                  {
                    year: "1980s",
                    title: "Roots",
                    desc: "Small family farms and early roasting experiments lay the foundation.",
                  },
                  {
                    year: "1990s",
                    title: "Craft",
                    desc: "Expanded partnerships and refined roasting techniques define our flavor.",
                  },
                  {
                    year: "2020s",
                    title: "Sustainability",
                    desc: "Eco-minded packaging and fair trade principles shape every choice.",
                  },
                ].map((t) => (
                  <li key={t.year} className="relative">
                    <span className="absolute left-[2px] top-[8px] h-[10px] w-[10px] rounded-full bg-black/90" />

                    <div className="flex items-baseline gap-1">
                      <span className="min-w-[62px] text-[11px] tracking-[0.30em] ml-5 uppercase text-black/85">
                        {t.year}
                      </span>

                      <div>
                        <h4 className="text-sm md:text-base font-semibold text-black">
                          {t.title}
                        </h4>
                        <p className="mt-1 text-sm text-black/60 leading-relaxed">
                          {t.desc}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="sustainability" className="relative px-6">
        <div className="max-w-7xl mx-auto py-16 md:py-20 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-36 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-10 bg-gradient-to-r from-transparent via-black/45 to-transparent" />
                <span className="text-[11px] tracking-[0.35em] uppercase text-black/65">
                  Commitment
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-style uppercase tracking-wider mb-4">
                Sustainability is part of our craft
              </h3>

              <p className="text-black/72 mb-6 leading-relaxed">
                We take responsibility for the land and people who make our coffee possible.
                From reducing our footprint to improving packaging choices every step is intentional.
              </p>

              <ul className="space-y-3 text-black/72 text-sm">
                <li>• Eco-friendly, paper-based packaging</li>
                <li>• Local farmer partnerships with fair pricing</li>
                <li>• Small-batch production to minimize waste</li>
              </ul>
            </div>

            {/* <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6"> */}
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl bg-black/90 border border-white/12 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                <div className="text-[10px] tracking-[0.35em] uppercase text-white/55">
                  Target
                </div>
                <h4 className="mt-2 text-4xl font-style tracking-wider text-white">2026</h4>
                <p className="mt-2 text-sm text-white/70">
                  Full transition to compostable pouches (timeline depends on suppliers & logistics).
                </p>
              </div>

              <div className="rounded-2xl bg-black/90 border border-white/12 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                <div className="text-[10px] tracking-[0.35em] uppercase text-white/55">
                  Community
                </div>
                <h4 className="mt-2 text-4xl font-style tracking-wider text-white">
                  100<span className="font-text text-2xl align-top">+</span>
                </h4>
                <p className="mt-2 text-sm text-white/70">
                  Farmers and families supported through direct programs and partnerships.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" /> */}
      </section>

      <section className="relative overflow-hidden px-6">
        <div className="relative max-w-7xl mx-auto py-16 md:py-20">
          <div className="rounded-3xl border border-white/12 p-10 md:p-12 bg-[radial-gradient(900px_circle_at_25%_25%,rgba(255,236,214,0.10),transparent_60%),radial-gradient(900px_circle_at_80%_40%,rgba(192,140,86,0.14),transparent_60%),linear-gradient(180deg,#0B0A08_0%,#0A0A0A_100%)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-[11px] tracking-[0.35em] uppercase text-white/65">
                  Ready
                </div>
                <h3 className="mt-2 text-4xl md:text-5xl font-style uppercase tracking-wider text-white">
                  Taste the legacy
                </h3>
                <p className="mt-3 text-white/72 leading-relaxed">
                  Join our journey ethically sourced coffee that honors place and people.
                </p>
              </div>

              <div className="flex justify-start md:justify-end">
                <LuxeButton href="/product" label="Shop Now" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

