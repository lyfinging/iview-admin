'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: true,
  productionSourceMap: false,
  devServer: {
    port: 8080, // 端口号
    host: 'localhost',
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器
    overlay: {
      warnings: false,
      errors: true
    },
    // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
    // before: require('./mock/mock-server.js')
  },

}