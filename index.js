


const navButton = document.querySelector("#navbar .nav-button");

const navBar = document.querySelector("#navbar");
const navOptions = document.querySelector(".nav-options");
const navLink = document.querySelectorAll(".nav-options a");

var isNavOpen = false;

const colorBlack = "#141414";
const colorGreen = "#80ff00";

navButton.addEventListener('click', () => {
	
	if (!isNavOpen) {
		showNav();
	} else {
		hideNav();
	}
});


function showNav() {
	
	navLink.forEach((btn) => {
		btn.addEventListener('click', hideNav)
	});
	
	// change button color
	navButton.style.color = colorBlack;
	navButton.style.backgroundColor = colorGreen;
	
	// make nav bar width 100%
	navBar.style.width = "100%";
	
	// make nav options visible
	navOptions.style.display = "revert";
	navOptions.style.visibility = "revert";
	
	isNavOpen = true;
}

function hideNav() {
	
	// change button color
	navButton.style.color = colorGreen;
	navButton.style.backgroundColor = colorBlack;
	
	// make nav bar width 0%
	navBar.style.width = "0%";
	
	// make nav options hidden
	navOptions.style.display = "none";
	navOptions.style.visibility = "hidden";
	
	isNavOpen = false;
}