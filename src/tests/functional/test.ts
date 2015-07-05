/// <reference path="../../typings/intern/intern/intern.d.ts" />

import expect = require('intern/chai!expect')
import registerSuite = require('intern!object')
import Command = require('leadfoot/Command')

var toUrl = (<any>require).toUrl;

registerSuite({
    name: 'Gates should',
    'create a new 1-source after pressing the create button'() {
        return (<Command<void>>this['remote'])
            .get(toUrl('../../index.html'))
            .setFindTimeout(1000)
            .findById('create-one-source')
                .click()
                .end()
            .findByClassName('one-source');
    },
    'show the value of a new 1-source to be 1'() {
        return (<Command<void>>this['remote'])
            .get(toUrl('../../index.html'))
            .setFindTimeout(1000)
            .findById('create-one-source')
                .click()
                .end()
            .findByClassName('one-source')
                .click()
                .end()
            .findById('value')
                .getVisibleText()
                .then((text) => expect(text).to.equal('1'))
    }
});