const path = require('path');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modules: ['src/scripts', 'node_modules'],
    unsafeCache: true,
    alias: {
        components: path.resolve(__dirname, 'src', './', 'components'),
        containers: path.resolve(__dirname, 'src', './', 'containers'),
        reducers: path.resolve(__dirname, 'src', './', 'reducers'),
        actions: path.resolve(__dirname, 'src', './', 'actions'),
    }
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
};
