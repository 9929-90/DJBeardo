"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { GALLERY_PHOTOS, GALLERY_VIDEOS } from "@/lib/gallery";
import { PlayIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

type Item =
  | { kind: "photo"; src: string; alt: string; caption: string; ratio: string; span?: string; badge?: string }
  | { kind: "video"; src: string; poster: string; alt: string; caption: string; ratio: string; span?: string };

const ITEMS: Item[] = [
  ...GALLERY_PHOTOS.map((p) => ({
    kind: "photo" as const,
    src: p.src,
    alt: p.alt,
    caption: p.caption,
    ratio: p.ratio === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]",
    span: p.span === "wide" ? "sm:col-span-2" : undefined,
    badge: p.badge,
  })),
  ...GALLERY_VIDEOS.map((v) => ({
    kind: "video" as const,
    src: v.src,
    poster: v.poster,
    alt: v.alt,
    caption: v.caption,
    ratio: v.ratio === "portrait" ? "aspect-[9/16] sm:aspect-[3/4]" : "aspect-[4/3]",
  })),
];

export function GalleryGrid() {
  const [active, setActive] = useState<number | null>(null);
  const videoRefs = useRef<Map<number, HTMLVideoElement>>(new Map());

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setActive((cur) => (cur === null ? cur : (cur + dir + ITEMS.length) % ITEMS.length)),
    []
  );

  // Lightbox keyboard controls
  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, step]);

  // Hover preview: play/pause videos without triggering React re-renders
  const onEnter = (i: number) => {
    const v = videoRefs.current.get(i);
    if (v) v.play().catch(() => {});
  };
  const onLeave = (i: number) => {
    const v = videoRefs.current.get(i);
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
  };

  return (
    <>
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {ITEMS.map((item, i) => (
          <figure
            key={item.src}
            className={cn(
              "group relative block break-inside-avoid overflow-hidden rounded-xl border border-white/[0.06]",
              item.ratio
            )}
          >
            <button
              type="button"
              onClick={() => setActive(i)}
              onMouseEnter={() => item.kind === "video" && onEnter(i)}
              onMouseLeave={() => item.kind === "video" && onLeave(i)}
              className="absolute inset-0 z-20 cursor-zoom-in"
              aria-label={`Open ${item.kind === "video" ? "video" : "photo"}: ${item.caption}`}
            />
            {item.kind === "photo" ? (
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw"
                loading="lazy"
                className="object-cover transition-all duration-[1100ms] ease-out group-hover:scale-[1.05]"
              />
            ) : (
              <video
                ref={(el) => {
                  if (el) videoRefs.current.set(i, el);
                  else videoRefs.current.delete(i);
                }}
                src={item.src}
                poster={item.poster}
                muted
                loop
                playsInline
                preload="none"
                aria-label={item.alt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.03]"
              />
            )}
            {item.kind === "video" ? (
              <span className="absolute left-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-sm">
                <PlayIcon className="ml-0.5 h-3.5 w-3.5" />
              </span>
            ) : null}
            {item.kind === "photo" && item.badge ? (
              <span className="absolute left-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full border border-[var(--violet-brand)]/50 bg-black/60 px-3 py-1.5 text-[10.5px] font-medium uppercase tracking-[0.16em] text-[var(--violet-soft)] backdrop-blur-sm">
                {item.badge}
              </span>
            ) : null}
            <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/85 via-black/25 to-transparent p-5 pt-14 text-[13px] font-light tracking-[0.06em] text-zinc-200">
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Lightbox */}
      {active !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={ITEMS[active].caption}
          className="lightbox-backdrop fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-10"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-2xl font-light text-white/80 transition-colors hover:border-white/40 hover:text-white"
          >
            ×
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous"
            className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-white/40 hover:text-white sm:left-6"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next"
            className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-white/40 hover:text-white sm:right-6"
          >
            ›
          </button>
          <figure
            className="flex max-h-full max-w-5xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {ITEMS[active].kind === "photo" ? (
              <div className="relative h-[76vh] w-full">
                <Image
                  src={ITEMS[active].src}
                  alt={ITEMS[active].alt}
                  fill
                  sizes="92vw"
                  className="object-contain"
                  priority
                />
              </div>
            ) : (
              <video
                key={ITEMS[active].src}
                src={ITEMS[active].src}
                poster={ITEMS[active].poster}
                controls
                autoPlay
                loop
                playsInline
                className="max-h-[76vh] w-auto max-w-full rounded-lg"
                aria-label={ITEMS[active].alt}
              />
            )}
            <figcaption className="mt-4 text-center text-sm font-light tracking-[0.08em] text-zinc-300">
              {ITEMS[active].caption}
              <span className="ml-3 text-zinc-500">
                {active + 1} / {ITEMS.length}
              </span>
            </figcaption>
          </figure>
        </div>
      ) : null}
    </>
  );
}
