const merge = require('webpack-merge');
const server = require('./webpack.server.js');
const TerserPlugin = require('terser-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

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
    externals: [nodeExternals()],
});