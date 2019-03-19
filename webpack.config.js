const path = require('path');

module.exports = (env, { mode = 'development' }) => {
  return {
    target: 'node',
    entry: {
      index: './src/index.js',
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].bundle.js',
      libraryTarget: 'commonjs2',
    },
    mode,
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
      ],
    },
  };
};