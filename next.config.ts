import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tis.edu.in",
      },
    ],
  },
};

export default nextConfig;
