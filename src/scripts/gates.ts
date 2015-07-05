/// <reference path="../typings/jquery.d.ts" />

import $ = require('jquery')

$(() => {
    $('#create-one-source').click(() => {
        var oneSource = $('<div class="one-source">');
        $('body').append(oneSource);
        oneSource.click(() => $('#value').text('1'))
    });
    $('body').click((e) => {
        if (e.target != document.body) return;
        $('#value').text('Nothing Selected')
    })
    $('#create-not-gate').click(() =>
        $('body').append('<div class="not-gate"/>')
    );
});