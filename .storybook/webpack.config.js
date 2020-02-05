const path = require('path');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    use: [
      { loader: 'babel-loader' },
      { loader: 'ts-loader', options: { transpileOnly: true } },
      {
        loader: 'react-docgen-typescript-loader',
        options: { tsconfigPath: path.join(__dirname, '../tsconfig.json') },
      },
    ],
  });

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
