import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true, // For easier deployment to Vercel/Static if needed, but we want SSR
  },
  experimental: {
    // any experimental features
  }
};

export default nextConfig;
