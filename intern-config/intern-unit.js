define({

  loader: {
    // Packages that should be registered with the loader in each testing environment
    packages: [
    ]
  },

  suites: [
    'build/tests/unit/blah'
  ],

  reporters: [ 'pretty' ],

  excludeInstrumentation: /./
});