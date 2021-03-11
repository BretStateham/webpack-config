let mode="development";

console.log(`mode: ${mode}`);
console.log(`npm_package_config_NODE_ENV: ${process.env.npm_package_config_NODE_ENV}`);

if (process.env.npm_package_config_NODE_ENV === "production") {
  mode = "production";
  console.log(`mode: ${mode}`);
}


module.exports = {
  mode: mode,

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      }
    ],
  },
  
  devtool: "source-map",

  devServer: {
    contentBase: "./dist",
  }
}