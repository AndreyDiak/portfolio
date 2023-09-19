/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   swcMinify: true,
   output: 'standalone',
   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
         },
      ],
   },
};

module.exports = nextConfig;
