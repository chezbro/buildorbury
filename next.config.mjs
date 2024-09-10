/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/tripshaman/:path*',
        destination: 'https://tripshaman-n5an.vercel.app/tripshaman/:path*',
      },
    ];
  },
};

export default nextConfig;