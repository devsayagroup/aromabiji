// "use client";

// import { ReactNode, useEffect, useRef } from "react";
// import Lenis from "lenis";

// export default function SmoothScroll({ children }: { children: ReactNode }) {
//   const rafIdRef = useRef<number | null>(null);
//   const startedRef = useRef(false);

//   useEffect(() => {
//     if (startedRef.current) return;
//     startedRef.current = true;

//     const lenis = new Lenis({
//       duration: 1.2,
//       easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//     });

//     const raf = (time: number) => {
//       lenis.raf(time);
//       rafIdRef.current = requestAnimationFrame(raf);
//     };

//     rafIdRef.current = requestAnimationFrame(raf);

//     return () => {
//       if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
//       lenis.destroy();
//       startedRef.current = false;
//     };
//   }, []);

//   return <>{children}</>;
// }

"use client";

import { ReactNode, useEffect, useRef } from "react";
import Lenis from "lenis";
import { useAnimationFrame } from "framer-motion";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<any>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    lenisRef.current = new Lenis({
      lerp: 0.14,
      smoothWheel: true,
      wheelMultiplier: 0.85,
    });

    return () => {
      lenisRef.current?.destroy?.();
      lenisRef.current = null;
      startedRef.current = false;
    };
  }, []);

  useAnimationFrame((time) => {
    lenisRef.current?.raf?.(time);
  });

  return <>{children}</>;
}
