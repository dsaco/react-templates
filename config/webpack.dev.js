const webpack = require('webpack');
const { merge } = require('webpack-merge');
const openBrowser = require('react-dev-utils/openBrowser');

const baseConfig = require('./webpack.base');

const HOST = 'localhost';
const PORT = 3000;
const PROXY = 'http://api.example.com';

module.exports = merge(baseConfig, {
	mode: 'development',
	devtool: 'cheap-module-source-map',
	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: ['postcss-preset-env'],
							},
						},
					},
					'sass-loader',
				],
			},
		],
	},
	devServer: {
		hot: true,
		host: HOST,
		port: PORT,
		// disableHostCheck: true,
		after: () => {
			openBrowser(`http://${HOST}:${PORT}`);
		},
		proxy: {
			'!/#': {
				target: PROXY,
				secure: false,
				changeOrigin: true,
			},
		},
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
});
