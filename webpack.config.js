/* eslint-disable */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV == 'production';


// const stylesHandler = 'style-loader';

const config = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/media/[name].[hash][ext][query]',
    filename: 'js/[name].[hash].js', // Шаблон для названия файлов
    sourceMapFilename: '[name].[hash].js.map', // Шаблон для названия файлов
    clean: true, // Очистить ./dist перед сборкой
  },
  devtool: !isProduction ? 'inline-source-map' : undefined,
  devServer: {
    open: true,
    host: 'localhost',
    port: 3000,
    historyApiFallback: true
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new CleanPlugin.CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'static/css/[name].[contenthash:8].css',
      chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },

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
        use: [{ loader: MiniCssExtractPlugin.loader, options: {} }, "css-loader"],

        exclude: /\.module\.css$/i,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [{ loader: MiniCssExtractPlugin.loader, options: {} }, 'css-loader', 'sass-loader'],
        exclude: /\.module\.s[ac]ss$/i,

      },
      {
        test: /\.s[ac]ss$/i,
        use: [{ loader: MiniCssExtractPlugin.loader, options: {} }, {
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
    ],
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
