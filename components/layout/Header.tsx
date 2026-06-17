// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
// import { useEffect, useState } from "react";
// import { Menu, X } from "lucide-react";
// import { usePathname } from "next/navigation";

// const navLinks = [
//   { name: "Home", href: "/" },
//   { name: "About", href: "/about" },
//   { name: "Product", href: "/product" },
//   { name: "Story", href: "/story" },
//   { name: "Journal", href: "/journal" },
// ];

// function useScrollY(threshold = 10) {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > threshold);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, [threshold]);

//   return scrolled;
// }

// function LuxeButton({
//   label,
//   href,
//   onClick,
//   className = "",
// }: {
//   label: string;
//   href: string;
//   onClick?: () => void;
//   className?: string;
// }) {
//   return (
//     <Link
//       href={href}
//       onClick={onClick}
//       className={[
//         "group inline-flex items-center justify-center rounded-full px-5 py-3",
//         "text-[11px] uppercase tracking-[0.28em]",
//         "bg-[#11110F] text-white",
//         "hover:bg-[#0D0D0B] transition",
//         "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/25",
//         className,
//       ].join(" ")}
//     >
//       <span className="relative">
//         {label}
//         <span className="pointer-events-none absolute left-0 -bottom-2 h-px w-full scale-x-0 origin-left bg-gradient-to-r from-transparent via-[#C08C56] to-transparent transition-transform duration-500 group-hover:scale-x-100" />
//       </span>
//       <span className="ml-3 text-white/50 group-hover:text-white/80 transition">↗</span>
//     </Link>
//   );
// }

// function BrandLogo({
//   src = "/logo/logo-aroma-gold.webp",
//   alt = "Aroma Biji",
//   size = 60,
// }: {
//   src?: string;
//   alt?: string;
//   size?: number;
// }) {
//   return (
//     <Image
//       src={src}
//       alt={alt}
//       width={size}
//       height={size}
//       priority
//       className="opacity-95"
//     />
//   );
// }

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const pathname = usePathname();
//   const scrolled = useScrollY(12);
//   const reduceMotion = useReducedMotion();

//   const isActive = (href: string) => pathname === href;

//   return (
//     <header className="fixed top-0 z-50 w-full">
//       <div
//         className={[
//           "absolute inset-0 transition-colors duration-300",
//           scrolled ? "bg-[#0A0A0A]" : "bg-[#0B0B09]",
//         ].join(" ")}
//       >
//         <div className="absolute left-0 right-0 bottom-0 h-px bg-white/8" />
//       </div>

//       <motion.div
//         initial={{ opacity: 0, y: -10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
//         className="relative"
//       >
//         <div className="container max-w-7xl mx-auto grid grid-cols-3 items-center h-[72px] px-6 md:px-0 md:h-[84px]">
//           <div className="col-start-1 justify-self-start flex items-center">
//             <Link
//               href="/"
//               onClick={() => setMenuOpen(false)}
//               className="inline-flex items-center gap-3"
//               aria-label="Aroma Biji Home"
//             >
//               <BrandLogo />
//             </Link>
//           </div>

//           <nav className="hidden lg:flex col-start-2 justify-self-center items-center gap-8">
//             {navLinks.map((link, idx) => {
//               const active = isActive(link.href);
//               return (
//                 <motion.div
//                   key={link.name}
//                   initial={{ opacity: 0, y: -6 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: idx * 0.06, duration: 0.45 }}
//                 >
//                   <Link
//                     href={link.href}
//                     className={[
//                       "relative text-[11px] uppercase tracking-[0.30em] transition",
//                       active ? "text-white" : "text-white/70 hover:text-white",
//                     ].join(" ")}
//                   >
//                     {link.name}
//                     <span
//                       className={[
//                         "absolute left-0 -bottom-2 h-px w-full origin-left transition-transform duration-500",
//                         "bg-gradient-to-r from-transparent via-[#C08C56] to-transparent",
//                         active ? "scale-x-100" : "scale-x-0",
//                       ].join(" ")}
//                     />
//                   </Link>
//                 </motion.div>
//               );
//             })}
//           </nav>

//           <div className="col-start-3 justify-self-end flex items-center gap-3">
//             <div className="hidden md:block">
//               <LuxeButton label="Shop now" href="/product" />
//             </div>

//             <button
//               className="lg:hidden inline-flex items-center justify-center rounded-full bg-white/8 text-white px-3.5 py-3.5 hover:bg-white/12 transition"
//               onClick={() => setMenuOpen((v) => !v)}
//               aria-label="Toggle menu"
//             >
//               {menuOpen ? <X size={20} /> : <Menu size={20} />}
//             </button>
//           </div>
//         </div>

//         <AnimatePresence>
//           {menuOpen && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.2 }}
//               className="lg:hidden"
//             >
//               {/* overlay */}
//               <div
//                 className="fixed inset-0 bg-black/75"
//                 onClick={() => setMenuOpen(false)}
//               />
//               <motion.nav
//                 initial={{
//                   y: -16,
//                   opacity: 0,
//                   filter: "blur(10px)",
//                   scale: 0.98,
//                 }}
//                 animate={{ y: 0, opacity: 1, filter: "blur(0px)", scale: 1 }}
//                 exit={{
//                   y: -10,
//                   opacity: 0,
//                   filter: "blur(10px)",
//                   scale: 0.985,
//                 }}
//                 transition={{
//                   duration: reduceMotion ? 0 : 0.32,
//                   ease: [0.2, 0.7, 0.2, 1],
//                 }}
//                 className="fixed left-4 right-4 top-[84px] overflow-hidden rounded-2xl shadow-[0_26px_80px_rgba(0,0,0,0.60)]"
//               >
//                 <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_20%_10%,rgba(255,220,170,0.14),transparent_55%),radial-gradient(700px_circle_at_80%_30%,rgba(192,140,86,0.12),transparent_60%),linear-gradient(180deg,#0A0A0A_0%,#0B0A08_100%)]" />
//                 <div
//                   className="absolute inset-0 opacity-[0.10] mix-blend-overlay"
//                   style={{
//                     backgroundImage:
//                       "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22160%22 height=%22160%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%22160%22 height=%22160%22 filter=%22url(%23n)%22 opacity=%220.45%22/></svg>')",
//                   }}
//                 />
//                 <div className="absolute left-0 right-0 top-0 h-px bg-white/10" />

//                 <div className="relative px-6 py-6">
//                   <div className="flex items-center justify-between pb-4">
//                     <div className="flex items-center gap-3">
//                       <Image
//                         src="/logo/logo-aroma-gold.webp"
//                         alt="Aroma Biji"
//                         width={44}
//                         height={44}
//                         className="opacity-95"
//                       />
//                     </div>

//                     <button
//                       className="inline-flex items-center justify-center rounded-full bg-white/8 text-white px-3.5 py-3.5 hover:bg-white/12 transition"
//                       onClick={() => setMenuOpen(false)}
//                       aria-label="Close menu"
//                     >
//                       <X size={18} />
//                     </button>
//                   </div>

//                   <div className="flex flex-col">
//                     {navLinks.map((link, idx) => {
//                       const active = isActive(link.href);
//                       return (
//                         <motion.div
//                           key={link.name}
//                           initial={{ x: -8, opacity: 0 }}
//                           animate={{ x: 0, opacity: 1 }}
//                           transition={{ delay: idx * 0.05 }}
//                         >
//                           <Link
//                             href={link.href}
//                             onClick={() => setMenuOpen(false)}
//                             className={[
//                               "group flex items-center justify-between rounded-xl px-4 py-4 transition",
//                               active
//                                 ? "bg-white/8 text-white"
//                                 : "text-white/75 hover:text-white hover:bg-white/6",
//                             ].join(" ")}
//                           >
//                             <span className="text-[12px] uppercase tracking-[0.30em]">
//                               {link.name}
//                             </span>
//                             <span className="text-white/35 group-hover:text-white/60 transition">
//                               ↗
//                             </span>
//                           </Link>
//                         </motion.div>
//                       );
//                     })}
//                   </div>

//                   <div className="pt-4">
//                     <LuxeButton
//                       label="Shop now"
//                       href="/product"
//                       onClick={() => setMenuOpen(false)}
//                       className="w-full"
//                     />
//                   </div>

//                   <div className="pt-4 text-center text-[10px] tracking-[0.28em] uppercase text-white/45">
//                     #PrideOfIndonesia
//                   </div>
//                 </div>

//                 <div className="relative h-10 bg-gradient-to-t from-black/35 to-transparent" />
//               </motion.nav>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.div>
//     </header>
//   );
// }

"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { 
    name: "Shop", 
    href: "#", 
    subLinks: [
      { name: "Coffee Collection", href: "/coffee" },
      { name: "Chocolate Editions", href: "/chocolate" }
    ]
  },
  { name: "Story", href: "/story" },
  { name: "Journal", href: "/journal" },
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

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileShopOpen, setMobileShopOpen] = useState(false);
  
  const pathname = usePathname();
  const scrolled = useScrollY(12);

  const isDarkPage = pathname === "/"; 

  useEffect(() => {
    setMenuOpen(false);
    setMobileShopOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 z-[100] w-full font-text">
      {/* ─── DESKTOP HEADER BACKGROUND & BORDER ─────────────────────────────── */}
      <div
        className={`absolute inset-0 transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled 
            ? isDarkPage 
                ? "bg-ink/80 backdrop-blur-xl" 
                : "bg-canvas/80 backdrop-blur-xl" 
            : "bg-transparent"
        }`}
      />
      <div 
        className={`absolute bottom-0 left-0 right-0 h-px transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled ? "opacity-100" : "opacity-0"
        } ${isDarkPage ? "bg-white/10" : "bg-ink/10"}`}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        {/* SHORTER HEIGHT: 72px on mobile, 84px on desktop */}
        <div className="flex h-[72px] items-center justify-between md:h-[84px]">
          
          {/* ─── LOGO ──────────────────────────────────────────────────────── */}
          <Link href="/" className="relative z-10 flex items-center" aria-label="Aroma Biji Home">
            <Image
              src="/logo/logo-aroma-gold.webp"
              alt="Aroma Biji"
              width={64} 
              height={64}
              priority
              className="object-contain w-14 md:w-[64px]"
            />
          </Link>

          {/* ─── DESKTOP NAVIGATION ────────────────────────────────────────── */}
          <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-10">
            {navItems.map((item) => {
              const active = isActive(item.href) || item.subLinks?.some(sub => isActive(sub.href));

              if (item.subLinks) {
                return (
                  <div key={item.name} className="relative group py-6 cursor-pointer">
                    <div 
                      className={`flex items-center gap-1.5 text-[11px] uppercase tracking-[0.25em] font-medium transition-colors duration-300 ${
                        active 
                          ? (isDarkPage ? "text-canvas" : "text-ink") 
                          : (isDarkPage ? "text-canvas/60 group-hover:text-canvas" : "text-ink/60 group-hover:text-ink")
                      }`}
                    >
                      {item.name}
                      <ChevronDown size={12} className="transition-transform duration-300 group-hover:rotate-180" />
                    </div>
                    
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-1 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]">
                      <div className="flex flex-col bg-ink border border-white/10 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] p-2 min-w-[220px]">
                        {item.subLinks.map((subLink) => (
                          <Link 
                            key={subLink.name} 
                            href={subLink.href}
                            className={`px-5 py-3.5 text-[10px] uppercase tracking-[0.2em] font-medium rounded-xl transition-colors ${
                              isActive(subLink.href) 
                                ? "bg-white/10 text-canvas" 
                                : "text-canvas/60 hover:bg-white/5 hover:text-canvas"
                            }`}
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-[11px] uppercase tracking-[0.25em] font-medium transition-colors duration-300 ${
                    active 
                      ? (isDarkPage ? "text-canvas" : "text-ink") 
                      : (isDarkPage ? "text-canvas/60 hover:text-canvas" : "text-ink/60 hover:text-ink")
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* ─── DESKTOP CTA & MOBILE TOGGLE ────────────────────────────────── */}
          <div className="relative z-10 flex items-center gap-4">
            
            {/* Sleeker Glassmorphism Button: h-11 */}
            <Link 
              href="/coffee" 
              className={`hidden md:flex relative group overflow-hidden h-11 items-center justify-center rounded-full px-7 text-[10px] font-medium uppercase tracking-[0.2em] transition-all duration-300 hover:scale-105 backdrop-blur-md border ${
                isDarkPage 
                  ? "bg-white/5 border-white/20 text-canvas hover:bg-white/10 hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]" 
                  : "bg-ink/5 border-ink/10 text-ink hover:bg-ink/10 hover:border-ink/20 hover:shadow-[0_0_20px_rgba(42,31,29,0.05)]"
              }`}
            >
              <div className={`absolute inset-0 -translate-x-full transition-transform duration-700 ease-in-out group-hover:translate-x-full ${
                isDarkPage ? "bg-gradient-to-r from-transparent via-white/10 to-transparent" : "bg-gradient-to-r from-transparent via-ink/10 to-transparent"
              }`} />
              <span className="relative z-10">Order Now</span>
            </Link>

            {/* Sleeker Mobile Toggle: h-11 w-11 */}
            <button
              className={`flex h-11 w-11 items-center justify-center rounded-full backdrop-blur-md transition-all lg:hidden border ${
                isDarkPage 
                  ? "bg-white/5 text-canvas border-white/10 hover:bg-white/10" 
                  : "bg-ink/5 text-ink border-ink/10 hover:bg-ink/10"
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <Menu size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      {/* ─── MOBILE FULLSCREEN MENU ─────────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex flex-col bg-ink lg:hidden"
          >
            {/* Header Area inside Mobile Menu: Matches 72px height */}
            <div className="flex h-[72px] items-center justify-between px-6 border-b border-white/5">
              <Image src="/logo/logo-aroma-gold.webp" alt="Aroma Biji" width={56} height={56} className="object-contain" />
              <button
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-canvas border border-white/10 transition-colors hover:bg-white/10"
                onClick={() => setMenuOpen(false)}
              >
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>

            {/* Links Area */}
            <div className="flex-1 overflow-y-auto px-8 py-10">
              <div className="flex flex-col gap-6">
                {navItems.map((item, idx) => {
                  const active = isActive(item.href) || item.subLinks?.some(sub => isActive(sub.href));

                  if (item.subLinks) {
                    return (
                      <motion.div 
                        key={item.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex flex-col"
                      >
                        <button 
                          onClick={() => setMobileShopOpen(!mobileShopOpen)}
                          className={`flex items-center justify-between text-left text-2xl font-style uppercase tracking-wider transition-colors ${active || mobileShopOpen ? "text-canvas" : "text-canvas/50"}`}
                        >
                          {item.name}
                          <ChevronDown size={20} className={`transition-transform duration-300 ${mobileShopOpen ? "rotate-180" : ""}`} />
                        </button>
                        
                        <AnimatePresence>
                          {mobileShopOpen && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden flex flex-col gap-4 pl-4 pt-6"
                            >
                              {item.subLinks.map(subLink => (
                                <Link 
                                  key={subLink.name} 
                                  href={subLink.href}
                                  onClick={() => setMenuOpen(false)}
                                  className={`text-[11px] font-text font-medium uppercase tracking-[0.2em] ${isActive(subLink.href) ? "text-canvas" : "text-canvas/50"}`}
                                >
                                  {subLink.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  }

                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className={`block text-2xl font-style uppercase tracking-wider transition-colors ${active ? "text-canvas" : "text-canvas/50 hover:text-canvas"}`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Mobile Footer */}
            <div className="p-8 border-t border-white/5">
              <Link 
                href="/coffee" 
                onClick={() => setMenuOpen(false)}
                className="relative overflow-hidden group flex h-14 w-full items-center justify-center rounded-full bg-canvas text-[11px] font-medium uppercase tracking-[0.2em] text-ink transition-transform active:scale-[0.98]"
              >
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-ink/10 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full" />
                <span className="relative z-10">Order Now</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}