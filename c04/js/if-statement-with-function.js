//Store 75 as score and a Message
var score = 75;
var msg = ' ';

//Create a function to congratulate

function congratulate() {
  msg += 'Congratulations! ';
}

//Check if score is above 50 then run the function Congratulate and add proceed to the next round

if (score >= 50) {
  congratulate();
  msg += 'Proceed to the next round.'; }

//Write the element with the id answer

var el = document.getElementById('answer');
el.innerHTML = msg;
