DJ BEARD WEBSITE — UPDATED FILES (16 Nov 2026, batch 6)
=======================================================

WHAT CHANGED
------------
As requested (screenshot + WhatsApp identifications):
REMOVED three video cards from "Fresh from the decks":
  - Corporate Event            (recent-corporate-event.mp4)
  - Live Crowd Moments         (recent-crowd-moments.mp4)
  - Live Performance Highlights (recent-live-highlights.mp4)

ADDED three new cards in their places — captions exactly as the client
identified them on WhatsApp:
  1. VIDEO "Sukhwinder - at Mementos by ITC Hotels"
     (the 0:35 clip, "Sukhwinder wali me at Mementos by ITC Hotels";
     re-cropped 16 Nov so the OnePlus camera watermark is out of frame —
     the card view is zoomed in slightly as a result)
     files: public/media/videos/recent-sukhwinder-mementos.mp4
            public/media/posters/recent-sukhwinder-mementos.webp
  2. PHOTO "Live Sound Academy with Sunil Sir"
     (photo in front of the LSA logo wall)
     file:  public/media/photos/recent-academy-sunil.webp
  3. PHOTO "Music Festival at City Palace"
     (Udaipur World Music Festival backdrop)
     file:  public/media/photos/recent-city-palace-festival.webp

The section keeps the equal-card design: 10 cards, all the same 3/4 size,
five per row on desktop, two on phones. Kutle Khan's title still shows above
its play button; the new Sukhwinder card behaves like the other video cards.

5. Equipment image fix: the CDJ-2000NXS2 entry showed the older CDJ-2000
   deck. Replaced with the official Pioneer CDJ-2000NXS2 product render
   (public/media/equipment/pioneer-cdj-2000nxs2.webp). The name text was
   already correct (CDJ-2000NXS2 = "Nexus 2"); only the image changed.

TO APPLY
--------
1. Copy the files in this folder over your project (same paths):
   - src/components/sections/recent-highlights.tsx   (replaces existing)
   - src/components/sections/home-sections.tsx       (replaces existing)
   - src/app/page.tsx                                (replaces existing)
   - tsconfig.json                                   (replaces existing)
   - public/media/videos/recent-sukhwinder-mementos.mp4      (new)
   - public/media/posters/recent-sukhwinder-mementos.webp    (new)
   - public/media/photos/recent-academy-sunil.webp           (new)
   - public/media/photos/recent-city-palace-festival.webp    (new)
   - public/media/equipment/pioneer-cdj-2000nxs2.webp        (replaces existing)
2. Delete the three replaced files (no longer referenced):
   - public/media/videos/recent-corporate-event.mp4
   - public/media/videos/recent-crowd-moments.mp4
   - public/media/videos/recent-live-highlights.mp4
   - public/media/posters/recent-corporate-event.webp
   - public/media/posters/recent-crowd-moments.webp
   - public/media/posters/recent-live-highlights.webp
3. Rebuild (npm run build) — or deploy as before.

NOTE: the full DJBeard-Website-NewLogo.zip on the delivery page is from the
previous batch and does NOT include this change. These updated files are the
complete change set — nothing else was touched.
