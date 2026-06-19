"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  variant?: "pantone" | "transparent-dark" | "transparent-light";
  className?: string;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "transparent-light",
  className = "",
}: ButtonProps) {
    
// ─── SMART CLICK HANDLER ────────────────────────────────────────────────
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    // 1. Check if it's an anchor link
    if (href && href.includes("#")) {
      const hash = href.split("#")[1]; // Extracts "collection" from "/#collection"
      const targetElement = document.getElementById(hash);

      // If the target exists on the CURRENT page, take over and smooth scroll
      if (targetElement) {
        e.preventDefault(); 
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      // If targetElement is null (meaning it's on a different page), 
      // we do nothing and let Next.js route to the new page normally.
    }

    // 2. Fire any custom onClick function passed as a prop
    if (onClick) {
      onClick(e);
    }
  };

  // ─── BASE STYLES ────────────────────────────────────────────────────────
  const baseStyles =
    "relative group overflow-hidden h-11 inline-flex items-center justify-center rounded-full px-7 text-[10px] font-medium uppercase tracking-[0.2em] transition-all duration-300 hover:scale-105 backdrop-blur-md border cursor-pointer";

  // ─── VARIANT STYLES ─────────────────────────────────────────────────────
  const variants = {
    pantone: {
      wrapper: "bg-pantone border-pantone text-canvas hover:bg-pantone/90 hover:shadow-[0_8px_20px_rgba(90,71,67,0.25)]",
      shine: "bg-gradient-to-r from-transparent via-white/20 to-transparent",
    },
    "transparent-dark": {
      wrapper: "bg-white/5 border-white/20 text-canvas hover:bg-white/10 hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]",
      shine: "bg-gradient-to-r from-transparent via-white/10 to-transparent",
    },
    "transparent-light": {
      wrapper: "bg-ink/5 border-ink/10 text-ink hover:bg-ink/10 hover:border-ink/20 hover:shadow-[0_0_20px_rgba(42,31,29,0.05)]",
      shine: "bg-gradient-to-r from-transparent via-ink/10 to-transparent",
    },
  };

  const activeVariant = variants[variant];

  // ─── INTERNAL CONTENT (The Text + The Shine) ────────────────────────────
  const innerContent = (
    <>
      <div
        className={`absolute inset-0 -translate-x-full transition-transform duration-700 ease-in-out group-hover:translate-x-full ${activeVariant.shine}`}
      />
      <span className="relative z-10">{children}</span>
    </>
  );

  // ─── RENDER AS LINK OR BUTTON ───────────────────────────────────────────
  if (href) {
    return (
      <Link
        href={href}
        onClick={handleClick}
        className={`${baseStyles} ${activeVariant.wrapper} ${className}`}
      >
        {innerContent}
      </Link>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`${baseStyles} ${activeVariant.wrapper} ${className}`}
    >
      {innerContent}
    </button>
  );
}