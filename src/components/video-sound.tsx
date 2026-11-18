"use client";

import { useRef, useState } from "react";

export function SpeakerIcon({ on }: { on: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M11 5 6 9H2v6h4l5 4z" fill="currentColor" stroke="none" />
      {on ? (
        <>
          <path d="M15.5 8.5a5 5 0 0 1 0 7" />
          <path d="M18.5 5.5a9 9 0 0 1 0 13" />
        </>
      ) : (
        <path d="m16 9 6 6m0-6-6 6" />
      )}
    </svg>
  );
}

/**
 * Autoplaying muted loop with a tap-to-hear speaker toggle.
 *
 * The video starts silent because browsers refuse to autoplay clips with
 * sound. Unmuting a video that is ALREADY playing needs no extra
 * permission, so one tap on the speaker button always brings the sound
 * through. The button stops propagation so tiles that open a lightbox
 * keep working.
 */
export function SoundLoopVideo({
  src,
  poster,
  alt,
  className,
  preload = "metadata",
  lazy = false,
  noAudio = false,
}: {
  src: string;
  poster?: string;
  alt: string;
  className?: string;
  preload?: "auto" | "metadata" | "none";
  lazy?: boolean;
  /** File has no audio stream (see SILENT_VIDEOS) — no speaker button. */
  noAudio?: boolean;
}) {
  const [sound, setSound] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // React only applies the `muted` prop on mount (react#22770), so the
  // mute state is flipped imperatively — that change sticks.
  const toggleSound = () => {
    setSound((s) => !s);
    const v = videoRef.current;
    if (v) {
      v.muted = sound;
      if (v.paused) void v.play().catch(() => {});
    }
  };

  return (
    <>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload={preload}
        aria-label={alt}
        className={className}
        data-lazy-video={lazy ? "" : undefined}
      />
      {!noAudio ? (
        <button
          type="button"
          aria-label={sound ? "Mute the video" : "Unmute the video — hear the sound"}
          aria-pressed={sound}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleSound();
          }}
          className="absolute bottom-4 right-4 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/55 text-white backdrop-blur-sm transition-colors duration-300 hover:border-[var(--violet-brand)]/60 hover:bg-black/80"
        >
          <SpeakerIcon on={sound} />
        </button>
      ) : null}
    </>
  );
}
