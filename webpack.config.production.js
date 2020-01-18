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
            PRODUCTION: JSON.stringify(true),
            DEV: JSON.stringify(false),
            API_URL: JSON.stringify("https://acaragereja.com")
        })
    ],
    resolve: resolver
}