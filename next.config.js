/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  images: {
    domains: [
      "modernpug.org",
      "blog.jetbrains.com",
      "secure.gravatar.com",
      "avatars.githubusercontent.com",
    ],
  },
};

module.exports = nextConfig;
