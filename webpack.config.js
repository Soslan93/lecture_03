let path = require('path');
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname,"./dist"),
        filename: "main.js",
        publicPath: 'dist/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }

        ]
    }
}