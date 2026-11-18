"use client";

import Image from "next/image";
import { SoundLoopVideo } from "@/components/video-sound";
import { SILENT_VIDEOS } from "@/lib/gallery";
import { useRef, useState } from "react";

import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

type Highlight =
  | {
      kind: "photo";
      src: string;
      alt: string;
      title: string;
      aspect: string;
      sizes: string;
    }
  | {
      kind: "live-video";
      src: string;
      poster: string;
      alt: string;
      title: string;
      aspect: string;
      sizes: string;
    }
  | {
      kind: "manual-video";
      src: string;
      poster: string;
      alt: string;
      title: string;
      aspect: string;
      sizes: string;
      /** caption sits above the play overlay so the title stays visible */
      titleOnTop?: boolean;
    };

/*
 * Captions follow the client's own identifications (WhatsApp, 13-16 Nov).
 * Where the client did not identify a clip, the card keeps a neutral
 * descriptive title instead of a guessed venue or name.
 *
 * Design: every card is the same size (uniform 3/4 grid, five per row on
 * desktop) — no featured/wide cards, rows always flush and aligned.
 *
 * 16 Nov: the Corporate Event, Live Crowd Moments and Live Performance
 * Highlights clips were replaced by the client's new batch — Sukhwinder
 * - at Mementos by ITC Hotels, Live Sound Academy with Sunil Sir, and
 * Music Festival at City Palace (identifications from WhatsApp, 16 Nov).
 * The Sukhwinder clip is cropped slightly so the OnePlus camera watermark
 * is out of frame.
 */
const HIGHLIGHTS: Highlight[] = [
  {
    kind: "photo",
    src: "/media/photos/recent-dandiya-night.webp",
    alt: "Massive night crowd with raised hands and light beams at DJ Beard's dandiya night celebration",
    title: "Dandiya Night Celebrations",
    aspect: "aspect-[3/4]",
    sizes: "(max-width: 1024px) 50vw, 20vw",
  },
  {
    kind: "live-video",
    src: "/media/videos/recent-31st-night.mp4",
    poster: "/media/posters/recent-31st-night.webp",
    alt: "Crowd celebrating at DJ Beard's 31st December night party in Udaipur",
    title: "For Sunil Grover Sir",
    aspect: "aspect-[3/4]",
    sizes: "(max-width: 1024px) 50vw, 20vw",
  },
  {
    kind: "photo",
    src: "/media/photos/recent-vishal-jetwa.webp",
    alt: "DJ Beard with Vishal Jetwa of the Mardaani movie at an event",
    title: "With Kheta Khan Sir",
    aspect: "aspect-[3/4]",
    sizes: "(max-width: 1024px) 50vw, 20vw",
  },
  {
    kind: "manual-video",
    src: "/media/videos/recent-sukhwinder-mementos.mp4",
    poster: "/media/posters/recent-sukhwinder-mementos.webp",
    alt: "Live band performing on the Jai Ho stage at Mementos by ITC Hotels with DJ Beard",
    title: "Sukhwinder - at Mementos by ITC Hotels",
    aspect: "aspect-[3/4]",
    sizes: "(max-width: 1024px) 50vw, 20vw",
    titleOnTop: true,
  },
  {
    kind: "photo",
    src: "/media/photos/recent-live-sound-academy.webp",
    alt: "DJ Beard with Sunil sir of the Live Sound Academy",
    title: "With Mandeep Ramanax",
    aspect: "aspect-[3/4]",
    sizes: "(max-width: 1024px) 50vw, 20vw",
  },
  {
    kind: "photo",
    src: "/media/photos/recent-academy-sunil.webp",
    alt: "DJ Beard with Sunil sir at the Live Sound Academy",
    title: "Live Sound Academy with Sunil Sir",
    aspect: "aspect-[3/4]",
    sizes: "(max-width: 1024px) 50vw, 20vw",
  },
  {
    kind: "photo",
    src: "/media/photos/recent-guest-moments.webp",
    alt: "DJ Beard sharing a moment with a guest at an event",
    title: "With Vishal Jetwa",
    aspect: "aspect-[3/4]",
    sizes: "(max-width: 1024px) 50vw, 20vw",
  },
  {
    kind: "photo",
    src: "/media/photos/recent-city-palace-festival.webp",
    alt: "DJ Beard with guests at the Udaipur World Music Festival at City Palace",
    title: "Music Festival at City Palace",
    aspect: "aspect-[3/4]",
    sizes: "(max-width: 1024px) 50vw, 20vw",
  },
  {
    kind: "manual-video",
    src: "/media/videos/recent-kutle-khan.mp4",
    poster: "/media/posters/recent-kutle-khan.webp",
    alt: "Kutle Khan performing live with DJ Beard at Taj Aravali Resort",
    title: "Kutle Khan Live — Taj Aravali Resort",
    aspect: "aspect-[3/4]",
    sizes: "(max-width: 1024px) 50vw, 20vw",
    titleOnTop: true,
  },
  {
    kind: "photo",
    src: "/media/photos/recent-award-ovation.webp",
    alt: "DJ Beard receiving the Sound Innovation-1 honour from Udaipur Sound Welfare Sansthan alongside Mega Sound owner Siddhartha Chauhan at Everest Hill Resort, Kumbhalgarh",
    title:
      "Sound Innovation-1 — Udaipur Sound Welfare Sansthan · with Mega Sound owner Siddhartha Chauhan · Everest Hill Resort, Kumbhalgarh",
    aspect: "aspect-[3/4]",
    sizes: "(max-width: 1024px) 50vw, 20vw",
  },
];

function Scrim({ title, above }: { title: string; above?: boolean }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent p-5 pt-16",
        above ? "z-40" : "z-10"
      )}
    >
      <p className="text-[15px] font-medium tracking-[0.05em] text-white">{title}</p>
    </div>
  );
}

function ManualVideo({ item }: { item: Extract<Highlight, { kind: "manual-video" }> }) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);

  return (
    <button
      type="button"
      aria-label={`Play video: ${item.title}`}
      className="absolute inset-0 z-20 flex items-center justify-center"
      onClick={(e) => {
        e.preventDefault();
        const el = ref.current;
        if (!el) return;
        if (el.paused) {
          void el.play();
          setPlaying(true);
        } else {
          el.pause();
          setPlaying(false);
        }
      }}
    >
      <video
        ref={ref}
        src={item.src}
        poster={item.poster}
        preload="none"
        playsInline
        controls={playing}
        onPause={() => setPlaying(false)}
        className="h-full w-full object-cover"
      />
      {!playing && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 z-30 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/55 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white">
            <path d="M8 5.5v13l11-6.5z" />
          </svg>
        </span>
      )}
    </button>
  );
}

function HighlightCard({ item }: { item: Highlight }) {
  return (
    <div
      className={cn(
        "group relative h-full w-full overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0a0912] shadow-[0_18px_50px_rgba(0,0,0,0.45)] transition-all duration-500 hover:border-[var(--violet-brand)]/40 hover:shadow-[0_26px_70px_rgba(124,58,237,0.16)]",
        item.aspect
      )}
    >
      {item.kind === "photo" ? (
        <>
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes={item.sizes}
            className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.045]"
          />
          <Scrim title={item.title} />
        </>
      ) : item.kind === "live-video" ? (
        <>
          <SoundLoopVideo
            src={item.src}
            poster={item.poster}
            alt={item.title}
            className="h-full w-full object-cover"
            preload="metadata"
            noAudio={SILENT_VIDEOS.has(item.src)}
          />
          <Scrim title={item.title} />
        </>
      ) : (
        <>
          <ManualVideo item={item} />
          <Scrim title={item.title} above={item.titleOnTop} />
        </>
      )}
    </div>
  );
}

export function RecentHighlights() {
  return (
    <section
      className="bg-[#08070c] py-24 sm:py-32"
      aria-labelledby="recent-highlights-heading"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-eyebrow">Recent work</p>
          <h2
            id="recent-highlights-heading"
            className="mt-4 text-3xl font-light tracking-[0.04em] text-white sm:text-4xl"
          >
            Fresh from the decks
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-zinc-400">
            A snapshot of recent nights with DJ Beard — festival crowds, wedding
            celebrations, corporate galas and club rooms, every one of them mixed live.
          </p>
        </Reveal>
        <ul className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-5">
          {HIGHLIGHTS.map((item) => (
            <li key={item.src}>
              <Reveal variant="zoom" className="h-full">
                <HighlightCard item={item} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
