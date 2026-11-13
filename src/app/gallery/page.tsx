import type { Metadata } from "next";
import { PageHeader, JsonLd } from "@/components/layout/page-header";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { CtaBand } from "@/components/sections/home-sections";
import { SITE } from "@/lib/site";

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
        </div>
      </section>

      <CtaBand
        title="Want a night like this at your event?"
        text="Every frame on this page is from a real DJ Beard performance. Bring the same energy to your celebration — check your date today."
      />
    </>
  );
}
