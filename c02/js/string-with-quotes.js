// Create variables to hold the title and note text.var title;var message;
var title;
var note;
// Assign values to these variables.title = "Molly's Special Offers";message = '<a href=\"sale.html\">25% off!</a>';
title = 'Hello Sheneille!';
note = 'Here is 25% Off because you are awesome';

// Get the element with an id of title .var elTitle = document.getElementById('title');
var elTitle = document.getElementById('title');
// Replace the content of this element.elTitle.textContent = title;
elTitle.textContent = title;
// Get the element with an id of note.var elNote = document.getElementById('note');
var elNote = document.getElementById('note');
// Replace the content of this element.elNote.innerHTML = message;
elNote.textContent = note;

/*NOTE: textContent does not work in IE8 or earlierYou can use innerHTML on line 12, but note the security issues on p228-231elTitle.innerHTML = title;innerHTML is used on line 17 because it is adding markup (not just text)*/
