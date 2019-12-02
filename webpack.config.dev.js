const merge = require('webpack-merge');
const common = require('./webpack.config.common');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [{
            loader: MiniCssExtractPlugin.loader, options : {
                sourceMap: true,
              }
            }, 
            {
            loader: "css-loader", options : {
                sourceMap: true,
              }
            }, 
            {
              loader: "postcss-loader", options : {
                  sourceMap: true,
                }
            },
            {
            loader: "sass-loader", options : {
                sourceMap: true,
              }
            },
        ]
      },
    ],
  },
});
