/// <reference path="../typings/jquery.d.ts" />

import $ = require('jquery')

$(() => {
    $('#create-one-source').click(() => {
        var oneSource = $('<div class="one-source">');
        $('body').append(oneSource);
        oneSource.click(() => $('#value').text('1'))
    });
});