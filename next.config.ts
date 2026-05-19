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
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.apexdental.ma',
          },
        ],
        destination: 'https://apexdental.ma/:path*',
        permanent: true,
      },
    ];
  },

  experimental: {
    optimizePackageImports: ["lucide-react"],
    inlineCss: true,
  }
};

export default nextConfig;
