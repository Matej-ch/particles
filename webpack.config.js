//const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const mode = process.env.NODE_ENV === 'production' ? 'production' : "development";

module.exports = {
  mode: mode,
  plugins: [new MiniCssExtractPlugin()],
  //entry: './src/index.js', //not required
  //output: {
  //    filename: "bundle.js", //not required
  //    path: path.resolve(__dirname,'public')
  //},
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          //without additional settings, this will reference .babelrc
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/, //css , scss, sass files
        use: [MiniCssExtractPlugin.loader,"css-loader","postcss-loader"]
      },
    ]
  },


  devtool: 'source-map',

  devServer: {
    contentBase: './dist'
  }
}
