import type { Metadata } from "next";
import { PageHeader, JsonLd } from "@/components/layout/page-header";
import { BookingForm } from "@/components/booking-form";
import { Reveal } from "@/components/reveal";
import { SITE, waLink } from "@/lib/site";
import { WhatsAppIcon, PhoneIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact & DJ Booking Udaipur — Call, WhatsApp or Enquire Online",
  description:
    "Book DJ Beard in Udaipur — call +91 88242 22123, message on WhatsApp or send the online booking form with your event date, type and venue. Fast, personal replies.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact DJ Beard — DJ Booking Udaipur",
    description:
      "Send your event details — date, venue and occasion — and get availability plus a clear quotation from DJ Beard.",
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
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={contactJsonLd} />
      <PageHeader
        eyebrow="Contact & Booking"
        title="Book DJ Beard for your event"
        intro="Share your date, venue and occasion — you will get availability, an honest recommendation and a clear quotation. No obligation, no pressure."
        crumbs={crumbs}
      />

      <section className="pb-24 pt-4 sm:pb-28" aria-label="Booking enquiry">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <Reveal>
            <BookingForm />
          </Reveal>

          <div className="space-y-5">
            <Reveal variant="right">
              <div className="card-surface rounded-2xl p-7">
                <h2 className="text-lg font-light text-white">Direct contact</h2>
                <div className="mt-6 space-y-4">
                  <a
                    href={`tel:${SITE.phoneRaw}`}
                    className="group flex items-center gap-4 rounded-xl border border-white/[0.07] px-5 py-4 transition-colors hover:border-[rgba(167,139,250,0.4)]"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--violet-brand)]/15">
                      <PhoneIcon className="h-4 w-4 text-[var(--violet-soft)]" />
                    </span>
                    <span>
                      <span className="block text-[12px] uppercase tracking-[0.16em] text-zinc-500">Call directly</span>
                      <span className="block text-[15px] text-white">{SITE.phoneDisplay}</span>
                    </span>
                  </a>
                  <a
                    href={waLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-xl border border-white/[0.07] px-5 py-4 transition-colors hover:border-[rgba(167,139,250,0.4)]"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1faa53]/15">
                      <WhatsAppIcon className="h-4 w-4 text-[#2fd166]" />
                    </span>
                    <span>
                      <span className="block text-[12px] uppercase tracking-[0.16em] text-zinc-500">WhatsApp</span>
                      <span className="block text-[15px] text-white">Message DJ Beard</span>
                    </span>
                  </a>
                </div>
                <p className="mt-6 border-t border-white/[0.06] pt-5 text-[13.5px] leading-relaxed text-zinc-500">
                  Based in {SITE.address.street}, {SITE.address.city} — performing across Udaipur and
                  all of Rajasthan. Enquiries are answered personally, usually within a few hours.
                </p>
              </div>
            </Reveal>

            <Reveal variant="right" delay={100}>
              <div className="card-surface rounded-2xl p-7">
                <h2 className="text-lg font-light text-white">What happens next</h2>
                <ol className="mt-5 space-y-4 text-[14px] leading-relaxed text-zinc-400">
                  {[
                    "You send your event details — date, venue, occasion.",
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

            <Reveal variant="right" delay={160}>
              <div className="card-surface rounded-2xl p-7">
                <h2 className="text-lg font-light text-white">Prefer social media?</h2>
                <p className="mt-3 text-[14px] leading-relaxed text-zinc-400">
                  See recent performances and message directly:
                </p>
                <div className="mt-5 flex gap-3">
                  <a
                    href={SITE.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline !py-2.5 !px-5 text-[11px]"
                  >
                    Instagram
                  </a>
                  <a
                    href={SITE.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline !py-2.5 !px-5 text-[11px]"
                  >
                    Facebook
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
