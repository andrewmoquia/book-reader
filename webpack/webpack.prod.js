const target = 'browserslist';
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
   mode: 'production',
   target: target,
   plugins: [
      CopyPlugin({
         patterns: [
            { from: './public/manifest.json', to: '' },
            { from: './public/robots.txt', to: '' },
         ],
      }),
   ],
};
