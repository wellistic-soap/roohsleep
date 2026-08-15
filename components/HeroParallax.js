"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/**
 * Hero background that drifts slower than the page as you scroll.
 * Ports the parallax from the design file's script, rAF-throttled and
 * disabled under prefers-reduced-motion.
 */
export default function HeroParallax({ src, alt = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y < 900) el.style.transform = `translateY(${y * 0.28}px)`;
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={ref} className="absolute inset-x-0 -inset-y-[8%] will-change-transform">
      <Image src={src} alt={alt} fill priority sizes="100vw" className="object-cover" />
    </div>
  );
}
