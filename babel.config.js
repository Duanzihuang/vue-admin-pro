module.exports = {
  presets: [
    '@vue/app',
    "@vue/babel-preset-jsx"
  ],
  plugins:[
    ["import", { libraryName: "ant-design-vue", "style": 'css' }]
    // `style: true` 会加载 less 文件
  ]
}
