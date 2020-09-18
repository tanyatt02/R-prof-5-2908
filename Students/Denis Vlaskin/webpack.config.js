const miniCssExtractPlugin = require('mini-css-extract-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src', 'index.jsx')
    },
    output: {
        path: path.join(__dirname, "dist"),
        publicPath: '',
        filename: path.join('js', 'bundle.js')
    },
    target: 'web',
    module: {
        rules: [
            { 
                test: /\.css$/i,
                use: [miniCssExtractPlugin.loader, 'css-loader']

            },
            { 
                test: /\.jsx?$/i,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    plugins: [
                        [
                            "@babel/plugin-proposal-class-properties",
                            { "loose": true }
                        ]
                    ]
                }
            }
        ]
    },
    plugins: [
        new miniCssExtractPlugin({
            filename: path.join('style', '[name].css'),
            chunkFilename: '[id].css'
        }),
        new htmlWebpackPlugin({
            filename: "index.html",
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
    devServer: {
        port: 3300,
        hot: true,
        open: false,
        historyApiFallback: {
            index: 'index.html'
        }
    }
}