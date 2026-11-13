import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHeader, JsonLd } from "@/components/layout/page-header";
import { Reveal } from "@/components/reveal";
import { BLOG_POSTS, CATEGORIES } from "@/lib/blog";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical guides from a 17+ year Udaipur DJ — how to book a DJ, wedding music planning, sangeet tips, genre guides and everything about DJ events in Udaipur.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "DJ Beard | Blog",
    description:
      "Practical guides on DJ booking, wedding music and event planning — written by a professional DJ in Udaipur.",
    url: `${SITE.url}/blog`,
  },
};

const crumbs = [{ name: "Home", href: "/" }, { name: "Blog" }];

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

const AUTHOR_NAME = "DJ Beard";

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "DJ Beard Blog — DJ & Event Guides Udaipur",
  url: `${SITE.url}/blog`,
  publisher: { "@id": `${SITE.url}/#business` },
  inLanguage: "en-IN",
  blogPost: BLOG_POSTS.map((p) => ({
    "@type": "BlogPosting",
    headline: p.title,
    url: `${SITE.url}/blog/${p.slug}`,
    datePublished: p.date,
    author: { "@type": "Person", name: AUTHOR_NAME },
  })),
};

function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS;
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={blogJsonLd} />
      <PageHeader
        eyebrow="Blog"
        title="DJ guides & celebration planning"
        intro="Practical, honest articles from seventeen years behind the decks — booking advice, wedding music planning, genre guides and event tips for hosts in Udaipur."
        crumbs={crumbs}
      />

      <section className="pb-24 pt-4 sm:pb-28" aria-label="Blog articles">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {/* Category chips (visual filter aid; articles grouped below) */}
          <Reveal className="mb-12 flex flex-wrap gap-2.5">
            {CATEGORIES.map((c) => (
              <span key={c} className="card-surface rounded-full px-4 py-2 text-[12.5px] tracking-[0.08em] text-zinc-300">
                {c}
              </span>
            ))}
          </Reveal>

          {/* Featured article */}
          <Reveal variant="zoom">
            <article className="group grid overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0a0a0e] lg:grid-cols-2">
              <Link href={`/blog/${featured.slug}`} className="relative block aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[380px]">
                <Image
                  src={featured.featuredImage}
                  alt={featured.featuredImageAlt}
                  fill
                  sizes="(max-width: 1024px) 92vw, 46vw"
                  className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                  priority
                />
              </Link>
              <div className="flex flex-col justify-center p-8 sm:p-12">
                <div className="flex items-center gap-3 text-[12px] tracking-[0.14em] text-zinc-500">
                  <span className="rounded-full bg-[var(--violet-brand)]/15 px-3 py-1 font-medium text-[var(--violet-soft)]">
                    {featured.category}
                  </span>
                  <time dateTime={featured.date}>{formatDate(featured.date)}</time>
                  <span aria-hidden="true">·</span>
                  <span>{featured.readMinutes} min read</span>
                </div>
                <h2 className="mt-5 text-2xl font-light leading-snug text-white sm:text-3xl">
                  <Link href={`/blog/${featured.slug}`} className="transition-colors hover:text-[var(--violet-soft)]">
                    {featured.title}
                  </Link>
                </h2>
                <p className="mt-4 text-[14.5px] leading-relaxed text-zinc-400">{featured.excerpt}</p>
                <Link
                  href={`/blog/${featured.slug}`}
                  className="mt-7 inline-flex min-h-[44px] items-center gap-2 text-[12.5px] font-medium uppercase tracking-[0.2em] text-[var(--violet-soft)] transition-colors hover:text-white"
                >
                  Read the guide <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </article>
          </Reveal>

          {/* Article grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 90}>
                <article className="card-surface group flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1.5">
                  <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.featuredImage}
                      alt={post.featuredImageAlt}
                      fill
                      sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw"
                      loading={i < 3 ? "eager" : "lazy"}
                      className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.05]"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 text-[11.5px] tracking-[0.12em] text-zinc-500">
                      <span className="font-medium text-[var(--violet-soft)]">{post.category}</span>
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                      <span aria-hidden="true">·</span>
                      <span>{post.readMinutes} min</span>
                    </div>
                    <h3 className="mt-3.5 text-lg font-light leading-snug text-white">
                      <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-[var(--violet-soft)]">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-zinc-400">
                      {post.excerpt.length > 130 ? `${post.excerpt.slice(0, 130)}…` : post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-5 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.18em] text-zinc-500 transition-colors hover:text-white"
                    >
                      Read article <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
