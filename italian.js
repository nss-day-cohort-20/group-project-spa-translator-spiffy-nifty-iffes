var translator = (function(language) {
	let italian = [
		{merry: "allegro",
		christmas: "natale",
		and: "e",
		happy: "contento",
		new: "nuovo",
		year: "anno"
		}
	];

	language.printItalian = function(word) {
			let output = document.getElementById("translatedText");

		italian.forEach(function(word){
			output.innerHTML = `<p>${word.merry} ${word.christmas} ${word.and} ${word.happy} ${word.new} ${word.year}</p>`
		})

	};

	language.getItalian = function() {
        return italian;
    };

	 return language;


}(translator));






