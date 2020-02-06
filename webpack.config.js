const path = require('path');
const ForkCheckerPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: '/',
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },

  devServer: {
    historyApiFallback: true,
  },

  plugins: [
    new ForkCheckerPlugin({
      async: false,
      formatter: 'codeframe',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: [
          { loader: 'babel-loader' },
          {
            loader: 'ts-loader',
            options: { transpileOnly: true },
          },
        ],
      },
    ],
  },
};
