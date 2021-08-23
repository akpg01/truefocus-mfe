const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const packageJson = require("../package.json");
const commonConfig = require("./webpack.common");

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/goals/latest/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "goals",
      filename: "remoteEntry.js",
      exposes: {
        "./GoalsApp": "./src/bootstrap",
      },
      shared: packageJson.dependencies,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(s(a|c)ss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "resolve-url-loader",
          { loader: "sass-loader", options: { sourceMap: true } },
        ],
      },
    ],
  },
};

module.exports = merge(commonConfig, prodConfig);
