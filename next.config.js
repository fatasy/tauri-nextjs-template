/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: "export",
  experimental: {
    typedRoutes: true,
  },
}

module.exports = nextConfig
