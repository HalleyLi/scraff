var path = require('path')
var config = require('../config')
var utils = require('./utils')
var webpack = require('webpack')
var projectRoot = path.resolve(__dirname, '../')

var env = process.env.NODE_ENV
    // check env & config/index.js to decide weither to enable CSS Sourcemaps for the
    // various preprocessor loaders added to vue-loader at the end of this file
var cssSourceMapDev = (env === 'development' && config.dev.cssSourceMap)
var cssSourceMapProd = (env === 'production' && config.build.productionSourceMap)
var useCssSourceMap = cssSourceMapDev || cssSourceMapProd

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        path: config.build.assetsRoot,
        publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.vue', '.css', '.json'],
        alias: {
            'vue': 'vue/dist/vue',
            'src': path.resolve(__dirname, '../src'),
            'assets': path.resolve(__dirname, '../src/assets'),
            'components': path.resolve(__dirname, '../src/components'),
            'views': path.resolve(__dirname, '../src/views'),
            'plotly.js': 'plotly.js/dist/plotly'
        }
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: ['vue-loader']
        }, {
            test: /\.js$/,
            loader: ['babel-loader'],
            include: projectRoot,
            // /node_modules\/(?!vue-bulma-.*)/
            exclude: [new RegExp(`node_modules\\${path.sep}\(\?\!vue-bulma-.*\)`)]
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            query: {
                limit: 10000,
                name: utils.assetsPath('img/[name].[hash:7].[ext]')
            }
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            query: {
                limit: 10000,
                name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
            }
        }]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            vue: {
                loaders: utils.cssLoaders({
                    sourceMap: process.env.NODE_ENV === 'production',
                    extract: process.env.NODE_ENV === 'production'
                }),
                postcss: [
                    require('autoprefixer')({
                        browsers: ['last 3 versions']
                    })
                ]
            }
        })
    ]
}
