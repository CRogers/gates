/// <reference path="../../typings/intern/intern/intern.d.ts" />

import registerSuite = require('intern!object')

registerSuite({
    name: 'yay',
    'foo'() {
        return this.remote
            .get('http://google.com')
            .findByName('btnI')
            .click()
    }
});