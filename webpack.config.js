module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      AlaskaAirHomepage: 'app/components/AlaskaAirHomepage.jsx',
      Nav: 'app/components/Nav.jsx',
      About: 'app/components/About.jsx',
      Example: 'app/components/Example.jsx',
      Weather: 'app/components/Weather.jsx',
      WeatherForm: 'app/components/WeatherForm.jsx',
      OpenWeatherMap: 'app/api/openWeatherMap.jsx',
      WeatherMessage: 'app/components/WeatherMessage.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
}