# Webpack Vue Demo

webpack 个人vue脚手架

  npm包:
    webpack, webpack-cli, webpack-dev-server, // webpack
    vue, stylus(stylus-loader需要)

    npm插件
      rimraf // 删除dist目录
      webpack-merge // 合并 webpack.config
      cross-env(可选, 设置环境变量, 为什么要使用，因为各平台设置变量的方式不同)(cross-env xx=xx)

    Loader: // 层级关系
      .css处理
        style-loader // 以js代码将css-loader处理的样式插入到html里
        css-loader
        stylus-loader // css预处理器loader
        postcss-loader (autoprefixer) // 优化css 添加-webkit-等写法
      .vue处理
        vue-loader (peer: vue-template-compiler) // 解析.vue文件
      .jsx处理
        babel-loader ( // babel插件
          babel-preset-env
        )
      文件处理:
        file-loader
        url-loader
    
    plugins:
      html-webpack-plugin // 建立入口html
      mini-css-extract-plugin // 分离css

