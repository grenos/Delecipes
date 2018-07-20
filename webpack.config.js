const webpack = require('webpack');
const myEnv = require('dotenv').config();
const path = require('path');

module.exports = {
  entry: './src/App.js', // here run path of src/App.js
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/, //support of css and scss
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true // tells server we use client router and should always serve index.html
  },
  plugins: [
    new webpack.DefinePlugin({
      API_KEY: JSON.stringify(myEnv.parsed.API_KEY)
    })
  ]
};
