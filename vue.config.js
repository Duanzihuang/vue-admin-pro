module.exports = {
  // less的配置
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  // 代理配置
  devServer: {
    proxy: {
      '/api': {
        // target: 'http://localhost:8080',
        target: 'http://localhost:3000',
        bypass: function(req, res) {
          if (req.headers.accept.indexOf('html') !== -1) {
            console.log('Skipping proxy for browser request.')
            return '/index.html'
          } else if (process.env.MOCK !== 'none') {
            // 根据路径加载mock文件
            const mockFilePath = req.path
              .split('/api/')[1]
              .split('/')
              .join('_')

            // 加载导出的方法
            const method = require(`./mock/${mockFilePath}`)

            // 执行并且获取结果
            const result = method(req.method)

            // 清除缓存
            delete require.cache[require.resolve(`./mock/${mockFilePath}`)]

            return res.send(result)
          }
        }
      }
    }
  }
}
