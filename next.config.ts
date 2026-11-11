import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    /* AVIF first (smallest), WebP for browsers without AVIF support. */
    formats: ["image/avif", "image/webp"],
    /* 75 is the default for photos; 90 is for illustrations with fine glow
       lines and gradients (e.g. the AI Chatbot image), which blur at 75. */
    qualities: [75, 90],
  },
  /* Old Vite site's URLs that Google already indexed. Permanent (308) so
     ranking moves to the new page. */
  async redirects() {
    return [{ source: "/about", destination: "/company", permanent: true }];
  },
};

export default nextConfig;
