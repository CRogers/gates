define({

  loader: {
    // Packages that should be registered with the loader in each testing environment
    packages: [
    ]
  },

  environments: [
    { browserName: 'chrome' }
  ],

  functionalSuites: [ 'build/tests/functional/test' ]
});

