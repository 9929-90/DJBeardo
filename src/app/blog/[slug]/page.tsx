import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumbs, JsonLd } from "@/components/layout/page-header";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/sections/home-sections";
import { BLOG_POSTS, AUTHOR, type BlogPost } from "@/lib/blog";
import { SITE, waLink } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: [post.keyword],
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: `DJ Beard | ${post.metaTitle}`,
      description: post.metaDescription,
      url: `${SITE.url}/blog/${post.slug}`,
      publishedTime: post.date,
      authors: [AUTHOR.name],
      images: [{ url: post.featuredImage, width: 1200, height: 800, alt: post.featuredImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `DJ Beard | ${post.metaTitle}`,
      description: post.metaDescription,
      images: [post.featuredImage],
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function relatedPosts(post: BlogPost) {
  const sameCategory = BLOG_POSTS.filter((p) => p.slug !== post.slug && p.category === post.category);
  const others = BLOG_POSTS.filter((p) => p.slug !== post.slug && p.category !== post.category);
  return [...sameCategory, ...others].slice(0, 3);
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: post.title },
  ];
  const related = relatedPosts(post);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    image: `${SITE.url}${post.featuredImage}`,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "en-IN",
    keywords: post.keyword,
    author: {
      "@type": "Person",
      name: AUTHOR.name,
      url: `${SITE.url}/about`,
    },
    publisher: { "@id": `${SITE.url}/#business` },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE.url}/blog/${post.slug}`,
    },
  };

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

  const faqJsonLd = post.faqs
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      {faqJsonLd ? <JsonLd data={faqJsonLd} /> : null}

      <article>
        {/* Article header */}
        <header className="atmosphere relative overflow-hidden pb-10 pt-32 sm:pt-40">
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse 55% 60% at 80% 0%, rgba(139,92,246,0.10), transparent 60%), linear-gradient(180deg, rgba(5,5,6,0.4), transparent 45%, #050506 97%)",
            }}
          />
          <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
            <Breadcrumbs items={crumbs} />
            <div className="flex flex-wrap items-center gap-3 text-[12px] tracking-[0.14em] text-zinc-500">
              <span className="rounded-full bg-[var(--violet-brand)]/15 px-3 py-1 font-medium text-[var(--violet-soft)]">
                {post.category}
              </span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden="true">·</span>
              <span>{post.readMinutes} min read</span>
            </div>
            <h1 className="mt-5 text-3xl font-light leading-[1.2] text-white sm:text-[2.6rem] sm:leading-[1.2]">
              {post.title}
            </h1>
            <p className="mt-5 text-[16px] leading-relaxed text-zinc-400">{post.excerpt}</p>
          </div>
        </header>

        {/* Featured image */}
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <Reveal variant="zoom">
            <figure className="overflow-hidden rounded-2xl border border-white/[0.07]">
              <div className="relative aspect-[16/9]">
                <Image
                  src={post.featuredImage}
                  alt={post.featuredImageAlt}
                  fill
                  sizes="(max-width: 896px) 92vw, 896px"
                  priority
                  className="object-cover"
                />
              </div>
            </figure>
          </Reveal>
        </div>

        {/* Body */}
        <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8">
          {/* Author */}
          <div className="flex items-center gap-4 border-b border-white/[0.06] pb-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--violet-brand)]/15 text-[15px] font-light tracking-[0.1em] text-[var(--violet-soft)]">
              DB
            </span>
            <div>
              <p className="text-[14.5px] font-medium text-white">{AUTHOR.name}</p>
              <p className="text-[12.5px] text-zinc-500">{AUTHOR.role}</p>
            </div>
          </div>

          <div className="mt-8 space-y-8">
            {post.sections.map((section, i) => (
              <Reveal key={i} className="section-block">
                {section.heading ? (
                  <h2 className="text-[1.55rem] font-light leading-snug text-white sm:text-2xl">
                    {section.heading}
                  </h2>
                ) : null}
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="mt-4 text-[15.5px] leading-[1.85] text-zinc-300/90">
                    {p}
                  </p>
                ))}
                {section.list ? (
                  <ul className="mt-5 space-y-2.5">
                    {section.list.map((li) => (
                      <li key={li} className="flex items-start gap-3 text-[15px] leading-relaxed text-zinc-300/90">
                        <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--violet-soft)]" aria-hidden="true" />
                        {li}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </Reveal>
            ))}
          </div>

          {/* In-article CTA */}
          <Reveal className="mt-14">
            <div className="card-surface rounded-2xl p-8 text-center">
              <p className="text-eyebrow">Ready when you are</p>
              <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-zinc-300">{post.cta}</p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                  Book DJ Beard
                </a>
                <a href={`tel:${SITE.phoneRaw}`} className="btn-outline">
                  Call {SITE.phoneDisplay}
                </a>
              </div>
            </div>
          </Reveal>

          {/* FAQs */}
          {post.faqs?.length ? (
            <div className="mt-14">
              <h2 className="text-2xl font-light text-white">Frequently asked questions</h2>
              <div className="mt-6 space-y-3">
                {post.faqs.map((f) => (
                  <details key={f.q} className="card-surface group rounded-xl px-6 py-5">
                    <summary className="flex min-h-[28px] cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-normal text-zinc-100 [&::-webkit-details-marker]:hidden">
                      {f.q}
                      <span aria-hidden="true" className="text-xl font-light text-[var(--violet-soft)] transition-transform duration-300 group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-4 text-[14.5px] leading-relaxed text-zinc-400">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ) : null}

          {/* Internal links */}
          <div className="mt-14 border-t border-white/[0.06] pt-8">
            <p className="text-[13px] uppercase tracking-[0.2em] text-zinc-500">Continue reading</p>
            <ul className="mt-4 space-y-2.5">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/blog/${r.slug}`}
                    className="text-[15px] text-zinc-300 transition-colors hover:text-[var(--violet-soft)]"
                  >
                    {r.title} <span className="text-zinc-600">— {r.category}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services/wedding-dj" className="text-[15px] text-zinc-300 transition-colors hover:text-[var(--violet-soft)]">
                  Wedding DJ in Udaipur — service details <span className="text-zinc-600">— Services</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </article>

      {/* Related cards */}
      <section className="border-t border-white/[0.05] bg-[#07070a] py-20" aria-label="Related articles">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <h2 className="text-2xl font-light text-white sm:text-3xl">Related articles</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={i * 90}>
                <article className="card-surface group flex h-full flex-col overflow-hidden rounded-2xl">
                  <Link href={`/blog/${r.slug}`} className="relative block aspect-[16/10] overflow-hidden">
                    <Image
                      src={r.featuredImage}
                      alt={r.featuredImageAlt}
                      fill
                      sizes="(max-width: 640px) 92vw, 30vw"
                      loading="lazy"
                      className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.05]"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-[11.5px] font-medium tracking-[0.12em] text-[var(--violet-soft)]">
                      {r.category}
                    </span>
                    <h3 className="mt-3 text-[17px] font-light leading-snug text-white">
                      <Link href={`/blog/${r.slug}`} className="transition-colors hover:text-[var(--violet-soft)]">
                        {r.title}
                      </Link>
                    </h3>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
