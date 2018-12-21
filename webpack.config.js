// https://github.com/diegohaz/arc/wiki/Webpack
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const {
  addPlugins,
  babel,
  createConfig,
  customConfig,
  defineConstants,
  devServer,
  entryPoint,
  env,
  match,
  resolve,
  setOutput,
  sourceMaps,
  url,
} = require('webpack-blocks')

const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 3000
const sourceDir = process.env.SOURCE || 'src'
const publicPath = `/${process.env.PUBLIC_PATH || ''}/`.replace('//', '/')
const sourcePath = path.join(process.cwd(), sourceDir)
const outputPath = path.join(process.cwd(), 'dist')

const config = createConfig([
  entryPoint({
    app: sourcePath,
  }),
  setOutput({
    filename: '[name].js',
    path: outputPath,
    publicPath,
  }),
  defineConstants({
    'process.env.NODE_ENV': process.env.NODE_ENV,
    'process.env.PUBLIC_PATH': publicPath.replace(/\/$/, ''),
  }),
  addPlugins([
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(process.cwd(), 'public/index.html'),
    }),
  ]),
  babel(),
  match([/\.(png|jpe?g|svg|woff2?|ttf|eot)$/], [
    url({ limit: 10000 }),
  ]),
  resolve({
    alias: { 'react-dom': '@hot-loader/react-dom' },
    modules: [].concat(sourceDir, ['node_modules']),
  }),

  env('development', [
    devServer({
      contentBase: 'public',
      stats: 'errors-only',
      historyApiFallback: { index: publicPath },
      headers: { 'Access-Control-Allow-Origin': '*' },
      host,
      port,
    }),
    sourceMaps(),
    addPlugins([
      new webpack.NamedModulesPlugin(),
    ]),
  ]),

  env('production', [
    customConfig({
      optimization: {
        splitChunks: {
          chunks: 'all',
        },
        minimize: [
          new UglifyJsPlugin(),
        ],
      },
    }),
  ]),
])

module.exports = config
