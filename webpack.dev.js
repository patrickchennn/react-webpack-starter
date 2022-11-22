const path = require('path');
const config = require("./webpack.config");
const {merge} = require('webpack-merge');

module.exports = merge(config, {
  mode: "development",
  devServer: {
    // static: {
    //   directory: path.join(__dirname, "dev"),
    // },
    port: 3000,
  },
  output: {
    path: path.resolve(__dirname, 'dev'),
    // filename: 'dev-[contenthash].js',
    filename: 'dev.js',

    // clean: true,
  },
});