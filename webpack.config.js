/* eslint-disable */

// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanPlugin = require("clean-webpack-plugin");

const isProduction = process.env.NODE_ENV == 'production';


const stylesHandler = 'style-loader';


const config = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    open: true,
    host: 'localhost',
    port: 3000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new CleanPlugin.CleanWebpackPlugin()

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(ts|tsx)$/i,
        loader: 'ts-loader',
        exclude: ['/node_modules/'],
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[name]__[local]--[hash:base64:5]",
              },
            },
          },
        ],
        // use: [
        //   stylesHandler,
        //   {
        //     loader: "css-loader",
        //     options: {
        //       modules: {
        //         localIdentName: '[local]__[hash]'
        //       }
        //     },
        //   },
        // ],
        include: /\.module\.css$/i,
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader"],
        
        exclude: /\.module\.css$/i,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, 'css-loader', 'sass-loader'],
        exclude: /\.module\.s[ac]ss$/i,

      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, {
          loader: "css-loader",
          options: {
            modules: {
              localIdentName: '[local]__[hash]'
            }
          },
        }, 'sass-loader'],
        include: /\.module\.s[ac]ss$/i,
      },
      // {
      //   test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
      //   // type: 'asset',
      //   loader: 'url-loader',
      //   options: {
      //     name: "assets/img/[name]-[hash].[ext]",
      //   },

      // },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },


      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';


  } else {
    config.mode = 'development';
  }
  return config;
};
