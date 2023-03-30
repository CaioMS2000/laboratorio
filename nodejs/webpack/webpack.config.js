const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    main: './src/index.js',
    javascript: '.src/js/*',
    javascript: '.src/css/*',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[path][name].[ext]',
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' },

      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },

      {
        test: /\.(png|jpe?g|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ],
};