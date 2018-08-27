"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
module.exports = appInfo => {
    return {
        static: {
            prefix: '/build/',
            dir: path.join(appInfo.baseDir, 'app/build'),
            dynamic: false,
            preload: true,
        }
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnByb2QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb25maWcucHJvZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUE0QjtBQUU1QixNQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxFQUFFO0lBQ3hCLE9BQU87UUFDSCxNQUFNLEVBQUU7WUFDSixNQUFNLEVBQUUsVUFBVTtZQUNsQixHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQztZQUM3QyxPQUFPLEVBQUUsS0FBSztZQUNkLE9BQU8sRUFBRSxJQUFJO1NBQ2hCO0tBQ0osQ0FBQTtBQUNKLENBQUMsQ0FBQyJ9