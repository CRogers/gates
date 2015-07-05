/// <reference path="../typings/jquery.d.ts" />

import $ = require('jquery')

$(() => {
   $('#create-one-source').click(() => {
      $('body').append('<div class="one-source">')
   });
});