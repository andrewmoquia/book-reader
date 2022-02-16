const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: path.resolve(__dirname, '..', './src/index.tsx'),
   resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx'],
   },
   module: {
      rules: [
         {
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            use: [
               {
                  loader: 'babel-loader',
               },
            ],
         },
         {
            test: /\.s[ac]ss$/i,
            use: [
               'style-loader',
               'css-loader',
               {
                  loader: 'sass-loader',
                  options: {
                     implementation: require('sass'),
                  },
               },
            ],
         },
         {
            test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
            type: 'asset/inline',
         },
         {
            test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
            loader: 'file-loader',
            options: {
               name: 'images/[name].[ext]',
            },
            type: 'asset',
         },
      ],
   },
   output: {
      path: path.resolve(__dirname, '..', './build'),
      publicPath: '/',
      filename: '[name].js',
   },
   plugins: [
      new HTMLWebpackPlugin({
         favicon: './public/react-logo.png',
         template: path.resolve(__dirname, '..', './public/index.html'),
      }),
   ],
};
