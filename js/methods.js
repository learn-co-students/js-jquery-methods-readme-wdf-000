'use strict';

function fancySchmancy(){
  $('p#bacon').addClass('iAmFancy');
  return $('.iAmFancy');
}

function addText(str){
  $('p').eq(1).append(str)
  return $('p').eq(1);
}

function showDolphin(){
  $('img#hidden').show(); 
}

function hideImage(){
  $('img[alt="pie in face"]').hide(); 
}

function fadeIt(){
  $('div#favorite-snacks').fadeIn();
}

function fadeItOut(){
  $('p').eq(1).fadeOut(0);
}

function findItByClass(str){
  return $(str).hasClass('flatironLink');
}

function formValue(){
  return $('input:last').val();
}