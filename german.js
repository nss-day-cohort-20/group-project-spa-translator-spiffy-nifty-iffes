var translator = (function(language) {
	let german = [
		{merry: "frohlich",
		christmas: "Weihnachten",
		and: "und",
		happy: "glucklich",
		new: "neu",
		year: "vahr"
		}
	];

		language.printGerman = function(word) {
				let output = document.getElementById("translatedText");

			german.forEach(function(word){
				output.innerHTML = `<p>${word.merry} ${word.christmas} ${word.and} ${word.happy} ${word.new} ${word.year}</p>`
			})

		};

		language.getGerman = function() {
        return german;
    };

	
	 return language;


}(translator));
