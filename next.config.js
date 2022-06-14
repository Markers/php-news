/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  images: {
    domains: ["modernpug.org", "blog.jetbrains.com"],
  },
};

module.exports = nextConfig;
