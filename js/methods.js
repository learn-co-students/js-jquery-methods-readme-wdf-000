'use strict';

function fancySchmancy() {
  return $('p#bacon').addClass('iAmFancy');
}

function addText(str) {
  return $('p').eq(1).append(str);
}

function showDolphin() {
  $('#hidden').css({"display": "inline"});
}

function hideImage() {
  $('img[alt="pie in face"]').css({"display": "none"});
}

function fadeIt() {
  $('div').fadeIn();
}

function fadeItOut() {
  $('p').eq(1).css({display: "none"});
}

function findItByClass(str) {
  return $(str).hasClass('flatironLink')
}

function formValue() {
  return $('input:last').val();
}
