import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/reveal";

import { EQUIPMENT_SETUPS } from "@/lib/data";
import { SITE, waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons";

/**
 * Professional DJ Equipment & Setup — premium presentation of the Pioneer DJ
 * systems DJ Beard is experienced in operating. Communicates operating expertise
 * without claiming equipment ownership or provision.
 */
export function EquipmentExpertise() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.05] bg-[#07070a] py-24 sm:py-32" aria-labelledby="equipment-heading">
      {/* subtle atmosphere */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 45% 40% at 18% 8%, rgba(139,92,246,0.09), transparent 60%), radial-gradient(ellipse 45% 40% at 85% 92%, rgba(139,92,246,0.07), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-eyebrow">Pioneer DJ expertise</p>
          <h2 id="equipment-heading" className="mt-4 text-3xl font-light tracking-[0.04em] text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            Professional DJ Equipment &amp; Setup
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-zinc-400">
            DJ Beard performs on industry-standard Pioneer DJ systems and is experienced in operating the flagship professional configurations used by clubs and events worldwide.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {EQUIPMENT_SETUPS.map((setup, si) => (
            <Reveal key={setup.id} delay={si * 120}>
              <article className="card-surface group flex h-full flex-col rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1.5 sm:p-10">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-eyebrow">{setup.label}</p>
                  <p className="text-[12px] font-light uppercase tracking-[0.22em] text-zinc-500">
                    {setup.tagline}
                  </p>
                </div>
                <h3 className="mt-4 text-2xl font-light leading-snug text-white sm:text-[1.7rem]">
                  {setup.name}
                </h3>
                <p className="mt-4 text-[14.5px] leading-relaxed text-zinc-400">{setup.description}</p>

                {/* equipment pair */}
                <div className="mt-8 grid grid-cols-2 gap-5">
                  {setup.items.map((item, ii) => (
                    <figure
                      key={item.name}
                      className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0a0a0e] px-5 pb-5 pt-8"
                    >
                      {/* radial glow behind the gear */}
                      <div
                        className="pointer-events-none absolute inset-0"
                        aria-hidden="true"
                        style={{
                          background:
                            "radial-gradient(ellipse 70% 55% at 50% 38%, rgba(139,92,246,0.16), transparent 70%)",
                        }}
                      />
                      <div className="relative mx-auto aspect-square w-full max-w-[210px] transition-transform duration-700 group-hover:scale-[1.035]" style={{ transitionDelay: `${ii * 60}ms` }}>
                        <Image
                          src={item.image}
                          alt={item.imageAlt}
                          width={800}
                          height={800}
                          loading="lazy"
                          className="h-auto w-full object-contain drop-shadow-[0_18px_32px_rgba(0,0,0,0.55)]"
                          sizes="(max-width: 640px) 38vw, 200px"
                        />
                      </div>
                      <figcaption className="relative mt-5 text-center">
                        <p className="text-[14.5px] font-medium text-white">{item.name}</p>
                        <p className="mt-1 text-[12px] uppercase tracking-[0.16em] text-zinc-500">
                          {item.role}
                        </p>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* live setup — real event photograph */}
        <Reveal delay={100} className="mt-6">
          <figure className="group relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-white/[0.06]">
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src="/media/photos/moment-pioneer-rig-night.webp"
                alt="A Pioneer CDJ-2000NXS2 and DJM-900NXS2 rig set up for a live outdoor night event, with the full sound system under green stage lighting"
                fill
                sizes="(max-width: 1024px) 92vw, 896px"
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
              />
            </div>
            <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-5 pt-12 text-[13px] font-light tracking-[0.08em] text-zinc-200">
              On the job — a Pioneer CDJ-2000NXS2 + DJM-900NXS2 rig set for an open-air night
            </figcaption>
          </figure>
        </Reveal>

        {/* ownership note + CTA */}
        <Reveal delay={140} className="mt-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[13.5px] leading-relaxed text-zinc-500">
              Professional Pioneer setups such as these are typically provided by venues and event
              partners. DJ Beard&rsquo;s expertise is in operating them — technical requirements for
              your event can be coordinated and communicated to your vendor or venue.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <WhatsAppIcon className="h-4 w-4" />
                Discuss Your Event Setup
              </a>
              <a href={`tel:${SITE.phoneRaw}`} className="btn-outline">
                Call {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Compact teaser used on the services page — links to the dedicated page. */
export function ServicesPageEquipment() {
  return (
    <div>
      <EquipmentExpertise />
      <div className="bg-[#07070a] px-5 pb-20 text-center sm:px-8">
        <Reveal>
          <Link
            href="/equipment"
            className="group inline-flex min-h-[44px] items-center gap-2 text-[13px] font-medium uppercase tracking-[0.2em] text-[var(--violet-soft)] transition-colors hover:text-white"
          >
            Read more about DJ Beard&rsquo;s equipment expertise
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
