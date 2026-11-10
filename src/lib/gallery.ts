export type GalleryPhoto = {
  src: string;
  alt: string;
  caption: string;
  ratio: "landscape" | "portrait";
  span?: "wide";
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
    src: "/media/photos/beard-rooftop-lake.webp",
    alt: "DJ Beard performing at a rooftop DJ setup overlooking Lake Pichola in Udaipur",
    caption: "Rooftop set above the lake",
    ratio: "landscape",
  },
  {
    src: "/media/photos/crowd-festival-lasers.webp",
    alt: "Light beams sweeping over a massive open-air festival crowd at night",
    caption: "Open air, full volume",
    ratio: "landscape",
    span: "wide",
  },
  {
    src: "/media/photos/palace-wedding-hall.webp",
    alt: "Grand heritage palace hall dressed with chandeliers for a destination wedding celebration",
    caption: "Palace wedding, Udaipur",
    ratio: "landscape",
  },
  {
    src: "/media/photos/console-hands-club.webp",
    alt: "Hands mixing on a professional DJ mixer under green and red club lighting",
    caption: "Hands on the mixer",
    ratio: "landscape",
  },
  {
    src: "/media/photos/dandiya-dance-night.webp",
    alt: "Dandiya dancers in traditional attire performing on a festival stage",
    caption: "Dandiya night colours",
    ratio: "portrait",
  },
  {
    src: "/media/photos/dj-pads-closeup.webp",
    alt: "Performance pads and faders on a DJ controller glowing during a live set",
    caption: "Fingerwork close-up",
    ratio: "landscape",
  },
  {
    src: "/media/photos/rooftop-dusk-city.webp",
    alt: "Rooftop lounge overlooking the city skyline glowing at dusk",
    caption: "Rooftop energy after dark",
    ratio: "landscape",
  },
  {
    src: "/media/photos/club-red-room.webp",
    alt: "Packed club room bathed in deep red light during a live night",
    caption: "Deep red room",
    ratio: "landscape",
  },
  {
    src: "/media/photos/lake-laser-fortress.webp",
    alt: "Laser beams sweeping over a lakeside fortress at a night celebration",
    caption: "Lasers across the lake",
    ratio: "landscape",
  },
  {
    src: "/media/photos/garden-wedding-arch.webp",
    alt: "Couple beneath a floral archway at a garden destination wedding venue",
    caption: "Destination wedding decor",
    ratio: "landscape",
  },
  {
    src: "/media/photos/golden-umbrellas.webp",
    alt: "Ornate golden umbrella decor glowing above an Indian wedding celebration",
    caption: "Royal wedding details",
    ratio: "landscape",
  },
  {
    src: "/media/photos/crowd-night-confetti.webp",
    alt: "Confetti falling over a front-row crowd with raised hands at a live performance",
    caption: "Confetti, front row",
    ratio: "portrait",
  },
  {
    src: "/media/photos/royal-hall-purple.webp",
    alt: "Heritage royal hall glowing in purple uplighting before a grand celebration",
    caption: "Royal hall, purple hour",
    ratio: "portrait",
  },
];

export const GALLERY_VIDEOS: GalleryVideo[] = [
  {
    src: "/media/videos/showcase-crowd.mp4",
    poster: "/media/posters/showcase-crowd.webp",
    alt: "Ocean of guests holding phone lights at an open-air DJ Beard performance",
    caption: "The crowd at full voice",
    ratio: "landscape",
  },
  {
    src: "/media/videos/kumbhalgarh-courtyard.mp4",
    poster: "/media/posters/kumbhalgarh-courtyard.webp",
    alt: "Guests celebrating in a courtyard at Kumbhalgarh during a daytime event",
    caption: "Courtyard celebration, Kumbhalgarh",
    ratio: "landscape",
  },
  {
    src: "/media/videos/palace-ballroom.mp4",
    poster: "/media/posters/palace-ballroom.webp",
    alt: "Guests dancing at a palace ballroom celebration in Udaipur",
    caption: "Palace ballroom night",
    ratio: "landscape",
  },
  {
    src: "/media/videos/techno-console.mp4",
    poster: "/media/posters/techno-console.webp",
    alt: "DJ console bathed in deep red light during a techno night set",
    caption: "Techno night, up close",
    ratio: "portrait",
  },
  {
    src: "/media/videos/sangeet-florals.mp4",
    poster: "/media/posters/sangeet-florals.webp",
    alt: "Sangeet crowd dancing beneath hanging floral decor at Kumbhalgarh",
    caption: "Sangeet under the florals",
    ratio: "portrait",
  },
  {
    src: "/media/videos/party-purple.mp4",
    poster: "/media/posters/party-purple.webp",
    alt: "Party floor packed with dancing guests in violet light",
    caption: "Peak-hour party floor",
    ratio: "portrait",
  },
];
