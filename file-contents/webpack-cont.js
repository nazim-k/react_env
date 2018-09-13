module.exports = (function() {
    return function(b) {
        if (b === false) {
            return `
'use strict';

const path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: ['@babel/polyfill', './src/index.js', 'webpack-hot-middleware/client?reload=true'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundel.js',
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\\.js/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            { test: /\\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            }
        ]
    }
};
    `.trim()
        } else {
            return `
'use strict';

const path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: ['@babel/polyfill', './src/index.js', 'webpack-hot-middleware/client?reload=true'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundel.js',
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\\.js/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    }
};
    `.trim()
        }
    }
}());