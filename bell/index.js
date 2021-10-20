var d = new Date();

const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

// // Change page title to the current weekday
// document.getElementById("title").innerHTML = weekday[d.getDay()];

const minDays = ["09-17", "10-18", "11-15", "02-28", "03-21", "04-18"];

// Default "show" state
var state = false;

// Hide all elements on JS load instead of in HTML to add support for non-javascript environments
function load() {
	// TODO: Combine this into one selector
	document.getElementById("std").style.display="none";
	document.getElementById("long").style.display="none";
	document.getElementById("min").style.display="none";
}

// Hide everything then show relevant elements
function hide() {
	// Hide all
	load();
	// Check if minimum day, if not, proceed normal
	if (minDays.includes((d.getMonth() + 1) + "-" + d.getDate())) {
		document.getElementById("min").style.display="block";
	} else {
	// Check day of the week and show relevant schedule
	switch(d.getDay()) {
		case 1:
		case 2:
		case 5:
			document.getElementById("std").style.display="block";
			break;
		case 3:
		case 4:
			document.getElementById("long").style.display="block";
			break;
		case 6:
		case 0:
			// TODO: Combine this into one selector
			document.getElementById("std").style.display="block";
			document.getElementById("long").style.display="block";
			document.getElementById("min").style.display="block";
			break;
		}
	}
	// Flip state bit to be false
	state = false;
}

// Show all elements
function show() {
	// TODO: Combine this into one selector
	document.getElementById("std").style.display = "block";
	document.getElementById("long").style.display = "block";
	document.getElementById("min").style.display = "block";
	// Flip state bit to be true
	state = true;
}

// Run on button press and run relevant function
function button() {
	if (!state) {
		show();
		document.getElementById("view").innerHTML = "Hide all";
	} else {
		hide();
		document.getElementById("view").innerHTML = "Show all";
	}
}

// Set up page
hide();