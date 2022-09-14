const navButton = document.querySelector("#navbar .nav-button");

const menu = document.querySelector(".mobile-menu");
const link = document.querySelectorAll(".mobile-menu .nav-link");

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

link.forEach((btn) => {
	btn.addEventListener('click', hideNav)
});

function showNav() {

	// change button color
	navButton.style.color = colorBlack;
	navButton.style.backgroundColor = colorGreen;
	
	// make menu visible
	menu.style.display = "block";
	menu.style.visibility = "visible";
	
	isNavOpen = true;
}

function hideNav() {
	
	// change button color
	navButton.style.color = colorGreen;
	navButton.style.backgroundColor = colorBlack;
	
	// make menu hidden
	menu.style.display = "none";
	menu.style.visibility = "hidden";
	
	isNavOpen = false;
}