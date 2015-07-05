/// <reference path="../../typings/intern/intern/intern.d.ts" />

import registerSuite = require('intern!object')

var toUrl = (<any>require).toUrl;

registerSuite({
    name: 'Gates should',
    'create a new 1-source after pressing the create button'() {
        return this.remote
            .get(toUrl('../../index.html'))
            .findById('create-one-source')
                .click()
            .findByClassName('one-source');
    }
});