var path = require('path');
const UglifyJsPlugin=require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
 //压缩js
 optimization: {
  minimizer: [
      new UglifyJsPlugin({
          uglifyOptions: {
              compress: false
          }
      })
  ]
}
};
