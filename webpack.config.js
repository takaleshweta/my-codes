const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, './src'),
        filename: "./build/bundle.js",
    },
    devServer: {
        inline: true,
        port: 3000,
    },
    module:  {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader'
            },
            {
                test: /\.css$/,
                loader: 'css-loader',
                options: {
                    modules: true,
                    importLoaders: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]',
                },
            }
        ],
    },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         template: './src/index.html'
    //     })
    //
    // ]
}