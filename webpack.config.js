const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanTerminalPlugin = require('clean-terminal-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname,'src/index.js'),
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "template.html"),
    }),
    new CleanTerminalPlugin(),
  ],
  module:{
    rules:[
      {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
};