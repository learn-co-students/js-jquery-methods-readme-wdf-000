'use strict';

function fancySchmancy(){
	return $('#bacon').addClass('iAmFancy')
}

function addText(string){
	return $('p:last').append('string')
}

function showDolphin(){
	$('img#hidden').show()
}

function hideImage(){
	$('img').hide()
}

function fadeIt(){
	$('#favorite-snacks').fadeIn()
}

function fadeItOut(){
	$('p:last').fadeOut(0)
}

function findItByClass(string){
	return  $(string).hasClass('flatironLink')	
}

function formValue(){
	return $('input:last').val();
}