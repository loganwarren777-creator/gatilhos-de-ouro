/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Otimizações de performance
  reactStrictMode: true,
  swcMinify: true,
  // Configurações de segurança
  poweredByHeader: false,
  // Otimização de build
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

module.exports = nextConfig;
