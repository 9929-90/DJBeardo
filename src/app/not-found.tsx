import Link from "next/link";
import { SITE, waLink } from "@/lib/site";

export const metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist. Explore DJ Beard's services, gallery and booking options.",
};

export default function NotFound() {
  return (
    <section className="atmosphere relative flex min-h-[70vh] items-center overflow-hidden pt-24" aria-label="Page not found">
      <div className="relative mx-auto max-w-2xl px-5 py-24 text-center sm:px-8">
        <p className="text-eyebrow">404 — page not found</p>
        <h1 className="text-hero-title mt-4 text-[clamp(2.2rem,6vw,4rem)]">
          This track isn&rsquo;t in the mix
        </h1>
        <p className="mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-zinc-400">
          The page you are looking for doesn&rsquo;t exist or has moved. Head back to the decks — or
          message DJ Beard directly about your event.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            WhatsApp Enquiry
          </a>
        </div>
        <p className="mt-10 text-[13px] text-zinc-600">
          Or call {SITE.phoneDisplay} — enquiries are answered personally.
        </p>
      </div>
    </section>
  );
}
