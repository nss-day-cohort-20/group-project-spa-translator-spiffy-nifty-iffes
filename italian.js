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

	// console.log('italian', italian);
// var sum = 0;
// var obj = {prop1: 5, prop2: 13, prop3: 8};

		language.printItalian = function(word) {
				let output = document.getElementById("translatedText");

			italian.forEach(function(word){
				output.innerHTML += `<p>${word.merry} ${word.christmas} ${word.and} ${word.happy} ${word.new} ${word.year}</p>`
			})

		};

	// language.printItalian = function(){
	// 		italian.forEach(function(word){
	// 			document.getElementById("translatedText").innerHTML += `${word.merry} `;
	// 	})
	//  }

	 return language;


}(translator));






