'use strict';

function fancySchmancy() {
  return $('p#bacon').addClass('iAmFancy');
}

function addText(someText) {
  return $('p:nth-child(2)').append(someText);
}

function showDolphin() {
  return $('img#hidden').show()
}

function hideImage() {
  return $('img[alt="pie in face"]').hide();
}

function fadeIt() {
  return $('div#favorite-snacks').fadeIn();
}

function fadeItOut() {
  return $('p:nth-child(2)').fadeOut(0);
}

function findItByClass(s) {
  return $(s).hasClass("flatironLink");
}

function formValue() {
  return $('form input').last().val();
}