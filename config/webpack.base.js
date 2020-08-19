const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const imageInlineSizeLimit = 10000;

module.exports = {
	entry: path.resolve(__dirname, '../src/main.jsx'),
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.(gif|jpe?g|png|svg)$/,
				loader: 'url-loader',
				options: {
					limit: imageInlineSizeLimit,
					name: 'media/[name].[hash:8].[ext]',
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../public/index.html'),
			favicon: path.resolve(__dirname, '../public/favicon.ico'),
		}),
	],
};
