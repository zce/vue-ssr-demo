const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: './src/server.js',
  output: {
    filename: 'server.js'
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  node: {
    __dirname: false
  }
}