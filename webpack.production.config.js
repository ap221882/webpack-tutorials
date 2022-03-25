const path = require('path');
// const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'hello-world': './src/hello-world.js',
    baby: './src/baby.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '',
    // publicPath: 'auto',
    // publicPath: '',
    // publicPath: 'https://some-cdn.com/',
  },
  mode: 'production',
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  // minSize:3000,//default is 30kbs
  //   },
  // },//for common external dpendency
  module: {
    rules: [
      // {
      //   test: /\.(ttf)$/,
      //   type: 'asset/resource',
      // },
      {
        test: /\.(png|jpg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 3 * 1024, //3kb
          },
        },
      },
      {
        test: /\.txt/,
        type: 'asset/source',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader'],
      // },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
      {
        test: /\.hbs$/,
        use: ['handlebars-loader'],
      },
    ],
  },
  plugins: [
    // new TerserPlugin(),//since included by default
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        '**/*',
        path.join(process.cwd(), 'build/**/*'),
      ],
    }),
    new HtmlWebpackPlugin({
      filename: 'hello-world.html',
      chunks: ['hello-world'],
      title: 'Hello world',
      // filename: 'subfolder/custom_filename.html',
      template: 'src/page-template.hbs',
      // meta: {
      //   description: 'Some description',
      // },
      description: 'Some description',
      minify: false,
    }),
    new HtmlWebpackPlugin({
      filename: 'baby.html',
      chunks: ['baby'],
      title: 'Baby',
      // filename: 'subfolder/custom_filename.html',
      template: 'src/page-template.hbs',
      // meta: {
      //   description: 'Some description',
      // },
      description: 'Some description',
      minify: false,
    }),
  ],
};
