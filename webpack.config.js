var webpack = require('webpack');
module.exports = {
  entry: [
    'webpack/hot/only-dev-server',
    "./js/app.js"
  ],
  output: {
      path: __dirname + '/build',
      filename: "bundle.js"
  },
  module: {
      loaders: [
          { test: /\.js?$/,
            loader: 'react-hot',
            exclude: /node_modules/,
          },
          { test: /\.js$/, exclude: /node_modules/, loader: 'babel?presets[]=react,presets[]=es2015'},
          { test: /\.css$/, loader: "style!css" },
          { test: /\.(png|jpg|gif)$/, loader: "file-loader?name=img/img-[hash:6].[ext]" }
      ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]

};
