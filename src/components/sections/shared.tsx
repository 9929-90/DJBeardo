import { Reveal } from "@/components/reveal";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "@/components/icons";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="text-eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-light tracking-[0.04em] text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
        {title}
      </h2>
      {intro ? <p className="mt-5 text-[15px] leading-relaxed text-zinc-400">{intro}</p> : null}
    </Reveal>
  );
}

export function MoreLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex min-h-[44px] items-center gap-2 text-[13px] font-medium uppercase tracking-[0.2em] text-[var(--violet-soft)] transition-colors hover:text-white"
    >
      {label}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
    </Link>
  );
}

/** Editorial photo with subtle reveal + hover motion */
export function PhotoTile({
  src,
  alt,
  caption,
  ratio = "aspect-[4/3]",
  priority = false,
  sizes = "(max-width: 768px) 92vw, (max-width: 1280px) 46vw, 30vw",
  className = "",
}: {
  src: string;
  alt: string;
  caption?: string;
  ratio?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  return (
    <figure className={`group relative overflow-hidden rounded-xl border border-white/[0.06] ${className}`}>
      <div className={`relative ${ratio} overflow-hidden`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
        />
      </div>
      {caption ? (
        <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-5 pt-12 text-[13px] font-light tracking-[0.08em] text-zinc-200">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
