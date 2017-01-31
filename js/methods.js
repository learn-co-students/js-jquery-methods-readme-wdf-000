'use strict';

function fancySchmancy(){
  return $('p').addClass("iAmFancy");
}

function addText(){
  return $('p:last').append("This paragraph used animal ipsum.");
}

function showDolphin(){
  return $('#hidden').show();
}

function hideImage(){
  return $("img[alt='pie in face']").hide();
}

function fadeIt(){
  $('#favorite-snacks').fadeIn();
}

function fadeItOut(){
  return $('p:last').fadeOut(0);
}

function findItByClass(a){
  return $(a).hasClass('flatironLink');
}

function formValue(){
  return $('input:last').val();
}
