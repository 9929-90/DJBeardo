import type { Metadata } from "next";
import { PageHeader, JsonLd } from "@/components/layout/page-header";
import { Reveal } from "@/components/reveal";
import { SITE, waLink } from "@/lib/site";
import { WhatsAppIcon, PhoneIcon, InstagramIcon, MailIcon, ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact & DJ Booking",
  description:
    "Book DJ Beard in Udaipur — message on WhatsApp, call +91 88242 22123 or connect on Instagram. Direct replies with availability and a clear quotation for your event date.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "DJ Beard | Contact & DJ Booking",
    description:
      "Message DJ Beard directly on WhatsApp or call +91 88242 22123 — get availability, an honest recommendation and a clear quotation for your event in Udaipur.",
    url: `${SITE.url}/contact`,
  },
};

const crumbs = [{ name: "Home", href: "/" }, { name: "Contact" }];

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

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact DJ Beard — DJ Booking Udaipur",
  url: `${SITE.url}/contact`,
  about: { "@id": `${SITE.url}/#business` },
};

export default function ContactPage() {
  const email = SITE.email;

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={contactJsonLd} />
      <PageHeader
        eyebrow="Contact & Booking"
        title="Book DJ Beard for your event"
        intro="Message directly on WhatsApp or call — share your date, venue and occasion, and you will get availability, an honest recommendation and a clear quotation. No obligation, no pressure."
        crumbs={crumbs}
      />

      <section className="pb-24 pt-4 sm:pb-28" aria-label="Direct contact options">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-5 lg:grid-cols-3">
            {/* WhatsApp — primary CTA, feature card */}
            <Reveal className="lg:col-span-3">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col items-start gap-6 overflow-hidden rounded-2xl border border-[#1faa53]/25 bg-gradient-to-br from-[#0d2417] via-[#0a1510] to-[#07070a] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[#1faa53]/50 sm:flex-row sm:items-center sm:justify-between sm:p-10"
              >
                <div
                  className="pointer-events-none absolute inset-0"
                  aria-hidden="true"
                  style={{ background: "radial-gradient(ellipse 50% 90% at 12% 50%, rgba(31,170,83,0.14), transparent 65%)" }}
                />
                <div className="relative flex items-center gap-5">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#1faa53]/15">
                    <WhatsAppIcon className="h-6 w-6 text-[#2fd166]" />
                  </span>
                  <span>
                    <span className="block text-[12px] font-medium uppercase tracking-[0.2em] text-[#2fd166]">
                      Fastest reply — WhatsApp
                    </span>
                    <span className="mt-1 block text-2xl font-light text-white sm:text-3xl">
                      WhatsApp Enquiry
                    </span>
                    <span className="mt-2 block max-w-xl text-[14px] leading-relaxed text-zinc-400">
                      Send your event date, venue and occasion — your enquiry opens prefilled, and
                      DJ Beard replies personally, usually within a few hours.
                    </span>
                  </span>
                </div>
                <span className="btn-whatsapp relative shrink-0">
                  <WhatsAppIcon className="h-4 w-4" />
                  Message {SITE.phoneDisplay}
                </span>
              </a>
            </Reveal>

            {/* Call Now */}
            <Reveal delay={80}>
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="card-surface group flex h-full flex-col gap-5 rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--violet-brand)]/15">
                  <PhoneIcon className="h-5 w-5 text-[var(--violet-soft)]" />
                </span>
                <span>
                  <span className="block text-[12px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                    Direct call
                  </span>
                  <span className="mt-1 block text-xl font-light text-white">Call Now</span>
                  <span className="mt-2 block text-[14.5px] text-zinc-400">{SITE.phoneDisplay}</span>
                </span>
                <span className="mt-auto inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.18em] text-zinc-500 transition-colors group-hover:text-[var(--violet-soft)]">
                  Tap to call
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </a>
            </Reveal>

            {/* Email — rendered only when a verified address is configured */}
            {email ? (
              <Reveal delay={140}>
                <a
                  href={`mailto:${email}`}
                  className="card-surface group flex h-full flex-col gap-5 rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--violet-brand)]/15">
                    <MailIcon className="h-5 w-5 text-[var(--violet-soft)]" />
                  </span>
                  <span>
                    <span className="block text-[12px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                      Write to
                    </span>
                    <span className="mt-1 block text-xl font-light text-white">Email</span>
                    <span className="mt-2 block break-all text-[14.5px] text-zinc-400">{email}</span>
                  </span>
                  <span className="mt-auto inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.18em] text-zinc-500 transition-colors group-hover:text-[var(--violet-soft)]">
                    Send an email
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </a>
              </Reveal>
            ) : null}

            {/* Instagram */}
            <Reveal delay={email ? 200 : 140}>
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="card-surface group flex h-full flex-col gap-5 rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--violet-brand)]/15">
                  <InstagramIcon className="h-5 w-5 text-[var(--violet-soft)]" />
                </span>
                <span>
                  <span className="block text-[12px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                    Social
                  </span>
                  <span className="mt-1 block text-xl font-light text-white">Instagram</span>
                  <span className="mt-2 block text-[14.5px] text-zinc-400">
                    See recent performances and message directly
                  </span>
                </span>
                <span className="mt-auto inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.18em] text-zinc-500 transition-colors group-hover:text-[var(--violet-soft)]">
                  Open profile
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </a>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            <Reveal variant="left">
              <div className="card-surface h-full rounded-2xl p-8">
                <h2 className="text-lg font-light text-white">What happens next</h2>
                <ol className="mt-6 space-y-4 text-[14px] leading-relaxed text-zinc-400">
                  {[
                    "You send your event details — date, venue, occasion — on WhatsApp or by phone.",
                    "DJ Beard confirms availability and asks any quick questions.",
                    "You receive a clear, itemised quotation — no hidden charges.",
                    "A small advance locks your date; the music plan follows.",
                  ].map((step, i) => (
                    <li key={step} className="flex gap-4">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--violet-brand)]/15 text-[11.5px] font-medium text-[var(--violet-soft)]">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            <Reveal variant="right" delay={100}>
              <div className="card-surface flex h-full flex-col rounded-2xl p-8">
                <h2 className="text-lg font-light text-white">Where DJ Beard performs</h2>
                <p className="mt-4 text-[14.5px] leading-relaxed text-zinc-400">
                  Based in {SITE.address.street}, {SITE.address.city} — performing across Udaipur and
                  all of Rajasthan: weddings and sangeets, destination weddings, private parties,
                  corporate events and club nights. Travel is planned into every quotation.
                </p>
                <p className="mt-4 text-[14.5px] leading-relaxed text-zinc-400">
                  Peak-season dates (October to February) are often blocked 2–3 months ahead — send
                  your date early to confirm availability.
                </p>
                <div className="mt-auto flex flex-wrap gap-3 pt-6">
                  <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp !py-2.5 !px-6 text-[11px]">
                    <WhatsAppIcon className="h-4 w-4" />
                    WhatsApp
                  </a>
                  <a href={`tel:${SITE.phoneRaw}`} className="btn-outline !py-2.5 !px-6 text-[11px]">
                    <PhoneIcon className="h-4 w-4" />
                    {SITE.phoneDisplay}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
