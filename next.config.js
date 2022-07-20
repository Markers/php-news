/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: '_next',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['modernpug.org', 'blog.jetbrains.com', 'secure.gravatar.com', 'avatars.githubusercontent.com'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // webpack5: true,
  // webpack: (config) => {
  //   config.resolve.fallback = { fs: false };

  //   return config;
  // },
};

module.exports = nextConfig;
