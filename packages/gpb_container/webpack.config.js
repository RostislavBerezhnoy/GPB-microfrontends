const webpack = require('webpack');
const { ModuleFederationPlugin } = webpack.container;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const TsconfigPathsWebpackPlugin = require('tsconfig-paths-webpack-plugin');
const dotenv = require('dotenv');
const deps = require('./package.json').dependencies;
const { cwd } = require('node:process');
const { resolve } = require('node:path');

dotenv.config({ path: './.env' });

const buildDate = new Date().toLocaleString();

module.exports = (_, argv) => {
  const isProduction = argv.mode === 'production';
  return {
    entry: './src/index.ts',
    mode: process.env.NODE_ENV || 'development',
    devServer: {
      port: 3000,
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
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new webpack.EnvironmentPlugin({ BUILD_DATE: buildDate }),
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(process.env),
      }),
      new ModuleFederationPlugin({
        name: 'gpb_container',
        remotes: {
          gpb_test1: isProduction ? process.env.GPB_PROD_TEST1 : process.env.GPB_DEV_TEST1,
          gpb_test2: isProduction ? process.env.GPB_PROD_TEST2 : process.env.GPB_DEV_TEST2,
          gpb_test3: isProduction ? process.env.GPB_PROD_TEST3 : process.env.GPB_DEV_TEST3,
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
        favicon: './public/favicon.ico',
        publicPath: '/',
      }),
      new ForkTsCheckerWebpackPlugin()
    ],
  };
};
