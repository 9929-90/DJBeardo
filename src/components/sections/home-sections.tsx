import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";
import { SectionHeading, PhotoTile, MoreLink } from "./shared";
import { GENRES, SERVICES, TESTIMONIALS, FAQS } from "@/lib/data";
import { SITE, waLink } from "@/lib/site";
import { ArrowRight, CheckIcon } from "@/components/icons";

/* ============ MEET DJ BEARD ============ */
export function MeetBeard() {
  return (
    <section id="meet" className="relative scroll-mt-24 py-24 sm:py-32" aria-labelledby="meet-beard">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal variant="left" className="relative">
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.07]">
            <Image
              src="/media/photos/portrait-decks-closeup.webp"
              alt="Close-up of DJ Beard mixing on a Pioneer CDJ during a live night performance — professional DJ in Udaipur"
              width={1280}
              height={1280}
              className="h-auto w-full object-cover"
              sizes="(max-width: 1024px) 92vw, 44vw"
            />
            <div
              className="pointer-events-none absolute inset-0"
              aria-hidden="true"
              style={{ background: "linear-gradient(200deg, rgba(139,92,246,0.08), transparent 45%)" }}
            />
          </div>
          <div
            className="pointer-events-none absolute -bottom-6 -right-4 -z-10 h-56 w-56 rounded-full sm:-right-8"
            aria-hidden="true"
            style={{ background: "radial-gradient(circle, rgba(139,92,246,0.22), transparent 70%)" }}
          />
        </Reveal>

        <div>
          <SectionHeading
            align="left"
            eyebrow="Meet DJ Beard"
            title="Seventeen years of keeping Udaipur on the dance floor"
          />
          <Reveal delay={120}>
            <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-zinc-400">
              <p>
                With <strong className="font-medium text-zinc-200">17 years of experience</strong>, DJ
                Beard is a well-known name in Udaipur&rsquo;s music scene. He has performed at a wide
                range of events — from intimate family gatherings to grand palace weddings — always
                shaping the music to fit the occasion.
              </p>
              <p>
                Specialising in{" "}
                <strong className="font-medium text-zinc-200">
                  Bollywood remixes, EDM and house music
                </strong>
                , his sets weave different styles into one smooth, engaging flow. A friendly approach
                and consistent professionalism have made him a familiar presence at celebrations across
                Rajasthan.
              </p>
              <p>
                Based in North Ayad, DJ Beard is available for{" "}
                <strong className="font-medium text-zinc-200">
                  weddings, corporate events, club nights and private parties
                </strong>{" "}
                throughout Rajasthan — bringing the same energy to every room, whatever its size.
              </p>
            </div>
          </Reveal>
          {/* Momento — industry recognition highlight */}
          <Reveal delay={160} className="mt-8">
            <Link
              href="/about#recognition"
              className="card-surface group flex items-center gap-4 rounded-2xl p-4 transition-colors duration-300 hover:border-[var(--violet-brand)]/40"
            >
              <span className="relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border border-white/[0.08]">
                <Image
                  src="/media/photos/moment-award-ovation-kumbhalgarh.webp"
                  alt="DJ Beard receiving the Sound Innovation-1 memento at the OVATION-1 Annual Meet in Kumbhalgarh"
                  fill
                  sizes="120px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--violet-soft)]">
                  Industry recognition
                </span>
                <span className="mt-1 block text-[14px] leading-snug text-zinc-300">
                  Honoured with the Sound Innovation-1 memento — OVATION-1 Annual Meet, Kumbhalgarh
                </span>
              </span>
              <ArrowRight className="h-4 w-4 shrink-0 text-zinc-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--violet-soft)]" />
            </Link>
          </Reveal>
          <Reveal delay={200} className="mt-9">
            <MoreLink href="/about" label="Discover the full story" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============ GENRES — premium card grid ============ */
export function GenresStrip() {
  return (
    <section className="border-y border-white/[0.05] bg-[#08080b] py-24 sm:py-32" aria-labelledby="genres-heading">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-eyebrow">Musical styles</p>
          <h2 id="genres-heading" className="mt-4 text-3xl font-light tracking-[0.04em] text-white sm:text-4xl">
            Every genre the night demands
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-zinc-400">
            Bollywood remixes to techno, Punjabi anthems to English retro — blended live for
            weddings, clubs and festival stages, never played from a fixed playlist.
          </p>
        </Reveal>
        <ul className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
          {GENRES.map((g, i) => (
            <li
              key={g.name}
              className={g.wide ? "col-span-2 sm:col-span-3 lg:col-span-4" : undefined}
            >
              <Reveal variant="zoom" delay={(i % 4) * 80} className="h-full">
                <article className="group relative h-full overflow-hidden rounded-xl border border-white/[0.07] bg-[#0a0a0e] transition-all duration-500 hover:-translate-y-1 hover:border-[var(--violet-brand)]/35">
                  <div className={cn("relative overflow-hidden", g.wide ? "aspect-[4/3] sm:aspect-[3/2]" : "aspect-[4/3]")}>
                    <Image
                      src={g.image}
                      alt={g.imageAlt}
                      fill
                      sizes={g.wide ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw" : "(max-width: 640px) 46vw, (max-width: 1024px) 31vw, 24vw"}
                      loading="lazy"
                      style={g.wide ? { objectPosition: "50% 22%" } : undefined}
                      className="object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.06]"
                    />
                    <div
                      className="pointer-events-none absolute inset-0"
                      aria-hidden="true"
                      style={{ background: "linear-gradient(180deg, rgba(5,5,6,0.12), transparent 40%, rgba(5,5,6,0.55))" }}
                    />
                    <span
                      className="absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-black/45 text-[11px] font-medium text-zinc-200 backdrop-blur-sm"
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="p-4 sm:p-5">
                    <h3 className={cn("font-normal leading-snug text-white transition-colors group-hover:text-[var(--violet-soft)]", g.wide ? "text-lg sm:text-xl" : "text-[15px] sm:text-base")}>
                      {g.name}
                    </h3>
                    <p className={cn("mt-1.5 hidden leading-snug text-zinc-500 sm:block", g.wide ? "text-[13.5px]" : "text-[12.5px]")}>{g.blurb}</p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ============ EXPERIENCE (scroll storytelling) ============ */
const MILESTONES = [
  {
    year: "2008",
    title: "The first set",
    text: "DJ Beard begins performing at local gatherings and private functions across Udaipur, learning the craft room by room — what makes a family dance, what makes a crowd stay.",
  },
  {
    year: "2013",
    title: "The wedding circuit",
    text: "Sangeets, baraats and receptions across Udaipur and Rajasthan become a second home. Word spreads: the DJ who reads the family, not just the playlist.",
  },
  {
    year: "2018",
    title: "Clubs & festivals",
    text: "Residency nights, techno rooms and open-air festival stages sharpen a sharper, faster mixing style — Bollywood fusion sets beside pure EDM floors.",
  },
  {
    year: "Today",
    title: "500+ events on",
    text: "From The Oberoi Udaivilas to New Year city stages, DJ Beard remains the professional Udaipur calls when the night has to be right — every genre, every crowd, every time.",
  },
];

export function Experience() {
  return (
    <section className="relative py-24 sm:py-32" aria-labelledby="experience-heading">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The journey"
          title="Experience, earned one floor at a time"
          intro="Seventeen years of live performances across Udaipur and Rajasthan — from first local sets to the city's grandest celebrations."
        />
        <ol className="relative mx-auto mt-16 max-w-3xl">
          <span
            className="absolute left-[22px] top-2 h-[calc(100%-16px)] w-px bg-gradient-to-b from-[var(--violet-brand)]/50 via-white/10 to-transparent sm:left-1/2"
            aria-hidden="true"
          />
          {MILESTONES.map((m, i) => (
            <li key={m.year} className="relative mb-12 last:mb-0">
              <Reveal variant={i % 2 ? "right" : "left"}>
                <div
                  className={`relative rounded-2xl border border-white/[0.07] bg-[#0a0a0e]/90 p-7 sm:w-[calc(50%-2.5rem)] ${
                    i % 2 ? "sm:ml-auto" : ""
                  }`}
                >
                  <p className="text-eyebrow">{m.year}</p>
                  <h3 className="mt-2 text-xl font-light text-white">{m.title}</h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-zinc-400">{m.text}</p>
                </div>
              </Reveal>
              <span
                className="absolute left-[15px] top-8 h-4 w-4 rounded-full border-2 border-[var(--violet-brand)] bg-[#050506] sm:left-1/2 sm:-translate-x-1/2"
                aria-hidden="true"
              />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ============ PERFORMANCE HIGHLIGHTS ============ */
export function PerformanceHighlights() {
  return (
    <section className="border-y border-white/[0.05] bg-[#07070a] py-24 sm:py-32" aria-labelledby="highlights-heading">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Performance highlights"
          title="Rooms that remember"
          intro="Lakeside rooftops, palace courtyards, festival stages — a few frames from seventeen years of live performance in Udaipur."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal variant="zoom" className="sm:col-span-2">
            <PhotoTile
              src="/media/photos/perf-crowd-green.webp"
              alt="Massive outdoor crowd at a DJ Beard performance — professional DJ in Udaipur"
              caption="City celebration — open air, full volume"
              ratio="aspect-[16/9]"
              sizes="(max-width: 640px) 92vw, 60vw"
            />
          </Reveal>
          <Reveal variant="zoom" delay={120}>
            <PhotoTile
              src="/media/photos/perf-rooftop-lake.webp"
              alt="DJ Beard rooftop performance overlooking Lake Pichola at dusk in Udaipur"
              caption="Rooftop dusk above Lake Pichola"
              ratio="aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto lg:h-full"
              sizes="(max-width: 640px) 92vw, 32vw"
              className="lg:h-full"
            />
          </Reveal>
          <Reveal variant="zoom">
            <PhotoTile
              src="/media/photos/venue-palace-interior.webp"
              alt="DJ Beard performing at a royal palace wedding venue in Udaipur"
              caption="Palace wedding interiors"
              ratio="aspect-[4/3]"
            />
          </Reveal>
          <Reveal variant="zoom" delay={100}>
            <PhotoTile
              src="/media/photos/perf-stage-silhouette.webp"
              alt="DJ Beard silhouetted against stage lights during a live club set in Udaipur"
              caption="Silhouettes and lasers"
              ratio="aspect-[4/3]"
            />
          </Reveal>
          <Reveal variant="zoom" delay={160}>
            <PhotoTile
              src="/media/photos/venue-lake-laser.webp"
              alt="Laser beams over Lake Pichola during a DJ Beard night event in Udaipur"
              caption="Lasers across the lake"
              ratio="aspect-[4/3]"
            />
          </Reveal>
        </div>
        <Reveal className="mt-12 text-center">
          <MoreLink href="/gallery" label="View the full gallery" />
        </Reveal>
      </div>
    </section>
  );
}

/* ============ SERVICES OVERVIEW ============ */
export function ServicesOverview() {
  return (
    <section className="py-24 sm:py-32" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Services"
          title="One professional, every celebration"
          intro="Weddings, private parties, corporate events, club nights and festive celebrations — each shaped around your guests and your venue."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 90}>
              <Link
                href={`/services/${s.slug}`}
                className="card-surface group flex h-full flex-col rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1.5"
              >
                <span className="text-[13px] font-light tracking-[0.25em] text-[var(--violet-soft)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-xl font-light leading-snug text-white">{s.name}</h3>
                <p className="mt-3 flex-1 text-[14px] leading-relaxed text-zinc-400">{s.short}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.2em] text-zinc-500 transition-colors group-hover:text-[var(--violet-soft)]">
                  Details
                  <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <Link
            href="/equipment"
            className="group inline-flex min-h-[44px] items-center gap-2 text-[13px] font-medium uppercase tracking-[0.2em] text-[var(--violet-soft)] transition-colors hover:text-white"
          >
            Professional DJ Equipment &amp; Setup — Pioneer CDJ expertise
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ VIDEO SHOWCASE ============ */
export function VideoShowcase() {
  return (
    <section className="border-y border-white/[0.05] bg-[#07070a] py-24 sm:py-32" aria-labelledby="video-heading">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Live on stage"
          title="Feel the floor"
          intro="A moment from an open-air Udaipur celebration — the kind of night guests talk about for years."
        />
        <Reveal variant="zoom" className="mx-auto mt-14 max-w-4xl">
          <VideoPlayer
            src="/media/videos/showcase-crowd.mp4"
            poster="/media/posters/showcase-crowd.webp"
            alt="Ocean of guests with phone lights at a DJ Beard open-air performance in Udaipur"
          />
        </Reveal>
        <Reveal className="mt-10 text-center">
          <MoreLink href="/gallery" label="More performances" />
        </Reveal>
      </div>
    </section>
  );
}

/** Autoplaying muted loop with poster — loads the video only when in view. */
export function VideoPlayer({ src, poster, alt }: { src: string; poster: string; alt: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
      <video
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={alt}
        className="aspect-video h-auto w-full object-cover"
        data-lazy-video
      />
    </div>
  );
}

/* ============ WHY CHOOSE ============ */
const WHY = [
  { title: "17+ years of live experience", text: "Half a lifetime behind the decks — from family functions to festival stages across Rajasthan." },
  { title: "Every genre, blended live", text: "Bollywood, Punjabi, EDM, house, retro, hip-hop, R&B and techno — mixed to the room, never from a fixed playlist." },
  { title: "Production matched to the venue", text: "Every set is backed by professional audio production scaled to the room — from intimate spaces to palace venues — tuned before guests arrive." },
  { title: "Crowd-first programming", text: "Your family, your friends, your colleagues — the set is shaped around who is actually on the floor, hour by hour." },
];

export function WhyChoose() {
  return (
    <section className="py-24 sm:py-32" aria-labelledby="why-heading">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Why choose DJ Beard"
              title="The professional choice for your celebration"
              intro="Anyone can play songs. DJ Beard is booked for judgement — knowing exactly what this room, this crowd and this moment need."
            />
            <Reveal delay={150} className="mt-10">
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Check Your Date
              </a>
            </Reveal>
          </div>
          <ul className="grid gap-5 sm:grid-cols-2">
            {WHY.map((w, i) => (
              <Reveal as="li" key={w.title} delay={i * 90}>
                <div className="card-surface h-full rounded-2xl p-6">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--violet-brand)]/15">
                    <CheckIcon className="h-4 w-4 text-[var(--violet-soft)]" />
                  </span>
                  <h3 className="mt-4 text-[17px] font-normal leading-snug text-white">{w.title}</h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-zinc-400">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ============ TESTIMONIALS ============ */
export function Testimonials() {
  return (
    <section className="border-y border-white/[0.05] bg-[#07070a] py-24 sm:py-32" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What clients say"
          title="Trusted across Udaipur"
          intro="Words from event partners, anchors and families who have celebrated with DJ Beard."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 90}>
              <figure className="card-surface flex h-full flex-col rounded-2xl p-7">
                <div className="flex items-center gap-1 text-[13px] tracking-[0.2em] text-[var(--violet-soft)]" aria-label="Rated 5 out of 5">
                  ★★★★★
                </div>
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-zinc-300">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-white/[0.06] pt-4">
                  <p className="text-[14px] font-medium text-white">{t.name}</p>
                  <p className="text-[12.5px] text-zinc-500">{t.meta}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ FAQ ============ */
export function FaqSection({ limit }: { limit?: number }) {
  const faqs = limit ? FAQS.slice(0, limit) : FAQS;
  return (
    <section className="py-24 sm:py-32" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Booking questions, answered"
          intro="Everything hosts usually ask before booking a professional DJ in Udaipur."
        />
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 60}>
              <details className="card-surface group rounded-xl px-6 py-5 transition-colors">
                <summary className="flex min-h-[28px] cursor-pointer list-none items-center justify-between gap-4 text-[15.5px] font-normal text-zinc-100 marker:hidden [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span
                    aria-hidden="true"
                    className="text-xl font-light text-[var(--violet-soft)] transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 text-[14.5px] leading-relaxed text-zinc-400">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ CTA BAND ============ */
export function CtaBand({
  title = "Let's make your celebration unforgettable",
  text = "Message on WhatsApp with your date, venue and occasion — get availability, an honest recommendation and a clear quotation within hours.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28" aria-label="Book DJ Beard">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 110%, rgba(139,92,246,0.16), transparent 65%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="text-eyebrow">Book DJ Beard</p>
          <h2 className="mt-4 text-3xl font-light leading-snug tracking-[0.03em] text-white sm:text-[2.6rem] sm:leading-[1.2]">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-zinc-400">{text}</p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              WhatsApp Enquiry
            </a>
            <a href={`tel:${SITE.phoneRaw}`} className="btn-outline">
              Call {SITE.phoneDisplay}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
