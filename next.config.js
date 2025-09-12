/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  i18n: {
    locales: ['ru', 'en', 'ky'],
    defaultLocale: 'ru',
  },
  output: 'standalone',
  trailingSlash: false,
  poweredByHeader: false,
}

module.exports = nextConfig
