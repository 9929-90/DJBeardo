import type { Metadata } from "next";
import { PageHeader, JsonLd } from "@/components/layout/page-header";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/sections/home-sections";
import { EquipmentExpertise } from "@/components/sections/equipment";
import { SERVICES } from "@/lib/data";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Professional DJ Equipment & Setup",
  description:
    "Professional Pioneer DJ setup in Udaipur — DJ Beard is experienced in operating the Pioneer CDJ-3000 with DJM-A9 and the CDJ-2000NXS2 with DJM-900NXS2, the industry-standard configurations for clubs, weddings and events.",
  alternates: { canonical: "/equipment" },
  openGraph: {
    title: "DJ Beard | Professional DJ Equipment & Setup",
    description:
      "Pioneer CDJ-3000 + DJM-A9 and CDJ-2000NXS2 + DJM-900NXS2 — DJ Beard's professional DJ equipment expertise for events in Udaipur and Rajasthan.",
    url: `${SITE.url}/equipment`,
    images: [{ url: "/media/equipment/pioneer-cdj-3000.webp", width: 1000, height: 800, alt: "Pioneer CDJ-3000 professional DJ multi player" }],
  },
};

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "DJ Equipment & Setup" },
];

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

export default function EquipmentPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <PageHeader
        eyebrow="Pioneer DJ expertise"
        title="Professional DJ Equipment & Setup"
        intro="A DJ is only as good as the command of the booth. DJ Beard is experienced in operating the professional Pioneer DJ systems that power clubs, weddings and large-format events — the same setups requested by venues and event partners across Udaipur and Rajasthan."
        crumbs={crumbs}
        image="/media/equipment/pioneer-cdj-3000.webp"
      />

      <section className="py-20 sm:py-24" aria-label="Equipment expertise overview">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal>
            <div className="space-y-6 text-[15px] leading-relaxed text-zinc-400">
              <p>
                From wedding receptions in palace venues to club nights and festival stages, most
                professional events in India run on <strong className="font-medium text-zinc-200">Pioneer DJ</strong>{" "}
                equipment. DJ Beard&rsquo;s workflow is built around it: rekordbox-prepared libraries,
                seamless HOT CUE and loop workflows, beat-synced transitions and precise EQ mixing —
                so the booth time is spent on the crowd, not on fighting the gear.
              </p>
              <p>
                Whether your venue or vendor supplies a{" "}
                <strong className="font-medium text-zinc-200">Pioneer CDJ-3000 with a DJM-A9 mixer</strong> or the
                classic <strong className="font-medium text-zinc-200">CDJ-2000NXS2 with a DJM-900NXS2</strong>, the
                setup is familiar territory. DJ Beard also advises event teams on correct rig
                configuration — cabling, monitor positioning and level structure — so the system
                sounds the way it should before the first guest arrives.
              </p>
              <p>
                Planning an event and want the booth handled end-to-end? DJ Beard brings the same
                technical discipline to every performance — sound tuned to the room, clean cabling
                and a setup checked and ready before the first guest arrives.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <EquipmentExpertise />

      {/* Internal linking — related services */}
      <section className="py-20" aria-label="Related services">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="text-eyebrow">Book the decks</p>
            <h2 className="mt-3 text-2xl font-light text-white sm:text-3xl">
              The performance behind the decks, for every occasion
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              SERVICES.find((s) => s.slug === "wedding-dj"),
              SERVICES.find((s) => s.slug === "club-events-dj"),
              SERVICES.find((s) => s.slug === "festive-dj"),
            ].map((s, i) =>
              s ? (
                <Reveal key={s.slug} delay={i * 90}>
                  <a
                    href={`/services/${s.slug}/`}
                    className="card-surface group block h-full rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1"
                  >
                    <h3 className="text-lg font-light text-white">{s.name}</h3>
                    <p className="mt-3 text-[13.5px] leading-relaxed text-zinc-400">{s.short}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.18em] text-zinc-500 transition-colors group-hover:text-[var(--violet-soft)]">
                      View service <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </a>
                </Reveal>
              ) : null
            )}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
