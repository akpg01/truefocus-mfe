const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/container/latest/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        landing: `landing@${domain}/landing/latest/remoteEntry.js`,
        auth: `auth@${domain}/auth/latest/remoteEntry.js`,
        availability: `availability@${domain}/availability/latest/remoteEntry.js`,
        goals: `goals@${domain}/goals/latest/remoteEntry.js`,
        pomodoro: `pomodoro@${domain}/pomodoro/latest/remoteEntry.js`,
        projects: `projects@${domain}/projects/latest/remoteEntry.js`,
        schedule: `schedule@${domain}/schedule/latest/remoteEntry.js`,
        stats: `stats@${domain}/stats/latest/remoteEntry.js`,
        todos: `todos@${domain}/todos/latest/remoteEntry.js`,
        calculator: `calculator@${domain}/calculator/latest/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(s(a|c)ss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
};

module.exports = merge(commonConfig, prodConfig);
