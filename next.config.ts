import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      // adaugă aici orice alt domeniu de imagini pe care îl vei folosi
    ],
  },
  async rewrites() {
    return [
      { source: "/api/:path*", destination: "https://frostboyz-site.onrender.com/api/:path*" },
    ];
  },
};

export default nextConfig;
