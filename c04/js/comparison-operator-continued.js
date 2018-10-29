// Enter values for score1 and high score1, 90 and 75 respectively

  var score1 = 90;
  var highScore1 = 75;

// Enter values for score1 and high score1, 95 and 95 respectively

  var score2 = 95;
  var highScore2 = 95;

// Check if scores are higher than current high scores

  var comparison = (score1 + score2) > (highScore1 + highScore2);

// Write the message into the page

  var el = document.getElementById('answer');
  el.innerHTML = 'New high score: ' + comparison;
