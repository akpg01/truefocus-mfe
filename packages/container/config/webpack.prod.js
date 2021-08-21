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
        landing: `landing@${domain}/landing/remoteEntry.js`,
        auth: `auth@http${domain}/auth/remoteEntry.js`,
        availability: `availability@http${domain}/availability/remoteEntry.js`,
        goals: `goals@http${domain}/goals/remoteEntry.js`,
        pomodoro: `pomodoro@http${domain}/pomodoro/remoteEntry.js`,
        projects: `projects@http${domain}/projects/remoteEntry.js`,
        schedule: `schedule@http${domain}/schedule/remoteEntry.js`,
        stats: `stats@http${domain}/stats/remoteEntry.js`,
        time_calculator: `time_calculator@http${domain}/timecalculator/remoteEntry.js`,
        todo_list: `todo_list@http${domain}/todolist/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
