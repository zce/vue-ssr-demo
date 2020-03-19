const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: './src/client.js',
  output: {
    filename: 'bundle.js'
  },
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
  ]
}