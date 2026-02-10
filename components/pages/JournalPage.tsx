"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

type Journal = {
  id: number;
  title: string;
  slug: string;
  author: string;
  date: string;
  image: string;
  metaDescription: string;
  keywords: string[];
  excerpt: string;
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "2-digit" });
}

function LuxeButton({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className={[
        "group inline-flex items-center justify-center rounded-full px-6 py-3",
        "text-[11px] uppercase tracking-[0.28em]",
        "bg-black text-white border border-black/10",
        "hover:bg-[#0B0B0B] transition",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-black/15",
      ].join(" ")}
    >
      <span className="relative">
        {label}
        <span className="pointer-events-none absolute left-0 -bottom-2 h-px w-full scale-x-0 origin-left bg-gradient-to-r from-transparent via-[#C08C56] to-transparent transition-transform duration-500 group-hover:scale-x-100" />
      </span>
      <span className="ml-3 opacity-70 group-hover:opacity-100 transition">↗</span>
    </Link>
  );
}

export default function JournalPage({ journals }: { journals: Journal[] }) {
  const reduceMotion = useReducedMotion();

  const featured = journals?.[0];
  const rest = journals?.slice(1) ?? [];

  return (
    <main className="min-h-screen bg-[#F4EFE7] text-[#12110F] px-6 pt-20">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-[0.06] mix-blend-multiply"
            style={{
              backgroundImage:
                "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22160%22 height=%22160%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%22160%22 height=%22160%22 filter=%22url(%23n)%22 opacity=%220.40%22/></svg>')",
            }}
          />
          <div className="absolute left-0 right-0 top-0 h-px bg-black/10" />
        </div>

        <div className="relative max-w-7xl mx-auto py-14 md:py-18">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-gradient-to-r from-transparent via-black/25 to-transparent" />
            <span className="text-[11px] tracking-[0.35em] uppercase text-black/60">
              Editorial
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-style uppercase tracking-wider leading-tight">
            Journal
          </h1>

          <p className="mt-4 max-w-2xl text-[#12110F]/70 leading-relaxed">
            Stories from origin, craft, and culture notes from the highlands, the roast, and the ritual.
          </p>
        </div>
      </section>

      {/* FEATURED */}
      {featured ? (
        <section className="max-w-7xl mx-auto pb-10 md:pb-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.75,
              ease: [0.2, 0.7, 0.2, 1],
            }}
            viewport={{ once: true }}
          >
            <Link
              href={`/journal/${featured.slug}`}
              className="group block overflow-hidden rounded-3xl bg-black"
              aria-label={featured.title}
            >
              <div className="relative aspect-[32/9]">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover opacity-95 transition-transform duration-700 group-hover:scale-[1.02]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/18 to-transparent" />
              </div>

              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] tracking-[0.32em] uppercase text-white/75">
                    Featured
                  </span>
                  <span className="h-px flex-1 bg-white/15" />
                  {featured.date ? (
                    <span className="text-[10px] tracking-[0.25em] uppercase text-white/55">
                      {formatDate(featured.date)}
                    </span>
                  ) : null}
                </div>

                <h2 className="text-2xl md:text-4xl font-style uppercase tracking-wide text-white leading-tight">
                  {featured.title}
                </h2>

                <p className="mt-3 max-w-3xl text-sm md:text-[15px] leading-relaxed text-white/70">
                  {featured.excerpt}
                </p>

                <div className="mt-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-white/70">
                  <span className="relative">
                    Read Article
                    <span className="pointer-events-none absolute left-0 -bottom-2 h-px w-full scale-x-0 origin-left bg-gradient-to-r from-transparent via-white/65 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                  </span>
                  <span className="opacity-70 group-hover:opacity-100 transition">↗</span>
                </div>
              </div>
            </Link>
          </motion.div>
        </section>
      ) : null}

      {/* LIST */}
      <section className="max-w-7xl mx-auto pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {rest.map((j, idx) => (
            <motion.article
              key={j.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduceMotion ? 0 : 0.65,
                delay: reduceMotion ? 0 : 0.04 * idx,
                ease: [0.2, 0.7, 0.2, 1],
              }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl bg-white/70 hover:bg-white transition"
            >
              <Link href={`/journal/${j.slug}`} className="group block" aria-label={j.title}>
                <div className="relative aspect-[16/10]">
                  <Image src={j.image} alt={j.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent opacity-90" />
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] tracking-[0.30em] uppercase text-[#12110F]/55">
                      Journal
                    </span>
                    <span className="h-px flex-1 bg-black/10" />
                    {j.date ? (
                      <span className="text-[10px] tracking-[0.25em] uppercase text-[#12110F]/45">
                        {formatDate(j.date)}
                      </span>
                    ) : null}
                  </div>

                  <h3 className="font-text font-semibold text-[15px] md:text-base leading-snug text-[#12110F]">
                    {j.title}
                  </h3>

                  <p className="mt-2 text-[12px] md:text-[13px] text-[#12110F]/60 leading-relaxed line-clamp-3">
                    {j.excerpt}
                  </p>

                  <div className="mt-3 text-[10px] uppercase tracking-[0.28em] text-[#12110F]/55">
                    <span className="opacity-0 group-hover:opacity-100 transition">Read ↗</span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <LuxeButton href="/product" label="Browse Collection" />
        </div>
      </section>
    </main>
  );
}
