// Get the first item
var firstItem = document.getElementById('one');

// Change its class attribute
firstItem.className = 'complete';

// Get fourth item
var fourthItem = document.getElementsByTagName('li').item(3);

//note: The following line should say fourthItem (not el2)
// Add an attribute to it
fourthItem.setAttribute('class', 'cool');
