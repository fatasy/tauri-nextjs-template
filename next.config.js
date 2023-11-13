/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    typedRoutes: true,
  },
  images: {
    unoptimized: true,
  },
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
