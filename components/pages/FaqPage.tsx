// "use client";

// import Link from "next/link";
// import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
// import { useMemo, useState } from "react";

// type FaqItem = {
//   q: string;
//   a: React.ReactNode;
// };

// const FAQS: FaqItem[] = [
//   {
//     q: "How do I order Aroma Biji coffee?",
//     a: (
//       <div className="space-y-3">
//         <p>
//           Aroma Biji is available <strong>offline</strong> at selected locations, and we also accept
//           orders via <strong>WhatsApp</strong> for delivery.
//         </p>
//         <ol className="list-decimal pl-5 space-y-2 text-[#12110F]/75">
//           <li>
//             Visit us in-store at <strong>Soekarno-Hatta International Airport</strong> or{" "}
//             <strong>Plaza Bali</strong>.
//           </li>
//           <li>
//             Or order via WhatsApp: tell us the product name, variant (Bean/Ground/Drip), quantity,
//             destination country/city, and phone number.
//           </li>
//           <li>We confirm availability, total price, shipping cost, and estimated delivery time.</li>
//           <li>Complete payment and we’ll prepare your shipment with protective packaging.</li>
//         </ol>
//       </div>
//     ),
//   },
//   {
//     q: "Where can I buy Aroma Biji offline?",
//     a: (
//       <p className="text-[#12110F]/75">
//         You can shop Aroma Biji exclusively at <strong>Soekarno-Hatta International Airport</strong> and{" "}
//         <strong>Plaza Bali</strong>. For the latest counters/availability, contact us via WhatsApp.
//       </p>
//     ),
//   },
//   {
//     q: "Do you ship worldwide?",
//     a: (
//       <p className="text-[#12110F]/75">
//         Yes. We ship worldwide via WhatsApp order. Depending on your destination and customs process,
//         delivery may take up to <strong>30 days</strong>.
//       </p>
//     ),
//   },
//   {
//     q: "How long does shipping take?",
//     a: (
//       <div className="space-y-2 text-[#12110F]/75">
//         <p>
//           Estimated delivery time varies by country, courier route, and customs clearance.
//           Please allow up to <strong>30 days</strong> for international deliveries.
//         </p>
//         <p className="text-sm text-[#12110F]/60">
//           Note: customs fees/taxes (if any) are the responsibility of the receiver.
//         </p>
//       </div>
//     ),
//   },
//   {
//     q: "How do I choose the right coffee?",
//     a: (
//       <div className="space-y-2 text-[#12110F]/75">
//         <p>
//           If you enjoy deep, bold profiles: try <strong>Aceh Gayo</strong>, <strong>Mandailing</strong>, or{" "}
//           <strong>Lintong Nihuta</strong>.
//         </p>
//         <p>
//           If you prefer a refined, elegant cup: <strong>Java Preanger</strong> and <strong>Andung Sari</strong> are
//           beautiful choices.
//         </p>
//         <p>
//           For a spice-forward, smooth finish: <strong>Toraja</strong> is a classic.
//         </p>
//         <p className="text-sm text-[#12110F]/60">
//           Want a tailored recommendation? Message us your brew method and flavor preference via WhatsApp.
//         </p>
//       </div>
//     ),
//   },
//   {
//     q: "What variants do you offer (Bean, Ground, Drip)?",
//     a: (
//       <div className="space-y-2 text-[#12110F]/75">
//         <p>
//           We offer <strong>Whole Bean</strong>, <strong>Ground</strong>, and selected origins in{" "}
//           <strong>Drip Sachets</strong>.
//         </p>
//         <ul className="list-disc pl-5 space-y-1">
//           <li><strong>Bean</strong>: best for maximum aroma and freshness.</li>
//           <li><strong>Ground</strong>: convenient—tell us your brew method so we can advise the grind.</li>
//           <li><strong>Drip</strong>: travel-friendly and easy to brew anywhere.</li>
//         </ul>
//       </div>
//     ),
//   },
//   {
//     q: "Is Aroma Biji coffee freshly roasted?",
//     a: (
//       <p className="text-[#12110F]/75">
//         We focus on quality and consistency—small batches crafted with heritage roasting expertise.
//         For the freshest experience, store properly and enjoy within the recommended period.
//       </p>
//     ),
//   },
//   {
//     q: "How should I store my coffee?",
//     a: (
//       <div className="space-y-2 text-[#12110F]/75">
//         <p>
//           Keep it sealed, away from heat, light, and moisture. For best results, store in an airtight
//           container and avoid frequent exposure to air.
//         </p>
//         <p className="text-sm text-[#12110F]/60">
//           Tip: If you buy multiple packs, keep unopened packs sealed until you’re ready to use them.
//         </p>
//       </div>
//     ),
//   },
//   {
//     q: "What payment methods are available for WhatsApp orders?",
//     a: (
//       <p className="text-[#12110F]/75">
//         We’ll share available payment options during WhatsApp checkout, based on your location and order requirements.
//       </p>
//     ),
//   },
//   {
//     q: "Can I return or exchange my order?",
//     a: (
//       <div className="space-y-2 text-[#12110F]/75">
//         <p>
//           If there’s an issue (wrong item, damaged package), contact us as soon as possible with photos
//           and your order details. We’ll assist you with the best solution.
//         </p>
//         <p className="text-sm text-[#12110F]/60">
//           For coffee products, returns/exchanges may depend on item condition and shipment status.
//         </p>
//       </div>
//     ),
//   },
//   {
//     q: "How do I contact Aroma Biji?",
//     a: (
//       <p className="text-[#12110F]/75">
//         For orders, availability, and recommendations, contact us via WhatsApp. You can also reach us through our official Instagram.
//       </p>
//     ),
//   },
// ];

// function splitIntoTwoColumns(items: FaqItem[]) {
//   const left: FaqItem[] = [];
//   const right: FaqItem[] = [];
//   items.forEach((item, idx) => (idx % 2 === 0 ? left : right).push(item));
//   return { left, right };
// }

// function FaqCard({
//   id,
//   item,
//   isOpen,
//   onToggle,
// }: {
//   id: string;
//   item: FaqItem;
//   isOpen: boolean;
//   onToggle: () => void;
// }) {
//   return (
//     <motion.div
//       layout
//       initial={{ opacity: 0, y: 10 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-80px" }}
//       transition={{ duration: 0.55, ease: [0.2, 0.7, 0.2, 1] }}
//       className="rounded-2xl bg-white ring-1 ring-black/5 shadow-[0_18px_55px_rgba(0,0,0,0.06)] overflow-hidden"
//     >
//       <button
//         type="button"
//         onClick={onToggle}
//         className="w-full text-left px-6 py-5 flex items-start justify-between gap-6"
//         aria-expanded={isOpen}
//         aria-controls={`${id}-panel`}
//       >
//         <h3 className="font-style text-lg md:text-xl text-[#12110F] leading-snug">
//           {item.q}
//         </h3>

//         <span
//           className={[
//             "mt-1 shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full",
//             "bg-black/[0.04] text-[#12110F]/70",
//             "transition-transform duration-300",
//             isOpen ? "rotate-45" : "rotate-0",
//           ].join(" ")}
//           aria-hidden="true"
//         >
//           +
//         </span>
//       </button>

//       <AnimatePresence initial={false}>
//         {isOpen && (
//           <motion.div
//             id={`${id}-panel`}
//             key="content"
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.28, ease: [0.2, 0.7, 0.2, 1] }}
//             className="px-6 pb-6"
//           >
//             <motion.div
//               initial={{ y: -4, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: -4, opacity: 0 }}
//               transition={{ duration: 0.22 }}
//               className="text-sm md:text-[15px] leading-relaxed"
//             >
//               {item.a}
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// }

// export default function FaqPage() {
//   // Create stable IDs so clicking one never affects another column
//   const items = useMemo(() => {
//     return FAQS.map((item) => ({
//       ...item,
//       _id: `faq-${item.q.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
//     }));
//   }, []);

//   const { left, right } = useMemo(() => splitIntoTwoColumns(items), [items]);

//   // single-open behavior across both columns:
//   const [openId, setOpenId] = useState<string | null>(null);

//   return (
//     <main className="min-h-screen bg-white text-[#12110F] px-6 pt-12 md:pt-20">
//       {/* HERO */}
//       <section className="relative overflow-hidden">
//         <div className="max-w-7xl mx-auto py-16 md:py-20">
//           <div className="flex items-center gap-3 mb-4">
//             <span className="h-px w-10 bg-gradient-to-r from-transparent via-black/35 to-transparent" />
//             <span className="text-[11px] tracking-[0.35em] uppercase text-black/60">
//               Help Center
//             </span>
//           </div>

//           <h1 className="text-4xl md:text-6xl font-style uppercase tracking-wider leading-tight">
//             FAQ <span className="font-text">&</span> How to Order
//           </h1>

//           <p className="mt-4 max-w-2xl text-[#12110F]/70 leading-relaxed">
//             Aroma Biji is offered exclusively offline at select locations. You can also place an order via WhatsApp.
//             We ship worldwide, with delivery up to 30 days depending on destination and customs.
//           </p>

//           <div className="mt-8 flex flex-col sm:flex-row gap-3">
//             <Link
//               href="/product"
//               className="group inline-flex items-center justify-center rounded-full px-6 py-3 text-[11px] uppercase tracking-[0.28em]
//                          bg-[#12110F] text-white shadow-[0_16px_40px_rgba(0,0,0,0.18)]
//                          hover:shadow-[0_18px_46px_rgba(0,0,0,0.22)] transition"
//             >
//               Browse Collection{" "}
//               <span className="ml-3 text-white/60 group-hover:text-white/85 transition">↗</span>
//             </Link>

//             <Link
//               href="/contact"
//               className="group inline-flex items-center justify-center rounded-full px-6 py-3 text-[11px] uppercase tracking-[0.28em]
//                          bg-white text-[#12110F] ring-1 ring-black/10 hover:ring-black/20 transition"
//             >
//               Order via WhatsApp{" "}
//               <span className="ml-3 text-[#12110F]/50 group-hover:text-[#12110F]/80 transition">↗</span>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* FAQ LIST */}
//       <section className="max-w-7xl mx-auto pb-20">
//         <LayoutGroup>
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
//             {/* LEFT COLUMN */}
//             <div className="flex flex-col gap-5 md:gap-6">
//               {left.map((item) => {
//                 const id = (item as any)._id as string;
//                 return (
//                   <FaqCard
//                     key={id}
//                     id={id}
//                     item={item}
//                     isOpen={openId === id}
//                     onToggle={() => setOpenId((cur) => (cur === id ? null : id))}
//                   />
//                 );
//               })}
//             </div>

//             {/* RIGHT COLUMN */}
//             <div className="flex flex-col gap-5 md:gap-6">
//               {right.map((item) => {
//                 const id = (item as any)._id as string;
//                 return (
//                   <FaqCard
//                     key={id}
//                     id={id}
//                     item={item}
//                     isOpen={openId === id}
//                     onToggle={() => setOpenId((cur) => (cur === id ? null : id))}
//                   />
//                 );
//               })}
//             </div>
//           </div>
//         </LayoutGroup>

//         <div className="mt-14 text-center text-sm text-[#12110F]/60">
//           Still need help?{" "}
//           <Link href="/contact" className="underline underline-offset-4">
//             Contact us
//           </Link>
//           .
//         </div>
//       </section>
//     </main>
//   );
// }

"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";


type FaqItem = {
  q: string;
  a: React.ReactNode;
};

export const FAQS: FaqItem[] = [
  {
    q: "How do I order Aroma Biji coffee?",
    a: (
      <div className="space-y-3">
        <p>
          Aroma Biji is available <strong>offline</strong> at selected locations, and we also accept
          orders via <strong>WhatsApp</strong> for delivery.
        </p>
        <ol className="list-decimal pl-5 space-y-2 text-[#12110F]/75">
          <li>
            Visit us in-store at <strong>Soekarno-Hatta International Airport</strong> or{" "}
            <strong>Plaza Bali</strong>.
          </li>
          <li>
            Or order via WhatsApp: tell us the product name, variant (Bean/Ground/Drip), quantity,
            destination country/city, and phone number.
          </li>
          <li>We confirm availability, total price, shipping cost, and estimated delivery time.</li>
          <li>Complete payment and we’ll prepare your shipment with protective packaging.</li>
        </ol>
      </div>
    ),
  },
  {
    q: "Where can I buy Aroma Biji offline?",
    a: (
      <p className="text-[#12110F]/75">
        You can shop Aroma Biji exclusively at <strong>Soekarno-Hatta International Airport</strong> and{" "}
        <strong>Plaza Bali</strong>. For the latest counters/availability, contact us via WhatsApp.
      </p>
    ),
  },
  {
    q: "Do you ship worldwide?",
    a: (
      <p className="text-[#12110F]/75">
        Yes. We ship worldwide via WhatsApp order. Depending on your destination and customs process,
        delivery may take up to <strong>30 business days</strong>.
      </p>
    ),
  },
  {
    q: "How long does shipping take?",
    a: (
      <div className="space-y-2 text-[#12110F]/75">
        <p>
          Estimated delivery time varies by country, courier route, and customs clearance.
          Please allow up to <strong>30 days</strong> for international deliveries.
        </p>
        <p className="text-sm text-[#12110F]/60">
          Note: customs fees/taxes (if any) are the responsibility of the receiver.
        </p>
      </div>
    ),
  },
  {
    q: "How do I choose the right coffee?",
    a: (
      <div className="space-y-2 text-[#12110F]/75">
        <p>
          If you enjoy deep, bold profiles: try <strong>Aceh Gayo</strong>, <strong>Mandailing</strong>, or{" "}
          <strong>Lintong Nihuta</strong>.
        </p>
        <p>
          If you prefer a refined, elegant cup: <strong>Java Preanger</strong> and <strong>Andung Sari</strong> are
          beautiful choices.
        </p>
        <p>
          For a spice-forward, smooth finish: <strong>Toraja</strong> is a classic.
        </p>
        <p className="text-sm text-[#12110F]/60">
          Want a tailored recommendation? Message us your brew method and flavor preference via WhatsApp.
        </p>
      </div>
    ),
  },
  {
    q: "What variants do you offer (Bean, Ground, Drip)?",
    a: (
      <div className="space-y-2 text-[#12110F]/75">
        <p>
          We offer <strong>Whole Bean</strong>, <strong>Ground</strong>, and selected origins in{" "}
          <strong>Drip Sachets</strong>.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Bean</strong>: best for maximum aroma and freshness.</li>
          <li><strong>Ground</strong>: convenient—tell us your brew method so we can advise the grind.</li>
          <li><strong>Drip</strong>: travel-friendly and easy to brew anywhere.</li>
        </ul>
      </div>
    ),
  },
  {
    q: "Is Aroma Biji coffee freshly roasted?",
    a: (
      <p className="text-[#12110F]/75">
        We focus on quality and consistency. Small batches crafted with heritage roasting expertise.
        For the freshest experience, store properly and enjoy within the recommended period.
      </p>
    ),
  },
  {
    q: "How should I store my coffee?",
    a: (
      <div className="space-y-2 text-[#12110F]/75">
        <p>
          Keep it sealed, away from heat, light, and moisture. For best results, store in an airtight
          container and avoid frequent exposure to air.
        </p>
        <p className="text-sm text-[#12110F]/60">
          Tip: If you buy multiple packs, keep unopened packs sealed until you’re ready to use them.
        </p>
      </div>
    ),
  },
  {
    q: "What payment methods are available for WhatsApp orders?",
    a: (
      <p className="text-[#12110F]/75">
        We’ll share available payment options during WhatsApp checkout, based on your location and order requirements.
      </p>
    ),
  },
  {
    q: "Can I return or exchange my order?",
    a: (
      <div className="space-y-2 text-[#12110F]/75">
        <p>
          If there’s an issue (wrong item, damaged package), contact us as soon as possible with photos
          and your order details. We’ll assist you with the best solution.
        </p>
        <p className="text-sm text-[#12110F]/60">
          For coffee products, returns/exchanges may depend on item condition and shipment status.
        </p>
      </div>
    ),
  },
  {
    q: "How do I contact Aroma Biji?",
    a: (
      <p className="text-[#12110F]/75">
        For orders, availability, and recommendations, contact us via WhatsApp. You can also reach us through our official Instagram.
      </p>
    ),
  },
];

function splitIntoTwoColumns(items: Array<FaqItem & { _id: string }>) {
  const left: Array<FaqItem & { _id: string }> = [];
  const right: Array<FaqItem & { _id: string }> = [];
  items.forEach((item, idx) => (idx % 2 === 0 ? left : right).push(item));
  return { left, right };
}

function FaqRow({
  id,
  item,
  open,
  onToggle,
}: {
  id: string;
  item: FaqItem;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-2xl bg-white ring-1 ring-black/5 shadow-[0_14px_40px_rgba(0,0,0,0.06)] overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-6"
        aria-expanded={open}
        aria-controls={`${id}-panel`}
      >
        <h3 className="font-style text-[16px] md:text-[18px] text-[#12110F] leading-snug">
          {item.q}
        </h3>

        <span
          className={[
            "mt-1 shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full",
            "bg-black/[0.04] text-[#12110F]/70",
            "transition-transform duration-200",
            open ? "rotate-45" : "rotate-0",
          ].join(" ")}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`${id}-panel`}
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            style={{ overflow: "hidden" }}
          >
            <div className="px-6 pb-6 text-sm md:text-[15px] leading-relaxed text-[#12110F]/75">
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqClient() {
  const items = useMemo(
    () =>
      FAQS.map((item) => ({
        ...item,
        _id: `faq-${item.q.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
      })),
    []
  );

  const { left, right } = useMemo(() => splitIntoTwoColumns(items), [items]);

  // single-open across both columns
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-white text-[#12110F] px-6 pt-12 md:pt-20">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto py-16 md:py-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-gradient-to-r from-transparent via-black/35 to-transparent" />
            <span className="text-[11px] tracking-[0.35em] uppercase text-black/60">
              Help Center
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-style uppercase tracking-wider leading-tight">
            FAQ <span className="font-text">&</span> How to Order
          </h1>

          <p className="mt-4 max-w-2xl text-[#12110F]/70 leading-relaxed">
            Aroma Biji is crafted with heritage and offered exclusively offline at select locations.
            You can also place an order via WhatsApp. We ship worldwide, with delivery up to 30 days
            depending on destination and customs.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/product"
              className="group inline-flex items-center justify-center rounded-full px-6 py-3 text-[11px] uppercase tracking-[0.28em]
                         bg-[#12110F] text-white shadow-[0_16px_40px_rgba(0,0,0,0.18)]
                         hover:shadow-[0_18px_46px_rgba(0,0,0,0.22)] transition"
            >
              Browse Collection{" "}
              <span className="ml-3 text-white/60 group-hover:text-white/85 transition">↗</span>
            </Link>

            <Link
              href="/contact"
              className="group inline-flex items-center justify-center rounded-full px-6 py-3 text-[11px] uppercase tracking-[0.28em]
                         bg-white text-[#12110F] ring-1 ring-black/10 hover:ring-black/20 transition"
            >
              Order via WhatsApp{" "}
              <span className="ml-3 text-[#12110F]/50 group-hover:text-[#12110F]/80 transition">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ LIST */}
      <section className="max-w-7xl mx-auto pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
          <div className="flex flex-col gap-5 md:gap-6">
            {left.map((item) => (
              <FaqRow
                key={item._id}
                id={item._id}
                item={item}
                open={openId === item._id}
                onToggle={() => setOpenId((cur) => (cur === item._id ? null : item._id))}
              />
            ))}
          </div>

          <div className="flex flex-col gap-5 md:gap-6">
            {right.map((item) => (
              <FaqRow
                key={item._id}
                id={item._id}
                item={item}
                open={openId === item._id}
                onToggle={() => setOpenId((cur) => (cur === item._id ? null : item._id))}
              />
            ))}
          </div>
        </div>

        <div className="mt-14 text-center text-sm text-[#12110F]/60">
          Still need help?{" "}
          <Link href="/contact" className="underline underline-offset-4">
            Contact us
          </Link>
          .
        </div>
      </section>
    </main>
  );
}
