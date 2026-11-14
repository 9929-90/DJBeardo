import Link from "next/link";
import Image from "next/image";
import { SITE, waLink } from "@/lib/site";
import { SERVICES } from "@/lib/data";
import { BLOG_POSTS } from "@/lib/blog";
import { FooterWordmark } from "./footer-wordmark";
import { InstagramIcon, FacebookIcon, WhatsAppIcon, PhoneIcon } from "@/components/icons";

export function Footer() {
  const year = new Date().getFullYear();
  const latestPosts = BLOG_POSTS.slice(0, 4);

  return (
    <footer className="relative mt-auto border-t border-white/[0.06] bg-[#040405]">
      {/* top hairline glow */}
      <div className="hairline absolute inset-x-0 top-0" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-5 pt-20 sm:px-8">
        <div className="grid gap-12 pb-16 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
          {/* Brand */}
          <div>
            <Link href="/" aria-label="DJ Beard — home" className="inline-flex items-center gap-3">
              <Image
                src="/brand/logo-beard.png"
                alt="DJ Beard logo — best DJ in Udaipur"
                width={581}
                height={760}
                className="h-12 w-auto"
              />
              <span className="flex flex-col justify-center gap-1.5">
                <span className="text-[17px] font-semibold uppercase leading-none tracking-[0.3em] text-white">
                  DJ Beard
                </span>
                <span className="text-[9.5px] font-medium uppercase leading-none tracking-[0.42em] text-[var(--violet-soft)]">
                  Udaipur · Rajasthan
                </span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-zinc-400">
              Professional DJ in Udaipur with 17+ years of experience — weddings, sangeets, corporate
              events, club nights and private parties across Rajasthan.
            </p>
            <div className="mt-7 flex items-center gap-3">
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DJ Beard on Instagram"
                className="card-surface flex h-10 w-10 items-center justify-center rounded-full text-zinc-300 transition-colors hover:text-white"
              >
                <InstagramIcon className="h-[18px] w-[18px]" />
              </a>
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DJ Beard on Facebook"
                className="card-surface flex h-10 w-10 items-center justify-center rounded-full text-zinc-300 transition-colors hover:text-white"
              >
                <FacebookIcon className="h-[18px] w-[18px]" />
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with DJ Beard on WhatsApp"
                className="card-surface flex h-10 w-10 items-center justify-center rounded-full text-zinc-300 transition-colors hover:text-white"
              >
                <WhatsAppIcon className="h-[18px] w-[18px]" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <nav aria-label="Footer navigation">
            <h3 className="text-eyebrow !text-zinc-500">Explore</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                ["Home", "/"],
                ["About DJ Beard", "/about"],
                ["DJ Services", "/services"],
                ["Gallery", "/gallery"],
                ["Blog", "/blog"],
                ["Contact & Booking", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-zinc-400 transition-colors hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="DJ services">
            <h3 className="text-eyebrow !text-zinc-500">Services</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-zinc-400 transition-colors hover:text-white"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/equipment" className="text-zinc-400 transition-colors hover:text-white">
                  DJ Equipment &amp; Setup
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-400 transition-colors hover:text-white">
                  DJ Booking in Udaipur
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-eyebrow !text-zinc-500">Get in touch</h3>
            <ul className="mt-5 space-y-4 text-sm text-zinc-400">
              <li className="flex items-start gap-3">
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-[var(--violet-soft)]" />
                <a href={`tel:${SITE.phoneRaw}`} className="transition-colors hover:text-white">
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <WhatsAppIcon className="mt-0.5 h-4 w-4 shrink-0 text-[var(--violet-soft)]" />
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  WhatsApp booking
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mt-0.5 h-4 w-4 shrink-0 text-[var(--violet-soft)]">
                  <path d="M12 21s-7-5.1-7-11a7 7 0 1 1 14 0c0 5.9-7 11-7 11Z" />
                  <circle cx="12" cy="10" r="2.6" />
                </svg>
                <span>
                  {SITE.address.street}, {SITE.address.city}, {SITE.address.region}
                </span>
              </li>
            </ul>
            <h3 className="text-eyebrow !text-zinc-500 mt-8">From the blog</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {latestPosts.map((p) => (
                <li key={p.slug}>
                  <Link href={`/blog/${p.slug}`} className="text-zinc-500 transition-colors hover:text-white">
                    {p.title.length > 62 ? `${p.title.slice(0, 62)}…` : p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Giant wordmark */}
        <FooterWordmark />

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] py-7 text-[13px] text-zinc-500 sm:flex-row">
          <p>
            © {year} {SITE.legalName}. All rights reserved.
          </p>
          <p className="text-zinc-600">
            Professional DJ in Udaipur, Rajasthan
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="transition-colors hover:text-white">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
