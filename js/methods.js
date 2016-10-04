'use strict';

function fancySchmancy(){
  return $('p#bacon').addClass("iAmFancy");
}

function addText(addThis){
  return $('p:nth-child(2)').append(addThis);
}

function showDolphin(){
  $('img#hidden').show();
}

function hideImage(){
  $("img[alt='pie in face']").hide();
}

function fadeIt(){
  $('#favorite-snacks').fadeIn();
}

function fadeItOut(){
  return $('p:nth-child(2)').fadeOut(0);
}

function findItByClass(selectThis){
  return $(selectThis).hasClass("flatironLink");
}

function formValue(){
  return $('input:nth-child(2)').val();
}
