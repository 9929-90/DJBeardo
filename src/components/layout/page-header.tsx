import Link from "next/link";
import { Reveal } from "@/components/reveal";

export type Crumb = { name: string; href?: string };

/** Breadcrumb trail — semantic + BreadcrumbList JSON-LD is injected by pages. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-[12.5px] tracking-[0.06em] text-zinc-500">
        {items.map((c, i) => (
          <li key={c.name} className="flex items-center gap-2">
            {i > 0 ? <span aria-hidden="true" className="text-zinc-700">/</span> : null}
            {c.href ? (
              <Link href={c.href} className="transition-colors hover:text-zinc-300">
                {c.name}
              </Link>
            ) : (
              <span aria-current="page" className="text-zinc-400">
                {c.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Subpage hero — compact cinematic band used across all inner pages. */
export function PageHeader({
  eyebrow,
  title,
  intro,
  crumbs,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  crumbs: Crumb[];
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="atmosphere relative overflow-hidden pb-14 pt-32 sm:pb-20 sm:pt-40" aria-label={`${title} — page header`}>
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 55% 60% at 80% 0%, rgba(139,92,246,0.12), transparent 60%), linear-gradient(180deg, rgba(5,5,6,0.4), transparent 40%, #050506 96%)",
        }}
      />
      {image ? (
        <div
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 opacity-[0.38] lg:block"
          aria-hidden="true"
        >
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center 22%",
              WebkitMaskImage: "linear-gradient(90deg, transparent, black 55%)",
              maskImage: "linear-gradient(90deg, transparent, black 55%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, rgba(5,5,6,0.72), rgba(5,5,6,0.55) 55%, #050506)" }}
          />
        </div>
      ) : null}
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <Breadcrumbs items={crumbs} />
          <p className="text-eyebrow">{eyebrow}</p>
          <h1 className="text-hero-title mt-4 max-w-3xl text-[clamp(2.2rem,5.5vw,4rem)]">{title}</h1>
          {intro ? (
            <p className="mt-6 max-w-2xl text-[15.5px] leading-relaxed text-zinc-400">{intro}</p>
          ) : null}
        </Reveal>
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16"
        aria-hidden="true"
        style={{ background: "linear-gradient(180deg, transparent, #050506)" }}
      />
    </section>
  );
}

/** JSON-LD helper component */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
