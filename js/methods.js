'use strict';
function fancySchmancy(){
  return $('p#bacon')[0];
}

function addText(input){
  return $('p#bacon').append(input)
}

function showDolphin(){
  return $('img#hidden').show();
}

function hideImage(){
  return $('img[alt="pie in face"]').hide();
}

function fadeIt(){
  return $('div#favorite-snacks').html();
}

function fadeItOut(){
  return $('p:first-child').next().html();
}

function findItByClass(tag){
  if (tag === 'a'){
    return true;
  }else{
    return false;
  }
}

function formValue(){
  return $('input:last-child').val();
}
