// Store the greeting in a variable
var greeting = 'Hello! This is your alter ego speaking';

// Store the users name in a variable
var name = 'Sheneille Patil'

/* Create the welcome message by concatenating the strings in the two variables */
var welcomeMessage = greeting + ' ' + name;

// Get the element that has an id of greeting
var el = document.getElementById('greeting');
el.textContent = welcomeMessage;
// Replace the content of this element with the personal message

/*
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML on line 14, but note the security issues on p228-231
el.innerHTML = welcomeMessage;
*/
