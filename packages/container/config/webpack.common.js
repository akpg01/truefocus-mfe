const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
      {
        test: /\.(sass|css|scss)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
          },
          { loader: "resolve-url-loader" },
          { loader: "sass-loader", options: { sourceMap: true } },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg|jpe?g|png)$/,
        use: [{ loader: "url-loader" }],
      },
      {
        test: /\.(gif|pdf|ico)$/,
        use: [{ loader: "file-loader", options: { name: "[name].[ext]" } }],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  resolve: {
    modules: [path.resolve(__dirname, "images"), "node_modules"],
    extensions: ["*", ".js", ".jsx"],
  },
};
