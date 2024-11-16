function oddEven(value) {
	value = parseInt(value, 10);
	const orderedList = document.getElementById("numbers");
	orderedList.innerHTML = "";
	for (let i = value - 11; i <= value; i++) {
		const listItem = document.createElement("li");
		listItem.textContent = `${i} - ${i % 2 === 0 ? "even" : "odd"}`;
		orderedList.appendChild(listItem);
	}
}

function updateFooter() {
	const today = new Date();
	const year = today.getFullYear();
	const fullDate = today.toDateString();
	const yearSpan = document.getElementById("current-year");
	if (yearSpan) {
		yearSpan.textContent = year;
	} else {
		console.error('Element with id "current-year" not found.');
	}
	console.log("Today's date is:", fullDate);
}

function greetUser() {
	const now = new Date();
	const hour = now.getHours();
	const greetingElement = document.getElementById("greeting");
	let greetingMessage;
	let cssClass;
	if (hour < 12) {
		greetingMessage = "Good morning!";
		cssClass = "morning";
	} else if (hour < 17) {
		greetingMessage = "Good afternoon!";
		cssClass = "afternoon";
	} else {
		greetingMessage = "Good evening!";
		cssClass = "evening";
	}
	greetingElement.textContent = greetingMessage;
	greetingElement.className = cssClass;
}

function showAlert() {
	alert("Have a great day :)");
}

function changeButtonText() {
	const alertButton = document.getElementById("btn-alert");
	alertButton.onmouseover = function() {
		this.innerText = "Click me to see an alert!";
	};
	alertButton.onmouseout = function() {
		this.innerText = "Click me!";
	};
}

document.addEventListener("DOMContentLoaded", greetUser);
document.addEventListener("DOMContentLoaded", updateFooter);
document.addEventListener("DOMContentLoaded", function() {
	const alertButton = document.getElementById("btn-alert");
	alertButton.addEventListener("click", showAlert);
	changeButtonText();
});
