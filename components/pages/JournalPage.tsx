// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion, useReducedMotion } from "framer-motion";

// type Journal = {
//   id: number;
//   title: string;
//   slug: string;
//   author: string;
//   date: string;
//   image: string;
//   metaDescription: string;
//   keywords: string[];
//   excerpt: string;
// };

// function formatDate(dateStr: string) {
//   const d = new Date(dateStr);
//   if (Number.isNaN(d.getTime())) return "";
//   return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "2-digit" });
// }

// function LuxeButton({ href, label }: { href: string; label: string }) {
//   return (
//     <Link
//       href={href}
//       className={[
//         "group inline-flex items-center justify-center rounded-full px-6 py-3",
//         "text-[11px] uppercase tracking-[0.28em]",
//         "bg-black text-white border border-black/10",
//         "hover:bg-[#0B0B0B] transition",
//         "focus:outline-none focus-visible:ring-2 focus-visible:ring-black/15",
//       ].join(" ")}
//     >
//       <span className="relative">
//         {label}
//         <span className="pointer-events-none absolute left-0 -bottom-2 h-px w-full scale-x-0 origin-left bg-gradient-to-r from-transparent via-[#C08C56] to-transparent transition-transform duration-500 group-hover:scale-x-100" />
//       </span>
//       <span className="ml-3 opacity-70 group-hover:opacity-100 transition">↗</span>
//     </Link>
//   );
// }

// export default function JournalPage({ journals }: { journals: Journal[] }) {
//   const reduceMotion = useReducedMotion();

//   const featured = journals?.[0];
//   const rest = journals?.slice(1) ?? [];

//   return (
//     <main className="min-h-screen bg-[#F4EFE7] text-[#12110F] px-6 pt-20">
//       {/* HERO */}
//       <section className="relative overflow-hidden">
//         <div className="absolute inset-0 pointer-events-none">
//           <div className="absolute inset-0 opacity-[0.06] mix-blend-multiply"
//             style={{
//               backgroundImage:
//                 "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22160%22 height=%22160%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%22160%22 height=%22160%22 filter=%22url(%23n)%22 opacity=%220.40%22/></svg>')",
//             }}
//           />
//           <div className="absolute left-0 right-0 top-0 h-px bg-black/10" />
//         </div>

//         <div className="relative max-w-7xl mx-auto py-14 md:py-18">
//           <div className="flex items-center gap-3 mb-4">
//             <span className="h-px w-10 bg-gradient-to-r from-transparent via-black/25 to-transparent" />
//             <span className="text-[11px] tracking-[0.35em] uppercase text-black/60">
//               Editorial
//             </span>
//           </div>

//           <h1 className="text-4xl md:text-6xl font-style uppercase tracking-wider leading-tight">
//             Journal
//           </h1>

//           <p className="mt-4 max-w-2xl text-[#12110F]/70 leading-relaxed">
//             Stories from origin, craft, and culture notes from the highlands, the roast, and the ritual.
//           </p>
//         </div>
//       </section>

//       {/* FEATURED */}
//       {featured ? (
//         <section className="max-w-7xl mx-auto pb-10 md:pb-14">
//           <motion.div
//             initial={{ opacity: 0, y: 12 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{
//               duration: reduceMotion ? 0 : 0.75,
//               ease: [0.2, 0.7, 0.2, 1],
//             }}
//             viewport={{ once: true }}
//           >
//             <Link
//               href={`/journal/${featured.slug}`}
//               className="group block overflow-hidden rounded-3xl bg-black"
//               aria-label={featured.title}
//             >
//               <div className="relative aspect-[32/9]">
//                 <Image
//                   src={featured.image}
//                   alt={featured.title}
//                   fill
//                   className="object-cover opacity-95 transition-transform duration-700 group-hover:scale-[1.02]"
//                   priority
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/18 to-transparent" />
//               </div>

//               <div className="p-6 md:p-8">
//                 <div className="flex items-center gap-3 mb-3">
//                   <span className="text-[10px] tracking-[0.32em] uppercase text-white/75">
//                     Featured
//                   </span>
//                   <span className="h-px flex-1 bg-white/15" />
//                   {featured.date ? (
//                     <span className="text-[10px] tracking-[0.25em] uppercase text-white/55">
//                       {formatDate(featured.date)}
//                     </span>
//                   ) : null}
//                 </div>

//                 <h2 className="text-2xl md:text-4xl font-style uppercase tracking-wide text-white leading-tight">
//                   {featured.title}
//                 </h2>

//                 <p className="mt-3 max-w-3xl text-sm md:text-[15px] leading-relaxed text-white/70">
//                   {featured.excerpt}
//                 </p>

//                 <div className="mt-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-white/70">
//                   <span className="relative">
//                     Read Article
//                     <span className="pointer-events-none absolute left-0 -bottom-2 h-px w-full scale-x-0 origin-left bg-gradient-to-r from-transparent via-white/65 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
//                   </span>
//                   <span className="opacity-70 group-hover:opacity-100 transition">↗</span>
//                 </div>
//               </div>
//             </Link>
//           </motion.div>
//         </section>
//       ) : null}

//       {/* LIST */}
//       <section className="max-w-7xl mx-auto pb-20">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
//           {rest.map((j, idx) => (
//             <motion.article
//               key={j.id}
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: reduceMotion ? 0 : 0.65,
//                 delay: reduceMotion ? 0 : 0.04 * idx,
//                 ease: [0.2, 0.7, 0.2, 1],
//               }}
//               viewport={{ once: true }}
//               className="overflow-hidden rounded-2xl bg-white/70 hover:bg-white transition"
//             >
//               <Link href={`/journal/${j.slug}`} className="group block" aria-label={j.title}>
//                 <div className="relative aspect-[16/10]">
//                   <Image src={j.image} alt={j.title} fill className="object-cover" />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent opacity-90" />
//                 </div>

//                 <div className="p-5">
//                   <div className="flex items-center gap-3 mb-2">
//                     <span className="text-[10px] tracking-[0.30em] uppercase text-[#12110F]/55">
//                       Journal
//                     </span>
//                     <span className="h-px flex-1 bg-black/10" />
//                     {j.date ? (
//                       <span className="text-[10px] tracking-[0.25em] uppercase text-[#12110F]/45">
//                         {formatDate(j.date)}
//                       </span>
//                     ) : null}
//                   </div>

//                   <h3 className="font-text font-semibold text-[15px] md:text-base leading-snug text-[#12110F]">
//                     {j.title}
//                   </h3>

//                   <p className="mt-2 text-[12px] md:text-[13px] text-[#12110F]/60 leading-relaxed line-clamp-3">
//                     {j.excerpt}
//                   </p>

//                   <div className="mt-3 text-[10px] uppercase tracking-[0.28em] text-[#12110F]/55">
//                     <span className="opacity-0 group-hover:opacity-100 transition">Read ↗</span>
//                   </div>
//                 </div>
//               </Link>
//             </motion.article>
//           ))}
//         </div>

//         <div className="mt-12 flex justify-center">
//           <LuxeButton href="/product" label="Browse Collection" />
//         </div>
//       </section>
//     </main>
//   );
// }

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

function clampWords(text: string, maxWords = 28) {
  const words = (text || "").trim().split(/\s+/);
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(" ") + "…";
}

function LuxeButton({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className={[
        "group inline-flex items-center justify-center rounded-full px-6 py-3",
        "text-[11px] uppercase tracking-[0.28em]",
        "bg-[#12110F] text-white",
        "hover:bg-[#0B0B09] transition",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20",
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
    <main className="min-h-screen bg-[#F4EFE7] text-[#12110F] px-6 md:px-0 pt-20">
      {/* HERO / MASTHEAD */}
      <section className="relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 pt-10 pb-10 md:pt-14 md:pb-14">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gradient-to-r from-transparent via-black/25 to-transparent" />
            <span className="text-[11px] tracking-[0.38em] uppercase text-black/55">
              Editorial
            </span>
            <span className="h-px w-12 bg-gradient-to-r from-transparent via-black/25 to-transparent" />
          </div>

          <h1 className="mt-5 text-center text-5xl md:text-7xl font-style uppercase tracking-[0.12em] leading-[0.95]">
            The Journal
          </h1>

          <p className="mt-4 text-center max-w-2xl mx-auto text-sm md:text-[15px] leading-relaxed text-[#12110F]/70">
            Stories from origin, craft, and culture notes from the highlands, the roast, and the ritual.
          </p>
        </div>
      </section>

      {/* FEATURED “COVER” */}
      {featured ? (
        <section className="max-w-7xl mx-auto pb-12 md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.8, ease: [0.2, 0.7, 0.2, 1] }}
            viewport={{ once: true }}
          >
            <Link
              href={`/journal/${featured.slug}`}
              className="group block"
              aria-label={featured.title}
            >
              <article className="relative overflow-hidden rounded-[28px] bg-[#12110F] shadow-[0_34px_110px_rgba(0,0,0,0.22)]">
                {/* Cover frame */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-[10px] rounded-[22px] ring-1 ring-white/10" />
                  <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
                  <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Cover image */}
                  <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[520px]">
                    <Image
                      src={featured.image}
                      alt={featured.title}
                      fill
                      priority
                      className="object-cover opacity-95 transition-transform duration-700 group-hover:scale-[1.01]"
                    />
                    {/* readability overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/20 to-transparent" />
                    <div className="absolute inset-0 opacity-70 bg-[radial-gradient(800px_circle_at_35%_30%,rgba(255,220,170,0.14),transparent_60%)]" />
                  </div>

                  {/* Cover text */}
                  <div className="relative p-7 md:p-10 flex flex-col justify-between">
                    <div>
                      {/* Issue line */}
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] tracking-[0.40em] uppercase text-white/70">
                          Editorial Issue
                        </span>
                        <span className="h-px flex-1 bg-white/12" />
                        <span className="text-[10px] tracking-[0.30em] uppercase text-white/55">
                          {featured.date ? formatDate(featured.date) : ""}
                        </span>
                      </div>

                      {/* Masthead */}
                      <div className="mt-12">
                        <h2 className="mt-3 text-3xl md:text-5xl font-style uppercase tracking-wide leading-tight text-white">
                          {featured.title}
                        </h2>

                        <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-white/18 to-transparent" />

                        <p className="mt-5 text-sm md:text-[15px] leading-relaxed text-white/70 max-w-xl">
                          {clampWords(featured.excerpt || featured.metaDescription, 34)}
                        </p>
                      </div>

                      {/* Author */}
                      {/* <div className="mt-6 text-[11px] tracking-[0.24em] uppercase text-white/55">
                        {featured.author ? `By ${featured.author}` : ""}
                      </div> */}
                    </div>

                    {/* CTA */}
                    <div className="pt-8">
                      <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.30em] text-white/70">
                        <span className="relative">
                          Read the cover story
                          <span className="pointer-events-none absolute left-0 -bottom-2 h-px w-full scale-x-0 origin-left bg-gradient-to-r from-transparent via-white/65 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                        </span>
                        <span className="opacity-70 group-hover:opacity-100 transition">↗</span>
                      </div>
                    </div>

                    {/* shine */}
                    <div className="pointer-events-none absolute -left-1/2 top-[-40%] h-[200%] w-[140%] rotate-12 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.16),transparent)] opacity-0 group-hover:opacity-30 transition-opacity duration-700" />
                  </div>
                </div>
              </article>
            </Link>
          </motion.div>
        </section>
      ) : null}

      {/* GRID LIST */}
      <section className="max-w-7xl mx-auto pb-20">
        <div className="flex items-end justify-between gap-6 mb-6 md:mb-8">
          <div>
            <div className="text-[10px] tracking-[0.40em] uppercase text-[#12110F]/55">
              Latest Articles
            </div>
            <div className="mt-2 h-px w-40 bg-gradient-to-r from-transparent via-black/15 to-transparent" />
          </div>

          <div className="hidden md:block">
            <LuxeButton href="/product" label="Browse Collection" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {rest.map((j, idx) => (
            <motion.article
              key={j.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduceMotion ? 0 : 0.6,
                delay: reduceMotion ? 0 : 0.04 * idx,
                ease: [0.2, 0.7, 0.2, 1],
              }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-2xl bg-white/70 hover:bg-white transition shadow-[0_18px_55px_rgba(0,0,0,0.06)]"
            >
              <Link href={`/journal/${j.slug}`} aria-label={j.title} className="block">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={j.image}
                    alt={j.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-3">
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

                  <h3 className="mt-3 font-text font-semibold text-[15px] md:text-base leading-snug text-[#12110F]">
                    {j.title}
                  </h3>

                  <p className="mt-2 text-[12px] md:text-[13px] text-[#12110F]/60 leading-relaxed line-clamp-3">
                    {j.excerpt}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.30em] text-[#12110F]/50">
                      Read
                    </span>
                    <span className="text-[#12110F]/45 group-hover:text-[#12110F]/75 transition">↗</span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 flex justify-center md:hidden">
          <LuxeButton href="/product" label="Browse Collection" />
        </div>
      </section>
    </main>
  );
}
