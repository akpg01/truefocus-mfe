const { merge } = require("webpack-merge");

const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const devConfig = {
  mode: "development",
  output: { publicPath: "http://localhost:8080/" },
  devServer: {
    port: 8080,
    historyApiFallback: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        landing: "landing@http://localhost:8081/remoteEntry.js",
        auth: "auth@http://localhost:8082/remoteEntry.js",
        availability: "availability@http://localhost:8083/remoteEntry.js",
        goals: "goals@http://localhost:8084/remoteEntry.js",
        pomodoro: "pomodoro@http://localhost:8085/remoteEntry.js",
        projects: "projects@http://localhost:8086/remoteEntry.js",
        schedule: "schedule@http://localhost:8087/remoteEntry.js",
        stats: "stats@http://localhost:8088/remoteEntry.js",
        calculator: "calculator@http://localhost:8089/remoteEntry.js",
        todos: "todos@http://localhost:8090/remoteEntry.js",
        dashboard: "dashboard@http://localhost:8091/remoteEntry.js",
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
