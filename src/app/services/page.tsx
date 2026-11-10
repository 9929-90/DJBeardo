import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHeader, JsonLd } from "@/components/layout/page-header";
import { Reveal } from "@/components/reveal";
import { CtaBand, FaqSection } from "@/components/sections/home-sections";
import { SERVICES, FAQS } from "@/lib/data";
import { SITE } from "@/lib/site";
import { CheckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "DJ Services in Udaipur — Weddings, Parties, Corporate & Club Nights",
  description:
    "Professional DJ services in Udaipur: wedding & sangeet DJ, party DJ, corporate event DJ and club nights across Rajasthan. Sound & lighting available. Book DJ Beard — 17+ years of experience.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "DJ Services in Udaipur — DJ Beard",
    description:
      "Wedding DJ, party DJ, corporate event DJ and club nights across Udaipur and Rajasthan — with professional sound and lighting.",
    url: `${SITE.url}/services`,
  },
};

const crumbs = [{ name: "Home", href: "/" }, { name: "Services" }];

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

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: SERVICES.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: s.name,
    url: `${SITE.url}/services/${s.slug}`,
  })),
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={itemListJsonLd} />
      <PageHeader
        eyebrow="Services"
        title="DJ services in Udaipur, built around your celebration"
        intro="Four core services, one professional standard — every event gets music programming, professional equipment and crowd-first energy."
        crumbs={crumbs}
        image="/media/photos/console-red-booth.webp"
      />

      <section className="py-20 sm:py-24" aria-label="DJ services list">
        <div className="mx-auto max-w-7xl space-y-20 px-5 sm:px-8">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug}>
              <article
                id={s.slug}
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${i % 2 ? "" : ""}`}
              >
                <div className={`relative ${i % 2 ? "lg:order-2" : ""}`}>
                  <div className="relative overflow-hidden rounded-2xl border border-white/[0.07]">
                    <Image
                      src={s.image}
                      alt={s.imageAlt}
                      width={1200}
                      height={800}
                      className="aspect-[3/2] h-auto w-full object-cover transition-transform duration-[1200ms] hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 92vw, 46vw"
                      loading={i === 0 ? "eager" : "lazy"}
                    />
                  </div>
                  <span
                    className="pointer-events-none absolute -bottom-8 -z-10 h-48 w-48 rounded-full"
                    aria-hidden="true"
                    style={{ background: "radial-gradient(circle, rgba(139,92,246,0.2), transparent 70%)" }}
                  />
                </div>
                <div>
                  <p className="text-eyebrow">Service {String(i + 1).padStart(2, "0")}</p>
                  <h2 className="mt-3 text-3xl font-light text-white sm:text-4xl">{s.name}</h2>
                  <p className="mt-5 text-[15px] leading-relaxed text-zinc-400">{s.description[0]}</p>
                  <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                    {s.highlights.slice(0, 4).map((h) => (
                      <li key={h} className="flex items-start gap-3 text-[14px] text-zinc-300">
                        <CheckIcon className="mt-1 h-3.5 w-3.5 shrink-0 text-[var(--violet-soft)]" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-9 flex flex-wrap gap-4">
                    <Link href={`/services/${s.slug}`} className="btn-outline !py-2.5">
                      Explore {s.name.split(" ")[0]} service
                    </Link>
                    <Link href="/contact" className="btn-primary !py-2.5">
                      Check availability
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Expansion note */}
      <section className="border-y border-white/[0.05] bg-[#07070a] py-16" aria-label="Additional services">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <p className="text-eyebrow">Also available on request</p>
            <h2 className="mt-4 text-2xl font-light text-white sm:text-3xl">
              Sound &amp; lighting production, LED setups, dhol partnerships and anchor coordination
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[14.5px] leading-relaxed text-zinc-400">
              These add-ons are arranged with trusted partners as part of your event plan. Tell us
              what your celebration needs and you will receive one clear, itemised quotation.
            </p>
          </Reveal>
        </div>
      </section>

      <FaqSection limit={6} />
      <CtaBand />
    </>
  );
}
