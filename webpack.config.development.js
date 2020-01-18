const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const resolver = require("./webpack.resolve.config.js");
const moduleConfig = require("./webpack.module.config.js");

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'public/dist'),
        filename: 'build.js'
    },
    module: moduleConfig,
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false,
        }),
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(false),
            DEV: JSON.stringify(true),
            API_URL: JSON.stringify("http://localhost:3000")
        })
    ],
    resolve: resolver
}