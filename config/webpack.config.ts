'use strict';
import * as path from 'path';
import webpack from 'webpack';

/* tslint:disable */
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const cssnano = require('cssnano');
const postcssOpts = {
  ident: 'postcss',
  plugins: () => [
    autoprefixer({
      browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4'],
    }),
    pxtorem({ rootValue: 64, propWhiteList: [] })
  ],
  cssnano
};

module.exports = (app, defaultConfig, dev) => {
    if (app && dev) {
        defaultConfig.plugins.push(
            new webpack.DefinePlugin({
                __ENV__: JSON.stringify('daily'),
                __CLIENT__: true,
                __SERVER__: false,
                __DEVELOPMENT__: true,
                __DEVTOOLS__: true,
                __DAILY__: true,
            })
        );
    } else {
        defaultConfig.plugins.push(
            new webpack.DefinePlugin({
                __ENV__: JSON.stringify('prod'),
                __CLIENT__: true,
                __SERVER__: false,
                __DEVELOPMENT__: false,
                __DEVTOOLS__: false,
                __DAILY___: false,
                'process.env': {
                    NODE_ENV: JSON.stringify('production'),
                },
            })
        );
    }

    const tsLoader = {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'babel-loader',
                options: {
                    babelrc: false,
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                targets: {
                                    browsers: ['>1%', 'last 4 versions', 'not ie < 9'],
                                },
                                useBuiltIns: 'entry',
                                // Do not transform modules to CJS
                                modules: false,
                            },
                        ],
                        '@babel/typescript',
                        [ '@babel/preset-stage-2', { decoratorsLegacy: true } ],
                        [
                            '@babel/preset-react',
                            {
                                development: dev,
                                useBuiltIns: true,
                            },
                        ],
                    ],

                    plugins: [
                        [
                            '@babel/transform-runtime',
                            {
                                polyfill: false,
                                regenerator: true,
                            },
                        ],
                    ],
                    env: {
                        development: {
                            plugins: [ 'module:react-hot-loader/babel' ],
                        },
                    },
                    cacheDirectory: dev,
                    compact: !dev,
                    highlightCode: true,
                },
            },
        ],
    };

    defaultConfig.entry = {
      index: [ path.join(__dirname, '../client/index.tsx') ],
    };

    defaultConfig.module.rules[0].use = {
        loader: 'babel-loader',
        options: {
            babelrc: false,
            presets: [
                [
                    '@babel/preset-env',
                    {
                        targets: {
                            browsers: ['>1%', 'last 4 versions', 'not ie < 9'],
                        },
                        useBuiltIns: 'entry',
                        // Do not transform modules to CJS
                        modules: false,
                    },
                ],
                '@babel/preset-stage-2',
                [
                    '@babel/preset-react',
                    {
                        development: dev,
                        useBuiltIns: true,
                    },
                ],
            ],
            plugins: [
              'transform-runtime',
              [ 'import', { libraryName: 'antd-mobile', style: true } ],
            ],
            env: {
                development: {
                    plugins: ['module:react-hot-loader/babel'],
                },
            },
            cacheDirectory: dev,
            compact: !dev,
            highlightCode: true,
        },
    };

    defaultConfig.module.rules.push(tsLoader);
    // px转换rem
    defaultConfig.module.rules[5].use[3] = {
      loader: 'postcss-loader',
      options: postcssOpts
    };

    defaultConfig.output = {
        path: path.join(__dirname, '../app/public'),
        filename: '[name].js',
        publicPath: '/build/',
        chunkFilename: '[name].[chunkhash].js'
    };

    return defaultConfig;
};
/* tslint:enable */
