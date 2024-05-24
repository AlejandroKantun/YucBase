module.exports = {
  presets: [
          'module:@react-native/babel-preset',
          ['@babel/preset-env', {targets: {node: 'current'}}],
          '@babel/preset-typescript',
          'module:metro-react-native-babel-preset',
        ],
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    "react-native-reanimated/plugin",
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};