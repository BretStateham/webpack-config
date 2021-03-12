const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode="development";
let target="web";

console.log(`The default "mode" is: ${mode}`);
console.log(`The npm config value for "NODE_ENV" has been set to: ${process.env.npm_package_config_NODE_ENV}`);

if (process.env.npm_package_config_NODE_ENV === "production") {
  mode = "production";
  target = "browserslist";
  console.log(`The new "mode" is: ${mode}`);
}


module.exports = {
  mode: mode,
  target: target,

  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      }
    ],
  },

  plugins: [
    new MiniCssExtractPlugin(),
  ],
  
  devtool: "source-map",

  devServer: {
    contentBase: "./dist",
    hot: true
  }
}