const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = _path => ({
    context: _path,
    devtool: 'source-map',
    output: {
        publicPath: '/',
        filename: '[name].[chunkhash].js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: _path,
            verbose: true,
            dry: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            warnings: false,
            sourceMap: true
        })
    ]
});
