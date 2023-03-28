const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

// 18:45

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },

    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader'
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash].[ext]',
                            outputPath: 'img/'
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['js'],
        alias: {
            '@assets': path.resolve(__dirname, './src/')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            favicon: './src/favicon.ico'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css'
        }),
        new CssMinimizerPlugin()
    ]
}

// path html-webpack-plugin webpack clean-webpack-plugin mini-css-extract-plugin css-minimizer-webpack-plugin