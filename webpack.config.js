const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) => {

    return {
        mode: env.production ? 'production' : 'development',
        devtool: env.production ? 'source-maps' : 'eval',
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
                    test: /\.(png|svg|jpg|gif)$/,
                    use: ['file-loader']
                }
            ]
        },
        optimization: env.production && {
            minimizer: [
              new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap: true, // Must be set to true if using source-maps in production
                terserOptions: {
                  // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
                }
              }),
            ],
          },
        plugins: [
            new ExtractTextPlugin({filename: 'style.css'}),
            // new TerserPlugin({
            //     terserOptions: {
            //     compress: argv['optimize-minimize'] // only if -p or --optimize-minimize were passed
            //     }
            // })
           
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
        },
        watch: true,
    }
};