//Store message and level in variables

var msg;
var level = 2;

// Determine message based on level

switch (level) {
  case 1: msg = 'Good luck on the first test';
  break;

  case 2: msg = 'Second of three - keep going!';
  break;

  case 3: msg = 'Final round, almost there!';
  break;

  default: msg = 'Good luck!';
  break; }

//Create an element with the id answer
  var el = document.getElementById('answer');
  el.textContent = msg;
