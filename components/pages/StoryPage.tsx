"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import LuxeButton from "../ui/LuxeButton";

export default function StoryPage() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="min-h-screen px-6 bg-white text-black">
      <section className="relative overflow-hidden pt-14 md:pt-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-10 h-[520px] w-[520px] rounded-full blur-3xl bg-[radial-gradient(circle_at_50%_50%,rgba(255,220,170,0.26),transparent_62%)]" />
          <div className="absolute -right-44 top-[-60px] h-[620px] w-[620px] rounded-full blur-3xl bg-[radial-gradient(circle_at_50%_50%,rgba(192,140,86,0.16),transparent_62%)]" />
          <div
            className="absolute inset-0 opacity-[0.04] mix-blend-multiply"
            style={{
              backgroundImage:
                "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22160%22 height=%22160%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%22160%22 height=%22160%22 filter=%22url(%23n)%22 opacity=%220.35%22/></svg>')",
            }}
          />
          <div className="absolute left-0 right-0 top-0 h-px bg-black/5" />
        </div>

        <div className="relative max-w-7xl mx-auto py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div className="space-y-6" >
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
                <span className="text-[11px] tracking-[0.35em] uppercase text-black/55">
                  Story
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-style uppercase tracking-wider leading-[1.02]">
                From Passion to Perfection
              </h1>

              <p className="font-text text-sm md:text-base text-black/60 leading-relaxed max-w-xl">
                Every story begins with a spark. Ours was born from love for the aroma, the ritual, and the art of coffee.
                Over four decades later, Aroma Biji stands as a symbol of heritage, sustainability, and craftsmanship—
                representing the finest taste of Indonesian coffee.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <LuxeButton href="#legacy" label="Read the legacy" variant="ghost" />
                <LuxeButton href="/product" label="Taste the collection" variant="primary" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.95,
                delay: reduceMotion ? 0 : 0.06,
                ease: [0.2, 0.7, 0.2, 1],
              }}
              className="relative h-[380px] md:h-[460px]"
            >
              <div className="absolute inset-0 rounded-2xl overflow-hidden bg-white ring-1 ring-black/5">
                <Image
                  src="/images/foto-product-7.jpg"
                  alt="Coffee beans and brewing ritual"
                  fill
                  className="object-cover"
                  priority
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/55 via-black/10 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_60%_40%,rgba(255,220,170,0.14),transparent_62%)]" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="legacy" className="max-w-7xl mx-auto py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.2, 0.7, 0.2, 1] }}
            viewport={{ once: true, margin: "-80px" }}
            className="relative h-[380px] md:h-[460px]"
          >
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-[0_24px_70px_rgba(0,0,0,0.10)] ring-1 ring-black/5">
              <Image
                src="/images/full-product.jpeg"
                alt="Legacy of Aroma Biji"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-black/10 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.85,
              delay: reduceMotion ? 0 : 0.06,
              ease: [0.2, 0.7, 0.2, 1],
            }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
              <span className="text-[11px] tracking-[0.35em] uppercase text-black/55">
                Heritage
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-style uppercase tracking-wider mb-4">
              A Legacy in Every Bean
            </h2>

            <div className="space-y-4 text-sm md:text-base font-text text-black/60 leading-relaxed">
              <p>
                What began as a humble pursuit has evolved into a lifelong dedication. For more than forty years, we’ve
                refined every detail—from cultivation to roasting—guided by honesty and authenticity.
              </p>
              <p>
                Each generation has passed down knowledge, preserving the values that make Aroma Biji unique. Every bean
                reflects tradition, ethics, and the deep connection between people and land.
              </p>
            </div>

            <div className="mt-4 space-y-4">
              {[
                { title: "Intentional roasting", desc: "Small batches to reveal clarity and character." },
                { title: "Respect for origin", desc: "Stewardship that honors farmers and land." },
                { title: "Craft passed down", desc: "A heritage refined through generations." },
              ].map((x) => (
                <div key={x.title} className="flex gap-4">
                  <span className="mt-2 h-[6px] w-[6px] rounded-full bg-black/60" />
                  <div>
                    <p className="text-[12px] tracking-[0.30em] uppercase text-black">
                      {x.title}
                    </p>
                    <p className="mt-1 text-sm text-black/60">{x.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="sustainability" className="max-w-7xl mx-auto py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.2, 0.7, 0.2, 1] }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
              <span className="text-[11px] tracking-[0.35em] uppercase text-black/55">
                Commitment
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-style uppercase tracking-wider mb-4">
              Sustainability in Every Sip
            </h2>

            <div className="space-y-4 text-sm md:text-base font-text text-black/60 leading-relaxed">
              <p>
                We care deeply about our planet—our home. Our ambition is to support a more sustainable future by
                minimizing our footprint and strengthening circular practices.
              </p>
              <p>
                From paper-based packaging to aiming for 100% compostable pouches by 2025, we’re committed to protecting
                what we love most. Together, we can make each cup meaningful.
              </p>
            </div>

            <div className="mt-4 space-y-4">
              {[
                { title: "Eco-minded packaging", desc: "Paper-based materials with lower impact." },
                { title: "Circular habits", desc: "Encouraging reuse, refill, and responsible disposal." },
                { title: "2025 target", desc: "Toward compostable pouches—limited by what’s truly sustainable." },
              ].map((x) => (
                <div key={x.title} className="flex gap-4">
                  <span className="mt-2 h-[6px] w-[6px] rounded-full bg-black/60" />
                  <div>
                    <p className="text-[12px] tracking-[0.30em] uppercase text-black">
                      {x.title}
                    </p>
                    <p className="mt-1 text-sm text-black/60">{x.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.85,
              delay: reduceMotion ? 0 : 0.06,
              ease: [0.2, 0.7, 0.2, 1],
            }}
            viewport={{ once: true, margin: "-80px" }}
            className="relative h-[380px] md:h-[460px]"
          >
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-[0_24px_70px_rgba(0,0,0,0.10)] ring-1 ring-black/5">
              <Image
                src="/images/foto-product-3.jpg"
                alt="Sustainability practices"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-black/10 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto py-16 md:py-20">
          <div className="rounded-3xl border border-white/12 p-10 md:p-12 bg-[radial-gradient(900px_circle_at_25%_25%,rgba(255,236,214,0.10),transparent_60%),radial-gradient(900px_circle_at_80%_40%,rgba(192,140,86,0.14),transparent_60%),linear-gradient(180deg,#0B0A08_0%,#0A0A0A_100%)]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="col-span-2">
                <div className="text-[11px] tracking-[0.35em] uppercase text-white/65">
                  Invitation
                </div>
                <h3 className="mt-2 text-4xl md:text-5xl font-style uppercase tracking-wider text-white">
                  Every Cup Has a Story
                </h3>
                <p className="mt-3 md:w-[80%] text-white/72 leading-relaxed">
                  Immerse yourself in the richness of our Indonesian coffee and discover the uniqueness of Wild Luwak
                  ethically crafted and limited by nature.
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
