var translator = (function(language) {
	let spanish = [
		{merry: "Feliz",
		christmas: "Navidad",
		and: "y",
		happy: "Prospero",
		new: "Nuevo",
		year: "Ano"
		}
	];

		language.printSpanish = function(word) {
				let output = document.getElementById("translatedText");

			spanish.forEach(function(word){
				output.innerHTML = `<p>${word.merry} ${word.christmas} ${word.and} ${word.happy} ${word.new} ${word.year}</p>`
			})

		};

language.getSpanish = function() {
        return spanish;
    };

	 return language;


}(translator));

