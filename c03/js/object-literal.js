// Set up the object var hotel = { name : 'Quay', rooms : 40, booked : 25, checkAvailability : function() { return this.rooms - this.booked;} };
var hotel = {
  name: 'Quay',
  rooms: 240,
  booked: 40,
  // Need "this" because inside function
  checkAvailability: function(){
    return this.rooms - this.booked;
  }
};

// Update the HTML var elName = document.getElementById('hotelName');
var elName = document.getElementById('hotelName');

// Get element elName.textContent = hotel.name;
elName.textContent = hotel.name;

// Update HTML with property of the object
var elRooms = document.getElementById('rooms');

//var elRooms = document.getElementById('rooms'); // Get element elRooms.textContent = hotel.checkAvailability(); // Update HTML with property of the object
elRooms.textContent = hotel.checkAvailability();
/*
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML on lines 13 and 16, but note the security issues on p228-231
*/
