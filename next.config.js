/** @type {import("next").NextConfig} */
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
  // jetbrains 요청을 => next.js 의 api 로 프록시 보내고
  // api 에서 jetbrains 으로 재요청 해야함
  // async rewrites() {
  //   return [
  //     {
  //       destination: 'https://*.jetbrains.com/',
  //       source: '/api/jetbrains',
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
