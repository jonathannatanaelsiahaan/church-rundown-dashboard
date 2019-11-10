const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'public/dist'),
        filename: 'build.js'
    },
    module:{
        rules:[
            {
               exclude: /node_modules/,
               test: /\.js$/,
               loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      publicPath: '../',
                      hmr: process.env.NODE_ENV === 'development',
                    },
                  },
                  'css-loader',
                ],
              },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false,
        }),
    ],
    resolve: {
        enforceExtension: false,
        alias: {
            app: path.resolve(__dirname, "app/"),
            actions: path.resolve(__dirname, "app/actions/"),
            components: path.resolve(__dirname, "app/components/"),
            containers: path.resolve(__dirname, "app/containers/"),
            reducers: path.resolve(__dirname, "app/reducers/"),
            stores: path.resolve(__dirname, "app/stores"),
        }
    }
}