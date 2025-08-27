// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://frostboyz-site.onrender.com/api/:path*",
      },
    ];
  },
};

export default nextConfig;
