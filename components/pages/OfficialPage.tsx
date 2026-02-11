"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

function LuxeButton({
  href,
  label,
  variant = "solid",
}: {
  href: string;
  label: string;
  variant?: "solid" | "ghost";
}) {
  const base =
    "group inline-flex items-center justify-center rounded-full px-6 py-3 text-[11px] uppercase tracking-[0.28em] transition";
  const solid =
    "bg-[#12110F] text-white shadow-[0_16px_40px_rgba(0,0,0,0.16)] hover:shadow-[0_18px_46px_rgba(0,0,0,0.20)]";
  const ghost =
    "bg-white text-[#12110F] ring-1 ring-black/10 hover:ring-black/20";

  return (
    <Link href={href} className={[base, variant === "solid" ? solid : ghost].join(" ")}>
      <span className="relative">
        {label}
        <span className="pointer-events-none absolute left-0 -bottom-2 h-px w-full scale-x-0 origin-left bg-gradient-to-r from-transparent via-[#C08C56] to-transparent transition-transform duration-500 group-hover:scale-x-100" />
      </span>
      <span className="ml-3 opacity-70 group-hover:opacity-100 transition">↗</span>
    </Link>
  );
}

export default function OfficialPage() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="min-h-screen bg-white text-[#12110F] px-6 md:px-0 pt-12 md:pt-20">
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* <div className="absolute inset-0">
          <div className="absolute inset-0 bg-white" />
          <div className="absolute inset-0 opacity-70">
            <div className="absolute -left-40 top-10 h-[520px] w-[520px] rounded-full blur-3xl bg-[radial-gradient(circle_at_50%_50%,rgba(255,220,170,0.22),transparent_62%)]" />
            <div className="absolute -right-44 top-[-60px] h-[620px] w-[620px] rounded-full blur-3xl bg-[radial-gradient(circle_at_50%_50%,rgba(192,140,86,0.18),transparent_62%)]" />
          </div>
          <div className="absolute left-0 right-0 top-0 h-px bg-black/5" />
          <div className="absolute left-0 right-0 bottom-0 h-px bg-black/5" />
        </div> */}

        <div className="relative max-w-7xl mx-auto py-16 md:py-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: reduceMotion ? 0 : 0.8, ease: [0.2, 0.7, 0.2, 1] }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-gradient-to-r from-transparent via-black/35 to-transparent" />
              <span className="text-[11px] tracking-[0.35em] uppercase text-black/60">
                Official Notice
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-style uppercase tracking-wider leading-tight">
              Aroma Biji <span className="font-text">&</span> Our Official Website
            </h1>

            <p className="mt-4 text-[#12110F]/70 leading-relaxed max-w-2xl">
              aromabiji.co is the official and active domain of Aroma Biji under SAYA Group.
              For verified product information, brand updates, and official communication, please refer to this site.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <LuxeButton href="/product" label="Browse Collection" variant="solid" />
              <LuxeButton href="/story" label="Read Our Story" variant="ghost" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* BODY */}
      <section className="max-w-7xl mx-auto py-14 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0 : 0.8, ease: [0.2, 0.7, 0.2, 1] }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl bg-white ring-1 ring-black/5 shadow-[0_18px_55px_rgba(0,0,0,0.06)] p-7 md:p-9">
              <h2 className="text-2xl md:text-3xl font-style uppercase tracking-wider">
                Official Brand Statement
              </h2>
              <div className="mt-4 space-y-4 text-[#12110F]/75 leading-relaxed">
                <p>
                  Aroma Biji’s verified domain is <strong>aromabiji.co</strong>. This website is the official source for
                  our products, brand story, and customer support.
                </p>
                <p>
                  If you encounter other domains or listings, always cross-check with this official page or our verified
                  social accounts linked to aromabiji.co.
                </p>
              </div>

              <div className="mt-7 grid sm:grid-cols-2 gap-4">
                <div className="rounded-2xl bg-black/[0.03] ring-1 ring-black/5 p-5">
                  <p className="text-[11px] tracking-[0.30em] uppercase text-black/55">
                    Availability
                  </p>
                  <p className="mt-2 text-sm text-[#12110F]/75">
                    Exclusively offline at selected locations, and worldwide order via WhatsApp.
                  </p>
                </div>
                <div className="rounded-2xl bg-black/[0.03] ring-1 ring-black/5 p-5">
                  <p className="text-[11px] tracking-[0.30em] uppercase text-black/55">
                    Worldwide Shipping
                  </p>
                  <p className="mt-2 text-sm text-[#12110F]/75">
                    Delivery may take up to <strong>30 days</strong> depending on destination and customs.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.aside
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0 : 0.8, delay: 0.05, ease: [0.2, 0.7, 0.2, 1] }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl bg-[#12110F] text-white p-7 md:p-9 shadow-[0_24px_70px_rgba(0,0,0,0.14)]">
              <p className="text-[11px] tracking-[0.35em] uppercase text-white/70">
                Quick Verification
              </p>
              <h3 className="mt-3 text-2xl font-style uppercase tracking-wider">
                How to confirm it’s official
              </h3>

              <ul className="mt-5 space-y-3 text-sm text-white/80 leading-relaxed">
                <li>• Our official domain is <strong>aromabiji.co</strong>.</li>
                <li>• Verified social profiles link back to aromabiji.co.</li>
                <li>• This page includes Organization schema for search engines.</li>
                <li>• Need confirmation? Contact us via WhatsApp.</li>
              </ul>

              <div className="mt-7 flex flex-col gap-3">
                <LuxeButton href="/contact" label="Contact / WhatsApp Order" variant="solid" />
                <Link
                  href="/faq"
                  className="text-[11px] uppercase tracking-[0.28em] text-white/70 hover:text-white transition text-center"
                >
                  Read FAQ / How to Order ↗
                </Link>
              </div>
            </div>
          </motion.aside>
        </div>

        <div className="mt-12 text-center text-sm text-[#12110F]/55">
          For press & partnerships, please use the contact details on the Contact page.
        </div>
      </section>
    </main>
  );
}
