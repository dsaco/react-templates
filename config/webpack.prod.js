const path = require('path');

const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
	mode: 'production',
	devtool: 'source-map',
	output: {
		filename: 'scripts/[name].[chunkhash:8].js',
		path: path.resolve(__dirname, '../dist'),
	},
	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
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
				use: 'file-loader?name=images/[name].[ext]',
			},
		],
	},
	optimization: {
		minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin({})],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'styles/[name].[chunkhash:8].css',
		}),
		new CleanWebpackPlugin(),
	],
});
