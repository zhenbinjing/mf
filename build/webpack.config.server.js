const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.config.base')
const nodeExternals = require('webpack-node-externals')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const config = require('./config')

if (process.env.NODE_ENV === 'production') {
  moshi = 'production'
}
else {
  moshi = 'development'
};

module.exports = merge(base, {
  mode: moshi,
  target: 'node',
  entry: config.route.serverapp,
  resolve: {
    modules: [config.route.src, 'node_modules'],
    extensions: ['.js', '.vue', '.json']
  },
  output: {
    path: config.route.dist,
    publicPath: config.route.publicPath,
    filename: 'server-bundle.js',
    libraryTarget: 'commonjs2'
  },
  externals: Object.keys(require('../package.json').dependencies),
  externals: nodeExternals({
    // do not externalize CSS files in case we need to import it from a dep
    whitelist: /\.css$/
  }),
  plugins: [
    new VueSSRServerPlugin()
  ]
})
