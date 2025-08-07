/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  async redirects() {
    return [
      {
        source: '/journal/cobblestone-retroactive',
        destination: '/journal/cobblestone-retrospective',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
