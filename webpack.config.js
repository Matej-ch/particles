const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',

  entry: "./src/js/particles.js",

  devtool: "source-map", // only for development

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource"
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {publicPath: "" }
          },
          "css-loader","postcss-loader"],
      }
    ]
  },

  plugins: [new MiniCssExtractPlugin(), new HtmlWebpackPlugin({
    template: "/src/index.html"
  })],

  resolve: {
    extensions: [".js"]
  },

  output: {
    path: path.resolve(__dirname,'dist'), // not required if default path is dist
    assetModuleFilename: "images/[hash][ext][query]"
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9999,
    compress: true,
    hot: true
  }
}
