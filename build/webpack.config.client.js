const rm = require('rimraf')
const merge = require('webpack-merge')
const base = require('./webpack.config.base')
const GenerateJsonPlugin = require('generate-json-webpack-plugin')
const config = require('./config')

if (process.env.NODE_ENV === 'production') {
  moshi = 'production';
  rm(config.route.dist, err => {
    if (err) throw err
    console.log('delete build file...')
  })
}
else {
  moshi = 'development'
};

const configs = merge(base, {
  mode: moshi,
  entry:{
    app: config.route.clientapp // 入口文件路径
  },
  resolve: {
    modules: [config.route.src, 'node_modules'],
    extensions: ['.js', '.vue', '.json']
  },
  output: {
    path: config.route.dist,
    publicPath: config.route.ssrPath,
    filename: config.file.outputJsName,
    chunkFilename: config.file.outputJsName
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: `chunk-vendors`,
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'initial'
        },
        common: {
          name: `chunk-common`,
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    new GenerateJsonPlugin(config.file.manifestName,
      {
        'name': 'VUEPWA',
        'short_name': 'VUEPWA',
        'icons': [
          {
            'src': config.route.ssrPath + config.icon.pwaicon1,
            'sizes': '192x192',
            'type': 'image/png'
          },
          {
            'src': config.route.ssrPath + config.icon.pwaicon2,
            'sizes': '512x512',
            'type': 'image/png'
          }
        ],
        'start_url': '/',
        'display': 'standalone',
        'background_color': '#000000',
        'theme_color': '#4DBA87'
      },
      (key, value) => {
        if (value === 'VUEPWA') {
          return 'VUEPWA';
        }
        return value;
      },
      2
    ),
  ]
});

module.exports = configs
