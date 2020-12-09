const path = require('path');

const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const baseConfig = require('./webpack.base');
const isAnalyzer = process.env.IS_ANALYZER === 'yes';

function noop() {}

module.exports = merge(baseConfig, {
	mode: 'production',
	devtool: 'source-map',
	output: {
		filename: 'scripts/[name].[chunkhash:8].js',
		path: path.resolve(__dirname, '../build'),
		// publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
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
	optimization: {
		minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin({})],
		splitChunks: {
			chunks: 'all',
			name: false,
		},
		runtimeChunk: {
			name: 'runtime',
		},
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'styles/[name].[chunkhash:8].css',
		}),
		new CleanWebpackPlugin(),
		isAnalyzer ? new BundleAnalyzerPlugin() : noop,
	],
});
