import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https', // match the actual image protocol
        hostname: 'appeal-rice-stuff.figma.site', // exact hostname
        pathname: '/_assets/**', // optional: restrict to a specific path
      },
    ],
  },
};

export default nextConfig;
