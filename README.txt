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
five per row on desktop, two on phones. Kutle Khan's and Sukhwinder's titles
show above their play buttons (Sukhwinder's added on request, 16 Nov).

5. Equipment image fix: the CDJ-2000NXS2 entry showed the older CDJ-2000
   deck. Replaced with the official Pioneer CDJ-2000NXS2 product render
   (public/media/equipment/pioneer-cdj-2000nxs2.webp). The name text was
   already correct (CDJ-2000NXS2 = "Nexus 2"); only the image changed.
6. Wedding service page: added DJ-with-percussion — a sentence in the intro
   ("DJ Beard also plays DJ-with-percussion sets — a live percussionist
   jamming over the mix") and a new "What's included" bullet: "DJ with
   percussion — live dhol, tabla or drums over the decks".
   File: src/lib/data.ts.
7. Wedding service page: the percussion offer is now HIGHLIGHTED — a violet
   callout card ("DJ WITH PERCUSSION") sits between the intro and the
   "What's included" checklist. Files: src/lib/data.ts (new optional
   `accent` field on Service) + src/app/services/[slug]/page.tsx
   (renders the callout; other service pages are unaffected).
8. Gallery: FOUR new videos added (17 Nov, from the two WhatsApp zips) —
   "Big stage, bigger crowd" (gallery-big-stage.mp4 — the screen recording
   was cropped to the stage band so no black bars / app UI shows),
   "Full floor, green light" (gallery-full-floor.mp4),
   "Jai Ho night — Mementos by ITC Hotels" (gallery-jai-ho-mementos.mp4 —
   the OnePlus watermark is cropped out) and "Laser-lit ballroom night"
   (gallery-ballroom-night.mp4). Each with a poster webp.
   Files: public/media/videos/gallery-*.mp4 (4, new),
          public/media/posters/gallery-*.webp (4, new), src/lib/gallery.ts.
9. Wedding service photo REPLACED — the old stage photo showed half the
   performer on the 4/3 tile (head cut off, per the client's screenshot).
   New photo: rooftop set over Lake Pichola, shown FULLY in a 16/10 tile.
   Files: public/media/photos/wedding-rooftop-lake-pichola.webp (new),
          src/lib/data.ts (wedding image + alt),
          src/app/services/[slug]/page.tsx (16/10 ratio for this page only).
10. Google Drive button at the bottom of the gallery page — "Guests' photos
    & videos live on Google Drive" with an "Open the Drive gallery" button.
    *** PLACEHOLDER LINK ***: the URL lives in src/lib/site.ts as
    GALLERY_DRIVE_URL — replace "CLIENT-TO-REPLACE" in that constant with
    the real Drive folder link. Files: src/lib/site.ts (new constant),
    src/app/gallery/page.tsx (renders the card).
11. Services page (17 Nov): two spotlight pictures replaced —
    - Party & Private Events DJ: the old magenta close-up hid the artist.
      New photo: DJ Beard in the hoodie in front of the red LED star wall
      (public/media/photos/hoodie-led-wall.webp, new — cropped from the
      gallery portrait so the LED-panel close-up at the bottom is gone).
    - Festive DJ: the old console photo had a Redmi watermark. New photo:
      the colour-powder dance shot (moment-sangeet-dance.webp) shown FULLY
      in a 4/5 tile — matches the "Holi celebrations & colour parties"
      service. Portrait service images now render in 4/5 / 3/4 tiles
      (nothing cropped); other services keep 3/2 / 4/3.
    Files: src/lib/data.ts (images + alts + SERVICE_PORTRAIT_IMAGES),
           src/app/services/page.tsx, src/app/services/[slug]/page.tsx.
12. (17 Nov, follow-up) Festive DJ image REPLACED with the client's actual
    Holi picture — DJ Beard with colour powder on his face at the decks
    (public/media/photos/festive-holi-colours.webp, new — upscaled x3 from
    the sent photo). The colour-dance shot from item 11 is no longer used
    for this service. Also: the on-tile TITLES/CAPTIONS are removed from
    the gallery grid (tiles are now clean; the "Industry recognition"
    badge and the lightbox caption stay).
    Files: src/lib/data.ts (festive image + alt + SERVICE_PORTRAIT_IMAGES),
           src/components/gallery/gallery-grid.tsx (captions removed).
13. About page (17 Nov): two collage photos RECENTERED so DJ Beard is
    fully visible —
    - "On the decks above the city": source had him left of frame; new
      crop public/media/photos/rooftop-dj-city.webp (4:3, centred).
    - Poolside tile: the 3/4 crop cut his face at the top; new crop
      public/media/photos/poolside-dj-centred.webp (3:4, face + mixer
      centred).
    Files: src/app/about/page.tsx (tile srcs).
14. Home page — genres grid (17 Nov): the "Commercial House" card image
    (perf-magenta.webp) lost the whole head to the 4/3 tile crop. New
    crop public/media/photos/magenta-house-set.webp (4:3 band from the
    top of the source) — head, beard, headphones and hoodie now visible.
    Files: src/lib/data.ts (genre image + alt).
15. Sound on videos (17 Nov): every looping video now has a SPEAKER
    BUTTON (bottom-right of the tile) — one tap unmutes it and the sound
    plays. Browsers refuse to autoplay clips with sound, so clips still
    start silent (that cannot be bypassed); the tap-to-hear button is on
    all 10 gallery video tiles, the home "recent highlights" live clip
    and the home video player. The gallery LIGHTBOX now opens videos
    unmuted with full controls (the tile click authorises the sound).
    Click-to-play cards already played with sound — unchanged.
    Files: src/components/video-sound.tsx (new shared component),
           src/components/gallery/gallery-grid.tsx,
           src/components/sections/recent-highlights.tsx,
           src/components/sections/home-sections.tsx.
16. (17 Nov, follow-up) Audio audit of every video (ffprobe): NONE of
    the files are corrupted. Clips WITH full AAC audio: all four gallery
    clips (big-stage, full-floor, jai-ho, ballroom) + all three recent
    clips (sukhwinder, 31st-night, kutle-khan) — speaker buttons work
    on these. Clips with NO audio stream at all (silent from day one,
    shipped as template b-roll): showcase-crowd, techno-night,
    sangeet-bhairavgarh, party-energy, oberoi-udaivilas, crowd-bambhole.
    The speaker button no longer appears on those (it had nothing to
    unmute); they play as silent loops. To give them sound, send the
    originals WITH audio and they can be swapped in.
    Files: src/lib/gallery.ts (SILENT_VIDEOS list) + item 15 files.

TO APPLY
--------
1. Copy the files in this folder over your project (same paths):
   - src/lib/data.ts                                 (replaces existing)
   - src/lib/gallery.ts                              (replaces existing)
   - src/lib/site.ts                                 (replaces existing)
   - src/app/services/[slug]/page.tsx                (replaces existing)
   - src/app/about/page.tsx                          (replaces existing)
   - src/app/services/page.tsx                       (replaces existing)
   - src/app/gallery/page.tsx                        (replaces existing)
   - src/components/sections/recent-highlights.tsx   (replaces existing)
   - src/components/sections/home-sections.tsx       (replaces existing)
   - src/components/gallery/gallery-grid.tsx         (replaces existing)
   - src/components/video-sound.tsx                  (new)
   - src/app/page.tsx                                (replaces existing)
   - tsconfig.json                                   (replaces existing)
   - public/media/videos/recent-sukhwinder-mementos.mp4      (new)
   - public/media/posters/recent-sukhwinder-mementos.webp    (new)
   - public/media/photos/recent-academy-sunil.webp           (new)
   - public/media/photos/recent-city-palace-festival.webp    (new)
   - public/media/photos/wedding-rooftop-lake-pichola.webp   (new)
   - public/media/photos/hoodie-led-wall.webp                (new)
   - public/media/photos/festive-holi-colours.webp           (new)
   - public/media/photos/rooftop-dj-city.webp                (new)
   - public/media/photos/poolside-dj-centred.webp            (new)
   - public/media/photos/magenta-house-set.webp              (new)
   - public/media/equipment/pioneer-cdj-2000nxs2.webp        (replaces existing)
   - public/media/videos/gallery-big-stage.mp4               (new)
   - public/media/videos/gallery-full-floor.mp4              (new)
   - public/media/videos/gallery-jai-ho-mementos.mp4         (new)
   - public/media/videos/gallery-ballroom-night.mp4          (new)
   - public/media/posters/gallery-big-stage.webp             (new)
   - public/media/posters/gallery-full-floor.webp            (new)
   - public/media/posters/gallery-jai-ho-mementos.webp       (new)
   - public/media/posters/gallery-ballroom-night.webp        (new)
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
