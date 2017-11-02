const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
  	main: './src/index.js'
  },
  devtool: 'eval-source-map',
  devServer: {
  	contentBase: './dist',
  	hot: true
  },
  plugins: [
  	// new CleanWebpackPlugin(['dist']),
  	// new HtmlWebpackPlugin({
  	// 	title: 'Output Management'
  	// }),
  	new webpack.NamedModulesPlugin(),
  	new webpack.HotModuleReplacementPlugin()	
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  node: {
    net: 'empty',
    tls: 'empty',
    dns: 'empty',
    fs: 'empty'
  },
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					'file-loader'
				]
			}
		]
	}
};