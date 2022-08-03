/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    dirs: ["components", "pages"],
  },
  images: {
    domains: ["modernpug.org"],
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: process.env.NEXT_PUBLIC_API + "/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
