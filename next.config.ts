import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    domains: ['egida.by'],
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
