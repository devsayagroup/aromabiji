"use client";

import { ReactNode, useEffect, useRef } from "react";
import Lenis from "lenis";
import { useAnimationFrame } from "framer-motion";
import { usePathname, useSearchParams } from "next/navigation";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();
  const searchParams = useSearchParams(); 

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    return () => {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "auto";
      }
    };
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,          
      smoothWheel: true,
      wheelMultiplier: 0.9,
      // smoothTouch: false,
    });

    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useAnimationFrame((time) => {
    lenisRef.current?.raf(time);
  });

  useEffect(() => {
    const lenis = lenisRef.current;

    requestAnimationFrame(() => {
      lenis?.stop?.();

      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      lenis?.scrollTo?.(0, { immediate: true });

      lenis?.start?.();
    });
  }, [pathname, searchParams]);

  return <>{children}</>;
}
