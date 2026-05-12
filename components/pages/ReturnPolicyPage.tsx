"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck, PackageX, RefreshCw, CreditCard } from "lucide-react";
import LuxeButton from "@/components/ui/LuxeButton";

type PolicySection = {
  title: string;
  icon: React.ElementType;
  content: string[];
};

// Revised for strict "Defective Only" and "No Exchanges" Merchant Center rules
const POLICIES: PolicySection[] = [
  {
    title: "1. Eligibility & Scope",
    icon: ShieldCheck,
    content: [
      "We take immense pride in the quality of our roasting and packaging. Returns are strictly accepted only in the event that a product is defective, damaged upon arrival, or incorrect.",
      "Please note that we do not offer exchanges, and we do not accept returns for non-defective items."
    ],
  },
  {
    title: "2. Condition & Timeframe",
    icon: PackageX,
    content: [
      "Because our specialty coffee is a perishable, meticulously crafted product, we cannot accommodate returns based on personal taste preferences or change of mind.",
      "If you receive a defective or damaged product, you must notify us within 7 days of the delivery date.",
      "Defective items must be reported in the exact condition they were received, with the original packaging intact where possible."
    ],
  },
  {
    title: "3. Resolution Process",
    icon: RefreshCw,
    content: [
      "To initiate a return for a defective item, please contact our concierge team via WhatsApp or email immediately.",
      "You will need to provide your order number alongside clear photographic evidence of the defect or damage.",
      "Upon review and approval by our quality assurance team, we will guide you through the return procedure and provide the necessary shipping instructions."
    ],
  },
  {
    title: "4. Refunds & Shipping",
    icon: CreditCard,
    content: [
      "Because returns are only accepted in the case of defective or incorrect products, Aroma Biji will cover all associated return shipping costs.",
      "Once the defective item is received and inspected at our facility, a full refund will be approved.",
      "Refunds will be processed and applied to your original method of payment within 5-7 business days."
    ],
  },
];

export default function ReturnPolicyClient() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="px-6 md:px-0 text-[#12110F] bg-[#FDFDFB] min-h-screen">
      
      {/* LIGHT ATMOSPHERIC BACKGROUND */}
      <div className="absolute inset-x-0 top-0 h-[65vh] overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_18%_18%,rgba(107,15,18,0.03),transparent_55%),radial-gradient(900px_circle_at_82%_32%,rgba(192,140,86,0.05),transparent_60%),linear-gradient(180deg,#F5F2EB_0%,#FDFDFB_100%)]" />
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-black/5 to-transparent" />
      </div>

      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
              <span className="text-[11px] tracking-[0.35em] uppercase text-black/55 font-bold">
                Customer Care
              </span>
              <span className="h-px w-10 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.2, 0.7, 0.2, 1] }}
              className="text-4xl md:text-6xl text-black font-style uppercase tracking-wider"
            >
              Return Policy
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 0.06 }}
              className="mt-6 mx-auto max-w-2xl text-sm md:text-base text-black/60 leading-relaxed font-text"
            >
              We take exceptional care in roasting and curating our beans. 
              Our return policy is designed to be transparent, fair, and dedicated to addressing any quality issues.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="relative pb-32">
        <div className="max-w-7xl mx-auto px-4 md:px-0">
          <div className="flex flex-col gap-6 md:gap-8">
            {POLICIES.map((policy, idx) => {
              const Icon = policy.icon;
              return (
                <motion.article
                  key={policy.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.7,
                    delay: reduceMotion ? 0 : idx * 0.1,
                    ease: [0.2, 0.7, 0.2, 1],
                  }}
                  className="rounded-[32px] bg-white ring-1 ring-black/5 shadow-[0_18px_55px_rgba(0,0,0,0.03)] p-8 md:p-12 hover:shadow-[0_25px_60px_rgba(0,0,0,0.06)] transition-shadow duration-500"
                >
                  <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                    <div className="md:w-1/3 flex flex-col items-start">
                      <div className="w-12 h-12 rounded-full bg-[#f3f0e8] flex items-center justify-center mb-6">
                        <Icon className="w-5 h-5 text-[#6B0F12]" />
                      </div>
                      <h2 className="text-xl md:text-2xl font-text uppercase text-black">
                        {policy.title}
                      </h2>
                    </div>

                    <div className="md:w-2/3 flex flex-col gap-4 border-t md:border-t-0 md:border-l border-black/5 pt-6 md:pt-0 md:pl-10">
                      {policy.content.map((paragraph, pIdx) => (
                        <p key={pIdx} className="text-sm md:text-base text-black/60 leading-relaxed font-text">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 text-center border-t border-black/5 pt-16"
          >
            <h3 className="text-lg font-style uppercase tracking-widest text-black mb-6">
              Need Further Assistance?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <LuxeButton href="https://wa.me/6282221871409" label="Contact WhatsApp" />
              <Link
                href="/faq"
                className="group inline-flex items-center justify-center rounded-full px-8 py-4 text-[11px] uppercase tracking-[0.28em] bg-transparent text-[#12110F] ring-1 ring-black/10 hover:ring-black/20 hover:bg-black/5 transition-all font-bold"
              >
                Read FAQs <span className="ml-3 text-[#12110F]/50 group-hover:text-[#12110F] transition">↗</span>
              </Link>
            </div>
            <p className="mt-8 text-[10px] text-black/40 tracking-[0.25em] uppercase font-bold">
              Aroma Biji Customer Concierge
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}