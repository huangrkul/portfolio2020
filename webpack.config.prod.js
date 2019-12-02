const merge = require('webpack-merge');
const common = require('./webpack.config.common');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [{
            loader: MiniCssExtractPlugin.loader, options : {
                sourceMap: false,
              }
            }, 
            {
            loader: "css-loader", options : {
                sourceMap: false,
              }
            },
            {
              loader: "postcss-loader", options : {
                  sourceMap: false,
                }
            },
            {
            loader: "sass-loader", options : {
                sourceMap: false,
              }
            }
        ]
      },
    ],
  },
});
