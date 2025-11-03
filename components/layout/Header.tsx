"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Product", href: "/product" },
  { name: "Story", href: "/story" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-brown backdrop-blur-sm py-2">
      <div className="container mx-auto grid grid-cols-3 items-center px-6 md:px-14">
        

        <motion.div
          className="col-start-1 justify-self-start"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, ease: "backOut" }}
        >
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <Image
              src="/logo/AromaBiji-WildLuwak.png"
              alt="Logo Goasaya"
              width={80}
              height={80}
            />
          </Link>
        </motion.div>

        <nav className="hidden lg:flex col-start-2 space-x-12 justify-self-center">
          {navLinks.map((link, idx) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
            >
              <Link href={link.href} className="font-text text-white tracking-wider text-sm uppercase">
                {link.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="col-start-3 justify-self-end flex items-center">
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <Link
              href="/reservation"
              className="font-text rounded-md text-sm bg-brownyellow px-6 py-2 text-white hover:bg-maroon hover:text-white transition"
            >
              Book a table
            </Link>
          </motion.div>

          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <motion.nav
          className="lg:hidden flex flex-col items-center shadow-lg mx-4 rounded-md px-6 py-4 mt-4 space-y-4"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {navLinks.map((link, idx) => (
            <motion.div
              key={link.name}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link
                href={link.href}
                className="block text-md text-white text-center hover:text-blue-600"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
            <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
            <Link
                href="/reservation"
                className="font-style text-sm bg-[#FFE3AF] rounded-md px-6 py-2 text-black hover:bg-maroon hover:text-white transition"
                onClick={() => setMenuOpen(false)}
            >
              Book a table
            </Link>
            </motion.div>
        </motion.nav>
      )}
    </header>
  );
}