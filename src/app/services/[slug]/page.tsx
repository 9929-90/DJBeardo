import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHeader, JsonLd } from "@/components/layout/page-header";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/sections/home-sections";
import { PhotoTile } from "@/components/sections/shared";
import { SERVICES } from "@/lib/data";
import { SITE, waLink } from "@/lib/site";
import { CheckIcon } from "@/components/icons";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${SITE.url}/services/${service.slug}`,
      images: [{ url: service.image, width: 1200, height: 800, alt: service.imageAlt }],
    },
  };
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = SERVICES.filter((s) => s.slug !== slug);
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: service.name },
  ];

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.name} — ${SITE.legalName}`,
    serviceType: service.focus,
    provider: { "@id": `${SITE.url}/#business` },
    areaServed: [
      { "@type": "City", name: "Udaipur" },
      { "@type": "State", name: "Rajasthan" },
    ],
    description: service.metaDescription,
    url: `${SITE.url}/services/${service.slug}`,
    image: `${SITE.url}${service.image}`,
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

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <PageHeader
        eyebrow={service.focus}
        title={service.name}
        intro={service.short}
        crumbs={crumbs}
        image={service.image}
      />

      <section className="py-20 sm:py-24" aria-label={`${service.name} details`}>
        <div className="mx-auto grid max-w-7xl items-start gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <Reveal>
              <div className="space-y-6 text-[15px] leading-relaxed text-zinc-400">
                {service.description.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={120} className="mt-10">
              <h2 className="text-xl font-light text-white">What&rsquo;s included</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-[14px] text-zinc-300">
                    <CheckIcon className="mt-1 h-3.5 w-3.5 shrink-0 text-[var(--violet-soft)]" />
                    {h}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={180} className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Enquire &amp; Book
              </Link>
              <a href={waLink(`Hello DJ Beard! I'm interested in your ${service.name} service for an event in Udaipur.`)} target="_blank" rel="noopener noreferrer" className="btn-outline">
                WhatsApp Enquiry
              </a>
            </Reveal>
          </div>

          <div className="space-y-5">
            <Reveal variant="right">
              <PhotoTile
                src={service.image}
                alt={service.imageAlt}
                ratio="aspect-[4/3]"
                sizes="(max-width: 1024px) 92vw, 42vw"
                priority
              />
            </Reveal>
            <Reveal variant="right" delay={100}>
              <div className="card-surface rounded-2xl p-7">
                <h3 className="text-eyebrow !text-zinc-500">Good to know</h3>
                <ul className="mt-4 space-y-3 text-[14px] leading-relaxed text-zinc-400">
                  <li>• Performances across Udaipur city and all of Rajasthan — travel planned into the quotation.</li>
                  <li>• Sound &amp; lighting scaled to your venue, from compact rigs to full production.</li>
                  <li>• Setups completed and sound-checked well before the first guest arrives.</li>
                  <li>• Must-play / do-not-play lists and event cues planned in advance.</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Internal linking — other services */}
      <section className="border-t border-white/[0.05] bg-[#07070a] py-20" aria-label="Other DJ services">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="text-eyebrow">Explore more</p>
            <h2 className="mt-3 text-2xl font-light text-white sm:text-3xl">Other DJ services in Udaipur</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {others.map((o, i) => (
              <Reveal key={o.slug} delay={i * 90}>
                <Link
                  href={`/services/${o.slug}`}
                  className="card-surface group block h-full rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1"
                >
                  <h3 className="text-lg font-light text-white">{o.name}</h3>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-zinc-400">{o.short}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.18em] text-zinc-500 transition-colors group-hover:text-[var(--violet-soft)]">
                    View service <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
