import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE.legalName} collects, uses and protects the information you share through this website.`,
  alternates: { canonical: "/privacy-policy" },
  robots: { index: false, follow: true },
};

const crumbs = [{ name: "Home", href: "/" }, { name: "Privacy Policy" }];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        crumbs={crumbs}
        intro={`How ${SITE.legalName} handles the information you share through this website.`}
      />
      <section className="pb-24 pt-4">
        <div className="mx-auto max-w-3xl space-y-10 px-5 sm:px-8">
          <div>
            <h2 className="text-xl font-light text-white">1. Information we collect</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-zinc-400">
              When you use our booking enquiry form we collect the details you choose to provide:
              your name, phone number, event type, event date, event location and any additional
              requirements you describe. We do not collect payment information through this website.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-light text-white">2. How we use your information</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-zinc-400">
              Your enquiry details are used for one purpose: to respond to your booking request —
              confirming availability, answering questions and preparing a quotation. We may contact
              you by phone or WhatsApp on the number you provide. We do not sell, rent or share your
              personal information with third parties for marketing purposes.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-light text-white">3. Analytics</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-zinc-400">
              This website may use Google Analytics to understand anonymous usage patterns — pages
              visited, approximate location and device type. Analytics data is aggregated and is not
              used to identify individual visitors. You can opt out using your browser&rsquo;s
              settings or Google&rsquo;s opt-out tools.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-light text-white">4. Cookies</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-zinc-400">
              This website does not use advertising or tracking cookies. Functional cookies may be
              set by analytics tools strictly to measure aggregate site performance.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-light text-white">5. Data retention</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-zinc-400">
              Booking enquiries are retained only as long as needed to handle your event and any
              follow-up. If you would like your enquiry details deleted, contact us and we will
              remove them.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-light text-white">6. Your choices</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-zinc-400">
              You may request access to, correction of, or deletion of the personal details you have
              shared with us at any time by calling {SITE.phoneDisplay}.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-light text-white">7. Contact</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-zinc-400">
              For any privacy questions: {SITE.legalName}, {SITE.address.street},{" "}
              {SITE.address.city}, {SITE.address.region} — {SITE.phoneDisplay}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
