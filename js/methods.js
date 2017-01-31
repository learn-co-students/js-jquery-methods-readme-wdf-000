'use strict';
function fancySchmancy() {
  return $("p").addClass("iAmFancy");
}

function addText(string) {
    return $("p:first-child").next().append(string)
}

function showDolphin() {
  $('#hidden').show()
}

function hideImage() {
  $("img[alt='pie in face']").hide()
}

function fadeIt() {
  $('#favorite-snacks').fadeIn();
}

function fadeItOut() {
  $("p:first-child").next().fadeOut(0)
}

function findItByClass(selector) {
  return $(selector).hasClass('flatironLink')
}

function formValue() {
  return $('input:last-child').val();
}
