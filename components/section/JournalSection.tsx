// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import journals from "@/lib/journals.json";

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
//   content: {
//     sections: {
//       heading: string;
//       body: string;
//     }[];
//   };
// };

// export default function JournalSection() {
//   return (
//     <section className="py-32">
//       <div className="max-w-7xl mx-auto px-4">
//         <h1 className="text-3xl md:text-5xl font-style uppercase mb-12 text-center">
//           The Journal of Aroma
//         </h1>

//         <div className="grid md:grid-cols-4 grid-cols-2 gap-4 md:gap-6 auto-rows-[250px]">
//           {journals.slice(0, 5).map((journal: Journal, index) => (
//             <motion.div
//               key={journal.id}
//               className={`relative rounded-xl overflow-hidden shadow-lg cursor-pointer group ${
//                 index === 0
//                   ? "md:col-span-2 md:row-span-2"
//                   : index === 3
//                   ? "md:col-span-2"
//                   : ""
//               }`}
//             >
//               <Link href={`/journal/${journal.slug}`}>
//                 <Image
//                   src={journal.image}
//                   alt={journal.title}
//                   fill
//                   className="object-cover transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-black/20"></div>
//                 <div className="absolute bottom-4 left-4 text-white md:p-2">
//                   <h3 className="text-lg md:text-xl font-text font-semibold leading-tight mb-1">
//                     {journal.title}
//                   </h3>
//                   <p className="text-xs opacity-80 line-clamp-2">
//                     {journal.excerpt}
//                   </p>
//                   {/* <p className="text-[11px] mt-2 opacity-60">{journal.date}</p> */}
//                 </div>
//               </Link>
//             </motion.div>
//           ))}
//         </div>

//         <div className="mt-12 text-center">
//           <Link
//             href="/journal"
//             className="px-8 py-3 text-sm font-medium rounded-full bg-black text-white hover:bg-neutral-800 transition"
//           >
//             View All Articles
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion, useReducedMotion } from "framer-motion";
// import journals from "@/lib/journals.json";

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
//   content: {
//     sections: {
//       heading: string;
//       body: string;
//     }[];
//   };
// };

// /** White-theme luxury button */
// function LuxeButton({
//   href,
//   label,
//   className = "",
// }: {
//   href: string;
//   label: string;
//   className?: string;
// }) {
//   return (
//     <Link
//       href={href}
//       className={[
//         "group inline-flex items-center justify-center rounded-full px-6 py-3",
//         "text-[11px] uppercase tracking-[0.28em]",
//         "bg-black text-white border border-black/10",
//         "hover:bg-[#0B0B0B] transition",
//         "focus:outline-none focus-visible:ring-2 focus-visible:ring-black/15",
//         className,
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

// export default function JournalSection() {
//   const reduceMotion = useReducedMotion();

//   return (
//     <section className="relative bg-white py-24 md:py-32 overflow-hidden">
//       <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-white" />

//         <div className="absolute inset-0 opacity-80">
//           <div className="absolute -left-40 top-10 h-[520px] w-[520px] rounded-full blur-3xl bg-[radial-gradient(circle_at_50%_50%,rgba(255,220,170,0.28),transparent_62%)]" />
//           <div className="absolute -right-44 top-[-60px] h-[620px] w-[620px] rounded-full blur-3xl bg-[radial-gradient(circle_at_50%_50%,rgba(192,140,86,0.20),transparent_62%)]" />
//         </div>

//         <div
//           className="absolute inset-0 opacity-[0.05] mix-blend-multiply"
//           style={{
//             backgroundImage:
//               "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22160%22 height=%22160%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%22160%22 height=%22160%22 filter=%22url(%23n)%22 opacity=%220.35%22/></svg>')",
//           }}
//         />

//         <div className="absolute left-0 right-0 top-0 h-px bg-black/5" />
//       </div>

//       <div className="relative max-w-7xl mx-auto px-6 md:px-10">
//         <div className="text-center mb-12 md:mb-14">
//           <div className="mb-4 flex items-center justify-center gap-3">
//             <span className="h-px w-10 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
//             <span className="text-[11px] tracking-[0.35em] uppercase text-black/55">
//               Editorial
//             </span>
//             <span className="h-px w-10 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
//           </div>

//           <h1 className="text-3xl md:text-5xl font-style uppercase tracking-wider text-black">
//             The Journal of Aroma
//           </h1>

//           <p className="mt-4 mx-auto max-w-2xl text-sm md:text-base text-black/60 leading-relaxed">
//             Stories from origin, craft, and culture notes from the highlands, the roast, and the ritual.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-4 grid-cols-2 gap-4 md:gap-6 auto-rows-[240px] md:auto-rows-[260px]">
//           {journals.slice(0, 5).map((journal: Journal, index) => {
//             const layout =
//               index === 0
//                 ? "md:col-span-2 md:row-span-2"
//                 : index === 3
//                 ? "md:col-span-2"
//                 : "";

//             return (
//               <motion.div
//                 key={journal.id}
//                 initial={{ opacity: 0, y: 12, filter: "blur(2px)" }}
//                 whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//                 transition={{
//                   duration: 0.9,
//                   delay: reduceMotion ? 0 : index * 0.06,
//                   ease: [0.2, 0.7, 0.2, 1],
//                 }}
//                 viewport={{ once: true }}
//                 className={`relative overflow-hidden rounded-2xl ${layout}`}
//               >
//                 <Link
//                   href={`/journal/${journal.slug}`}
//                   className="group absolute inset-0"
//                   aria-label={journal.title}
//                 >
//                   <div className="absolute inset-0 rounded-2xl border border-black/10 bg-white shadow-[0_22px_60px_rgba(0,0,0,0.10)]" />

//                   <div className="absolute inset-[1px] overflow-hidden rounded-2xl">
//                     <Image
//                       src={journal.image}
//                       alt={journal.title}
//                       fill
//                       className="object-cover"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
//                   </div>

//                   <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
//                     <div className="flex items-center gap-3 mb-2">
//                       <span className="text-[10px] tracking-[0.32em] uppercase text-white/80">
//                         Journal
//                       </span>
//                       <span className="h-px flex-1 bg-white/25" />
//                     </div>

//                     <h3 className="text-base md:text-md font-text font-semibold leading-tight text-white">
//                       {journal.title}
//                     </h3>

//                     {/* <p className="mt-2 text-xs md:text-sm text-white/80 line-clamp-2">
//                       {journal.excerpt}
//                     </p> */}

//                     <div className=" flex items-center justify-end text-[10px] uppercase tracking-[0.30em] text-white/70">
//                       <span className="opacity-0 group-hover:opacity-100 transition">
//                         Read ↗
//                       </span>
//                     </div>
//                   </div>

//                   <div className="pointer-events-none absolute -left-1/2 top-[-40%] h-[200%] w-[140%] rotate-12 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.20),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
//                 </Link>
//               </motion.div>
//             );
//           })}
//         </div>

//         <div className="mt-12 md:mt-14 text-center">
//           <LuxeButton href="/journal" label="View All Articles" />
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import journals from "@/lib/journals.json";
import LuxeButton from "../ui/LuxeButton";

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
  content: {
    sections: {
      heading: string;
      body: string;
    }[];
  };
};


function formatDate(dateStr: string) {
  // Keep it minimal (optional). If you don't want dates, remove usages.
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "2-digit" });
}

export default function JournalSection() {
  const reduceMotion = useReducedMotion();

  const list = (journals as Journal[]).slice(0, 4);
  const featured = list[0];
  const rest = list.slice(1);

  if (!featured) return null;

  return (
    <section className="relative overflow-hidden bg-[#F4EFE7] px-6 py-24 md:py-28">
      {/* soft texture, minimal */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.06] mix-blend-multiply"
          style={{
            backgroundImage:
              "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22160%22 height=%22160%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%22160%22 height=%22160%22 filter=%22url(%23n)%22 opacity=%220.40%22/></svg>')",
          }}
        />
        <div className="absolute left-0 right-0 top-0 h-px bg-black/10" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* header */}
        <div className="text-center mb-10 md:mb-12">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-transparent via-black/25 to-transparent" />
            <span className="text-[11px] tracking-[0.35em] uppercase text-black/60">
              Editorial
            </span>
            <span className="h-px w-10 bg-gradient-to-r from-transparent via-black/25 to-transparent" />
          </div>

          <h2 className="text-3xl md:text-5xl font-style uppercase tracking-wider text-[#12110F]">
            The Journal of Aroma
          </h2>

          <p className="mt-3 mx-auto max-w-2xl text-sm md:text-base text-[#12110F]/70 leading-relaxed">
            Stories from origin, craft, and culture notes from the highlands, the roast, and the ritual.
          </p>
        </div>

        {/* layout: featured + list */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6 items-stretch">
          {/* FEATURED */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              ease: [0.2, 0.7, 0.2, 1],
            }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <Link
              href={`/journal/${featured.slug}`}
              className="group relative block overflow-hidden rounded-3xl bg-black"
              aria-label={featured.title}
            >
              <div className="relative aspect-[14/10] md:aspect-[14/9]">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover opacity-95 transition-transform duration-700 group-hover:scale-[1.02]"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/18 to-transparent" />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] tracking-[0.32em] uppercase text-white/80">
                    Featured
                  </span>
                  <span className="h-px flex-1 bg-white/20" />
                  {featured.date ? (
                    <span className="text-[10px] tracking-[0.25em] uppercase text-white/65">
                      {formatDate(featured.date)}
                    </span>
                  ) : null}
                </div>

                <h3 className="text-2xl md:text-3xl font-style uppercase tracking-wide text-white leading-tight">
                  {featured.title}
                </h3>

                <p className="mt-3 max-w-xl text-sm md:text-[15px] leading-relaxed text-white/75 line-clamp-2">
                  {featured.excerpt}
                </p>

                <div className="mt-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-white/75">
                  <span className="relative">
                    Read Article
                    <span className="pointer-events-none absolute left-0 -bottom-2 h-px w-full scale-x-0 origin-left bg-gradient-to-r from-transparent via-white/65 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                  </span>
                  <span className="opacity-70 group-hover:opacity-100 transition">↗</span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* RIGHT LIST */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {rest.map((j, idx) => (
              <motion.div
                key={j.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.65,
                  delay: reduceMotion ? 0 : 0.06 * idx,
                  ease: [0.2, 0.7, 0.2, 1],
                }}
                viewport={{ once: true }}
              >
                <Link
                  href={`/journal/${j.slug}`}
                  className="group flex gap-4 rounded-2xl bg-white/70 hover:bg-white transition overflow-hidden"
                  aria-label={j.title}
                >
                  <div className="relative w-[96px] md:w-[112px] shrink-0">
                    <div className="relative h-full min-h-[96px] md:min-h-[104px]">
                      <Image
                        src={j.image}
                        alt={j.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                    </div>
                  </div>

                  <div className="py-4 pr-4 flex-1">
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

                    <h4 className="font-text font-semibold text-[15px] md:text-base leading-snug text-[#12110F]">
                      {j.title}
                    </h4>

                    <p className="mt-1 text-[12px] md:text-[13px] text-[#12110F]/60 leading-relaxed line-clamp-2">
                      {j.excerpt}
                    </p>

                    <div className="mt-2 text-[10px] uppercase tracking-[0.28em] text-[#12110F]/55">
                      <span className="opacity-0 group-hover:opacity-100 transition">
                        Read ↗
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}

            {/* small CTA under list (desktop) */}
            <div className="hidden lg:flex pt-1">
              <LuxeButton href="/journal" label="View All Articles" />
            </div>
          </div>
        </div>

        {/* CTA (mobile/tablet) */}
        <div className="mt-10 lg:hidden text-center">
          <LuxeButton href="/journal" label="View All Articles" />
        </div>
      </div>
    </section>
  );
}
