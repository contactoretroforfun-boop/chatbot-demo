import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/demo',
        permanent: false,
      },
      {
        source: '/dashboard/:path*',
        destination: '/demo',
        permanent: false,
      },
      {
        source: '/auth/:path*',
        destination: '/demo',
        permanent: false,
      }
    ];
  },
};

export default nextConfig;
