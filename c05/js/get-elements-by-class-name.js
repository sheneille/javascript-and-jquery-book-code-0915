//var elements = document.getElementsByClassName('hot');
var elements = document.getElementsByClassName('hot');
// Find hot items
if (elements.length > 2) {
  var el = elements[2];
  el.className = 'cool';
}
