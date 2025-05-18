/** @type {import('next').NextConfig} */
const nextConfig = {
  // Set the default locale for the app
  // (Note: this doesn't matter much since we're handling locales with next-intl)
  experimental: {
    // In Next.js 15, serverActions is an object configuration, not a boolean
    serverActions: {
      enabled: true,
    },
  },
};

const withNextIntl = require('next-intl/plugin')('./src/i18n.ts');

module.exports = withNextIntl(nextConfig);
