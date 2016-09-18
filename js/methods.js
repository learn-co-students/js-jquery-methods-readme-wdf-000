'use strict';

function fancySchmancy() {
  return $("p").addClass("iAmFancy");
}

function addText(text) {
  return $("p:first-child + p").append(text);
  // return $("p#bacon").append(text);
}

function showDolphin() {
  return $("#hidden").show();
}

function hideImage() {
  return $("img[alt='pie in face']").hide();
}

function fadeIt() {
  return $('#favorite-snacks').fadeIn().css("display: block; opacity: 0.0;");
}

function fadeItOut() {
  return $("p:first-child + p").fadeOut(0).css("display: none;");
}

function findItByClass(tag) {
  if ($(tag).hasClass('flatironLink')) {
    return true;
  } else {
    return false;
  } 
}

function formValue() {
  return $('input:last').val()
}

