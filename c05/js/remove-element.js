// Store the element to be removed in a variable.
var removeEl = document.getElementsByTagName('li')[2];

var containerEl = removeEl.parentNode;
// Remove the element.
containerEl.removeChild(removeEl);
