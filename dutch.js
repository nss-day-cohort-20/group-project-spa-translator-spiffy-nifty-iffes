var translator = (function(language) {
	let dutch = [
		{merry: "Vrolijk",
		christmas: "Kerstmis",
		and: "Kerstmis",
		happy: "gelukkig",
		new: "nieuwe",
		year: "jaar"
		}
	];

	language.printDutch = function(word) {
		let output = document.getElementById("translatedText");
		dutch.forEach(function(word){
			output.innerHTML += `<p>${word.merry} ${word.christmas} ${word.and} ${word.happy} ${word.new} ${word.year}</p>`
		})

	};

	 return language;
}(translator));