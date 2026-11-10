"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SITE, waLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Header background after slight scroll (rAF-throttled scroll listener)
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close menu on route change (via render-time state sync)
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    if (open) setOpen(false);
  }

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-[#050506]/88 backdrop-blur-md border-b border-white/[0.06] shadow-[0_8px_30px_rgba(0,0,0,0.45)]"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <nav
          className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8"
          aria-label="Main navigation"
        >
          {/* Brand: the logo is the ONLY brand identity — no extra text label */}
          <Link href="/" aria-label="DJ Beard — home" className="relative flex items-center py-2">
            <Image
              src="/brand/logo-beard.png"
              alt="DJ Beard logo — professional DJ in Udaipur"
              width={626}
              height={301}
              priority
              className={cn(
                "w-auto transition-all duration-500",
                scrolled ? "h-12" : "h-14"
              )}
            />
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative text-[13px] font-medium uppercase tracking-[0.18em] transition-colors duration-300",
                    isActive(link.href) ? "text-white" : "text-zinc-400 hover:text-white"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-1.5 left-0 h-px bg-[var(--violet-soft)] transition-all duration-300",
                      isActive(link.href) ? "w-full" : "w-0"
                    )}
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Link href="/contact" className="btn-primary !py-2.5 !px-6 text-[11px]">
              Book Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-[5px] lg:hidden"
          >
            <span
              className={cn(
                "h-px w-6 bg-white transition-all duration-300",
                open && "translate-y-[6px] rotate-45"
              )}
            />
            <span
              className={cn("h-px w-6 bg-white transition-all duration-300", open && "opacity-0")}
            />
            <span
              className={cn(
                "h-px w-6 bg-white transition-all duration-300",
                open && "-translate-y-[6px] -rotate-45"
              )}
            />
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col justify-center bg-[#050506] px-8 transition-all duration-500 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        <ul className="flex flex-col gap-7">
          {NAV_LINKS.map((link, i) => (
            <li
              key={link.href}
              className={cn(
                "transition-all duration-500",
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              )}
              style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
            >
              <Link
                href={link.href}
                className={cn(
                  "block py-1 text-2xl font-light uppercase tracking-[0.22em]",
                  isActive(link.href) ? "text-white" : "text-zinc-500"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className={cn(
            "mt-12 flex flex-col gap-4 transition-all duration-500",
            open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          )}
          style={{ transitionDelay: open ? "520ms" : "0ms" }}
        >
          <Link href="/contact" className="btn-primary w-full">
            Book DJ Beard
          </Link>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full">
            WhatsApp {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </>
  );
}
