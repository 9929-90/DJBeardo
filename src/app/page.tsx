import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import {
  MeetBeard,
  GenresStrip,
  Experience,
  PerformanceHighlights,
  ServicesOverview,
  VideoShowcase,
  WhyChoose,
  Testimonials,
  FaqSection,
  CtaBand,
} from "@/components/sections/home-sections";
import { FAQS } from "@/lib/data";
import { SITE } from "@/lib/site";
import { JsonLd } from "@/components/layout/page-header";

export const metadata: Metadata = {
  title: { absolute: "DJ Beard | Best DJ in Udaipur" },
  description:
    "Looking for the best DJ in Udaipur? DJ Beard brings 17+ years of experience to weddings, sangeets, corporate events, club nights and private parties across Rajasthan. Book now — +91 88242 22123.",
  alternates: { canonical: "/" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <Hero />
      <MeetBeard />
      <GenresStrip />
      <Experience />
      <PerformanceHighlights />
      <ServicesOverview />
      <VideoShowcase />
      <WhyChoose />
      <Testimonials />
      <FaqSection />
      <CtaBand />
    </>
  );
}
