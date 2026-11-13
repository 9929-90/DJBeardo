export const SITE = {
  name: "DJ Beard",
  legalName: "DJ Beard Udaipur",
  url: "https://djbeardudaipur.com",
  tagline: "Professional DJ in Udaipur",
  description:
    "DJ Beard is a professional DJ in Udaipur with 17+ years of experience performing at weddings, sangeets, corporate events, club nights and private parties across Rajasthan. Book the best DJ in Udaipur for an unforgettable music experience.",
  phoneDisplay: "+91 88242 22123",
  phoneRaw: "+918824222123",
  whatsapp: "918824222123",
  // Verified business email — left empty until an official address is confirmed.
  // The contact page hides the Email option while this is empty.
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  address: {
    street: "226 North Ayad",
    city: "Udaipur",
    region: "Rajasthan",
    postalCode: "313001",
    country: "IN",
  },
  geo: { lat: 24.5854, lng: 73.7125 }, // Udaipur city centre (approximate, locality-level only)
  social: {
    instagram: "https://www.instagram.com/dj_beard_udaipur123/",
    facebook: "https://www.facebook.com/p/DJ-Beard-Udaipur-100063892758523/",
    whatsapp: "https://wa.me/918824222123",
  },
  founded: 2008, // 17+ years of experience as published on the previous website
  keywords: [
    "Best DJ in Udaipur",
    "DJ in Udaipur",
    "Professional DJ in Udaipur",
    "DJ Beard Udaipur",
    "Wedding DJ in Udaipur",
    "Party DJ Udaipur",
    "DJ booking Udaipur",
    "Corporate event DJ Udaipur",
    "DJ for events in Udaipur",
    "Sangeet DJ Udaipur",
    "Festive DJ in Udaipur",
    "Holi DJ in Udaipur",
    "Pioneer CDJ DJ in Udaipur",
  ],
  // Placeholders — replace via environment variables in production.
  analytics: {
    gaMeasurementId: process.env.NEXT_PUBLIC_GA_ID ?? "", // e.g. G-XXXXXXXXXX
    gscVerification: process.env.NEXT_PUBLIC_GSC_VERIFICATION ?? "",
  },
} as const;

export const WHATSAPP_BOOKING_MESSAGE =
  "Hello DJ Beard, I would like to enquire about booking you for an upcoming event in Udaipur.";

export function waLink(message: string = WHATSAPP_BOOKING_MESSAGE) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** WhatsApp link prefilled for a specific service enquiry. */
export function waServiceLink(serviceName: string) {
  return waLink(
    `Hello DJ Beard, I would like to enquire about booking you for an upcoming event in Udaipur — specifically your ${serviceName} service.`
  );
}
