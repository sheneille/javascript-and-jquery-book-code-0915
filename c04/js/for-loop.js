//Create an array of score 24, 32, 17

var scores = [24, 32, 17];

//Create arrayLength, roundNumber,mgg and i
var arrayLength = scores.length;
var roundNumber = 0;
var msg = '';
var i;
for (var i = 0; i < arrayLength; i++) {
  // Arrays are zero based (so 0 is round 1)
  // Add 1 to the current round
  roundNumber = (i + 1);  
  // Write the current round to message
  msg += 'Round ' + roundNumber + ': ';
  // Get the score from the scores array
  msg += scores[i] + '<br />';}
  document.getElementById('answer').innerHTML = msg;
