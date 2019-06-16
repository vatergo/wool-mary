var webpack = require('webpack');

module.exports = {
    entry: "./client/main.js",
    output: {
        path: __dirname + '/public/build/',
        publicPath: "build/",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["babel-loader"],
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.jsx$/,
                use: ["react-hot-loader", "babel-loader"],
                exclude: [/node_modules/, /public/]
            },
        ]
    },
    
    devServer: {
        disableHostCheck: true,
        historyApiFallback: true
    }
}