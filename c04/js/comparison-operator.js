// Store values for pass and score, 50 and 90 respectively
var pass = 50;
var score = 90;

//Check if the user has passed

var hasPassed = score >= pass;

// Write the message into the page in id answer

el = document.getElementById('answer');

// Write the element on the page usong innerHTML
el.innerHTML = 'Level passed: ' + hasPassed;
