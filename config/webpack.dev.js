const webpack = require('webpack');
const merge = require('webpack-merge');

const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
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
							ident: 'postcss',
							plugins: [require('autoprefixer')],
						},
					},
					'sass-loader',
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
	plugins: [new webpack.HotModuleReplacementPlugin()],
});
