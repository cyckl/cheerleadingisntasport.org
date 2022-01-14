var d = new Date(2022, 0, 20);

const minDays = ["9-17", "10-18", "11-15", "2-28", "3-21", "4-18"];
const finalDays = ["1-19", "1-20", "1-21", "6-10", "6-13", "6-14"];


// Default "show" state
var state = false;

// Hide all elements on JS load instead of in HTML to add support for non-javascript environments
function load() {
	// TODO: Combine this into one selector
	document.getElementById("std").style.display="none";
	document.getElementById("long").style.display="none";
	document.getElementById("min").style.display="none";
	document.getElementById("final").style.display="none";
}

// Hide everything then show relevant elements
function hide() {
	// Hide all
	load();
	// Check if minimum day, if not, proceed normal
	if (minDays.includes((d.getMonth() + 1) + "-" + d.getDate())) {
		document.getElementById("min").style.display="block";
	} else if (finalDays.includes((d.getMonth() + 1) + "-" + d.getDate())) {
		document.getElementById("final").style.display="block";
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
			document.getElementById("final").style.display="block";
			break;
		}
	}
	// Make show all visible
	document.getElementById("view").style.display="block";
	// Flip state bit to be false
	state = false;
}

// Show all elements
function show() {
	// TODO: Combine this into one selector
	document.getElementById("std").style.display = "block";
	document.getElementById("long").style.display = "block";
	document.getElementById("min").style.display = "block";
	document.getElementById("final").style.display="block";
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
