module.exports = {
  // less的配置
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')

    // 清除已有的所有 loader。
    // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
    svgRule.uses.clear()

    // 添加要替换的 loader
    svgRule
      .use('vue-svg-loader')
        .loader('vue-svg-loader')
  },
  // 代理配置
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        // target: 'http://localhost:3000',
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
