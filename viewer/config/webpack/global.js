const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootPublic = path.resolve('./src');
const NODE_ENV = process.env.NODE_ENV || 'production';
const DEVELOPMENT = NODE_ENV !== 'production';
const stylesLoader = `css-loader?root=${rootPublic}&sourceMap!sass-loader?outputStyle=expanded&sourceMap=true&sourceMapContents=true`;

module.exports = (_path) => {
    const webpackConfig = {
        // entry points
        entry: {
            app: `${_path}/src/app/index.bootstrap.js`
        },

        // output system
        output: {
            path: `${_path}/dist`,
            filename: '[name].js',
            publicPath: '/'
        },

        // resolves modules
        resolve: {
            extensions: ['.js', '.es6', '.jsx', '.scss', '.css'],
            alias: {
                _appRoot: path.join(_path, 'src', 'app'),
                _images: path.join(_path, 'src', 'assets', 'images'),
                _stylesheets: path.join(_path, 'src', 'assets', 'styles'),
                _scripts: path.join(_path, 'src', 'assets', 'js')
            }
        },

        // modules resolvers
        module: {
            loaders: [{
                test: /\.html$/,
                loaders: [{
                    loader: 'html-loader'
                }]
            }, {
                test: /\.js$/,
                exclude: [
                    path.resolve(_path, 'node_modules')
                ],
                loaders: [{
                    loader: 'ng-annotate-loader'
                },
                {
                    loader: 'babel-loader',
                    query: {
                        cacheDirectory: false
                    }
                }
                ]
            }, {
                test: /\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader?sourceMap'
                ]
            }, {
                test: /\.(scss|sass)$/,
                loader: DEVELOPMENT ? (`style-loader!${stylesLoader}`) : ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: stylesLoader
                })
            }, {
                test: /\.(woff2|woff|ttf|eot|svg)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loaders: [{
                    loader: 'url-loader',
                    query: {
                        name: 'assets/fonts/[name]_[hash].[ext]'
                    }
                }]
            }, {
                test: /\.(jpe?g|png|gif)$/i,
                loaders: [{
                    loader: 'url-loader',
                    query: {
                        name: 'assets/images/[name]_[hash].[ext]',
                        limit: 10000
                    }
                }]
            }]
        },

        devServer: {
            proxy: {
                '/api': process.env.API_URL || 'http://localhost:8080'
            },
            port: 9000
        },

        // load plugins
        plugins: [
            new webpack.NoEmitOnErrorsPlugin(),
            // Provider plugin helps you to expose certainly libraries globally under specified name
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                'window.jquery': 'jquery'
            }),
            new webpack.DefinePlugin({
                NODE_ENV: JSON.stringify(NODE_ENV),
                API_URL: JSON.stringify(process.env.API_URL)
            }),
            new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
            new webpack.optimize.AggressiveMergingPlugin({
                moveToParents: true
            }),

            // Vendor plugin separate vendor packages into a separate file to allow browser caching
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                filename: 'vendor.js',
                chunks: ['app'],
                minChunks: module => /node_modules/.test(module.resource)
            }),

            new ExtractTextPlugin({
                // eslint-disable-next-line prefer-template
                filename: 'assets/styles/css/[name]' + (NODE_ENV === 'development' ? '' : '.[chunkhash]') + '.css',
                allChunks: true
            }),

            // Injects bundles in your index.html instead of wiring all manually.
            // It also adds hash to all injected assets so we don't have problems
            // with cache purging during deployment.
            new HtmlWebpackPlugin({
                template: 'src/index.html',
                inject: 'body',
                hash: true
            })
        ]
    };

    return webpackConfig;
};
