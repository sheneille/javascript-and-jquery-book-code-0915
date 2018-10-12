// Create variables and assign their values
var stock = false;
var shipping = true;

// Get the element that has an id of stock
var elStock = document.getElementById('stock');

// Set class name with value of inStock variable
elStock.textContent = stock;

// Get the element that has an id of shipping
var elShipping = document.getElementById('shipping');

// Set class name with value of shipping variable
elShipping.textContent = shipping;
