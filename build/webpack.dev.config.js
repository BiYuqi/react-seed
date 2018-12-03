const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.config')

const resolve = (dir) => {
  return path.resolve(__dirname, '..', dir)
}

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    publicPath: '/',
    compress: true,
    //端口号
    port: 8999,
    noInfo: true,
    // 自动刷新
    inline: true,
    // 自动打开浏览器
    open: true,
    // 同网段调试应用 通过 ip + port
    disableHostCheck: true,
    //在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    historyApiFallback: true
  },
  plugins: [

    //开启HMR(热替换功能,替换更新部分,不重载页面！)
    new webpack.HotModuleReplacementPlugin(),

    // 配置html入口信息
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('index.html'),
      inject: true,
      favicon: resolve('favicon.ico')
    })
  ]
})

module.exports = webpackConfig