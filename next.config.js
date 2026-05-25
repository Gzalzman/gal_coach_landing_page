/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['he'],
    defaultLocale: 'he'
  }
}

module.exports = nextConfig
