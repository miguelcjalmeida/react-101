const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'main.js'
  },
  module: {
    loaders: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: ['babel-loader','eslint-loader']
      },
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
