/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(woff|woff2)$/,
      loader: 'url-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'fonts/',
        publicPath: '/_next/static/fonts/',
        limit: 100000,
      },
    });

    return config;
  },
};

module.exports = nextConfig;
