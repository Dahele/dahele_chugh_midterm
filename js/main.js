(function() {
	console.log("fired");

	var button = document.querySelector("#button");
	var burgerCon = document.querySelector("#contactForm");

	function popUpForm() {
		console.log("button clicked");
		contactForm.classList.toggle("slideToggle");
		button.classList.toggle("expanded");
		mailB.classList.toggle(".mail")
	}

	button.addEventListener("click", popUpForm);

})();

