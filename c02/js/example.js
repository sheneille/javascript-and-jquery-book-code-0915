// Create variables for the welcome message
var greeting = 'hello!'
var name = 'Sheneille';
var message = 'Welcome to paradise'
// Concatenate the three variables above to create the welcome message
var welcomeMessage = greeting + ' ' + name + ',' + ' ' + message;

// Create variables to hold details about the sign
var sign;
sign = 'sheneille';

var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;

// Get the element that has an id of greeting
var elGreeting = document.getElementById('greeting');

// Replace the content of that element with the personalized welcome message
elGreeting.textContent = welcomeMessage;
//
// Get the element that has an id of userSign then update its contents
var elUserSign = document.getElementById('userSign');
elUserSign.textContent = sign;

// Get the element that has an id of tiles then update its contents
var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;
//
// Get the element that has an id of subTotal then update its contents
var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = subTotal;
//
// Get the element that has an id of shipping then update its contents
var elShipping = document.getElementById('shipping');
elShipping.textContent = 7;
//
// // Get the element that has an id of grandTotal then update its contents
var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = subTotal + shipping;
/*
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML instead of textContent, but note the security issues on p228-231

In the first print run, line 33-34 repeated elSubTotal (rather than elShipping).
This was fixed in later print runs and in this code sample.
*/
