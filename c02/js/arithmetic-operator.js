// Create a variable for the subtotal and make a calculation
var subtotal;

 // Subtotal is 70
subtotal = 70;

// Create a variable for the shipping and make a calculation
var shipping;

// Shipping is 7
shipping = 7;

// Create the total by combining the subtotal and shipping values
 // Total is 77
 var total;
 total = subtotal + shipping;

// Write the results to the screen

/*
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML on lines 12, 15, and 18 but note the security issues on p228-231
elSub.innerHTML = subtotal;
elShip.innerHTML = shipping;
elTotal.innerHTML = total;
*/
