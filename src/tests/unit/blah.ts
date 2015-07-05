/// <reference path="../../typings/intern/intern/intern.d.ts" />

import chai = require('intern/chai!')
import bdd = require('intern!bdd')

var {expect} = chai;
var {describe, it} = bdd;

describe('Foo', () => {
    it('should be false', () => {
        expect(true, 'cat').to.equal(true);
    });
    it('should meow', () => {
        expect('meow').to.not.equal('yes');
    })
});