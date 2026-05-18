import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: '.next',
  /* config options here */
  async redirects() {
    return [
      {
        source: '/dental-implants-morocco',
        destination: '/implants-dentaires-tanger',
        permanent: true,
      },
    ];
  },

  experimental: {
    optimizePackageImports: ["lucide-react"]
  }
};

export default nextConfig;
