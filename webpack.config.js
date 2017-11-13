const path = require('path');

module.exports = {
  entry: './public/index.js',
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'public')
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node-modules/,
        loader: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
}
