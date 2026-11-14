export type Service = {
  slug: string;
  name: string;
  short: string;
  focus: string; // primary keyword for the dedicated page
  metaTitle: string;
  metaDescription: string;
  description: string[];
  highlights: string[];
  image: string;
  imageAlt: string;
};

export const SERVICES: Service[] = [
  {
    slug: "wedding-dj",
    name: "Wedding DJ",
    short: "Weddings, sangeet, mehendi, haldi, baraat and reception nights across Udaipur and Rajasthan.",
    focus: "Wedding DJ in Udaipur",
    metaTitle: "Wedding DJ in Udaipur",
    metaDescription:
      "Book DJ Beard — a professional wedding DJ in Udaipur with 17+ years of experience at sangeets, baraats, destination weddings and receptions across Udaipur and Rajasthan.",
    description: [
      "A wedding is a once-in-a-lifetime celebration, and the music decides how it feels. As a professional wedding DJ in Udaipur, DJ Beard has spent more than seventeen years scoring every kind of wedding moment — the high-energy baraat entry, the emotional sangeet performances, the mehendi afternoon, the haldi morning and the reception night that carries guests until the very last dance.",
      "Udaipur has become one of India's favourite destination wedding cities, and DJ Beard has performed at many of its most celebrated venues — palace courtyards, lakeside resorts and luxury hotels including The Oberoi Udaivilas, ITC Rajputana properties, Ramada, Udai Kothi, Kumbhalgarh and Bhairavgarh Palace. Every set is planned around your ceremony schedule, your family's preferences and the crowd in front of him.",
      "From Bollywood classics and Punjabi dhol-driven anthems to retro favourites and modern EDM drops, the music flows with the ceremony — never against it. Sound levels are tuned for each moment: warm and conversational during rituals, powerful and celebratory on the dance floor.",
    ],
    highlights: [
      "Sangeet, mehendi, haldi, baraat & reception coverage",
      "Destination weddings across Udaipur, Kumbhalgarh & Nathdwara",
      "Coordination with wedding planners, anchors & choreographers",
      "Bollywood, Punjabi, retro & EDM tailored to your guest mix",
      "Premium audio production suited to palace venues",
    ],
    image: "/media/photos/venue-stage-live-band.webp",
    imageAlt: "DJ Beard performing on a wedding stage with a large LED backdrop, live keyboardist and a young performer at the microphone",
  },
  {
    slug: "party-dj",
    name: "Party & Private Events DJ",
    short: "Birthdays, anniversaries, pool parties, house parties and private celebrations with the perfect playlist.",
    focus: "Party DJ in Udaipur",
    metaTitle: "Party DJ in Udaipur",
    metaDescription:
      "Looking for a party DJ in Udaipur? DJ Beard brings 17+ years of floor-filling experience to birthdays, anniversaries, pool parties and private celebrations across the city.",
    description: [
      "A great party is built on momentum. DJ Beard reads the room from the first hour — easing guests in with familiar favourites, lifting the tempo as the floor fills and keeping everyone locked in with seamless Bollywood remixes, Punjabi hits, commercial house and chart-topping EDM.",
      "From milestone birthdays and anniversaries to pool parties, rooftop gatherings and house parties across Udaipur, every set is shaped around your guest list. Want a retro-heavy evening for a family celebration? A bass-heavy club-style night for friends? A kid-friendly early evening that turns into an adults-only dance floor later? The set adapts to you.",
      "The setup is scaled to the occasion — compact, elegant rigs for intimate venues and full audio production for large private properties. You get the same professional mixing, clean transitions and crowd-aware programming that have made DJ Beard a familiar name at Udaipur's best private celebrations.",
    ],
    highlights: [
      "Birthdays, anniversaries & family celebrations",
      "Pool parties, rooftop & house parties",
      "Custom playlists for your guest list",
      "Compact to full-scale production setups",
      "MC coordination available with trusted local anchors",
    ],
    image: "/media/photos/perf-magenta.webp",
    imageAlt: "DJ Beard performing at a private party in Udaipur under magenta stage lighting",
  },
  {
    slug: "corporate-events-dj",
    name: "Corporate Event DJ",
    short: "Annual days, product launches, award nights and office parties handled with professional precision.",
    focus: "Corporate Event DJ Udaipur",
    metaTitle: "Corporate Event DJ in Udaipur",
    metaDescription:
      "Professional corporate event DJ in Udaipur. DJ Beard delivers polished music programming for annual days, product launches, award nights and office parties — on time, on brief.",
    description: [
      "Corporate events demand a different discipline: punctuality, a clean stage presence, appropriate volume during formal segments and energy exactly when the agenda calls for it. DJ Beard has performed at corporate annual days, team celebrations, product launches and hotel-hosted business events across Udaipur, including five-star properties like ITC and Marriott-group hotels.",
      "The music plan is agreed in advance — walk-in and registration ambiance, award-moment stings, dinner-background sets and the after-party that releases the day's energy. International EDM, commercial house, retro pop and Bollywood all rotate smoothly depending on the audience and company culture.",
      "Technical reliability is non-negotiable: redundant equipment, neat cable management, stage-appropriate presentation and quiet, coordinated changeovers. Event managers and hotel AV teams get a single professional point of contact for the entire audio experience.",
    ],
    highlights: [
      "Annual days, award nights & office parties",
      "Product launches & brand activations",
      "Hotel & resort corporate offsites",
      "Background, dinner & after-party programming",
      "Reliable, redundant professional equipment",
    ],
    image: "/media/photos/moment-corporate-folk-night.webp",
    imageAlt: "DJ Beard performing at a corporate event night with Rajasthani folk musicians in traditional dress on stage",
  },
  {
    slug: "club-events-dj",
    name: "Club Nights & Special Events",
    short: "Club residencies, festival stages, techno nights and large-format live performances.",
    focus: "Club DJ in Udaipur",
    metaTitle: "Club Event DJ in Udaipur",
    metaDescription:
      "DJ Beard brings 17+ years of club experience to Udaipur nightlife — techno nights, Bollywood remix sessions, EDM stages and special large-format live performances.",
    description: [
      "Club sets are where DJ Beard's craft shows at its sharpest: three-deck mixing, genre-blending transitions and a strict instinct for when to push a room over the edge. From dedicated techno nights to Bollywood-EDM fusion sessions and open-format weekend floors, each set is built live — never a fixed playlist.",
      "Beyond the club, DJ Beard has performed on festival stages and large-format special events across Rajasthan, including city-centre New Year celebrations, Holi parties, dandiya nights and music-festival line-ups in front of thousands of guests.",
      "Venues and promoters get dependable drop-in sets or full production packages, with technical riders handled cleanly and promotion-friendly photography and video of the performance.",
    ],
    highlights: [
      "Club nights & guest DJ slots",
      "Techno, house, Bollywood & EDM formats",
      "Festival stages & city celebrations",
      "Holi, New Year & dandiya special events",
      "Full production & technical rider support",
    ],
    image: "/media/photos/perf-stage-silhouette.webp",
    imageAlt: "DJ Beard silhouetted against purple and red stage lights during a live club performance in Udaipur",
  },
  {
    slug: "festive-dj",
    name: "Festive DJ",
    short: "Holi celebrations, cultural festivals and seasonal events — high-energy performances with unforgettable festive vibes.",
    focus: "Festive DJ in Udaipur",
    metaTitle: "Festive DJ in Udaipur",
    metaDescription:
      "Book DJ Beard as your festive DJ in Udaipur — high-energy DJ performances, vibrant music and unforgettable festive vibes for Holi celebrations, cultural festivals, New Year nights and seasonal events.",
    description: [
      "Bring every celebration to life with high-energy DJ performances, vibrant music and unforgettable festive vibes. From Holi celebrations to cultural festivals and seasonal events, DJ Beard sets the perfect atmosphere — reading the occasion, the crowd and the moment, and lifting the energy exactly when it should be lifted.",
      "Festive floors play by different rules. Colours flying on Holi call for booming Punjabi anthems and remixes that match the celebration's chaos; Navratri nights move to dandiya and garba rhythms; New Year countdowns build towards one collective drop at midnight; community and society events want everyone — kids to grandparents — on the same floor. Every set is programmed for the festival in front of him, never a fixed playlist.",
      "From open-air grounds and society lawns to resort pool decks and city festival stages across Udaipur and Rajasthan, DJ Beard brings the same professional standard: crisp mixing, clean transitions, festival-grade energy and a performance that turns a celebration into a memory.",
    ],
    highlights: [
      "Holi celebrations & colour parties",
      "Cultural festivals & community events",
      "New Year & seasonal countdown nights",
      "Navratri dandiya & garba nights",
      "School, college & society festivals",
      "High-energy festive programming for every crowd",
    ],
    image: "/media/photos/perf-console-dandiya.webp",
    imageAlt: "Festive DJ performance — DJ Beard at the console during a vibrant festival night celebration with traditionally dressed dancers in Udaipur",
  },
];

/* ============ PROFESSIONAL DJ EQUIPMENT ============ */
export type EquipmentItem = {
  name: string;
  role: string;
  image: string;
  imageAlt: string;
};

export type EquipmentSetup = {
  id: string;
  label: string;
  name: string;
  tagline: string;
  description: string;
  items: EquipmentItem[];
};

/**
 * Pioneer DJ systems DJ Beard is experienced in operating.
 * These setups describe operating expertise — ownership and provision of the
 * equipment is NOT claimed; gear is typically supplied by venues and event partners.
 */
export const EQUIPMENT_SETUPS: EquipmentSetup[] = [
  {
    id: "setup-flagship",
    label: "Setup 1",
    name: "Pioneer CDJ-3000 + DJM-A9",
    tagline: "The current club-standard flagship",
    description:
      "The configuration found in the world's leading booths. DJ Beard is experienced in operating the Pioneer CDJ-3000 multi player with the DJM-A9 mixer — from the large touchscreens and hotspot cues on the CDJ-3000 to the mixing flexibility and sound-colour FX of the DJM-A9.",
    items: [
      {
        name: "Pioneer CDJ-3000",
        role: "Professional multi player",
        image: "/media/equipment/pioneer-cdj-3000.webp",
        imageAlt: "Pioneer CDJ-3000 professional DJ multi player",
      },
      {
        name: "Pioneer DJM-A9",
        role: "Professional 6-channel club mixer",
        image: "/media/equipment/pioneer-djm-a9.webp",
        imageAlt: "Pioneer DJM-A9 professional DJ mixer",
      },
    ],
  },
  {
    id: "setup-classic",
    label: "Setup 2",
    name: "Pioneer CDJ-2000NXS2 + DJM-900NXS2",
    tagline: "The industry workhorse, still everywhere",
    description:
      "The setup that defined a decade of DJ booths and remains a fixture at venues across India. DJ Beard is experienced in operating the Pioneer CDJ-2000NXS2 with the DJM-900NXS2 mixer — CDJ-quality playback, beat effects and the precise, familiar workflow this pair is known for.",
    items: [
      {
        name: "Pioneer CDJ-2000NXS2",
        role: "Professional multi player",
        image: "/media/equipment/pioneer-cdj-2000nxs2.webp",
        imageAlt: "Pioneer CDJ-2000NXS2 professional DJ multi player",
      },
      {
        name: "Pioneer DJM-900NXS2",
        role: "Professional 4-channel club mixer",
        image: "/media/equipment/pioneer-djm-900nxs2.webp",
        imageAlt: "Pioneer DJM-900NXS2 professional DJ mixer",
      },
    ],
  },
];

export type Genre = { name: string; blurb: string; image: string; imageAlt: string; wide?: boolean };

/** Photos are drawn from the supplied event image collection — no stock imagery. */
export const GENRES: Genre[] = [
  {
    name: "Bollywood",
    blurb: "Timeless classics to the latest chartbusters — electrifying remixes and mashups from Indian cinema.",
    image: "/media/photos/moment-sangeet-dance.webp",
    imageAlt: "Guests dancing to Bollywood hits at a sangeet celebration performed by DJ Beard",
  },
  {
    name: "Punjabi",
    blurb: "Dhol-driven anthems and bass-heavy bangers, from bhangra classics to modern trap-fusion.",
    image: "/media/photos/perf-crowd-green.webp",
    imageAlt: "Massive open-air crowd at a DJ Beard performance full of Punjabi anthems in Udaipur",
  },
  {
    name: "EDM",
    blurb: "Explosive drops and euphoric builds — progressive house to big-room anthems.",
    image: "/media/photos/perf-stage-silhouette.webp",
    imageAlt: "DJ Beard silhouetted against lasers during an EDM set in Udaipur",
  },
  {
    name: "Commercial House",
    blurb: "High-energy mainstream house that keeps international and desi floors moving together.",
    image: "/media/photos/perf-magenta.webp",
    imageAlt: "DJ Beard performing mainstream house music under magenta party lighting",
  },
  {
    name: "Hip-Hop",
    blurb: "Raw beats and heavyweight rhythms, from underground classics to mainstream hits.",
    image: "/media/photos/portrait-cap-studio.webp",
    imageAlt: "DJ Beard in the studio wearing his signature cap — hip-hop and urban sets",
  },
  {
    name: "R&B",
    blurb: "Smooth grooves and soulful moments for the mellow stretch of the night.",
    image: "/media/photos/perf-red-console.webp",
    imageAlt: "DJ Beard at the console under deep red club lighting during a smooth R&B set",
  },
  {
    name: "English Retro",
    blurb: "70s and 80s disco and synthwave nostalgia that pulls every generation onto the floor.",
    image: "/media/photos/perf-rooftop-lake.webp",
    imageAlt: "Golden dusk rooftop set over Lake Pichola — retro classics by DJ Beard in Udaipur",
  },
  {
    name: "Techno",
    blurb: "Dark, driving, hypnotic — for underground rooms and dedicated techno nights.",
    image: "/media/posters/techno-night.webp",
    imageAlt: "Close-up of DJ Beard's Pioneer console during a dedicated techno night",
  },
  {
    name: "Holi & Festival Stages",
    blurb: "The colour-festival special: gulal-soaked Holi sets and open-air festival stages where dhol meets EDM, colour cannons fly and the whole ground moves as one.",
    image: "/media/photos/genre-holi-festival.webp",
    imageAlt: "DJ Beard covered in gulal colours mixing a Holi festival set at the console in Udaipur",
    wide: true,
  },
];

export type Testimonial = { name: string; text: string; meta: string };

// Curated from the client reviews published on the previous website.
export const TESTIMONIALS: Testimonial[] = [
  { name: "JK Events and Decoration", text: "Amazing and superb DJ… best mixing — Bollywood, techno, Gujarati, Punjabi etc.", meta: "Event partner" },
  { name: "Anchor Mohit Sharma", text: "DJ Beard Udaipur… one of the most enthusiastic DJs in Udaipur. Full-on power-packed performer.", meta: "Professional anchor" },
  { name: "Deepu Mali", text: "Best DJ in Udaipur.", meta: "Client" },
  { name: "Yudhishtar Jatoliya", text: "Too cool DJ with high-quality sound system.", meta: "Client" },
  { name: "Kavita Lur", text: "Bollywood and retro — superb mix.", meta: "Client" },
];

export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: "How do I book DJ Beard for my event in Udaipur?",
    a: "The simplest way is to WhatsApp or call +91 88242 22123 with your event date, venue and type. You will receive availability and a quotation directly on chat, and your date is blocked only after confirmation.",
  },
  {
    q: "How early should I book for a wedding or sangeet?",
    a: "For weddings during peak season (October to February) it is best to enquire 2–3 months ahead, since popular dates go quickly. For birthdays, private parties and corporate events, 2–4 weeks is usually comfortable.",
  },
  {
    q: "Which kinds of events does DJ Beard perform at?",
    a: "Weddings and sangeets, mehendi and haldi functions, receptions, birthdays, anniversaries, club nights, corporate annual days, product launches, school and college festivals, Holi and festive celebrations, and private parties across Udaipur and Rajasthan.",
  },
  {
    q: "What music genres does DJ Beard play?",
    a: "Bollywood and Punjabi remixes, commercial house, EDM, hip-hop, R&B, English retro (70s & 80s) and techno. Every set is mixed live and shaped to your crowd — no fixed playlists.",
  },
  {
    q: "Does DJ Beard travel outside Udaipur?",
    a: "Yes. Events are regularly performed across Rajasthan, including destination wedding locations such as Kumbhalgarh, Nathdwara, Bhairavgarh, Rajsamand and Mount Abu, as well as Jaipur and Jodhpur on request. Travel is planned into the quotation.",
  },
  {
    q: "How much does DJ booking cost in Udaipur?",
    a: "Pricing depends on the event type, duration, guest count, travel distance and the production the occasion calls for. Share your event details on WhatsApp and you will receive a clear, itemised quotation — with no hidden charges.",
  },
  {
    q: "What equipment does DJ Beard perform with?",
    a: "DJ Beard performs regularly on flagship Pioneer setups such as the CDJ-3000 with DJM-A9 and the CDJ-2000NXS2 with DJM-900NXS2, and works seamlessly with the gear supplied by venues and event partners. Every set is backed by sound tuned to the room before the first guest arrives.",
  },
  {
    q: "Do you take song requests from guests during the event?",
    a: "Absolutely. You can share a must-play and do-not-play list beforehand, and guests can request songs live — DJ Beard blends requests into the flow while keeping the energy of the floor intact.",
  },
];

export const STATS = [
  { value: 17, suffix: "+", label: "Years of Experience" },
  { value: 500, suffix: "+", label: "Events Performed" },
  { value: 8, suffix: "", label: "Music Genres" },
  { value: 1, suffix: "", label: "City — Udaipur", plain: "Udaipur" },
];
