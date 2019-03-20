const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = (env, { mode = 'development' }) => {
  return {
    target: 'node',
    entry: {
      collection: './src/server.js',
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].bundle.js',
      libraryTarget: 'commonjs2',
    },
    node: {
      __dirname: false,
    },
    mode,
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        // {
        //   test: /\.html$/,
        //   use: [{ loader: 'html-loader' }],
        // },
      ],
    },

    resolve: {
      alias: {
        Utilities: path.resolve(__dirname, 'src/utils/'),
        Config: path.resolve(__dirname, 'src/config/'),
        Modules: path.resolve(__dirname, 'src/modules/'),
      },
    },

    plugins: [
      new webpack.IgnorePlugin(/^pg-native$/),
      // new HtmlWebPackPlugin({
      //   template: './src/public/index.html',
      //   filename: './public/index.html',
      //   excludeChunks: ['collection'],
      // }),
    ],
  };
};
