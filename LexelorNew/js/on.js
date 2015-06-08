/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

//document.addEventListener('DOMContentLoaded', function () {
//  particleground(document.getElementById('greyHeading'), {
//    dotColor: 'dimgray',
//    lineColor: 'dimgray'
//  });
//}, false);
//

document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('greyHeading'), {
    dotColor: '#89c2ef',
    lineColor: '#89c2ef'
  });
  var intro = document.getElementById('greyHeadingContent');
  intro.style.marginTop = - intro.offsetHeight / 0.6 + 'px';
}, false);


/*
// jQuery plugin example:
$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#5cbdaa',
    lineColor: '#5cbdaa'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});
*/

