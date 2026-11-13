import type { Metadata, Viewport } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Analytics } from "@/components/analytics";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "DJ Beard | Best DJ in Udaipur",
    template: "DJ Beard | %s",
  },
  description: SITE.description,
  keywords: [...SITE.keywords],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.legalName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.url,
    siteName: SITE.name,
    title: "DJ Beard | Best DJ in Udaipur",
    description: SITE.description,
    images: [
      {
        url: "/og/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DJ Beard — Professional DJ in Udaipur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DJ Beard | Best DJ in Udaipur",
    description: SITE.description,
    images: ["/og/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: SITE.analytics.gscVerification
    ? { google: SITE.analytics.gscVerification }
    : undefined,
  category: "Entertainment",
};

export const viewport: Viewport = {
  themeColor: "#050506",
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE.url}/#business`,
  name: SITE.legalName,
  alternateName: "DJ Beard",
  url: SITE.url,
  image: `${SITE.url}/og/og-image.jpg`,
  logo: `${SITE.url}/brand/logo-beard.png`,
  description: SITE.description,
  telephone: SITE.phoneRaw,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.geo.lat,
    longitude: SITE.geo.lng,
  },
  areaServed: [
    { "@type": "City", name: "Udaipur" },
    { "@type": "State", name: "Rajasthan" },
  ],
  sameAs: [SITE.social.instagram, SITE.social.facebook],
  founder: {
    "@type": "Person",
    name: "DJ Beard",
    jobTitle: "Professional DJ",
  },
  knowsAbout: [
    "Wedding DJ performances",
    "Sangeet DJ",
    "Corporate event DJ",
    "Club DJ",
    "Bollywood remixes",
    "EDM",
    "House music",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  url: SITE.url,
  name: SITE.name,
  publisher: { "@id": `${SITE.url}/#business` },
  inLanguage: "en-IN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${openSans.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
