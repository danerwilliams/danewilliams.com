/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  async redirects() {
    return [
      {
        source: '/cobblestone-retroactive',
        destination: '/cobblestone-retrospective',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
