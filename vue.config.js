const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('views', resolve('src/views'))
  },
  devServer: {
    port: 8080,
    // 代理转发
    proxy: {
      "/api": {
        // target: "http://support.gymexpress.com/",
        target: "http://test.support.gymexpress.com/",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    },
    // 让浏览器 overlay 显示警告和错误
    overlay: {
      warnings: false,
      errors: false
    }
  },
}