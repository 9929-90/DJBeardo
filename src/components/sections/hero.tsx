"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { waLink } from "@/lib/site";

/**
 * Cinematic hero — elegant two-column composition.
 * GSAP drives the entrance timeline and a light parallax on the portrait.
 * Transform/opacity only; disabled under prefers-reduced-motion.
 */
export function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        ".hero-eyebrow",
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9 },
        0.15
      )
        .fromTo(
          ".hero-title-line",
          { yPercent: 130, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 1.1, stagger: 0.09 },
          0.25
        )
        .fromTo(
          ".hero-sub",
          { y: 22, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
          0.75
        )
        .fromTo(
          ".hero-copy",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
          0.88
        )
        .fromTo(
          ".hero-cta",
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
          1.0
        )
        .fromTo(
          ".hero-proof",
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, stagger: 0.08 },
          1.15
        )
        .fromTo(
          ".hero-portrait",
          { opacity: 0, scale: 1.045, y: 24 },
          { opacity: 1, scale: 1, y: 0, duration: 1.7, ease: "power2.out" },
          0.45
        );

      // Subtle parallax on the portrait (desktop only)
      const mq = gsap.matchMedia();
      mq.add("(min-width: 1024px)", () => {
        gsap.to(".hero-portrait", {
          yPercent: -6,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "bottom top",
            scrub: 0.6,
          },
        });
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="atmosphere film-grain relative overflow-hidden" aria-label="Introduction">
      {/* deep atmospheric wash */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 72% 40%, rgba(139,92,246,0.10), transparent 62%), linear-gradient(180deg, rgba(5,5,6,0.25) 0%, rgba(5,5,6,0) 30%, rgba(5,5,6,0.92) 96%)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 pb-14 pt-[96px] sm:px-8 lg:min-h-[86vh] lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:pb-28 lg:pt-[80px]">
        {/* LEFT — text composition (nudged 30px above the centered baseline) */}
        <div className="relative z-10 order-2 translate-y-[-30px] lg:order-1">
          <p className="hero-eyebrow text-eyebrow text-[10px] opacity-80">
            <span className="mr-3 inline-block h-px w-8 translate-y-[-3px] bg-[var(--violet-soft)]/60" aria-hidden="true" />
            Udaipur · Rajasthan · Since 2008
          </p>

          <h1 className="text-hero-title mt-4 text-[clamp(2.4rem,7.4vw,5.4rem)]">
            <span className="-mb-[0.16em] block overflow-hidden pb-[0.16em]">
              <span className="hero-title-line block opacity-0">DJ BEARD</span>
            </span>
          </h1>

          <p className="hero-sub mt-3 text-base font-light tracking-[0.14em] text-zinc-300 opacity-0 sm:text-lg">
            Professional DJ in Udaipur
          </p>

          <p className="hero-copy mt-5 max-w-[32rem] text-sm leading-relaxed text-zinc-400 opacity-0 sm:text-[15px]">
            Creating unforgettable music experiences, electrifying performances and extraordinary
            celebrations — for weddings, parties and events across Udaipur and Rajasthan for over
            seventeen years.
          </p>

          <div className="hero-cta mt-7 flex flex-wrap items-center gap-3.5 opacity-0">
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-primary btn-sm">
              Book Now
            </a>
            <a href="#meet" className="btn-outline btn-sm">
              Explore
            </a>
          </div>

          {/* verified experience highlights */}
          <dl className="hero-proof mt-8 grid max-w-md grid-cols-3 gap-5 opacity-0 border-t border-white/[0.07] pt-5">
            {[
              ["17+", "Years Live"],
              ["500+", "Events Played"],
              ["8", "Genres Mixed"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="text-xl font-light text-white sm:text-2xl">{value}</dd>
                <dd className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* RIGHT — true cutout of DJ Beard, integrated like stage photography:
            atmosphere and bloom sit BEHIND the figure so it occludes light,
            the silhouette dissolves into darkness at the bottom. */}
        <div className="relative order-1 lg:order-2" aria-hidden="false">
          <div className="hero-portrait relative mx-auto max-w-[290px] opacity-0 sm:max-w-[400px] lg:max-w-[460px]">
            {/* stage haze behind the figure */}
            <div
              className="pointer-events-none absolute -inset-[18%]"
              aria-hidden="true"
              style={{
                background:
                  "radial-gradient(ellipse 52% 46% at 52% 34%, rgba(139,92,246,0.20), rgba(139,92,246,0.07) 48%, transparent 72%), radial-gradient(ellipse 70% 55% at 50% 45%, rgba(255,255,255,0.045), transparent 70%)",
              }}
            />
            {/* bloom that follows the silhouette (blurred screen-blend copy) */}
            <Image
              src="/media/photos/hero-portrait.webp"
              alt=""
              aria-hidden="true"
              width={1500}
              height={2602}
              className="pointer-events-none absolute inset-0 h-auto w-full select-none mix-blend-screen"
              style={{
                filter: "blur(26px) saturate(1.12) brightness(1.02)",
                opacity: 0.38,
                transform: "scale(1.035)",
                WebkitMaskImage:
                  "linear-gradient(180deg, black 0%, black 78%, transparent 94%)",
                maskImage:
                  "linear-gradient(180deg, black 0%, black 78%, transparent 94%)",
              }}
              sizes="(max-width: 1024px) 80vw, 44vw"
            />
            {/* the cutout itself — bottom dissolves into the page darkness */}
            <Image
              src="/media/photos/hero-portrait.webp"
              alt="DJ Beard — professional DJ in Udaipur — wearing a black cap and holding his headphones"
              width={1500}
              height={2602}
              priority
              fetchPriority="high"
              className="relative h-auto w-full select-none"
              style={{
                WebkitMaskImage:
                  "linear-gradient(180deg, black 0%, black 80%, transparent 97%)",
                maskImage:
                  "linear-gradient(180deg, black 0%, black 80%, transparent 97%)",
              }}
              sizes="(max-width: 1024px) 80vw, 44vw"
            />
            {/* ground dissolve — swallows silhouette, bloom and haze into
                the page darkness so nothing ends on a visible edge */}
            <div
              className="pointer-events-none absolute -inset-x-[12%] bottom-0 h-[34%]"
              aria-hidden="true"
              style={{
                background:
                  "linear-gradient(180deg, rgba(5,5,6,0) 0%, rgba(5,5,6,0.72) 52%, #050506 90%)",
              }}
            />
          </div>
        </div>
      </div>

      {/* bottom fade into next section */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28"
        aria-hidden="true"
        style={{ background: "linear-gradient(180deg, transparent, #050506)" }}
      />
    </section>
  );
}
