let webpackModule;

webpackModule = {
    rules:[
        {
            exclude: /node_modules/,
            test: /\.js$/,
            loader: 'babel-loader'
        },
        {
            test: /\.css$/,
            use: [
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
};

module.exports = webpackModule;