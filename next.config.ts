import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  distDir: '.next',
  /* config options here */
  async redirects() {
    return [
      {
        source: '/dental-implants-morocco',
        destination: '/en/dental-implants-morocco',
        permanent: true,
      },
    ];
  },

  experimental: {
    optimizePackageImports: ["lucide-react"],
    inlineCss: true,
  },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Alias Next.js default polyfills to false for modern browsers (Baseline ES6+)
      config.resolve.alias['next/dist/build/polyfills/polyfill-module'] = false;
      
      // Also alias the absolute path to make sure Webpack matches it correctly
      const polyfillPath = path.resolve(__dirname, 'node_modules/next/dist/build/polyfills/polyfill-module.js');
      config.resolve.alias[polyfillPath] = false;
    }
    return config;
  }
};

export default nextConfig;
