/// <reference path="../../typings/intern/intern/intern.d.ts" />

import registerSuite = require('intern!object')
import Command = require('leadfoot/Command')

var toUrl = (<any>require).toUrl;

registerSuite({
    name: 'Gates should',
    'create a new 1-source after pressing the create button'() {
        return (<Command>this['remote'])
            .get(toUrl('../../index.html'))
            .setFindTimeout(1000)
            .findById('create-one-source')
                .click()
                .end()
            .findByClassName('one-source');
    }
});