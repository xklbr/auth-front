module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            components: './src/components',
            pages: './src/pages',
            ui: './src/views/ui',
            api: './src/api/config.js',
            assets: './src/assets',
            common: './src/common',
            features: './src/features',
          },
        },
      ],
    ],
  };
};
