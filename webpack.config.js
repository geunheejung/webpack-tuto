const { CleanWebpackPlugin } = require("clean-webpack-plugin");

var path = require("path");
var process = require("process");
const webpack = require("webpack");

module.exports = {
  mode: "none",
  entry: "./src/index.js",
  output: {
    path: path.resolve(process.cwd(), "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      verbose: true,
    }),
    new webpack.ProvidePlugin({
      process: "process/browser.js",
    }),
  ],
};
