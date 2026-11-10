# DJ BEARD — Official Website

Premium multi-page portfolio + booking platform for **DJ Beard**, professional DJ in Udaipur, Rajasthan.
Built to rank organically for **"Best DJ in Udaipur"** and convert visitors into booking enquiries.

**Live domain:** https://djbeardudaipur.com

---

## Tech stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) + TypeScript |
| Styling | Tailwind CSS 4 + custom dark design system |
| Typography | Open Sans (300 / 400 / 500 / 600) — no italics |
| Animations | GSAP + ScrollTrigger (hero, footer wordmark), IntersectionObserver reveals |
| Images | Sharp-optimised WebP + `next/image` (lazy, responsive) |
| Database | SQLite via Prisma (booking enquiries) |
| Form API | `/api/booking` — Zod validation, DB storage, WhatsApp fallback |
| SEO | Metadata API, JSON-LD (ProfessionalService, Person, Article, FAQ, Breadcrumbs), sitemap.xml, robots.txt |

## Pages

| Route | Purpose | Primary keyword |
|---|---|---|
| `/` | Cinematic home — hero, about, genres, experience, highlights, services, video, why, testimonials, FAQ, CTA | Best DJ in Udaipur |
| `/about` | Personal brand story, style, venues, credentials | DJ Beard Udaipur |
| `/services` | All services overview (data-driven) | DJ services in Udaipur |
| `/services/wedding-dj` | Dedicated landing page | Wedding DJ in Udaipur |
| `/services/party-dj` | Dedicated landing page | Party DJ in Udaipur |
| `/services/corporate-events-dj` | Dedicated landing page | Corporate event DJ Udaipur |
| `/services/club-events-dj` | Dedicated landing page | Club DJ in Udaipur |
| `/gallery` | Editorial photo grid + hover-preview videos + lightbox | DJ performance Udaipur |
| `/contact` | Working booking form + call/WhatsApp CTAs | DJ booking Udaipur |
| `/blog` | SEO blog listing | Informational / long-tail |
| `/blog/[slug]` | 8 original articles (Article + FAQ schema) | Various |
| `/privacy-policy`, `/terms-and-conditions` | Legal pages | — |

## Quick start (local)

```bash
bun install            # or npm install
bun run db:push        # create SQLite db from Prisma schema
bun run dev            # http://localhost:3000
```

## Production build & deploy

```bash
bun run build          # next build (standalone output)
bun run start          # serves .next/standalone on port 3000
```

The build script copies static assets into `.next/standalone` automatically.
Deploy the standalone output to any Node host (VPS, PM2, Docker, Coolify, Vercel-compatible):

```bash
# example with PM2 on a VPS
pm2 start .next/standalone/server.js --name djbeard
```

Behind nginx/Caddy, proxy `djbeardudaipur.com` → `http://127.0.0.1:3000`.

## Environment variables (`.env`)

```bash
DATABASE_URL=file:./db/custom.db          # SQLite path (relative to project root)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX            # optional — GA4 measurement ID
NEXT_PUBLIC_GSC_VERIFICATION=...          # optional — Google Search Console HTML tag
```

Both analytics IDs are placeholders on purpose — replace after creating your GA4 property and
Search Console property. When unset, no analytics script is loaded.

## Managing content (no code rewrite needed)

- **Blog articles** → `src/lib/blog.ts` (add one typed object; sitemap + blog index update automatically)
- **Services** → `src/lib/data.ts` (add object with `slug` — page, SEO metadata and sitemap are generated)
- **Gallery media** → `src/lib/gallery.ts` (photos/videos with alt text; lightbox picks them up)
- **Testimonials / FAQs / genres** → `src/lib/data.ts`
- **Contact info / socials** → `src/lib/site.ts` (single source of truth used everywhere)
- **Media files** → `public/media/photos|videos|posters` (WebP images, H.264 muted videos)

## Post-launch SEO checklist

1. Replace `NEXT_PUBLIC_GA_ID` and `NEXT_PUBLIC_GSC_VERIFICATION`, redeploy.
2. Google Search Console → add property → submit `https://djbeardudaipur.com/sitemap.xml`.
3. Validate structured data (Rich Results Test) — ProfessionalService, Person, Article, FAQPage.
4. Create/claim Google Business Profile for "DJ Beard Udaipur" (cat: DJ service) and link the website.
5. Keep publishing blog articles (the architecture is ready — one object per article).
6. Monitor queries: best DJ in Udaipur, wedding DJ Udaipur, DJ booking Udaipur, DJ Beard.

## Notes on verified information

Only business facts present on the previous website / provided by the owner are published:
17+ years experience, 500+ events, phone/WhatsApp +91 88242 22123, 226 North Ayad Udaipur,
Instagram + Facebook links, and real client reviews. No invented prices, ratings, awards or
addresses. The old `djbeard@example.com` email was **not** carried over (it is an example-domain
placeholder) — add a real email in `src/lib/site.ts` when available.
