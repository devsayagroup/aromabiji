"use client";

import Link from "next/link";

const WA_LINK =
  "https://api.whatsapp.com/send/?phone=6282221871409&text&type=phone_number&app_absent=0";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-[#12110F]">
      <section className="max-w-7xl mx-auto px-6 pt-28 pb-16">
        <h1 className="text-4xl md:text-5xl font-style uppercase tracking-wider">
          Contact 
        </h1>

        <p className="mt-4 text-[#12110F]/70 leading-relaxed">
          Aroma Biji is available <strong>offline</strong> at{" "}
          <strong>Soekarno-Hatta International Airport</strong> and{" "}
          <strong>Plaza Bali</strong>. You can also order via{" "}
          <strong>WhatsApp</strong>. We ship worldwide (delivery may take up to{" "}
          <strong>30 days</strong>, depending on destination and customs).
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link
            href={WA_LINK}
            className="inline-flex items-center justify-center rounded-full px-6 py-3
                       text-[11px] uppercase tracking-[0.28em]
                       bg-[#12110F] text-white hover:bg-[#0B0B09] transition"
          >
            Order via WhatsApp ↗
          </Link>

          <Link
            href="/product"
            className="inline-flex items-center justify-center rounded-full px-6 py-3
                       text-[11px] uppercase tracking-[0.28em]
                       bg-white text-[#12110F] ring-1 ring-black/10 hover:ring-black/20 transition"
          >
            Browse Collection ↗
          </Link>
        </div>

        <div className="mt-10 grid gap-6">
          <div className="rounded-2xl ring-1 ring-black/8 p-6">
            <h2 className="text-[11px] uppercase tracking-[0.30em] text-[#12110F]/60">
              WhatsApp
            </h2>
            <p className="mt-2 text-[#12110F]/80">
              +62 822 2187 1409
            </p>
          </div>

          <div className="rounded-2xl ring-1 ring-black/8 p-6">
            <h2 className="text-[11px] uppercase tracking-[0.30em] text-[#12110F]/60">
              Email
            </h2>
            <p className="mt-2">
              <Link
                href="mailto:marketing@aromabiji.co"
                className="text-[#12110F]/80 hover:text-[#12110F] transition underline underline-offset-4"
              >
                marketing@aromabiji.co
              </Link>
            </p>
          </div>

          <div className="rounded-2xl ring-1 ring-black/8 p-6">
            <h2 className="text-[11px] uppercase tracking-[0.30em] text-[#12110F]/60">
              Offline Stores
            </h2>
            <ul className="mt-2 space-y-2 text-[#12110F]/80">
              <li>• Soekarno-Hatta International Airport</li>
              <li>• Plaza Bali</li>
            </ul>
            <p className="mt-3 text-sm text-[#12110F]/60">
              For availability and the latest counter info, message us on WhatsApp.
            </p>
          </div>

          <div className="rounded-2xl bg-black/[0.03] ring-1 ring-black/6 p-6">
            <h2 className="text-[11px] uppercase tracking-[0.30em] text-[#12110F]/60">
              How to Order (WhatsApp)
            </h2>
            <ol className="mt-2 list-decimal pl-5 space-y-1 text-[#12110F]/75">
              <li>Send product name + variant (Bean/Ground/Drip) + quantity.</li>
              <li>Send destination country/city + phone number.</li>
              <li>We confirm total price, shipping, and ETA (up to 30 days).</li>
              <li>Payment → shipping with protective packaging.</li>
            </ol>
            <p className="mt-3 text-sm text-[#12110F]/60">
              Customs duties/taxes (if any) are paid by the receiver.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}



// "use client";

// import Link from "next/link";
// import { motion, useReducedMotion } from "framer-motion";
// import { BiLogoInstagram } from "react-icons/bi";
// import { FaWhatsapp } from "react-icons/fa";

// const WA_LINK =
//   "https://api.whatsapp.com/send/?phone=6282221871409&text&type=phone_number&app_absent=0";

// function LuxeButton({
//   href,
//   label,
//   variant = "primary",
// }: {
//   href: string;
//   label: string;
//   variant?: "primary" | "ghost";
// }) {
//   const base =
//     "group inline-flex items-center justify-center rounded-full px-6 py-3 text-[11px] uppercase tracking-[0.28em] transition " +
//     "focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20";
//   const primary =
//     "bg-[#12110F] text-white shadow-[0_18px_46px_rgba(0,0,0,0.18)] hover:shadow-[0_20px_54px_rgba(0,0,0,0.22)] hover:bg-[#0B0B09]";
//   const ghost =
//     "bg-white text-[#12110F] ring-1 ring-black/10 hover:ring-black/20 hover:bg-black/[0.02]";

//   return (
//     <Link href={href} className={`${base} ${variant === "primary" ? primary : ghost}`}>
//       <span className="relative">
//         {label}
//         <span className="pointer-events-none absolute left-0 -bottom-2 h-px w-full scale-x-0 origin-left bg-gradient-to-r from-transparent via-[#C08C56] to-transparent transition-transform duration-500 group-hover:scale-x-100" />
//       </span>
//       <span className="ml-3 opacity-70 group-hover:opacity-100 transition">↗</span>
//     </Link>
//   );
// }

// function Card({
//   title,
//   children,
//   delay = 0,
// }: {
//   title: string;
//   children: React.ReactNode;
//   delay?: number;
// }) {
//   const reduceMotion = useReducedMotion();

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 10 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : delay, ease: [0.2, 0.7, 0.2, 1] }}
//       viewport={{ once: true }}
//       className="rounded-3xl bg-white/75 ring-1 ring-black/5 shadow-[0_18px_55px_rgba(0,0,0,0.06)] overflow-hidden"
//     >
//       <div className="px-6 md:px-7 py-6">
//         <div className="flex items-center gap-3 mb-4">
//           <span className="h-px w-10 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
//           <h3 className="text-[11px] uppercase tracking-[0.35em] text-[#12110F]/60">{title}</h3>
//         </div>
//         {children}
//       </div>
//     </motion.div>
//   );
// }

// export default function ContactPage() {
//   const reduceMotion = useReducedMotion();

//   return (
//     <main className="min-h-screen bg-[#F4EFE7] text-[#12110F] px-6 md:px-0 pt-24">
//       {/* HERO */}
//       <section className="relative overflow-hidden">
//         <div className="relative max-w-7xl mx-auto pt-10 pb-10 md:pt-14 md:pb-14">
//           <div className="flex items-center justify-center gap-4">
//             <span className="h-px w-12 bg-gradient-to-r from-transparent via-black/25 to-transparent" />
//             <span className="text-[11px] tracking-[0.38em] uppercase text-black/55">
//               Contact & Orders
//             </span>
//             <span className="h-px w-12 bg-gradient-to-r from-transparent via-black/25 to-transparent" />
//           </div>

//           <motion.h1
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.2, 0.7, 0.2, 1] }}
//             className="mt-5 text-center text-4xl md:text-6xl font-style uppercase tracking-[0.10em] leading-[1.02]"
//           >
//             Let’s Brew Something
//             <br className="hidden md:block" /> Exceptional
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 0.08, ease: [0.2, 0.7, 0.2, 1] }}
//             className="mt-4 text-center max-w-2xl mx-auto text-sm md:text-[15px] leading-relaxed text-[#12110F]/70"
//           >
//             Aroma Biji is offered <span className="font-semibold">exclusively offline</span> at selected locations,
//             and we also accept orders via <span className="font-semibold">WhatsApp</span>.
//             We ship worldwide (delivery may take up to <span className="font-semibold">30 days</span>, depending on destination and customs).
//           </motion.p>

//           <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
//             <Link
//               href={WA_LINK}
//               className="group inline-flex items-center justify-center rounded-full px-6 py-3 text-[11px] uppercase tracking-[0.28em]
//                          bg-[#12110F] text-white shadow-[0_18px_46px_rgba(0,0,0,0.18)]
//                          hover:bg-[#0B0B09] hover:shadow-[0_20px_54px_rgba(0,0,0,0.22)] transition
//                          focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
//             >
//               <FaWhatsapp className="mr-2 opacity-80 group-hover:opacity-100 transition" />
//               Order via WhatsApp
//               <span className="ml-3 opacity-70 group-hover:opacity-100 transition">↗</span>
//             </Link>

//             <LuxeButton href="/product" label="Browse Collection" variant="ghost" />
//           </div>
//         </div>
//       </section>

//       {/* CONTENT */}
//       <section className="max-w-7xl mx-auto pb-20">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6">
//           {/* HOW TO ORDER */}
//           <Card title="How to Order" delay={0.02}>
//             <ol className="list-decimal pl-5 space-y-2 text-sm md:text-[15px] leading-relaxed text-[#12110F]/75">
//               <li>
//                 Message us on WhatsApp with{" "}
//                 <span className="font-semibold">product name</span>,{" "}
//                 <span className="font-semibold">variant</span> (Bean/Ground/Drip), and{" "}
//                 <span className="font-semibold">quantity</span>.
//               </li>
//               <li>
//                 Share your <span className="font-semibold">destination city/country</span> and{" "}
//                 <span className="font-semibold">phone number</span>.
//               </li>
//               <li>
//                 We confirm availability, total price, shipping cost, and estimated delivery time.
//               </li>
//               <li>
//                 Complete payment and we’ll ship with protective packaging.
//               </li>
//             </ol>

//             <div className="mt-6 flex flex-col sm:flex-row gap-3">
//               <LuxeButton href={WA_LINK} label="Start WhatsApp Order" />
//               <LuxeButton href="/faq" label="Read FAQ" variant="ghost" />
//             </div>

//             <p className="mt-4 text-xs text-[#12110F]/55 leading-relaxed">
//               Note: customs duties/taxes (if any) are the responsibility of the receiver.
//             </p>
//           </Card>

//           {/* OFFLINE LOCATIONS */}
//           <Card title="Shop Offline" delay={0.06}>
//             <div className="space-y-4 text-sm md:text-[15px] text-[#12110F]/75">
//               <div>
//                 <div className="text-[10px] uppercase tracking-[0.30em] text-[#12110F]/55">
//                   Exclusive Counters
//                 </div>
//                 <div className="mt-2 h-px w-full bg-black/10" />
//               </div>

//               <div className="space-y-3">
//                 <div className="flex items-start justify-between gap-4">
//                   <div>
//                     <div className="font-semibold text-[#12110F]">Soekarno-Hatta International Airport</div>
//                     <div className="text-[#12110F]/65">Available at selected retail counters</div>
//                   </div>
//                   <span className="text-[10px] uppercase tracking-[0.28em] text-[#12110F]/55">
//                     Offline
//                   </span>
//                 </div>

//                 <div className="flex items-start justify-between gap-4">
//                   <div>
//                     <div className="font-semibold text-[#12110F]">Plaza Bali</div>
//                     <div className="text-[#12110F]/65">Curated selection for travelers & gifting</div>
//                   </div>
//                   <span className="text-[10px] uppercase tracking-[0.28em] text-[#12110F]/55">
//                     Offline
//                   </span>
//                 </div>
//               </div>

//               <div className="mt-6 rounded-2xl bg-black/[0.03] ring-1 ring-black/5 p-4">
//                 <div className="text-[11px] uppercase tracking-[0.30em] text-[#12110F]/60">
//                   Want us to check stock?
//                 </div>
//                 <p className="mt-2 text-sm text-[#12110F]/70">
//                   Message us your preferred origin and variant, we’ll confirm availability instantly.
//                 </p>
//               </div>

//               <div className="pt-2">
//                 <LuxeButton href={WA_LINK} label="Check Availability" />
//               </div>
//             </div>
//           </Card>

//           {/* CONTACT CHANNELS */}
//           <Card title="Contact" delay={0.10}>
//             <div className="space-y-5 text-sm md:text-[15px] text-[#12110F]/75">
//               <div className="rounded-2xl bg-white ring-1 ring-black/5 p-5">
//                 <div className="text-[10px] uppercase tracking-[0.30em] text-[#12110F]/55">
//                   WhatsApp
//                 </div>
//                 <div className="mt-2 flex items-center justify-between gap-3">
//                   <div className="font-semibold text-[#12110F]">+62 822 2187 1409</div>
//                   <Link href={WA_LINK} className="text-[#12110F]/70 hover:text-[#12110F] transition">
//                     Open ↗
//                   </Link>
//                 </div>
//               </div>

//               <div className="rounded-2xl bg-white ring-1 ring-black/5 p-5">
//                 <div className="text-[10px] uppercase tracking-[0.30em] text-[#12110F]/55">
//                   Email
//                 </div>
//                 <div className="mt-2 flex items-center justify-between gap-3">
//                   <div className="font-semibold text-[#12110F]">marketing@aromabiji.co</div>
//                   <Link href="mailto:marketing@aromabiji.co" className="text-[#12110F]/70 hover:text-[#12110F] transition">
//                     Email ↗
//                   </Link>
//                 </div>
//               </div>

//               <div className="rounded-2xl bg-white ring-1 ring-black/5 p-5">
//                 <div className="text-[10px] uppercase tracking-[0.30em] text-[#12110F]/55">
//                   Social
//                 </div>
//                 <div className="mt-3 flex items-center gap-3">
//                   <Link
//                     href="https://www.instagram.com/aromabiji"
//                     className="group inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition"
//                     aria-label="Aroma Biji Instagram"
//                   >
//                     <BiLogoInstagram size={22} className="text-[#12110F]/70 group-hover:text-[#12110F] transition" />
//                   </Link>

//                   <div className="text-[#12110F]/70 leading-relaxed">
//                     For updates, drops, and editorial follow our Instagram.
//                   </div>
//                 </div>
//               </div>

//               <div className="pt-1 text-xs text-[#12110F]/55 leading-relaxed">
//                 Worldwide shipping: please allow up to 30 days depending on courier route and customs clearance.
//               </div>
//             </div>
//           </Card>
//         </div>

//         {/* BOTTOM CTA STRIP */}
//         <motion.div
//           initial={{ opacity: 0, y: 12 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.2, 0.7, 0.2, 1] }}
//           viewport={{ once: true }}
//           className="mt-8 md:mt-10 rounded-3xl bg-[#12110F] text-white overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.22) bg-[radial-gradient(900px_circle_at_25%_25%,rgba(255,236,214,0.10),transparent_60%),radial-gradient(900px_circle_at_80%_40%,rgba(192,140,86,0.14),transparent_60%),linear-gradient(180deg,#0B0A08_0%,#0A0A0A_100%)]"
//         >
//           <div className="px-7 md:px-10 py-8 md:py-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
//             <div>
//               <div className="text-[10px] uppercase tracking-[0.36em] text-white/60">
//                 Concierge Ordering
//               </div>
//               <h2 className="mt-2 text-2xl md:text-3xl font-style uppercase tracking-wide">
//                 Tell us your taste, we’ll recommend the right origin
//               </h2>
//               <p className="mt-3 text-sm text-white/70 leading-relaxed max-w-xl">
//                 Share your brew method (espresso, V60, french press) and flavor profile (chocolatey, floral, fruity).
//                 We’ll match you with the best Aroma Biji selection.
//               </p>
//             </div>

//             <div className="flex flex-col sm:flex-row md:justify-end gap-3">
//               <Link
//                 href={WA_LINK}
//                 className="group inline-flex items-center justify-center rounded-full px-6 py-3 text-[11px] uppercase tracking-[0.28em]
//                            bg-white text-[#12110F] hover:bg-white/95 transition
//                            focus:outline-none focus-visible:ring-2 focus-visible:ring-white/25"
//               >
//                 Message on WhatsApp <span className="ml-3 opacity-60 group-hover:opacity-90 transition">↗</span>
//               </Link>
//               <Link
//                 href="/product"
//                 className="group inline-flex items-center justify-center rounded-full px-6 py-3 text-[11px] uppercase tracking-[0.28em]
//                            bg-white/0 text-white ring-1 ring-white/20 hover:ring-white/35 hover:bg-white/5 transition"
//               >
//                 View Collection <span className="ml-3 opacity-60 group-hover:opacity-90 transition">↗</span>
//               </Link>
//             </div>
//           </div>
//         </motion.div>
//       </section>
//     </main>
//   );
// }
