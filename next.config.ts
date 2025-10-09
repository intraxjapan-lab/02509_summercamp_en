import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: [],
  },
  // Ensure PHP files are copied to the output directory
  webpack: (config: any) => {
    config.module.rules.push({
      test: /\.php$/,
      use: 'raw-loader',
    });
    return config;
  },
};

export default nextConfig;
