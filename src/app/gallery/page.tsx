import type { Metadata } from "next";
import { PageHeader, JsonLd } from "@/components/layout/page-header";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { CtaBand } from "@/components/sections/home-sections";
import { Reveal } from "@/components/reveal";
import { GALLERY_DRIVE_URL, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Selected photographs and performance videos of DJ Beard — live DJ performances, palace weddings, rooftop parties and festival crowds across Udaipur and Rajasthan.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "DJ Beard | Gallery",
    description:
      "Selected photographs and videos from DJ Beard's live performances across Udaipur and Rajasthan.",
    url: `${SITE.url}/gallery`,
  },
};

const crumbs = [{ name: "Home", href: "/" }, { name: "Gallery" }];

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

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <PageHeader
        eyebrow="Gallery"
        title="Frames from the floor"
        intro="A curated selection — rooftop sets above the lakes, palace weddings, festival crowds and club nights. Photographs and video, straight from real events."
        crumbs={crumbs}
        image="/media/photos/perf-magenta.webp"
      />

      <section className="pb-24 pt-4 sm:pb-28" aria-label="DJ performance gallery">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <GalleryGrid />
          <Reveal className="mt-14">
            <div className="card-surface rounded-2xl px-7 py-8 text-center sm:px-10">
              <p className="text-eyebrow">Your event, your album</p>
              <h2 className="mt-3 text-2xl font-light text-white">
                Guests&rsquo; photos &amp; videos live on Google Drive
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-[14px] leading-relaxed text-zinc-400">
                Every guest photo and video from DJ Beard&rsquo;s recent events — weddings, sangeets,
                club nights and festival stages — is collected in Drive albums. Open the gallery
                below, find your event and download your moments in full quality.
              </p>
              <a
                href={GALLERY_DRIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline mt-7"
              >
                Open the Drive gallery
                <span aria-hidden="true" className="ml-2">→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Want a night like this at your event?"
        text="Every frame on this page is from a real DJ Beard performance. Bring the same energy to your celebration — check your date today."
      />
    </>
  );
}
