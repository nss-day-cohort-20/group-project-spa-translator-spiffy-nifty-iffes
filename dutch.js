var translator = (function(language) {
	let dutch = [
		{merry: "Vrolijk",
		christmas: "Kerstfeest",
		and: "en een",
		happy: "gelukkig",
		new: "nieuw",
		year: "jaar"
		}
	];

	language.printDutch = function(word) {
		let output = document.getElementById("translatedText");
		dutch.forEach(function(word){
			output.innerHTML = `<p>${word.merry} ${word.christmas} ${word.and} ${word.happy} ${word.new} ${word.year}</p>`
		})
	};

	language.getDutch = function() {
		return dutch;
	};

	 return language;
}(translator));