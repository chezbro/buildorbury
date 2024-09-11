/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/tripshaman/:path*',
        destination: 'https://tripshaman-n5an.vercel.app/:path*',
      },
      {
        source: '/tripshaman/:path*',
        destination: 'https://tripshaman-n5an.vercel.app/tripshaman/:path*',
      },      
      {
        source: '/traderschool/:path*',
        destination: 'https://traderschool.vercel.app/:path*',
      },
    ];
  },
};

export default nextConfig;