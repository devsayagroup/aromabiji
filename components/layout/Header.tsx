// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import { usePathname } from "next/navigation";
// import LuxuryButton from "../ui/LuxuryButton";

// const navLinks = [
//   { name: "Home", href: "/" },
//   { name: "About", href: "/about" },
//   { name: "Product", href: "/product" },
//   { name: "Story", href: "/story" },
//   // { name: "Journal", href: "/journal" },
// ];

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const pathname = usePathname();

//   return (
//     <header className="fixed top-0 z-50 w-full bg-white backdrop-blur-sm">
//       <div className="container mx-auto grid grid-cols-3 items-center px-6 md:px-14">
        
//         {/* LOGO */}
//         <motion.div
//           className="col-start-1 justify-self-start"
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 0.6, ease: "backOut" }}
//         >
//           <Link href="/" onClick={() => setMenuOpen(false)}>
//             <Image
//               src="/logo/AromaBiji-WildLuwak.png"
//               alt="Logo Goasaya"
//               width={80}
//               height={80}
//             />
//           </Link>
//         </motion.div>

//         {/* NAVIGATION */}
//         <nav className="hidden lg:flex col-start-2 space-x-8 justify-self-center">
//           {navLinks.map((link, idx) => {
//             const isActive = pathname === link.href;
//             return (
//               <motion.div
//                 key={link.name}
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: idx * 0.1, duration: 0.4 }}
//               >
//                 <Link
//                   href={link.href}
//                   className={`
//                     relative font-text text-gold tracking-wider text-sm uppercase transition-all duration-300
//                     after:absolute after:left-0 after:-bottom-1 after:h-[1.5px] after:w-0 after:bg-white 
//                     hover:after:w-full after:transition-all after:duration-500
//                     ${isActive ? "after:w-full text-gold" : "hover:text-gold"}
//                   `}
//                 >
//                   {link.name}
//                 </Link>
//               </motion.div>
//             );
//           })}
//         </nav>

//         {/* BUTTON + MOBILE MENU TOGGLE */}
//         <div className="col-start-3 justify-self-end flex items-center gap-2">
//           {/* <CartDrawer /> */}

//           <motion.div
//             className="hidden md:block"
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4, duration: 0.4 }}
//           >
//             <LuxuryButton
//               label="Shop now" 
//               theme="dark"
//               href="/product"
//             />
//           </motion.div>

//           <button
//             className="md:hidden text-black"
//             onClick={() => setMenuOpen((v) => !v)}
//             aria-label="Toggle menu"
//           >
//             {menuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* MOBILE NAV */}
//       {menuOpen && (
//         <motion.nav
//           className="lg:hidden flex flex-col items-center shadow-lg mx-4 rounded-md px-6 py-4 mt-4 space-y-4"
//           initial={{ height: 0, opacity: 0 }}
//           animate={{ height: "auto", opacity: 1 }}
//           exit={{ height: 0, opacity: 0 }}
//           transition={{ duration: 0.3 }}
//         >
//           {navLinks.map((link, idx) => {
//             const isActive = pathname === link.href;
//             return (
//               <motion.div
//                 key={link.name}
//                 initial={{ x: -20, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ delay: idx * 0.1 }}
//               >
//                 <Link
//                   href={link.href}
//                   className={`
//                     block text-md text-black text-center relative 
//                     after:absolute after:left-1/2 after:-bottom-1 after:h-[1.5px] after:w-0 after:-translate-x-1/2 after:bg-gold 
//                     hover:after:w-1/2 after:transition-all after:duration-500
//                     ${isActive ? "after:w-1/2 text-black" : "hover:text-black"}
//                   `}
//                   onClick={() => setMenuOpen(false)}
//                 >
//                   {link.name}
//                 </Link>
//               </motion.div>
//             );
//           })}
//           <motion.div
//             initial={{ x: -20, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ delay: 0.4 }}
//           >
//             <LuxuryButton
//               label="Shop now" 
//               theme="light"
//               href="/products"
//             />
//           </motion.div>
//         </motion.nav>
//       )}
//     </header>
//   );
// }

"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Product", href: "/product" },
  { name: "Story", href: "/story" },
];

function useScrollY(threshold = 10) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}

/** Minimal luxury button (solid, no transparency) */
function LuxeButton({
  label,
  href,
  onClick,
}: {
  label: string;
  href: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group inline-flex items-center justify-center rounded-full px-5 py-3 text-[11px] uppercase tracking-[0.28em]
                 bg-[#11110F] text-white border border-white/10
                 hover:border-white/20 hover:bg-[#0D0D0B] transition
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
    >
      <span className="relative">
        {label}
        <span className="pointer-events-none absolute left-0 -bottom-2 h-px w-full scale-x-0 origin-left bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
      </span>
      <span className="ml-3 text-white/50 group-hover:text-white/75 transition">↗</span>
    </Link>
  );
}

/**
 * IMPORTANT:
 * For local images, Next/Image WILL work if the file is in /public.
 * Put your logo here:
 * /public/logo/AromaBiji-WildLuwak.png
 */
function BrandLogo({
  src = "/logo/logo-aroma-gold.webp",
  alt = "Aroma Biji",
  size = 60,
}: {
  src?: string;
  alt?: string;
  size?: number;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      priority
      className="opacity-95"
    />
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const scrolled = useScrollY(12);
  const reduceMotion = useReducedMotion();

  const isActive = (href: string) => pathname === href;

  return (
    <header className="fixed top-0 z-50 w-full">
      {/* SOLID (NOT TRANSPARENT) MINIMAL LUXURY BAR */}
      <div
        className={[
          "absolute inset-0 transition-colors duration-300",
          scrolled ? "bg-[#0A0A0A]" : "bg-[#0B0B09]",
        ].join(" ")}
      >
        {/* hairline accents */}
        <div className="absolute left-0 right-0 top-0 h-px bg-white/10" />
        <div className="absolute left-0 right-0 bottom-0 h-px bg-white/10" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
        className="relative"
      >
        <div className="container mx-auto grid grid-cols-3 items-center px-6 md:px-14 h-[72px] md:h-[84px]">
          {/* LOGO */}
          <div className="col-start-1 justify-self-start flex items-center">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="group inline-flex items-center gap-3"
              aria-label="Aroma Biji Home"
            >
              <div className="relative">
                <BrandLogo />
              </div>
            </Link>
          </div>

          {/* NAV (desktop) */}
          <nav className="hidden lg:flex col-start-2 justify-self-center items-center gap-8">
            {navLinks.map((link, idx) => {
              const active = isActive(link.href);
              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.06, duration: 0.45 }}
                >
                  <Link
                    href={link.href}
                    className={[
                      "relative text-[11px] uppercase tracking-[0.30em] transition",
                      active ? "text-white" : "text-white/70 hover:text-white",
                    ].join(" ")}
                  >
                    {link.name}
                    <span
                      className={[
                        "absolute left-0 -bottom-2 h-px w-full origin-left transition-transform duration-500",
                        "bg-gradient-to-r from-transparent via-white/55 to-transparent",
                        active ? "scale-x-100" : "scale-x-0",
                      ].join(" ")}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* RIGHT */}
          <div className="col-start-3 justify-self-end flex items-center gap-3">
            <div className="hidden md:block">
              <LuxeButton label="Shop now" href="/product" />
            </div>

            <button
              className="lg:hidden inline-flex items-center justify-center rounded-full border border-white/12 bg-[#11110F] text-white px-3 py-3 hover:border-white/20 transition"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU (solid card, minimal) */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden"
            >
              {/* solid overlay */}
              <div className="fixed inset-0 bg-black/70" onClick={() => setMenuOpen(false)} />

              <motion.nav
                initial={{ y: -14, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.28,
                  ease: [0.2, 0.7, 0.2, 1],
                }}
                className="fixed left-4 right-4 top-[84px] rounded-2xl border border-white/10 bg-[#0A0A0A] shadow-[0_20px_60px_rgba(0,0,0,0.55)] overflow-hidden"
              >
                <div className="h-px w-full bg-white/10" />

                <div className="px-6 py-6 flex flex-col gap-2">
                  {navLinks.map((link, idx) => {
                    const active = isActive(link.href);
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ x: -8, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMenuOpen(false)}
                          className={[
                            "flex items-center justify-between rounded-xl px-4 py-4 border transition",
                            active
                              ? "border-white/18 bg-[#11110F] text-white"
                              : "border-white/10 bg-transparent text-white/75 hover:text-white hover:bg-[#11110F] hover:border-white/16",
                          ].join(" ")}
                        >
                          <span className="text-[12px] uppercase tracking-[0.30em]">
                            {link.name}
                          </span>
                          <span className="text-white/35">↗</span>
                        </Link>
                      </motion.div>
                    );
                  })}

                  <div className="pt-3">
                    <LuxeButton
                      label="Shop now"
                      href="/product"
                      onClick={() => setMenuOpen(false)}
                    />
                  </div>

                  <div className="pt-4 text-center text-[10px] tracking-[0.28em] uppercase text-white/45">
                    Indonesia • Small Batch • Heritage
                  </div>
                </div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
