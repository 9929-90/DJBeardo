"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Oversized DJ BEARD wordmark with scroll-triggered rise-and-reveal.
 * GSAP ScrollTrigger animates transforms only (GPU-friendly).
 * Disabled entirely under prefers-reduced-motion.
 */
export function FooterWordmark() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const text = textRef.current;
    if (!wrap || !text) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      text.style.opacity = "1";
      text.style.transform = "none";
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    const tween = gsap.fromTo(
      text,
      { yPercent: 46, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        ease: "power3.out",
        duration: 1.4,
        scrollTrigger: { trigger: wrap, start: "top 92%", once: true },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <div ref={wrapRef} className="overflow-hidden" aria-hidden="true">
      <div
        ref={textRef}
        className="footer-wordmark select-none whitespace-nowrap text-center"
        style={{ fontSize: "clamp(3.2rem, 12.5vw, 13.5rem)", opacity: 0 }}
      >
        DJ BEARD
      </div>
    </div>
  );
}
