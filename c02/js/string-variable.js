// Create variables to hold the name and note text.
var name;
var text;

// Assign values to these variables.
name = 'sheneille';
text = 'hello';

// Get the element with an id of name.
var elName = document.getElementById('name');

// Replace the content of this element.
elName.textContent = name;

// Get the element with an id of note.
var elText = document.getElementById('note');

// Replace the content of this element.
elText.textContent = 'text';

/*
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML, but note the security issues on p228-231
elName.innerHTML = username;
elNote.innerHTML = message;
*/
