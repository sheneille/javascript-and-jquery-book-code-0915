 // Unit of table   var table = 3;
 // Type of calculation   var operator = 'addition';
 // Set counter to 1    var i = 1;
 // Message   var msg = '';

//if (operator === 'addition') {
  // Do addition while (i < 11) { msg += i + ' + ' + table + ' = ' + (i + table) + '<br />'; i++; } } else {
  // Do multiplication while (i < 11) { msg += i + ' x ' + table + ' = ' + (i * table) + '<br />'; i++; } }

// Write the message into the page var el = document.getElementById('blackboard'); el.innerHTML = msg;
