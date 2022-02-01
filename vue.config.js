'use strict'
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    port: 8002,
    open: true,
    // 配置开发环境跨域问题
    proxy: {
      '/api': {
        target: 'http://pcapi-xiaotuxian-front-devtest.itheima.net/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  configureWebpack: {
    name: 'rabbit',
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.join(__dirname, './src/assets/styles/variables.less'),
        path.join(__dirname, './src/assets/styles/mixins.less')
      ]
    }
  }
}
