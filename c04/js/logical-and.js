// Store values for round 1 = score1, score2 and round 2 = pass1 and pass2 as 8, 8, 6 and 6 respectively

var score1 = 8;
var score2 = 8;
var pass1 = 6;
var pass2 = 6;

// Check whether user passed both rounds, store result in variable

var passBoth = (score1 >= pass1) && (score2 >= pass2);

// Create message

var msg = 'Both rounds passed: ' + passBoth;

// Write the message into the page
var el = document.getElementById('answer');
el.innerHTML = msg;
