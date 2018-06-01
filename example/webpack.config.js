const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const base = path.resolve(__dirname)

module.exports = {
  mode: 'development',
  context: base,
  entry: './main.js',
  output: {
    path: base,
    filename: '__build__.js'
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.runtime.esm.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader', path.resolve(base, '..')]
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
}
