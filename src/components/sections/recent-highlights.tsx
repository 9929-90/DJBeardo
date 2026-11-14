import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "./shared";
import { cn } from "@/lib/utils";

/**
 * Recent Highlights — fresh media straight from DJ Beard's own camera
 * (client-supplied WhatsApp moments, November 2026), placed directly after
 * the hero so visitors see the newest, most authentic proof of work first.
 *
 * Two videos autoplay muted (the client's headline clips); the rest of the
 * videos are click-to-play with posters so the page stays light.
 */

type Highlight =
  | {
      kind: "photo";
      src: string;
      alt: string;
      title: string;
      badge: string;
      span: string;
      aspect: string;
      sizes: string;
    }
  | {
      kind: "live-video";
      src: string;
      poster: string;
      alt: string;
      title: string;
      badge: string;
      span: string;
      aspect: string;
    }
  | {
      kind: "manual-video";
      src: string;
      poster: string;
      alt: string;
      title: string;
      badge: string;
      span: string;
      aspect: string;
    };

const HIGHLIGHTS: Highlight[] = [
  {
    kind: "photo",
    src: "/media/photos/recent-city-palace-festival.webp",
    alt: "Ocean of guests under stage lights at the music festival at City Palace with DJ Beard",
    title: "Music Festival at City Palace",
    badge: "Festival crowd",
    span: "sm:col-span-2 lg:col-span-4",
    aspect: "aspect-[3/2]",
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw",
  },
  {
    kind: "live-video",
    src: "/media/videos/recent-31st-night.mp4",
    poster: "/media/posters/recent-31st-night.webp",
    alt: "DJ Beard hyping the crowd on 31st December night — open-air New Year's Eve party",
    title: "31st December Night",
    badge: "New Year's Eve",
    span: "",
    aspect: "aspect-[3/4]",
  },
  {
    kind: "photo",
    src: "/media/photos/recent-vishal-jetwa.webp",
    alt: "DJ Beard with Vishal Jetwa during the traditional turban welcome at the event",
    title: "With Vishal Jetwa",
    badge: "Guest of honour",
    span: "",
    aspect: "aspect-[3/4]",
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  },
  {
    kind: "live-video",
    src: "/media/videos/recent-foreigner-guest.mp4",
    poster: "/media/posters/recent-foreigner-guest.webp",
    alt: "International guests dancing at DJ Beard's club night in Udaipur",
    title: "Foreign Guests Night",
    badge: "Club night",
    span: "",
    aspect: "aspect-[3/4]",
  },
  {
    kind: "photo",
    src: "/media/photos/recent-live-sound-academy.webp",
    alt: "DJ Beard with Sunil Sir at the Live Sound Academy session beside professional audio gear",
    title: "Live Sound Academy with Sunil Sir",
    badge: "Academy session",
    span: "",
    aspect: "aspect-[3/4]",
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  },
  {
    kind: "manual-video",
    src: "/media/videos/recent-openair-party.mp4",
    poster: "/media/posters/recent-openair-party.webp",
    alt: "Guests dancing under string lights at DJ Beard's open-air party night",
    title: "Open-Air Party Night",
    badge: "Live set",
    span: "",
    aspect: "aspect-[3/4]",
  },
  {
    kind: "manual-video",
    src: "/media/videos/recent-folk-performance.mp4",
    poster: "/media/posters/recent-folk-performance.webp",
    alt: "Folk performers on stage during a wedding night celebration with DJ Beard",
    title: "Live Folk Performance",
    badge: "Wedding night",
    span: "sm:col-span-2 lg:col-span-4",
    aspect: "aspect-[3/2]",
  },
  {
    kind: "photo",
    src: "/media/photos/recent-guest-moments.webp",
    alt: "DJ Beard sharing a moment with guests at the venue entrance",
    title: "Moments with Guests",
    badge: "Event memories",
    span: "",
    aspect: "aspect-[3/4]",
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  },
  {
    kind: "manual-video",
    src: "/media/videos/recent-grand-stage.mp4",
    poster: "/media/posters/recent-grand-stage.webp",
    alt: "Grand stage production with LED screens and a packed ballroom at a DJ Beard live show",
    title: "Grand Stage Production",
    badge: "Live show",
    span: "sm:col-span-2 lg:col-span-4",
    aspect: "aspect-[3/2]",
  },
  {
    kind: "photo",
    src: "/media/photos/recent-award-ovation.webp",
    alt: "DJ Beard receiving the Sound Innovation-1 memento and certificate at the OVATION-1 Annual Meet in Kumbhalgarh",
    title: "Sound Innovation-1 — OVATION-1 Annual Meet, Kumbhalgarh",
    badge: "Industry recognition",
    span: "sm:col-span-2 lg:col-span-6",
    aspect: "aspect-[3/2] lg:aspect-[16/9]",
    sizes: "100vw",
  },
];

function Badge({ children }: { children: string }) {
  return (
    <span className="pointer-events-none absolute left-4 top-4 z-10 inline-flex items-center rounded-full border border-[var(--violet-brand)]/50 bg-[#0b0812]/90 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--violet-soft)] shadow-[0_8px_22px_rgba(0,0,0,0.45)]">
      {children}
    </span>
  );
}

function Scrim({ title }: { title: string }) {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/90 via-black/35 to-transparent p-5 pt-16">
      <p className="text-[15px] font-medium tracking-[0.05em] text-white">{title}</p>
    </div>
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
      <Badge>{item.badge}</Badge>
      {item.kind === "photo" ? (
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes={item.sizes}
          className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.045]"
        />
      ) : item.kind === "live-video" ? (
        <video
          src={item.src}
          poster={item.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={item.alt}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
        />
      ) : (
        <video
          src={item.src}
          poster={item.poster}
          controls
          playsInline
          preload="none"
          aria-label={item.alt}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      <Scrim title={item.title} />
    </div>
  );
}

export function RecentHighlights() {
  return (
    <section id="recent" className="relative scroll-mt-24 py-24 sm:py-32" aria-labelledby="recent-heading">
      {/* soft violet glow behind the grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px]"
        style={{ background: "radial-gradient(58% 100% at 50% 0%, rgba(139,92,246,0.10), transparent 72%)" }}
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Fresh from the decks"
          title="Recent highlights"
          intro="Straight from DJ Beard's own camera — festival crowds at City Palace, honoured guests, folk nights, club floors and 31st December open-air energy. Real events. Real people. Real sound."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
          {HIGHLIGHTS.map((item, i) => (
            <Reveal
              key={item.title}
              variant="zoom"
              delay={(i % 3) * 90}
              className={cn("h-full", item.span || "lg:col-span-2")}
            >
              <HighlightCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
