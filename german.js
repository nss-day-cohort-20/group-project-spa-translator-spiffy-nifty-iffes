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

	// console.log('italian', italian);
// var sum = 0;
// var obj = {prop1: 5, prop2: 13, prop3: 8};

		language.printGerman = function(word) {
				let output = document.getElementById("translatedText");

			german.forEach(function(word){
				output.innerHTML = `<p>${word.merry} ${word.christmas} ${word.and} ${word.happy} ${word.new} ${word.year}</p>`
			})

		};

	// language.printItalian = function(){
	// 		italian.forEach(function(word){
	// 			document.getElementById("translatedText").innerHTML += `${word.merry} `;
	// 	})
	//  }

	 return language;


}(translator));
