const webpack = require('webpack')
module.exports = {
  // publicPath: /* process.env.NODE_ENV === 'production' ? "./" : "/" */"/",
  outputDir: './dist',
  lintOnSave: true,
  productionSourceMap: false,
  // indexPath:"../mzposapp/www",
  runtimeCompiler: true, //关键点在这  原来的 Compiler 换成了 runtimeCompiler
  // 调整内部的 webpack 配置。
  // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/webpack.md
  chainWebpack: () => { },
  configureWebpack: () => { },

  // 配置 webpack-dev-server 行为。
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8080,
    // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/cli-service.md#配置代理
    proxy: null, // string | Object
    before: app => { }
  },
  configureWebpack: {

    plugins: [

      new webpack.ProvidePlugin({

        $: "jquery",

        jQuery: "jquery",

        "windows.jQuery": "jquery"

      })

    ]

  }
}