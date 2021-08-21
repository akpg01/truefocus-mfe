const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
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
        auth: `auth@http${domain}/auth/latest/remoteEntry.js`,
        availability: `availability@http${domain}/availability/latest/remoteEntry.js`,
        goals: `goals@http${domain}/goals/latest/remoteEntry.js`,
        pomodoro: `pomodoro@http${domain}/pomodoro/latest/remoteEntry.js`,
        projects: `projects@http${domain}/projects/latest/remoteEntry.js`,
        schedule: `schedule@http${domain}/schedule/latest/remoteEntry.js`,
        stats: `stats@http${domain}/stats/latest/remoteEntry.js`,
        time_calculator: `time_calculator@http${domain}/calculator/latest/remoteEntry.js`,
        todo_list: `todo_list@http${domain}/todos/latest/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
