const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const imageInlineSizeLimit = 10000;

module.exports = {
	entry: path.resolve(__dirname, '../src/main.jsx'),
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			'@/assets': path.resolve(__dirname, '../src/assets'),
			'@/pages': path.resolve(__dirname, '../src/pages'),
			'@/components': path.resolve(__dirname, '../src/components'),
			'@/pages': path.resolve(__dirname, '../src/pages'),
		},
	},
	// 修复HMR失效问题 https://github.com/webpack/webpack-dev-server/issues/2758
	target: 'web',
	module: {
		rules: [
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
