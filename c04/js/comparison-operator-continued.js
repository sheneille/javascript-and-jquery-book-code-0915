// Round 1 score - var score1 = 90;

var score1 = 90;
 // Round 2 score - var score2 = 95;

 var score2 = 95;

 // Round 1 high score - var highScore1 = 75;
 var highScore1 = 75;
 // Round 2 high score - var highScore2 = 95;
 var highScore2 = 95;
// Check if scores are higher than current high scores var comparison = (score1 + score2) > (highScore1 + highScore2);
var comparison = (score1 + score2) > (highScore1 + highScore2);
// Write the message into the page var el = document.getElementById('answer'); el.innerHTML = 'New high score: ' + comparison;
var el = document.getElementById('answer');
el.innerHTML = 'New high score: ' + comparison;
