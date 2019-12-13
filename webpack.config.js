const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports  = {
    mode: 'development',  // 模式，表示dev环境
    devtool:"source-map",    
    entry: './src/index.js',  // 入口文件
    module: {
        rules: [
            {
            test: /\.js$/,   
            exclude: /node_modules/, // 排除node_modules中的代码
            use: [{
                loader: 'babel-loader'
            }],
        },
        {
            test: /\.less$/,
            exclude: /node_modules/,
            use: ['style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 2,
                        modules:true,
                        // localIdentName: '[local]___[hash:base64:5]'
                    }
                }, 
                'postcss-loader',
                {
                    loader:"less-loader",
                }]
        },
        {
            test: /\.less$/,
            include: /node_modules/,
            use: ['style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 2,
                    }
                }, 
                'postcss-loader',
                {
                    loader:"less-loader",
                    options:  {
                         javascriptEnabled: true
                    }
                }]
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader', 'postcss-loader']
        },
        {
            test: /\.(png|jpg|gif|jpeg)$/,
            use: {
                loader: 'url-loader',
                options: {
                    name: '[name]_[hash].[ext]', // placeholder 占位符
                    outputPath: 'images/', // 打包文件名
                    limit: 204800, // 小于200kb则打包到js文件里，大于则使用file-loader的打包方式打包到imgages里
                },
            },
        },
        {
            test: /\.(eot|woff2?|ttf|svg)$/,
            use: {
                loader: 'url-loader',
                options: {
                    name: '[name]-[hash:5].min.[ext]', // 和上面同理
                    outputPath: 'fonts/',
                    limit: 5000,
                }
            },
        }

    ]
    },               // 让 webpack 能够去处理那些非 JavaScript 文件
    resolve:{
        extensions:['.js','.jsx','.json'],
        alias:{
            '@':path.join(__dirname,'./src')
        },
        
    },
    devServer: {
        historyApiFallback: true,
        proxy: {
            '/api': {
              target: 'https://as-vip.missfresh.cn',
              pathRewrite: {'^/api' : ''},
              changeOrigin: true,     // target是域名的话，需要这个参数，
              secure: false,          // 设置支持https协议的代理
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({   // 向dist文件中自动添加模版html
            template: 'src/index.html',
            filename:'index.html'
        }),
        new CleanWebpackPlugin(), // 打包后先清除dist文件，先于HtmlWebpackPlugin运行
    ],              // 插件
    output: {
        filename: 'main.js',  // 打包后文件名称
        path: path.resolve(__dirname, './dist'), // 打包后文件夹存放路径
        publicPath:'/'
    }
}