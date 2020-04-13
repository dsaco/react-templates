const webpack = require('webpack');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('autoprefixer'),
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.(gif|jpg|png|svg)$/,
                use: 'url-loader',
            },
        ],
    },
    devServer: {
        hot: true,
        port: 3000,
        open: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
});