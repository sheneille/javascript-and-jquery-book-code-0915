//Store pass marks as 50 and score as 75 and a Message
var pass = 50;
var score = 75;
var msg;

// Select message to write based on score

if (score > pass) {
  msg = 'Congratulations, you passed!';
}
else {
  msg = 'Have another go!';
}

//Write the element with the id answer
var el = document.getElementById('answer');
el.textContent = msg;
