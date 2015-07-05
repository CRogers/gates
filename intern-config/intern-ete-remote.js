define({
  environments: [
    { browserName: 'chrome' },
    { browserName: 'firefox' }
  ],

  tunnel: 'SauceLabsTunnel',
  tunnelOptions: {
    username: 'crogers-gates',
    accessKey: '93ff0070-1fd7-4f8c-9fad-a6e8ed200696'
  },

  functionalSuites: [ 'build/tests/functional/test' ],

  reporters: [ 'console' ],

  excludeInstrumentation: /./
});

