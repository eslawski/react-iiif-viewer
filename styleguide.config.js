module.exports = {
  components: 'src/components/*.{js,jsx,ts,tsx}',
  usageMode: 'expand',
  skipComponentsWithoutExample: true,
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        }
      ]
    }
  }
};
