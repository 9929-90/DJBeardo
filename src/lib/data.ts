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
    metaTitle: "Wedding DJ in Udaipur | Sangeet & Wedding DJ Booking | DJ Beard",
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
      "Premium sound & lighting setups suited to palace venues",
    ],
    image: "/media/photos/palace-wedding-court.webp",
    imageAlt: "Royal courtyard dinner reception at a destination wedding venue in Udaipur",
  },
  {
    slug: "party-dj",
    name: "Party & Private Events DJ",
    short: "Birthdays, anniversaries, pool parties, house parties and private celebrations with the perfect playlist.",
    focus: "Party DJ in Udaipur",
    metaTitle: "Party DJ in Udaipur | Birthday & Private Party DJ | DJ Beard",
    metaDescription:
      "Looking for a party DJ in Udaipur? DJ Beard brings 17+ years of floor-filling experience to birthdays, anniversaries, pool parties and private celebrations across the city.",
    description: [
      "A great party is built on momentum. DJ Beard reads the room from the first hour — easing guests in with familiar favourites, lifting the tempo as the floor fills and keeping everyone locked in with seamless Bollywood remixes, Punjabi hits, commercial house and chart-topping EDM.",
      "From milestone birthdays and anniversaries to pool parties, rooftop gatherings and house parties across Udaipur, every set is shaped around your guest list. Want a retro-heavy evening for a family celebration? A bass-heavy club-style night for friends? A kid-friendly early evening that turns into an adults-only dance floor later? The set adapts to you.",
      "The setup is scaled to the occasion — compact, elegant rigs for intimate venues and full production with lighting for large private properties. You get the same professional mixing, clean transitions and crowd-aware programming that have made DJ Beard a familiar name at Udaipur's best private celebrations.",
    ],
    highlights: [
      "Birthdays, anniversaries & family celebrations",
      "Pool parties, rooftop & house parties",
      "Custom playlists for your guest list",
      "Compact to full-scale sound & light setups",
      "MC coordination available with trusted local anchors",
    ],
    image: "/media/photos/party-dancefloor-purple.webp",
    imageAlt: "Dance floor bathed in purple light during a private party celebration in Udaipur",
  },
  {
    slug: "corporate-events-dj",
    name: "Corporate Event DJ",
    short: "Annual days, product launches, award nights and office parties handled with professional precision.",
    focus: "Corporate Event DJ Udaipur",
    metaTitle: "Corporate Event DJ in Udaipur | Office Party & Annual Day DJ | DJ Beard",
    metaDescription:
      "Professional corporate event DJ in Udaipur. DJ Beard delivers polished music programming for annual days, product launches, award nights and office parties — on time, on brief.",
    description: [
      "Corporate events demand a different discipline: punctuality, a clean stage presence, appropriate volume during formal segments and energy exactly when the agenda calls for it. DJ Beard has performed at corporate annual days, team celebrations, product launches and hotel-hosted business events across Udaipur, including five-star properties like ITC and Marriott-group hotels.",
      "The music plan is agreed in advance — walk-in and registration ambiance, award-moment stings, dinner-background sets and the after-party that releases the day's energy. International EDM, commercial house, retro pop and Bollywood all rotate smoothly depending on the audience and company culture.",
      "Technical reliability is non-negotiable: redundant equipment, neat cable management, stage-appropriate lighting and quiet, coordinated changeovers. Event managers and hotel AV teams get a single professional point of contact for the entire audio experience.",
    ],
    highlights: [
      "Annual days, award nights & office parties",
      "Product launches & brand activations",
      "Hotel & resort corporate offsites",
      "Background, dinner & after-party programming",
      "Reliable, redundant professional equipment",
    ],
    image: "/media/photos/corporate-ballroom-led.webp",
    imageAlt: "LED stage and professional lighting at a corporate gala in a luxury hotel ballroom",
  },
  {
    slug: "club-events-dj",
    name: "Club Nights & Special Events",
    short: "Club residencies, festival stages, techno nights and large-format live performances.",
    focus: "Club DJ in Udaipur",
    metaTitle: "Club DJ in Udaipur | Techno, Bollywood & EDM Nights | DJ Beard",
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
    image: "/media/photos/console-cdj-dark.webp",
    imageAlt: "Hands mixing on a professional CDJ console during a live club performance",
  },
];

export type Genre = { name: string; blurb: string };

export const GENRES: Genre[] = [
  { name: "Bollywood", blurb: "Timeless classics to the latest chartbusters — electrifying remixes and mashups from Indian cinema." },
  { name: "Punjabi", blurb: "Dhol-driven anthems and bass-heavy bangers, from bhangra classics to modern trap-fusion." },
  { name: "EDM", blurb: "Explosive drops and euphoric builds — progressive house to big-room anthems." },
  { name: "Commercial House", blurb: "High-energy mainstream house that keeps international and desi floors moving together." },
  { name: "Hip-Hop", blurb: "Raw beats and heavyweight rhythms, from underground classics to mainstream hits." },
  { name: "R&B", blurb: "Smooth grooves and soulful moments for the mellow stretch of the night." },
  { name: "English Retro", blurb: "70s and 80s disco and synthwave nostalgia that pulls every generation onto the floor." },
  { name: "Techno", blurb: "Dark, driving, hypnotic — for underground rooms and dedicated techno nights." },
];

export type Testimonial = { name: string; text: string; meta: string };

// Curated from the client reviews published on the previous website.
export const TESTIMONIALS: Testimonial[] = [
  { name: "JK Events and Decoration", text: "Amazing and superb DJ… best mixing — Bollywood, techno, Gujarati, Punjabi etc.", meta: "Event partner" },
  { name: "Anchor Mohit Sharma", text: "DJ Beard Udaipur… one of the most enthusiastic DJs in Udaipur. Full-on power-packed performer.", meta: "Professional anchor" },
  { name: "Deepu Mali", text: "Best DJ in Udaipur.", meta: "Client" },
  { name: "Yudhishtar Jatoliya", text: "Too cool DJ with high-quality sound system.", meta: "Client" },
  { name: "Kiran Paliwal", text: "Excellent service. Professional audio-visual equipment rental in Udaipur city.", meta: "Client" },
  { name: "Kavita Lur", text: "Bollywood and retro — superb mix.", meta: "Client" },
];

export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: "How do I book DJ Beard for my event in Udaipur?",
    a: "The simplest way is to call or WhatsApp +91 88242 22123, or send the booking form on this website with your event date, venue and type. You will receive availability and a quotation, and your date is blocked only after confirmation.",
  },
  {
    q: "How early should I book for a wedding or sangeet?",
    a: "For weddings during peak season (October to February) it is best to enquire 2–3 months ahead, since popular dates go quickly. For birthdays, private parties and corporate events, 2–4 weeks is usually comfortable.",
  },
  {
    q: "Which kinds of events does DJ Beard perform at?",
    a: "Weddings and sangeets, mehendi and haldi functions, receptions, birthdays, anniversaries, club nights, corporate annual days, product launches, school and college festivals, and private parties across Udaipur and Rajasthan.",
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
    a: "Pricing depends on the event type, duration, guest count, travel distance and the sound-and-light setup required. Share your event details on WhatsApp or the booking form and you will receive a clear, itemised quotation — with no hidden charges.",
  },
  {
    q: "Can DJ Beard provide sound and lighting equipment too?",
    a: "Yes. Professional audio, lighting and LED setups can be arranged at any scale — from compact systems for house parties to full production rigs for palace venues and festival stages.",
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
