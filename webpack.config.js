const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // 로딩에 적용할 파일을 지정
        use: [path.resolve("./myloader.js")], // 패턴에 해당하는 파일에 적용할 로더를 설정
      },
      {
        test: /\.tsx?$/,
        use: ["babel-loader", "ts-loader"],
      },
      {
        test: /\.css$/,
        use: ["css-loader"],
      },
    ],
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      minify: true,
      meta: {
        description: "webpack 러닝 가이드",
      },
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    port: 3000,
    historyApiFallback: true,
    hot: true,
    open: true,
  },
};
