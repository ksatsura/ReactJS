const merge = require('webpack-merge');
const server = require('./webpack.server.js');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(server, {
    mode: 'production',
    optimization: {
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap: true,
            }),
        ],
    },
    target: 'node',
    //module: 'commonjs',
});