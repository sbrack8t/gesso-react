module.exports = api => {
  const isProduction = api.env('production');
  const isDevelopment = !isProduction;

  return {
    plugins: [['emotion', { sourceMap: isDevelopment }]],
    presets: [
      [
        '@babel/react',
        { useBuiltIns: false, pragma: 'jsx', development: isDevelopment },
      ],
      [
        '@babel/preset-env',
        { modules: false, useBuiltIns: 'entry', corejs: 3 },
      ],
    ],
  };
};
