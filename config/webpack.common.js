const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, '../src/main.jsx'),
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: {
					loader: 'babel-loader',
					options: {
						babelrc: false,
						presets: ['@babel/preset-env', '@babel/preset-react'],
						plugins: [
							[
								'@babel/plugin-proposal-class-properties',
								{ loose: true },
							],
							'@babel/plugin-transform-runtime',
						],
					},
				},
				exclude: /node_modules/,
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../src/index.html'),
		}),
	],
};
