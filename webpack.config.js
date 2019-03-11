const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            { 
                test: /\.css$/,
                use: ExtractTextPlugin.extract(
                    {
                      fallback: 'style-loader',
                      use: ['css-loader']
                    }),
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin({filename: 'style.css'})
    ],
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist'
    }
};