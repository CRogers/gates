/// <reference path="../../typings/intern/intern/intern.d.ts" />

import registerSuite = require('intern!object')

var toUrl = (<any>require).toUrl;

registerSuite({
    name: 'yay',
    'foo'() {
        return this.remote
            .get(toUrl('../../index.html'))
            .sleep(3000)
            .findByName('btnI')
            .click()
    }
});