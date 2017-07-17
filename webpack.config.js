const path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var ExtractSASS = new ExtractTextPlugin('/styles/app.css');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app/index',
  output: {
    path: path.resolve('dist'),
    filename: 'app.js'
  },
  resolve: {
     extensions: ['','.jsx', '.js', '.css'],
	},
  module: {
    loaders: [
      {
        test: /\.js$/, 
        loader: 'babel-loader', 
        exclude: /node_modules/ 
      },
      { 
        test: /\.jsx$/, 
        loader: 'babel-loader', 
        exclude: /node_modules/ 
      },
      { // regular css files
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader?importLoaders=1',
        }),
      },
      { // sass / scss loader for webpack
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      },
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
      {test: /\.(woff|woff2)$/, loader: "url?prefix=font/&limit=5000"},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"}
    ]
  },
  // Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
  plugins: [
     new ExtractTextPlugin("app.css"),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
    })
  ]
}
