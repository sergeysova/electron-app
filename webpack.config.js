const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')


module.exports = {
  devtool: 'cheap-module-eval-source-map',
  target: 'electron-renderer',
  // stats: 'minimal',

  context: path.resolve(__dirname, 'src', 'renderer'),
  entry: {
    app: 'index.js',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    chunkFilename: 'chunk-[id].[chunkhash].js',
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        use: [
          'babel-loader',
        ],
      },
    ],
  },

  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src', 'renderer'),
    ],
  },

  plugins: [
    new HtmlPlugin({
      template: 'index.tpl.html',
    }),
  ],

  parallelism: 8,
  // profile: true,

  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    compress: true,
    hot: false,
    port: 4000,
  },
}
