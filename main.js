//button
let button = document.getElementById("translateButton");
let select = document.getElementById("language");

button.addEventListener("click", function() {
	if (select.value === "italian") {
		translator.printItalian();

	} else if (select.value === "spanish") {
			translator.printSpanish();

		} else if (select.value === "german") {
			translator.printGerman();

			} else if (select.value === "dutch") {
				translator.printDutch();

				} else (alert("Please select a languge from the menu."))
});