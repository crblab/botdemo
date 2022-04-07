const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
    domains: []
  },
  // for using sass
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = nextConfig;
