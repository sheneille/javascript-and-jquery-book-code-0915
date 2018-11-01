// Find first list item
var firstItem = document.getElementById('one');

// Get value of textContent
var showTextContent = firstItem.textContent;

// Get value of innerText
var showInnerText = firstItem.innerText;

// Show the content of these two properties at the end of the list
var msg = '<p>textContent: ' + showTextContent + '</p>';
msg += '<p>innerText: ' + showInnerText + '</p>';

var el = document.getElementById('scriptResults');
el.innerHTML = msg;

// Update the first list item
firstItem.textContent = 'sourdough bread';
