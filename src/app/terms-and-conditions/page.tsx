import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms of service for DJ performances and bookings with ${SITE.legalName}, Udaipur.`,
  alternates: { canonical: "/terms-and-conditions" },
  robots: { index: false, follow: true },
};

const crumbs = [{ name: "Home", href: "/" }, { name: "Terms & Conditions" }];

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms & Conditions"
        crumbs={crumbs}
        intro={`The terms that apply to DJ bookings made with ${SITE.legalName}.`}
      />
      <section className="pb-24 pt-4">
        <div className="mx-auto max-w-3xl space-y-10 px-5 sm:px-8">
          <div>
            <h2 className="text-xl font-light text-white">1. Bookings and confirmation</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-zinc-400">
              A booking is confirmed only after written confirmation and receipt of the agreed
              advance amount. Dates are held on a first-confirmed basis; verbal enquiries do not
              reserve a date.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-light text-white">2. Payments</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-zinc-400">
              An advance confirms the booking; the balance is payable on or before the event date as
              agreed in the written quotation. Quotations clearly list what is included — performance
              hours, equipment, travel and crew.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-light text-white">3. Cancellations</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-zinc-400">
              Cancellation terms are stated in the written booking confirmation. Advances may be
              adjusted or refunded according to how far before the event the cancellation is made and
              commitments already made to other clients for that date.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-light text-white">4. Venue and technical requirements</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-zinc-400">
              The client is responsible for ensuring venue access for setup at the agreed time,
              adequate power supply and any permissions required for sound at the venue. Where sound
              restrictions apply, the set will be planned to comply with local rules.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-light text-white">5. Performance content</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-zinc-400">
              Music is mixed live according to the agreed plan, client requests and the response of
              the crowd. While must-play lists are honoured wherever possible, final programming
              decisions rest with the DJ to maintain the energy and flow of the event.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-light text-white">6. Liability</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-zinc-400">
              Professional equipment is operated with care and backups are maintained. Liability for
              delays or non-performance caused by circumstances beyond reasonable control (including
              severe weather, power failure or venue access issues) is limited to the amount paid for
              the affected service.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-light text-white">7. Media</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-zinc-400">
              Unless the client requests otherwise in writing, DJ Beard may use photographs and short
              videos of performances for portfolio and promotional purposes. Guests are captured only
              as part of the general event atmosphere.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-light text-white">8. Contact</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-zinc-400">
              Questions about these terms: {SITE.legalName}, {SITE.address.street},{" "}
              {SITE.address.city}, {SITE.address.region} — {SITE.phoneDisplay}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
