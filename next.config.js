/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    // 아래를 추가합니다.
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
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
