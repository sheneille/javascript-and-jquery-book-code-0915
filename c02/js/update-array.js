// Create the array and assign it valuesvar colors = ['white', 'black', 'custom'];
var colors;
colors = ['red', 'yellow', 'blue'];

// Update the third item in the arraycolors[2] = 'beige';
colors[2] = 'green';

// Get the element with an id of colorsvar el = document.getElementById('colors');
var el = document.getElementById('colors');

// Replace element with third item from the arrayel.textContent = colors[2];
el.textContent = colors[2];
/*NOTE: textContent does not work in IE8 or earlierYou can use innerHTML on line 10, but note the security issues on p228-231el.innerHTML = colors[2];*/
