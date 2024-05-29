import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => [
    {
      source: '/api/:path*',
      destination: '/api/:path*',
    },
    {
      source: '/api/:path*',
      destination: `${process.env.NEXT_PUBLIC_API_ROUTE || ''}/api/:path*`,
    },
  ],
};

export default withNextIntl(nextConfig);