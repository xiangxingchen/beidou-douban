'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
module.exports = () => {
    return {
        keys: 'secret',
        react: {
            assetPath: '/build',
        },
        view: {
            defaultExtension: '.tsx',
        },
        router: {
            entry: 'index',
            exts: ['.tsx']
        },
        isomorphic: {
            babel: false,
        },
        webpack: {
            // your webpack config file
            custom: {
                configPath: path.resolve(__dirname, './webpack.config.ts'),
            },
            resolve: {
                extensions: ['.json', '.js', '.jsx', '.ts', '.tsx'],
                alias: {
                    client: path.join(__dirname, '../client'),
                },
            },
        },
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmRlZmF1bHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb25maWcuZGVmYXVsdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBQ2IsNkJBQTZCO0FBRTdCLE1BQU0sQ0FBQyxPQUFPLEdBQUksR0FBRyxFQUFFO0lBQ25CLE9BQU87UUFDSCxJQUFJLEVBQUUsUUFBUTtRQUNkLEtBQUssRUFBRTtZQUNILFNBQVMsRUFBRSxTQUFTO1NBQ3ZCO1FBRUQsSUFBSSxFQUFFO1lBQ0YsZ0JBQWdCLEVBQUUsTUFBTTtTQUMzQjtRQUNELE1BQU0sRUFBRTtZQUNKLEtBQUssRUFBRSxPQUFPO1lBQ2QsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDO1NBQ2pCO1FBQ0QsVUFBVSxFQUFFO1lBQ1IsS0FBSyxFQUFFLEtBQUs7U0FDZjtRQUNELE9BQU8sRUFBRTtZQUNMLDJCQUEyQjtZQUMzQixNQUFNLEVBQUU7Z0JBQ0osVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLHFCQUFxQixDQUFDO2FBQzdEO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLFVBQVUsRUFBRSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUM7Z0JBQ25ELEtBQUssRUFBRTtvQkFDSCxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDO2lCQUM1QzthQUNKO1NBQ0o7S0FDSixDQUFBO0FBQ0wsQ0FBQyxDQUFDIn0=