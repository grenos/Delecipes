const webpack = require('webpack');
const myEnv = require('dotenv').config();
const path = require('path');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = env => {
  const isProduction = env === 'production';
  //const CSSextract = new ExtractTextPlugin('styles.css');

  return {
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
    devtool: isProduction ? 'source-map' : 'cheap-module-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true // tells server we use client router and should always serve index.html
    },
    plugins: [
      new webpack.DefinePlugin({
        API_KEY: JSON.stringify(myEnv.parsed.API_KEY)
      }),
      //CSSextract
    ]
  };
};
