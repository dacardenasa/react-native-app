module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@adapters': './src/adapters',
          '@appState': './src/appState',
          '@assets': './src/assets',
          '@components': './src/components',
          '@constants': './src/constants',
          '@context': './src/context',
          '@interfaces': './src/interfaces',
          '@navigator': './src/navigator',
          '@screens': './src/screens',
          '@services': './src/services',
          '@theme': './src/theme',
        },
      },
    ],
  ],
};
