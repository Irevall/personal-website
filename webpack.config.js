require('dotenv').config();
const path = require('path');

const { DefinePlugin } = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    app: './src/index.js',
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'Portfolio',
      template: path.resolve(__dirname, './src/index.html'),
      favicon: path.resolve(__dirname, './src/assets/icon.png')
    }),
    // new CopyWebpackPlugin([{ from: 'src/static', to: './' }]),
    new DefinePlugin({
      PRODUCTION: JSON.stringify(process.env.PRODUCTION === 'true'),
    })
  ],
  output: {
    filename: 'scripts/[name].[hash:7].bundle.js',
    chunkFilename: 'scripts/[id].[chunkhash:7].chunk.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: { implementation: require('sass') }
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [path.resolve(__dirname, './src/assets/style/resources/*.scss')]
            }
          }
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { 'targets': { 'browsers': ['> 1%', 'not ie <= 11'] }, 'modules': false }]
            ],
            plugins: ['@babel/plugin-syntax-dynamic-import']
          }
        }
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8000, // Convert images < 8kb to base64 strings
            name: 'assets/[name].[ext]'
          }
        }]
      },
      {
        test: /locales/,
        loader: '@alienfast/i18next-loader',
        query: { relativePathAsNamespace: true }
      },
      {
        test: /modernizr.config.js$/,
        loader: 'modernizr-loader'
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.vue'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      modernizr$: path.resolve(__dirname, 'modernizr.config.js')
    }
  },

};
