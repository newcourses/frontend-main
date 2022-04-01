const Log = require('next/dist/build/output/log.js');
const sitemapGenerator = require('./scripts/sitemapGenerator');

module.exports = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (isServer) {
      sitemapGenerator()
        .then(() => {
          Log.ready('Sitemap is ready');
        })
        .catch((e) => {
          Log.error('Generate sitemap error:', e.message);
        });
    }
    return config;
  },
};
