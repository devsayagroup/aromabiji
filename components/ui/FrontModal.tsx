"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function FrontModal() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // FIX: Added the useEffect back to trigger the modal after 1.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (pathname === "/links" || pathname === "/experiences/may-madness") return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center px-12 sm:px-12 pointer-events-auto font-text">
          
          {/* ─── LUXURY BACKDROP ────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 bg-ink/40 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          />

          {/* ─── MINIMALIST BENTO CARD ──────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-[420px] max-h-[90vh] overflow-y-auto bg-canvas shadow-[0_40px_80px_rgba(42,31,29,0.2)] rounded-[2rem] scrollbar-hide flex flex-col"
          >
            {/* Close Button: Glassmorphism over the image */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-ink/10 text-ink backdrop-blur-md transition-colors hover:bg-ink/20 hover:text-ink"
              aria-label="Close modal"
            >
              <X size={16} strokeWidth={2} />
            </button>

            {/* Campaign Image: Forced aspect ratio to maintain a perfect shape */}
            <div className="relative w-full aspect-[3/3] flex-shrink-0 bg-muted/20">
              <Image
                src="/products/chocolate/main.webp"
                alt="Dark Chocolate Aroma Biji"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover"
                priority
              />
              {/* Subtle inner shadow to blend the image into the card */}
              <div className="absolute inset-0 border-b border-muted/20 shadow-[inset_0_-10px_20px_rgba(42,31,29,0.05)]" />
            </div>

            {/* Campaign Content */}
            <div className="relative px-8 pt-8 pb-10 text-center flex flex-col items-center flex-1">
              
              {/* Eyebrow */}
              <span className="text-[9px] font-semibold uppercase tracking-[0.4em] text-pantone/50 mb-4">
                The Chocolate Edition
              </span>
              
              {/* FIX: Added strong, tight-tracking headline */}
              <h4 className="text-3xl md:text-4xl font-style tracking-tight text-ink mb-4 leading-[1.1]">
                A New Mastery.
              </h4>
              
              {/* FIX: Added minimalist sub-copy */}
              <p className="text-[13px] text-pantone/80 font-light leading-relaxed mb-10 max-w-[280px]">
                Experience our signature coffee heritage, flawlessly infused into single-origin dark chocolate.
              </p>

              {/* ─── APPLE-STYLE STACKED ACTIONS ────────────────────────────── */}
              <div className="flex flex-col w-full gap-3 mt-auto">
                
                {/* FIX: Added the primary solid pill button back */}
                <Link
                  href="/chocolate"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex h-12 items-center justify-center rounded-full bg-ink text-canvas text-[11px] font-medium uppercase tracking-[0.2em] transition-transform duration-300 hover:scale-[1.02] shadow-[0_8px_20px_rgba(42,31,29,0.15)]"
                >
                  Discover the Bar
                </Link>
                
                {/* Secondary Action: Minimal text link */}
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-3 text-[10px] font-medium text-pantone/50 uppercase tracking-[0.2em] transition-colors hover:text-ink"
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
}