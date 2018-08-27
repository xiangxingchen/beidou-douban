'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const webpack_1 = require("webpack");
module.exports = (app, defaultConfig, dev) => {
    if (app && dev) {
        defaultConfig.plugins.push(new webpack_1.default.DefinePlugin({
            __ENV__: JSON.stringify('daily'),
            __CLIENT__: true,
            __SERVER__: false,
            __DEVELOPMENT__: true,
            __DEVTOOLS__: true,
            __DAILY__: true,
        }));
    }
    else {
        defaultConfig.plugins.push(new webpack_1.default.DefinePlugin({
            __ENV__: JSON.stringify('prod'),
            __CLIENT__: true,
            __SERVER__: false,
            __DEVELOPMENT__: false,
            __DEVTOOLS__: false,
            __DAILY___: false,
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            },
        }));
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
                        ['@babel/preset-stage-2', { decoratorsLegacy: true }],
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
                            plugins: ['module:react-hot-loader/babel'],
                        },
                    },
                    cacheDirectory: dev,
                    compact: !dev,
                    highlightCode: true,
                },
            },
        ],
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
    defaultConfig.output = {
        path: path.join(__dirname, '../app/build'),
        filename: '[name].js',
        publicPath: '/build/',
        chunkFilename: '[name].[chunkhash].js'
    };
    /*   defaultConfig.plugins = [
       new ReactLoadablePlugin({
           filename: './dist/react-loadable.json',
       }),
   ];*/
    return defaultConfig;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VicGFjay5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBQ2IsNkJBQTZCO0FBQzdCLHFDQUE4QjtBQUU5QixNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsR0FBRyxFQUFFLGFBQWEsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUN6QyxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUU7UUFDWixhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDdEIsSUFBSSxpQkFBTyxDQUFDLFlBQVksQ0FBQztZQUNyQixPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7WUFDaEMsVUFBVSxFQUFFLElBQUk7WUFDaEIsVUFBVSxFQUFFLEtBQUs7WUFDakIsZUFBZSxFQUFFLElBQUk7WUFDckIsWUFBWSxFQUFFLElBQUk7WUFDbEIsU0FBUyxFQUFFLElBQUk7U0FDbEIsQ0FBQyxDQUNMLENBQUM7S0FDTDtTQUFNO1FBQ0gsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQ3RCLElBQUksaUJBQU8sQ0FBQyxZQUFZLENBQUM7WUFDckIsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1lBQy9CLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLGVBQWUsRUFBRSxLQUFLO1lBQ3RCLFlBQVksRUFBRSxLQUFLO1lBQ25CLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLGFBQWEsRUFBRTtnQkFDWCxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUM7YUFDekM7U0FDSixDQUFDLENBQ0wsQ0FBQztLQUNMO0lBRUQsTUFBTSxRQUFRLEdBQUc7UUFDYixJQUFJLEVBQUUsU0FBUztRQUNmLE9BQU8sRUFBRSxjQUFjO1FBQ3ZCLEdBQUcsRUFBRTtZQUNEO2dCQUNJLE1BQU0sRUFBRSxjQUFj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
