function fancySchmancy() {
  $('p#bacon').addClass('iAmFancy');
  return $('p#bacon')
}

function addText(string) {
  $('p').eq(1).append(string);
  return $('p').eq(1);
}

function fadeIt() {
  $('#favorite-snacks').css({display:"block", opacity: '0'});
}

function fadeItOut() {
  $('p').eq(1).css({display: "none"});
}

function findItByClass(variable) {
  // return $(variable) == $('a')
  return $(variable).selector == 'a'
}

function formValue() {
  return $('input:last-child').val();
}

function showDolphin() {
  $('#hidden').css({"display": "inline"});
}

function hideImage() {
  $('img[alt="pie in face"]').css({"display":"none"});
}
