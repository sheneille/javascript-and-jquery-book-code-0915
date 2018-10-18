// Set up the object hotel - hotel with parameters name, rooms, booked = park, 120, 77
function hotel(name, rooms, booked){
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
};

var park = new hotel ('park', 120, 77);

// Set new properties gym and pool and set their value true and false
hotel.gym = true;
hotel.pool = false;

// Delete property booked
delete hotel.booked;

// Update the HTML
// Get element by ID hotelName
var elName = document.getElementById('hotelName');

// Update HTML with property of the object name
elName.textContent = park.name;

// Get element with the ID of pool
var elPool = document.getElementById('pool');

// Update HTML with property of the object pool
elPool.textContent = 'Pool:' + ' ' + hotel.pool;

// Get element with the ID of gym
var elName = document.getElementById('gym');

// Update HTML with property of the object gym
elName.textContent = 'Gym:' + ' ' + hotel.gym;

/*
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML on line 14, but note the security issues on p228-231
*/
