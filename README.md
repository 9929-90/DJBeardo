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
| Images | Pre-optimised WebP + `next/image` (lazy, responsive) |
| Hosting | **Fully static export** (`out/`) — GitHub Pages, no backend |
| Booking | Direct WhatsApp deep-links (`wa.me`), `tel:` calls, social links — no form, no server |
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
| `/services/sound-systems` | Dedicated landing page | DJ sound system in Udaipur |
| `/services/lighting` | Dedicated landing page | DJ lighting in Udaipur |
| `/equipment` | Professional DJ Equipment & Setup — Pioneer CDJ-3000/DJM-A9, CDJ-2000NXS2/DJM-900NXS2 | Pioneer CDJ DJ in Udaipur |
| `/gallery` | Editorial photo grid + hover-preview videos + lightbox | DJ performance Udaipur |
| `/contact` | Direct contact: WhatsApp (primary), call, email, Instagram | DJ booking Udaipur |
| `/blog` | SEO blog listing | Informational / long-tail |
| `/blog/[slug]` | 8 original articles (Article + FAQ schema) | Various |
| `/privacy-policy`, `/terms-and-conditions` | Legal pages | — |

## Quick start (local)

```bash
npm ci                # clean install from package-lock.json (or: bun install)
npm run dev           # http://localhost:3000
```

## Production build (static export)

```bash
npm run build         # next build with output: "export" (or: bun run build)
```

The complete static site is written to **`out/`** — plain HTML/CSS/JS with every asset
(images, videos, fonts, CNAME, .nojekyll, sitemap.xml, robots.txt, 404.html included).
No server, no database, no runtime: any static host can serve it as-is.

Preview the production build locally:

```bash
npx serve out          # http://localhost:3000
```

## Deploy to GitHub Pages (custom domain)

The repository ships with a ready GitHub Actions workflow:
`.github/workflows/nextjs.yml` — it installs dependencies with Bun, builds the static
export and publishes `out/` to GitHub Pages on every push to `main`.

**One-time setup (manual):**

1. Push this project to GitHub (branch: `main`).
2. Repo **Settings → Pages → Build and deployment → Source: "GitHub Actions"**.
3. Repo **Settings → Pages → Custom domain**: enter `djbeardudaipur.com` and follow the
   DNS instructions — apex `A`/`ALIAS` records pointing to GitHub Pages
   (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`)
   or a `CNAME` record `www → <username>.github.io`. Enable **Enforce HTTPS** once the
   certificate is issued.

The `public/CNAME` file (contains `djbeardudaipur.com`) is copied into `out/` on every
build, so the custom domain persists across deployments. `public/.nojekyll` disables
Jekyll processing so `_next/` static assets are served correctly.

Every page is a real static HTML file in its own directory (`/about/index.html` →
`https://djbeardudaipur.com/about/`), so direct URL access and refreshes always work.
A `404.html` is generated for unknown routes.

> Deploying elsewhere? `out/` also works unchanged on Cloudflare Pages, Netlify or any
> static file host.

## Environment variables

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX            # optional — GA4 measurement ID
NEXT_PUBLIC_GSC_VERIFICATION=...          # optional — Google Search Console HTML tag
NEXT_PUBLIC_CONTACT_EMAIL=hello@...       # optional — shows the Email card on /contact
```

All are optional. When unset, no analytics script is loaded and the email card stays
hidden. Set them in **Repo Settings → Secrets and variables → Actions → Variables**
(or bake them in — none are secrets).

## Managing content (no code rewrite needed)

- **Blog articles** → `src/lib/blog.ts` (add one typed object; sitemap + blog index update automatically)
- **Services** → `src/lib/data.ts` (add object with `slug` — page, SEO metadata and sitemap are generated)
- **Pioneer equipment setups** → `src/lib/data.ts` → `EQUIPMENT_SETUPS`
- **Gallery media** → `src/lib/gallery.ts` (photos/videos with alt text; lightbox picks them up)
- **Testimonials / FAQs / genres** → `src/lib/data.ts`
- **Contact info / socials / WhatsApp number** → `src/lib/site.ts` (single source of truth used everywhere)
- **Media files** → `public/media/photos|videos|posters|equipment` (WebP images, H.264 muted videos)

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
placeholder) — set `NEXT_PUBLIC_CONTACT_EMAIL` (or `SITE.email` in `src/lib/site.ts`) with the
real address when available and the Email card appears on `/contact` automatically.

Pioneer equipment is presented as **operating expertise only** (CDJ-3000 + DJM-A9,
CDJ-2000NXS2 + DJM-900NXS2) — the site does not claim ownership or provision of this gear.
