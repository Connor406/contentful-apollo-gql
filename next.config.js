const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.module.(s(a|c)ss)$/,
      use: {
        loader: 'sass-resources-loader',
        options: {
          resources: [path.join(__dirname, 'styles/variables/layout.scss')],
        },
      },
    });

    return config;
  },
};

module.exports = nextConfig;
