// Set up the object var hotel = new Object(); hotel.name = 'Park'; hotel.rooms = 120; hotel.booked = 77; hotel.checkAvailability = function() { return this.rooms - this.booked; };

var hotel = new Object();

hotel.name = 'Park';
hotel.rooms = 120;
hotel.booked = 77;
hotel.checkAvailability = function(){
  return this.rooms - this.booked
}

//var elName = document.getElementById('hotelName'); // Get element elName.textContent = hotel.name; // Update HTML with property of the object
var elName = document.getElementById('hotelName');
elName.textContent =  hotel.name;

//var elRooms = document.getElementById('rooms');    // Get element elRooms.textContent = hotel.checkAvailability();   // Update HTML with result of method
var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();

/*
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML on lines 12 and 15, but note the security issues on p228-231
*/
