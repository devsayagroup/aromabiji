"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Droplets, Timer, Thermometer, Coffee, ArrowUpRight } from "lucide-react";
import LuxeButton from "../ui/LuxeButton";

type Method = {
  title: string;
  dose: string;
  grind: string;
  temp: string;
  time: string;
  water: string;
  note?: string;
};

const METHODS: Method[] = [
  {
    title: "French Press",
    dose: "35 g",
    grind: "Medium Coarse",
    temp: "91–96°C",
    time: "3–5 min",
    water: "500 ml",
    note: "Full-bodied, rich texture.",
  },
  {
    title: "Espresso Machine",
    dose: "7–10 g",
    grind: "Fine Grind",
    temp: "91–96°C",
    time: "20–30 sec",
    water: "30–60 ml",
    note: "Short extraction, intense aroma.",
  },
  {
    title: "Coffee Dripper",
    dose: "30 g",
    grind: "Fine Coarse",
    temp: "91–96°C",
    time: "2–3 min",
    water: "500 ml",
    note: "Clean cup with defined notes.",
  },
  {
    title: `Vacuum Pot`,
    dose: "25 g",
    grind: "Medium Fine",
    temp: "91–96°C",
    time: "3–5 min",
    water: "300 ml",
    note: "Elegant clarity & fragrance.",
  },
  {
    title: "Moka Pot",
    dose: "6 g",
    grind: "Fine Grind",
    temp: "91–96°C",
    time: "2 min",
    water: "240 ml",
    note: "Bold, espresso-like profile.",
  },
];

export default function BrewingMethodsPage() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="min-h-screen px-6 md:px-0 text-[#12110F]">
        <div className="absolute inset-0 h-[120vh]">
            <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_18%_18%,rgba(255,236,214,0.10),transparent_55%),radial-gradient(900px_circle_at_82%_32%,rgba(192,140,86,0.14),transparent_60%),linear-gradient(180deg,#0A0A0A_0%,#0E0D0B_45%,#0B0A08_100%)]" />
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        </div>
        {/* HERO */}
        <section className="relative overflow-hidden pt-12 md:pt-16">
            <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
            <div className="text-center">
                <div className="mb-4 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <span className="text-[11px] tracking-[0.35em] uppercase text-white/55">
                    Guide
                </span>
                <span className="h-px w-10 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </div>

                <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.2, 0.7, 0.2, 1] }}
                className="text-4xl md:text-6xl text-white font-style uppercase tracking-wider"
                >
                Brewing Methods
                </motion.h1>

                <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 0.06 }}
                className="mt-4 mx-auto max-w-2xl text-sm md:text-base text-white/60 leading-relaxed"
                >
                A simple luxury guide to brew Aroma Biji. Dose, grind, temperature, and time.
                Adjust slightly to match your cup preference.
                </motion.p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <LuxeButton href="/product" label="Browse Collection" />
                <Link
                    href="/faq"
                    className="group inline-flex items-center justify-center rounded-full px-6 py-3 text-[11px] uppercase tracking-[0.28em]
                            bg-white text-[#12110F] ring-1 ring-black/10 hover:ring-black/20 transition"
                >
                    How to Order <span className="ml-3 text-[#12110F]/50 group-hover:text-[#12110F]/80 transition">↗</span>
                </Link>
                </div>
            </div>
            </div>
        </section>

        {/* CONTENT */}
        <section className="relative pb-20">
            <div className="max-w-7xl mx-auto">

            <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                {METHODS.map((m, idx) => (
                <motion.article
                    key={m.title}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                    duration: reduceMotion ? 0 : 0.7,
                    delay: reduceMotion ? 0 : idx * 0.04,
                    ease: [0.2, 0.7, 0.2, 1],
                    }}
                    className="rounded-3xl bg-white ring-1 ring-black/5 shadow-[0_18px_55px_rgba(0,0,0,0.06)] p-6 md:p-7"
                >
                    <div className="flex items-center justify-between gap-6">
                    <div>
                        <p className="text-[11px] tracking-[0.35em] uppercase text-black/55">
                        Method
                        </p>
                        <h2 className="mt-2 text-2xl md:text-3xl font-style uppercase tracking-wider">
                        {m.title}
                        </h2>
                    </div>

                    {/* <div className="hidden sm:flex items-center gap-2 text-black/55">
                        <Coffee className="h-4 w-4" />
                        <span className="text-[11px] tracking-[0.30em] uppercase">Aroma Biji</span>
                    </div> */}
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                        <Coffee className="h-4 w-4 mt-0.5 text-black/55" />
                        <div>
                        <p className="text-[11px] tracking-[0.30em] uppercase text-black/55">
                            Coffee
                        </p>
                        <p className="text-sm text-black/75">{m.dose}</p>
                        <p className="text-xs text-black/50">{m.grind}</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <Droplets className="h-4 w-4 mt-0.5 text-black/55" />
                        <div>
                        <p className="text-[11px] tracking-[0.30em] uppercase text-black/55">
                            Water
                        </p>
                        <p className="text-sm text-black/75">{m.water}</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <Thermometer className="h-4 w-4 mt-0.5 text-black/55" />
                        <div>
                        <p className="text-[11px] tracking-[0.30em] uppercase text-black/55">
                            Temp
                        </p>
                        <p className="text-sm text-black/75">{m.temp}</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <Timer className="h-4 w-4 mt-0.5 text-black/55" />
                        <div>
                        <p className="text-[11px] tracking-[0.30em] uppercase text-black/55">
                            Time
                        </p>
                        <p className="text-sm text-black/75">{m.time}</p>
                        </div>
                    </div>
                    </div>
                    <div className="mt-6 h-px w-full bg-black/5" />


                    {m.note ? (
                    <p className="mt-6 text-sm text-black/60 leading-relaxed">
                        {m.note}
                    </p>
                    ) : null}


                    {/* <p className="mt-4 text-xs text-black/45 leading-relaxed">
                    Tip: If your cup tastes too strong, grind slightly coarser or shorten time. If it tastes thin, grind slightly finer or extend time.
                    </p> */}
                </motion.article>
                ))}
            </div>

            {/* CTA */}
            <div className="mt-14 text-center">
                <LuxeButton href="/contact" label="Order via WhatsApp" />
                <p className="mt-3 text-xs text-black/50 tracking-[0.20em] uppercase">
                Available offline at Soekarno-Hatta International Airport & Plaza Bali
                </p>
            </div>
            </div>
        </section>
    </main>
  );
}
