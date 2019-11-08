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
                      // you can specify a publicPath here
                      // by default it uses publicPath in webpackOptions.output
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
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
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