module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins:[
    ["import", { libraryName: "ant-design-vue", "style": 'css' }]
    // `style: true` 会加载 less 文件
  ]
}
