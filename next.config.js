/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    unoptimized: true, // Для статического экспорта
  },
  // i18n убран для статического экспорта
  output: 'export', // Статический экспорт
  trailingSlash: true, // Для статического экспорта
  poweredByHeader: false,
  distDir: 'out', // Папка для статических файлов
}

module.exports = nextConfig
