/* eslint-disable no-undef */
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js",
  plugins: [new ESLintPlugin()],
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
};
