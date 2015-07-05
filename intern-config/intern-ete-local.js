define({
  environments: [
    { browserName: 'chrome' }
  ],

  functionalSuites: [ 'build/tests/functional/test' ],

  reporters: [ 'Pretty' ],

  excludeInstrumentation: /./
});

