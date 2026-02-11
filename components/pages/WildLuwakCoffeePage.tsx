"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

function LuxeButton({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center justify-center rounded-full px-6 py-3
                 text-[11px] uppercase tracking-[0.28em]
                 bg-[#12110F] text-white
                 shadow-[0_16px_40px_rgba(0,0,0,0.18)]
                 hover:shadow-[0_18px_46px_rgba(0,0,0,0.22)] transition"
    >
      <span className="relative">
        {label}
        <span className="pointer-events-none absolute left-0 -bottom-2 h-px w-full scale-x-0 origin-left bg-gradient-to-r from-transparent via-[#C08C56] to-transparent transition-transform duration-500 group-hover:scale-x-100" />
      </span>
      <span className="ml-3 text-white/60 group-hover:text-white/85 transition">↗</span>
    </Link>
  );
}

function SectionTag({ children }: { children: string }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="h-px w-10 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
      <span className="text-[11px] tracking-[0.35em] uppercase text-black/55">
        {children}
      </span>
    </div>
  );
}

export default function WildLuwakCoffeePage() {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    initial: { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" as const },
    transition: { duration: reduceMotion ? 0 : 0.8, ease: [0.2, 0.7, 0.2, 1] as const },
  };

  return (
    <main className="min-h-screen bg-white text-[#12110F] px-6 md:px-0 pt-12 md:pt-20">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-white" />
          <div className="absolute left-0 right-0 top-0 h-px bg-black/5" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
              <span className="text-[11px] tracking-[0.35em] uppercase text-black/55">
                Wild • Indonesia • Heritage Roast
              </span>
              <span className="h-px w-10 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
            </div>

            <motion.h1 {...fadeUp} className="text-4xl md:text-6xl font-style uppercase tracking-wider leading-tight">
              Wild Luwak Coffee
              <span className="font-text"> (</span>Kopi Luwak<span className="font-text">)</span>
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{
                duration: reduceMotion ? 0 : 0.8,
                delay: reduceMotion ? 0 : 0.06,
                ease: [0.2, 0.7, 0.2, 1],
              }}
              className="mt-4 mx-auto max-w-3xl text-sm md:text-base text-black/60 leading-relaxed"
            >
              A refined Indonesian coffee experience, crafted with Aroma Biji’s heritage approach.
              Discover taste notes, authenticity guidance, and how to order worldwide via WhatsApp.
            </motion.p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <LuxeButton href="/product" label="Browse Collection" />
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center rounded-full px-6 py-3
                           text-[11px] uppercase tracking-[0.28em]
                           bg-white text-[#12110F] ring-1 ring-black/10 hover:ring-black/20 transition"
              >
                Order via WhatsApp{" "}
                <span className="ml-3 text-[#12110F]/50 group-hover:text-[#12110F]/80 transition">
                  ↗
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto pb-10 md:pb-14">
        <motion.div {...fadeUp} className="relative overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-[0_24px_70px_rgba(0,0,0,0.10)]">
          <div className="relative aspect-[12/8] md:aspect-[16/8] bg-[#F6F1E8]">
            <Image
              src="/images/full-product.jpeg"
              alt="Aroma Biji Wild Luwak Coffee from Indonesia"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-transparent" />
          </div>
        </motion.div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto md:px-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main */}
          <div className="lg:col-span-8 space-y-12">
            <motion.section {...fadeUp}>
              <SectionTag>What it is</SectionTag>
              <h2 className="text-2xl md:text-3xl font-style uppercase tracking-wider">
                What is Wild Kopi Luwak?
              </h2>
              <p className="mt-3 text-black/65 leading-relaxed">
                Wild Luwak Coffee (Kopi Luwak) is associated with a natural selection process in the wild before the beans
                are cleaned and roasted. Aroma Biji emphasizes craft, flavor clarity, and a responsible approach.
              </p>
            </motion.section>

            <motion.section {...fadeUp}>
              <SectionTag>Taste</SectionTag>
              <h2 className="text-2xl md:text-3xl font-style uppercase tracking-wider">
                Taste Profile
              </h2>
              <p className="mt-3 text-black/65 leading-relaxed">
                Expect a smooth mouthfeel with a refined finish. Notes can lean toward cocoa, warm spice, gentle fruit,
                and mellow sweetness—depending on roast profile and origin.
              </p>
            </motion.section>

            <motion.section {...fadeUp}>
              <SectionTag>Responsibility</SectionTag>
              <h2 className="text-2xl md:text-3xl font-style uppercase tracking-wider">
                A Responsible Approach
              </h2>
              <p className="mt-3 text-black/65 leading-relaxed">
                We position this as <strong>Wild Luwak</strong> and focus on transparency and care in handling.
                If you have questions about availability or selection, our team can guide you via WhatsApp.
              </p>
              <p className="mt-3 text-black/55 text-sm leading-relaxed">
                Tip: In any “Kopi Luwak” purchase, prioritize sellers that can clearly explain sourcing, handling, and
                quality controls—this protects both customers and the coffee ecosystem.
              </p>
            </motion.section>

            <motion.section {...fadeUp}>
              <SectionTag>Authenticity</SectionTag>
              <h2 className="text-2xl md:text-3xl font-style uppercase tracking-wider">
                Authenticity Guide
              </h2>
              <ul className="mt-3 space-y-2 text-black/65 leading-relaxed list-disc pl-5">
                <li>Look for transparent origin and consistent product information.</li>
                <li>Buy from brands with clear customer support and traceable handling.</li>
                <li>Be cautious of prices that feel “too cheap” for genuine Wild Kopi Luwak.</li>
              </ul>
            </motion.section>

            <motion.section {...fadeUp}>
              <SectionTag>Brew</SectionTag>
              <h2 className="text-2xl md:text-3xl font-style uppercase tracking-wider">
                How to Brew Wild Luwak Coffee
              </h2>
              <p className="mt-3 text-black/65 leading-relaxed">
                Brew with clean water and precise ratios to preserve aroma. For French Press, Espresso, Dripper, Siphon,
                and Moka Pot, follow our guide.
              </p>
              <div className="mt-5">
                <LuxeButton href="/brewing-methods" label="View Brewing Guide" />
              </div>
            </motion.section>

            <motion.section {...fadeUp}>
              <SectionTag>Order</SectionTag>
              <h2 className="text-2xl md:text-3xl font-style uppercase tracking-wider">
                How to Buy <span className="font-text">(</span>Offline <span className="font-text">&</span> Worldwide <span className="font-text">)</span>
              </h2>
              <ul className="mt-3 space-y-2 text-black/65 leading-relaxed list-disc pl-5">
                <li>Shop offline at Soekarno-Hatta International Airport and Plaza Bali.</li>
                <li>Worldwide orders via WhatsApp (delivery up to 30 days depending on customs).</li>
                <li>Send: product name, variant, quantity, destination, and phone number.</li>
              </ul>
              <div className="mt-6 flex flex-col md:items-center sm:flex-row gap-3">
                <LuxeButton href="/contact" label="Order via WhatsApp" />
                <Link href="/faq" className="underline underline-offset-4 text-sm text-black/60 hover:text-black transition">
                  FAQ & How to Order
                </Link>
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="relative lg:col-span-4">
            <motion.aside
              {...fadeUp}
              className="rounded-3xl bg-[radial-gradient(1200px_circle_at_18%_18%,rgba(255,236,214,0.10),transparent_55%),radial-gradient(900px_circle_at_82%_32%,rgba(192,140,86,0.14),transparent_60%),linear-gradient(180deg,#0A0A0A_0%,#0E0D0B_45%,#0B0A08_100%)] ring-1 ring-black/5 shadow-[0_18px_55px_rgba(0,0,0,0.06)] p-6"
            >
              <p className="text-[11px] tracking-[0.35em] uppercase text-white/55">
                Quick Facts
              </p>

              <div className="mt-4 space-y-3 text-sm text-white/65">
                <div className="flex justify-between gap-4">
                  <span className="text-white/45">Type</span>
                  <span>Wild Luwak Coffee</span>
                </div>
                <div className="h-px bg-white/5" />
                <div className="flex justify-between gap-4">
                  <span className="text-white/45">Origin</span>
                  <span>Indonesia</span>
                </div>
                <div className="h-px bg-white/5" />
                <div className="flex justify-between gap-4">
                  <span className="text-white/45">Ordering</span>
                  <span>Offline & WhatsApp</span>
                </div>
                <div className="h-px bg-white/5" />
                <div className="flex justify-between gap-4">
                  <span className="text-white/45">Shipping</span>
                  <span>Worldwide (≤ 30 days)</span>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <Link
                  href="/product"
                  className="group inline-flex items-center justify-between w-full rounded-2xl bg-[#12110F] text-white px-5 py-4
                             text-[11px] uppercase tracking-[0.28em] hover:bg-[#0B0B0B] transition"
                >
                  View Products{" "}
                  <span className="text-white/70 group-hover:text-white/90 transition">↗</span>
                </Link>

                <Link
                  href="/journal"
                  className="group inline-flex items-center justify-between w-full rounded-2xl bg-white text-[#12110F] px-5 py-4
                             text-[11px] uppercase tracking-[0.28em] ring-1 ring-white/10 hover:ring-white/20 transition"
                >
                  Read Journal{" "}
                  <span className="text-[#12110F]/50 group-hover:text-[#12110F]/80 transition">↗</span>
                </Link>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </main>
  );
}
