var webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  OpenBrowserPlugin = require('open-browser-webpack-plugin');
module.exports = {
  //插件项
  plugins: [
  new webpack.HotModuleReplacementPlugin(),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    //hash: true,
    template: 'src/index.preprocess.htm',
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true
      // more options:
      // https://github.com/kangax/html-minifier#options-quick-reference
    }
  }),
  new OpenBrowserPlugin({
    url: 'http://10.9.28.150:8080/index.html'
  })
  ],
  //页面入口文件配置
  entry: {
    index: './src/main.js'
  },
  //入口文件输出配置
  output: {
    path: './dist',
    filename: 'main.js'
  },
  module: {
    //加载器配置
    loaders: [
      //.css 文件使用 style-loader 和 css-loader 来处理
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      //.js 文件使用 jsx-loader 来编译处理
      { test: /\.js$/, loader: 'jsx-loader?harmony' },
      //.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
      { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
      //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
    ]
  },
  //其它解决方案配置
  resolve: {
    //查找module的话从这里开始查找
    root: 'hanyuema/desktop/react-practice/src', //绝对路径
    //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
    extensions: ['', '.js', '.json', '.scss'],
    //模块别名定义，方便后续直接引用别名，无须多写长长的地址
    alias: {
      AppStore: 'js/stores/AppStores.js',//后续直接 require('AppStore') 即可
      ActionType: 'js/actions/ActionType.js',
      AppAction: 'js/actions/AppAction.js'
    }
  },
  devServer: {
    port: 8080,
    host: '10.9.28.150',
    contentBase: './dist'
  }
};