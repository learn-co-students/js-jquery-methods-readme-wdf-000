'use strict';

function fancySchmancy() {
  $('p#bacon').addClass("iAmFancy");
  return $('.iAmFancy');
}

function addText(line) {
  $('p').eq(1).append(line);
  return $('p').eq(1);
}

function showDolphin() {
  $('#hidden').show();
}

function hideImage() {
  $('img[alt="pie in face"]').hide();
}

function fadeIt() {
  $('#favorite-snacks').fadeIn();
}

function fadeItOut() {
  $('p').eq(1).fadeOut(0);
}

function findItByClass(selector) {
  return $(selector).hasClass('flatironLink');
}

function formValue() {
  return $('input:last').val();
}
