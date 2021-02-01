var path = require('path')

module.exports = {
  entry: {
    vendors: './vendors.js',
    app: './App.jsx'
  },
  mode: 'development',
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.m?js.?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
