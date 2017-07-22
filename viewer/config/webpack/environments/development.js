const webpack = require('webpack');

module.exports = _path => ({
    context: _path,
    devtool: 'source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
        inline: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});
