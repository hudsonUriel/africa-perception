/*** GENERAL FUNCTIONS ***/

function openFile(file, rtr){
	var request = new XMLHttpRequest();

	try{
		request.open('GET', file);
		throw "Unknow error";
	} catch(err){
		console.error(err);
		console.log("Attempt failed!");
		return -1;
	}
	
	request.send();
	
	request.onreadystatechange = function () {
	    if (request.readyState === 4) {
	    	if(rtr!="json"){
	    		var converter = new showdown.Converter();
					rtr.innerHTML = converter.makeHtml(request.responseText);
	    	} else{
	    		configJSON(request.responseText);
	    	}
	    }
	};

	return request;
}

function configJSON(json){
	json = JSON.parse(json);

	json["base-files"].forEach(
		function(file){
			// Creates a new section
			var elm = document.createElement("section");

			// appends
			document.querySelector(".reveal .slides").appendChild(elm);

			// Open file
			
			openFile(json["base-folder"] + file, elm);
		}
	);

	// Loads Reveal.js
	loadReveal();
};

function loadReveal(){
	 // Inicializa a biblioteca Reveal
    Reveal.initialize({
      parallaxBackgroundImage: "../media/img/textura-01.jpg",
      parallaxBackgroundHorizontal: 50,
      parallaxBackgroundVertical: 50
    });
}