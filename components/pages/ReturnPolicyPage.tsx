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

const POLICIES: PolicySection[] = [
  {
    title: "1. Return Window & Eligibility",
    icon: ShieldCheck,
    content: [
      "We accept returns or exchanges within 7 days of the delivery date.",
      "Because coffee is a perishable product, we cannot accept returns on roasted coffee beans that have been opened or consumed.",
      "If you received an incorrect, damaged, or defective item, please contact us immediately so we can make it right."
    ],
  },
  {
    title: "2. Condition of Items",
    icon: PackageX,
    content: [
      "To be eligible for a return, merchandise (such as brewing equipment or apparel) must be unused, in its original packaging, and in the same condition that you received it.",
      "Sealed coffee bags can only be returned if they were shipped in error by Aroma Biji."
    ],
  },
  {
    title: "3. Return Process",
    icon: RefreshCw,
    content: [
      "To initiate a return, please contact our concierge team via WhatsApp or email with your order number and photo evidence of the issue.",
      "Once approved, we will provide you with the return shipping address.",
      "Please securely pack the item. We recommend using a trackable shipping service, as we cannot guarantee receipt of your returned item."
    ],
  },
  {
    title: "4. Refunds & Shipping Fees",
    icon: CreditCard,
    content: [
      "Once your return is received and inspected, we will notify you of the approval or rejection of your refund.",
      "Approved refunds will be processed and applied to your original method of payment within 5-7 business days.",
      "Shipping costs are non-refundable. If you receive a refund, the cost of original shipping will be deducted. Aroma Biji will cover return shipping costs only in the event of a defective product or a shipping error on our part."
    ],
  },
];

export default function ReturnPolicyClient() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="px-6 md:px-0 text-[#12110F] bg-[#FDFDFB] min-h-screen">
      
      {/* REVISED LIGHT ATMOSPHERIC BACKGROUND */}
      <div className="absolute inset-x-0 top-0 h-[65vh] overflow-hidden pointer-events-none">
        {/* Swapped dark gradients for very subtle maroon/gold washes over a cream base */}
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_18%_18%,rgba(107,15,18,0.03),transparent_55%),radial-gradient(900px_circle_at_82%_32%,rgba(192,140,86,0.05),transparent_60%),linear-gradient(180deg,#F5F2EB_0%,#FDFDFB_100%)]" />
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-black/5 to-transparent" />
      </div>

      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center">
            
            {/* Swapped text-white/55 to text-black/55 */}
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
              <span className="text-[11px] tracking-[0.35em] uppercase text-black/55 font-bold">
                Customer Care
              </span>
              <span className="h-px w-10 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
            </div>

            {/* Swapped text-white to text-black */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.2, 0.7, 0.2, 1] }}
              className="text-4xl md:text-6xl text-black font-style uppercase tracking-wider"
            >
              Return Policy
            </motion.h1>

            {/* Swapped text-white/60 to text-black/60 */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 0.06 }}
              className="mt-6 mx-auto max-w-2xl text-sm md:text-base text-black/60 leading-relaxed font-text"
            >
              We take exceptional care in roasting and curating our beans. 
              Our return policy is designed to be transparent, fair, and dedicated to your satisfaction.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="relative pb-32">
        <div className="max-w-4xl mx-auto px-4 md:px-0">
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
                      <h2 className="text-xl md:text-2xl font-style uppercase tracking-wide text-black">
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