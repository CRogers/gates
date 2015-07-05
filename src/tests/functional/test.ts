/// <reference path="../../typings/intern/intern/intern.d.ts" />

import expect = require('intern/chai!expect')
import registerSuite = require('intern!object')
import Command = require('leadfoot/Command')

var toUrl = (<any>require).toUrl;

// Should be generic once we can use generic type parameters
type Action = (command: Command<any>) => Command<any>;

function click(): Action {
    return (command) => command
        .click()
        .end()
}

function findOneSource(): Action {
    return (command) => command
        .findByClassName('one-source');
}

function createOneSource(): Action {
    return (command) => command
        .findById('create-one-source')
        .click()
        .end()
}

function clickOneSource(): Action {
    return withMultiple(
        findOneSource(),
        click()
    );
}

function expectValueToBe(expectedText: string): Action {
    return (command) => command
        .findById('value')
        .getVisibleText()
        .then((text: string) => expect(text).to.equal(expectedText))
        .end()
}

function clickEmptySpace(): Action {
    return (command) => command
        .findByTagName('body')
        .click()
        .end()
}

function withMultiple(...funcs: Action[]): Action {
    return (initialCommand) =>
        funcs.reduce((command, func) => func(command), initialCommand)
}

function executeWith(initialCommand: Command<any>, ...funcs: Action[]): Command<any> {
    const afterSetup = initialCommand
        .get(toUrl('../../index.html'))
        .setFindTimeout(1000);
    return withMultiple(...funcs)(afterSetup)
}

registerSuite({
    name: 'Gates should',
    'create a new 1-source after pressing the create button'() {
        return executeWith(this.remote,
            createOneSource(),
            findOneSource()
        );
    },
    'show the value when nothing is selected to be "Nothing Selected"'() {
        return executeWith(this.remote,
            expectValueToBe('Nothing Selected')
        )
    },
    'show the value of a new 1-source to be 1'() {
        return executeWith(this.remote,
            createOneSource(),
            clickOneSource(),
            expectValueToBe('1')
        );
    },
    'show the value after a 1-source has been selected then deselected to be "Nothing Selected'() {
        return executeWith(this.remote,
            createOneSource(),
            clickOneSource(),
            clickEmptySpace(),
            expectValueToBe('Nothing Selected')
        );
    }
});