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

		language.printItalian = function() {
			let output = document.getElementById("translatedText");

		for (var word in italian) {
		  output.innerHTML += `<p>${italian[word].value}</p>`;
		  console.log(italian);
		};
};


	// language.printItalian = function(){
	// 		italian.forEach(function(word){
	// 			document.getElementById("translatedText").innerHTML += `${word.merry} `;
	// 	})
	//  }

	 return language;


}(translator));






