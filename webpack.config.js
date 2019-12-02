const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Autoprefixer = require("autoprefixer");
const PostcssCalc = require("postcss-calc");

const postcssPlugins = [
    Autoprefixer({
      browsers: ["last 2 versions", "> 5%"],
      cascade: false
    }),
    PostcssCalc()
];  

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
                //   {
                //     loader: MiniCssExtractPlugin.loader,
                //     options: {
                //       publicPath: '../',
                //       hmr: process.env.NODE_ENV === 'development',
                //     },
                //   },
                //   'css-loader',
                  'style-loader',
                  {
                      loader: "css-loader",
                      options: {
                        modules: true,
                      },
                  },
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
            usecase: path.resolve(__dirname, "app/usecase"),
            requests: path.resolve(__dirname, "app/requests"),
            protocols: path.resolve(__dirname, "app/protocols"),
            utils: path.resolve(__dirname, "app/utils")
        }
    }
}