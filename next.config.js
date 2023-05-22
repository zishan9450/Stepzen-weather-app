/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: ["www.weatherbit.io"],
  },
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['@tremor/react'],
  },
}

module.exports = nextConfig
