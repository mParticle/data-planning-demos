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
      '/Users/sryan/Desktop/mparticle-data-planning-api-demos/.smartype/build/js/packages/smartype-smartype/kotlin/smartype-smartype.js'
    ]
  },
  output: {
    path: '/Users/sryan/Desktop/mparticle-data-planning-api-demos/.smartype/smartype/build/distributions',
    filename: [Function: filename],
    library: 'smartype',
    libraryTarget: 'commonjs2',
    globalObject: 'this'
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