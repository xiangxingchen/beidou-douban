'use strict';

const path = require('path');

module.exports = (app, defaultConfig , dev) => ({
  ...defaultConfig,
  entry: {
    login: [path.join(__dirname, '../client/login/index.jsx')],
    main: [path.join(__dirname, '../client/index.jsx')],
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    antd: true,
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx'],
    alias: {
      client: path.join(__dirname, '../client'),
      themes: path.join(__dirname, '../client/themes'),
    },
  },
});
