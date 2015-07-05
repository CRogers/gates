define({
  environments: [
    { browserName: 'chrome' }
  ],

  functionalSuites: [ 'build/tests/functional/test' ],

  reporters: [ 'console' ],

  excludeInstrumentation: /./
});

