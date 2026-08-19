/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'sociallyin.com' },
      { protocol: 'https', hostname: 'scontent.fgzt3-1.fna.fbcdn.net' }
    ],
  },
};

module.exports = nextConfig;
