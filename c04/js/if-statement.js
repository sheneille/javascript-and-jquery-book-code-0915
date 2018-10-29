//Store 75 as score and a blank Message
var score = 75;
var msg = ' ';

//If score is 50 or higher add Congratulations and Proceed to the next round in the message;

if (score >= 50) { msg = 'Congratulations!';
  msg += ' Proceed to the next round.';
}

//Create an element by getting the id of answer and then write the message on the element

var el = document.getElementById('answer');
el.textContent = msg;
