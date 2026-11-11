"use client";

import { useEffect, useRef, type ReactNode } from "react";
import type { JSX } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  variant?: "up" | "fade" | "left" | "right" | "zoom";
  delay?: number;
  as?: "div" | "section" | "article" | "li" | "span";
};

/**
 * Lightweight scroll-reveal built on IntersectionObserver.
 * Animates opacity + transform only (GPU-friendly, 60fps).
 * Respects prefers-reduced-motion via CSS.
 */
export function Reveal({ children, className = "", variant = "up", delay = 0, as = "div" }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const variantClass =
    variant === "fade" ? "reveal-fade" : variant === "left" ? "reveal-left" : variant === "right" ? "reveal-right" : variant === "zoom" ? "reveal-zoom" : "";

  const Tag = as as keyof JSX.IntrinsicElements;
  return (
    <Tag
      ref={ref as any}
      className={`reveal ${variantClass} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
