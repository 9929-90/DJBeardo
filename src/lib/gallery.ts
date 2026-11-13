export type GalleryPhoto = {
  src: string;
  alt: string;
  caption: string;
  ratio: "landscape" | "portrait";
  span?: "wide";
  /** Small highlight chip rendered on the tile (e.g. industry recognition). */
  badge?: string;
};

export type GalleryVideo = {
  src: string;
  poster: string;
  alt: string;
  caption: string;
  ratio: "landscape" | "portrait";
};

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    src: "/media/photos/venue-stage-live-band.webp",
    alt: "DJ Beard performing on a live stage with a large LED backdrop, a keyboardist and a young performer at the microphone",
    caption: "Live stage — full band, full light",
    ratio: "landscape",
    span: "wide",
  },
  {
    src: "/media/photos/moment-award-ovation-jaipur.webp",
    alt: "DJ Beard with the Sound Innovation-1 medal and certificate at the OVATION-1 Annual Meet in Jaipur",
    caption: "Sound Innovation-1 — Jaipur",
    ratio: "landscape",
    badge: "Industry recognition",
  },
  {
    src: "/media/photos/portrait-decks-closeup.webp",
    alt: "Close-up of DJ Beard mixing on a Pioneer CDJ during a night performance",
    caption: "At the CDJs, up close",
    ratio: "landscape",
  },
  {
    src: "/media/photos/moment-corporate-folk-night.webp",
    alt: "DJ Beard performing at a corporate event night with Rajasthani folk musicians on stage",
    caption: "Corporate night, live folk",
    ratio: "landscape",
  },
  {
    src: "/media/photos/moment-pioneer-rig-night.webp",
    alt: "Pioneer CDJ-2000NXS2 and DJM-900NXS2 rig with a full sound system at an outdoor night event",
    caption: "Pioneer rig under the lights",
    ratio: "landscape",
  },
  {
    src: "/media/photos/portrait-hoodie-pink-stage.webp",
    alt: "DJ Beard performing under pink stage lights in his signature hoodie",
    caption: "Always myself on stage",
    ratio: "portrait",
  },
  {
    src: "/media/photos/perf-rooftop-lake.webp",
    alt: "DJ Beard performing on a rooftop overlooking Lake Pichola at dusk in Udaipur",
    caption: "Rooftop set above the lake",
    ratio: "landscape",
  },
  {
    src: "/media/photos/perf-crowd-green.webp",
    alt: "Massive outdoor crowd enjoying a DJ Beard live performance in Udaipur at night",
    caption: "Open-air crowd, city celebration",
    ratio: "landscape",
    span: "wide",
  },
  {
    src: "/media/photos/perf-stage-silhouette.webp",
    alt: "DJ Beard silhouetted against red and purple stage lights during a live set",
    caption: "Silhouettes and lasers",
    ratio: "landscape",
  },
  {
    src: "/media/photos/perf-console-dandiya.webp",
    alt: "Close-up of DJ Beard's mixer console during a dandiya night in Udaipur",
    caption: "Dandiya night console",
    ratio: "landscape",
  },
  {
    src: "/media/photos/venue-palace-interior.webp",
    alt: "DJ Beard performing inside a royal palace hall at a Udaipur destination wedding",
    caption: "Palace wedding, Udaipur",
    ratio: "landscape",
  },
  {
    src: "/media/photos/perf-pads.webp",
    alt: "Colourful performance pads on DJ Beard's controller during a live mix",
    caption: "Fingerwork close-up",
    ratio: "landscape",
  },
  {
    src: "/media/photos/moment-sangeet-dance.webp",
    alt: "Guests dancing together at the DJ booth during a sangeet celebration",
    caption: "Sangeet joy",
    ratio: "portrait",
  },
  {
    src: "/media/photos/perf-rooftop-night.webp",
    alt: "Night rooftop party with guests dancing around DJ Beard's setup facing the lake",
    caption: "Rooftop energy after dark",
    ratio: "landscape",
  },
  {
    src: "/media/photos/perf-red-console.webp",
    alt: "DJ Beard at the console under deep red club lighting",
    caption: "Deep red room",
    ratio: "landscape",
  },
  {
    src: "/media/photos/venue-lake-laser.webp",
    alt: "Red laser beams over Lake Pichola during a Udaipur night event",
    caption: "Lasers over the lake",
    ratio: "landscape",
  },
  {
    src: "/media/photos/venue-palace-purple.webp",
    alt: "Heritage palace facade illuminated in purple during a night celebration",
    caption: "Purple palace",
    ratio: "landscape",
  },
  {
    src: "/media/photos/bts-poolside.webp",
    alt: "DJ Beard with headphones at a poolside setup at a resort event",
    caption: "Poolside warm-up",
    ratio: "landscape",
  },
  {
    src: "/media/photos/bts-camera-selfie.webp",
    alt: "DJ Beard capturing a behind-the-scenes photo with his camera before a performance",
    caption: "Behind the lens, before the set",
    ratio: "portrait",
  },
];

export const GALLERY_VIDEOS: GalleryVideo[] = [
  {
    src: "/media/videos/showcase-crowd.mp4",
    poster: "/media/posters/showcase-crowd.webp",
    alt: "Ocean of guests with phone lights at a DJ Beard open-air performance",
    caption: "The crowd at full voice",
    ratio: "landscape",
  },
  {
    src: "/media/videos/techno-night.mp4",
    poster: "/media/posters/techno-night.webp",
    alt: "Close-up of DJ Beard's Pioneer console during a techno night set",
    caption: "Techno night, up close",
    ratio: "landscape",
  },
  {
    src: "/media/videos/sangeet-bhairavgarh.mp4",
    poster: "/media/posters/sangeet-bhairavgarh.webp",
    alt: "Sangeet celebration at Bhairavgarh Palace with DJ Beard performing",
    caption: "Sangeet at Bhairavgarh Palace",
    ratio: "landscape",
  },
  {
    src: "/media/videos/party-energy.mp4",
    poster: "/media/posters/party-energy.webp",
    alt: "Party floor packed with dancing guests in magenta light",
    caption: "Peak-hour party floor",
    ratio: "portrait",
  },
  {
    src: "/media/videos/oberoi-udaivilas.mp4",
    poster: "/media/posters/oberoi-udaivilas.webp",
    alt: "Evening performance at The Oberoi Udaivilas, Udaipur",
    caption: "Evenings at The Oberoi Udaivilas",
    ratio: "landscape",
  },
  {
    src: "/media/videos/crowd-bambhole.mp4",
    poster: "/media/posters/crowd-bambhole.webp",
    alt: "Huge festival crowd singing along during a DJ Beard set",
    caption: "Singalong at full volume",
    ratio: "landscape",
  },
];
