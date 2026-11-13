import type { NextConfig } from "next";

/**
 * Static export configuration — the site is fully static for GitHub Pages.
 * - `output: "export"` writes plain HTML/CSS/JS to `out/`.
 * - `trailingSlash` gives directory-style URLs (`/about/`) that GitHub Pages
 *   serves correctly, including direct access and refresh.
 * - Images are pre-optimized WebP in /public, so the Next image optimizer
 *   (server-only) is disabled via `unoptimized`.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
