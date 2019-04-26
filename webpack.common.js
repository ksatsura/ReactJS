const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: './index.js',
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
            {
                test: /\.(jpe?g|png|gif|svg)$/i, 
                loader: 'url-loader?name=/images/[name].[ext]',
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin({filename: 'style.css'}),
        new HtmlWebpackPlugin({
            title: 'Production',
            template: './index.html'
        })
    ],
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    watch: true,
};