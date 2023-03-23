const webpack = require('webpack');
const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsWebpackPlugin = require('tsconfig-paths-webpack-plugin');
const deps = require('./package.json').dependencies;
const { cwd } = require('node:process');
const { resolve } = require('node:path');

module.exports = {
  entry: './src/index.ts',
  mode: process.env.NODE_ENV || 'development',
  devServer: {
    port: 3001,
    open: true,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [
      new TsconfigPathsWebpackPlugin({
        configFile: resolve(cwd(), './tsconfig.json'),
      }),
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env)
    }),
    new ModuleFederationPlugin({
      name: 'gpb_test1',
      filename: 'remoteEntry.js',
      exposes: {
        './Test1': './src/views/Test1',
      },
      shared: {
        ...deps,
        react: { singleton: true, eager: true, requiredVersion: deps.react },
        'react-dom': {
          singleton: true,
          eager: true,
          requiredVersion: deps['react-dom'],
        },
        'react-router-dom': {
          singleton: true,
          eager: true,
          requiredVersion: deps['react-router-dom'],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
