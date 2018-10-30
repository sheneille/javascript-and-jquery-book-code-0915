 //Create a number on which the operation will be performed
var number = 3;
var operator = 'addtion';
var i;
var msg = ' ';

if(operator === 'addition'){
  for(i = 0; i < 11; i++){
    msg += i + ' + ' + number + ' = ' + (i + number) + '<br />';
  }
}
else{
  for(i = 0; i < 11; i++){
    msg += i + ' * ' + number + ' = ' + (i * number) + '<br />';
  }
}

var el = document.getElementById('blackboard');
el.innerHTML = msg;
