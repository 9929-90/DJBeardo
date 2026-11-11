
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages static export
  output: "export",
  trailingSlash: true,

  // Static image support
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 480, 640, 768, 1024, 1280, 1536, 1920, 2560, 3840],
    imageSizes: [96, 128, 192, 256, 320, 384, 480, 560, 640, 768, 960],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  reactStrictMode: false,
};

export default nextConfig;
