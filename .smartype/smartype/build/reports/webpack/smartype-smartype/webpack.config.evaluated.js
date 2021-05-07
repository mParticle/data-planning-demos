{
  mode: 'production',
  resolve: {
    modules: [
      'node_modules'
    ]
  },
  plugins: [
    ProgressPlugin {
      profile: false,
      handler: [Function: handler],
      modulesCount: 500,
      showEntries: false,
      showModules: true,
      showActiveModules: true
    },
    TeamCityErrorPlugin {}
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'source-map-loader'
        ],
        enforce: 'pre'
      }
    ]
  },
  entry: {
    main: [
      '/Users/kbogdanovs/Documents/GitHub/ecommerce-demo/.smartype/build/js/packages/smartype-smartype/kotlin/smartype-smartype.js'
    ]
  },
  output: {
    path: '/Users/kbogdanovs/Documents/GitHub/ecommerce-demo/.smartype/smartype/build/distributions',
    filename: [Function: filename],
    library: 'smartype',
    libraryTarget: 'commonjs2'
  },
  devtool: 'source-map',
  stats: {
    warningsFilter: [
      /Failed to parse source map/
    ],
    warnings: false,
    errors: false
  }
}