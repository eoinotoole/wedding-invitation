const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/js/index.js",
  devtool: "cheap-source-map",
  output: {
    path: path.resolve(path.join(__dirname, "../"), "static"),
    filename: "bundle.1.0.js",
  },
  plugins: [new MiniCssExtractPlugin({ filename: "main.1.0.css" })],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[hash][ext]",
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
      },
    ],
  },
  target: ["web", "es5"],
};
