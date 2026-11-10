import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader, JsonLd } from "@/components/layout/page-header";
import { Reveal } from "@/components/reveal";
import { SectionHeading, PhotoTile } from "@/components/sections/shared";
import { CtaBand, FaqSection } from "@/components/sections/home-sections";
import { SITE } from "@/lib/site";
import { GENRES } from "@/lib/data";

export const metadata: Metadata = {
  title: "About DJ Beard — Professional DJ Artist in Udaipur",
  description:
    "Meet DJ Beard — a professional DJ artist in Udaipur with 17+ years of experience. Discover his journey, musical style and the performances that made him a trusted name across Rajasthan.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About DJ Beard — Professional DJ Artist in Udaipur",
    description:
      "17+ years of performances across Udaipur and Rajasthan — the story, style and experience of DJ Beard.",
    url: `${SITE.url}/about`,
    images: [{ url: "/media/photos/beard-mic-portrait.webp", width: 1709, height: 2000, alt: "DJ Beard portrait with wireless microphone" }],
  },
};

const crumbs = [
  { name: "Home", href: "/" },
  { name: "About" },
];

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE.url}/#person`,
  name: "DJ Beard",
  jobTitle: "Professional DJ",
  description:
    "Professional DJ in Udaipur with 17+ years of experience performing at weddings, sangeets, corporate events, club nights and private parties across Rajasthan.",
  url: `${SITE.url}/about`,
  image: `${SITE.url}/media/photos/beard-mic-portrait.webp`,
  worksFor: { "@id": `${SITE.url}/#business` },
  homeLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Udaipur",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
  },
  knowsAbout: GENRES.map((g) => g.name),
  sameAs: [SITE.social.instagram, SITE.social.facebook],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: crumbs.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.name,
    ...(c.href ? { item: `${SITE.url}${c.href}` } : {}),
  })),
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={personJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <PageHeader
        eyebrow="About"
        title="The story behind the decks"
        intro="Seventeen years, hundreds of celebrations, one philosophy — the music follows the crowd, never the other way around."
        crumbs={crumbs}
        image="/media/photos/beard-mic-portrait.webp"
      />

      {/* Story */}
      <section className="py-20 sm:py-24" aria-labelledby="story">
        <div className="mx-auto grid max-w-7xl items-start gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="text-eyebrow">DJ Beard&rsquo;s story</p>
              <h2 id="story" className="mt-4 text-3xl font-light leading-snug text-white sm:text-4xl">
                From Udaipur&rsquo;s smallest gatherings to its grandest stages
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-7 space-y-5 text-[15px] leading-relaxed text-zinc-400">
                <p>
                  Every city has a sound. In Udaipur — the city of lakes, palaces and weddings that
                  last for days — that sound is made by the DJs who score its celebrations. DJ Beard
                  has been part of that soundscape for over seventeen years, long enough to have
                  played for couples who were once kids on their parents&rsquo; dance floor.
                </p>
                <p>
                  His journey began in 2008 at small local gatherings around Udaipur — birthday
                  parties, society functions, school festivals. What set him apart early was not
                  volume but attention: watching which song made an aunt dance, which drop woke a
                  tired room, when to slow the night down and when to push it over the edge. That
                  habit of reading people became a craft, and the craft became a career.
                </p>
                <p>
                  Today DJ Beard performs across Rajasthan — palace weddings in Udaipur, destination
                  celebrations in Kumbhalgarh and Nathdwara, club nights, corporate annual days and
                  city festivals. Specialising in Bollywood remixes, EDM and house music, he blends
                  genres the way Udaipur blends tradition with celebration: seamlessly, and always in
                  service of the moment.
                </p>
                <p>
                  Based in North Ayad and available throughout Rajasthan, he remains what he was at
                  the first small party: a professional who treats your celebration like the only one
                  on the calendar.
                </p>
              </div>
            </Reveal>

            <Reveal delay={180} className="mt-10">
              <div className="grid grid-cols-3 gap-6 border-t border-white/[0.07] pt-8">
                {[
                  ["17+", "Years live"],
                  ["500+", "Events played"],
                  ["8", "Genres"],
                ].map(([v, l]) => (
                  <div key={l}>
                    <p className="text-3xl font-light text-white">{v}</p>
                    <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">{l}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal variant="right" className="space-y-5">
            <PhotoTile
              src="/media/photos/beard-daytime-console.webp"
              alt="DJ Beard at a daytime festival console set up in an open field venue"
              caption="On the decks, wherever the celebration is"
              ratio="aspect-[4/3]"
              sizes="(max-width: 1024px) 92vw, 44vw"
            />
            <div className="grid grid-cols-2 gap-5">
              <PhotoTile
                src="/media/photos/beard-magenta-portrait.webp"
                alt="DJ Beard performing under vivid magenta stage light"
                ratio="aspect-[3/4]"
                sizes="(max-width: 1024px) 46vw, 22vw"
                position="center 22%"
              />
              <PhotoTile
                src="/media/photos/beard-cap-portrait.webp"
                alt="DJ Beard in a black jacket and cap holding a wireless microphone"
                ratio="aspect-[3/4]"
                sizes="(max-width: 1024px) 46vw, 22vw"
                position="center 20%"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Performance style */}
      <section className="border-y border-white/[0.05] bg-[#07070a] py-20 sm:py-24" aria-labelledby="style">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Performance style"
            title="Open-format craft, wedding-tested instincts"
            intro="A set by DJ Beard moves the way a celebration moves — planned where it must be, spontaneous where it should be."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Reading the room",
                text: "Age mix, mood, occasion — the first hour is spent listening to the crowd before deciding what it wants next. Every transition is a response, not a pre-planned script.",
              },
              {
                title: "Seamless genre blending",
                text: "Bollywood into Punjabi into house into a well-timed retro chorus — transitions are beat-matched and harmonic, so the floor never empties between styles.",
              },
              {
                title: "Moments, not just music",
                text: "Entrances, rituals, performances, cake cuttings — each gets its own cue, its own swell, its own silence. The music carries the ceremony instead of competing with it.",
              },
            ].map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <div className="card-surface h-full rounded-2xl p-7">
                  <span className="text-[13px] font-light tracking-[0.25em] text-[var(--violet-soft)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-xl font-light text-white">{s.title}</h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-zinc-400">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Genres + venues */}
      <section className="py-20 sm:py-24" aria-labelledby="repertoire">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading align="left" eyebrow="Musical journey" title="A repertoire built across seventeen years" />
            <Reveal delay={100}>
              <ul className="mt-8 space-y-4">
                {GENRES.map((g) => (
                  <li key={g.name} className="flex items-baseline gap-4 border-b border-white/[0.05] pb-4">
                    <span className="text-[13px] font-light tracking-[0.2em] text-[var(--violet-soft)]">
                      {g.name.split(" ")[0]}
                    </span>
                    <p className="text-[14.5px] leading-relaxed text-zinc-400">{g.blurb}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Familiar stages"
              title="Venues across Udaipur & Rajasthan"
              intro="A few of the properties and stages where DJ Beard has performed."
            />
            <Reveal delay={100}>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {[
                  "The Oberoi Udaivilas",
                  "ITC Mementos, Ekaaya",
                  "Udai Kothi",
                  "Ramada Udaipur Resort",
                  "Ramada Encore",
                  "Labhgarh Resort",
                  "Bhairavgarh Palace",
                  "Kumbhalgarh",
                  "Traavista Aravali Mahal",
                  "Shouryagarh Resort",
                  "Justa Sajjangarh",
                  "Fateh Sagar",
                  "City Palace Festival",
                  "Sinclairs Haldighati",
                  "Ramya Resort",
                  "Heritage Resort",
                ].map((v) => (
                  <span
                    key={v}
                    className="card-surface rounded-full px-4 py-2 text-[13px] text-zinc-300"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={180} className="mt-10">
              <PhotoTile
                src="/media/photos/fireworks-waterfront.webp"
                alt="Fireworks bursting over a waterfront city at a grand night celebration"
                caption="Landmark venues, landmark nights"
                ratio="aspect-[16/10]"
                position="center 55%"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Achievements (verified only) */}
      <section className="border-y border-white/[0.05] bg-[#07070a] py-20 sm:py-24" aria-labelledby="achievements">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Experience & credentials"
            title="What seventeen years adds up to"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["500+", "events performed across Rajasthan"],
              ["17+", "years of continuous live performance"],
              ["8", "genres mixed in one night, fluently"],
              ["1000s", "of floors filled — weddings to club nights"],
            ].map(([v, l], i) => (
              <Reveal key={l} delay={i * 80}>
                <div className="card-surface rounded-2xl p-7 text-center">
                  <p className="text-4xl font-light text-white">{v}</p>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-zinc-400">{l}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mx-auto mt-12 max-w-2xl text-center">
            <p className="text-[14px] leading-relaxed text-zinc-500">
              Booking enquiries are answered personally. Call{" "}
              <a href={`tel:${SITE.phoneRaw}`} className="text-zinc-300 underline-offset-4 hover:underline">
                {SITE.phoneDisplay}
              </a>{" "}
              or{" "}
              <Link href="/contact" className="text-[var(--violet-soft)] underline-offset-4 hover:underline">
                send a booking request
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <FaqSection limit={4} />
      <CtaBand />
    </>
  );
}
