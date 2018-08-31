/*** GENERAL FUNCTIONS ***/

function openFile(file, rtr){
	var request = new XMLHttpRequest();

	try{
		request.open('GET', file);
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
			try{
				openFile(json["base-folder"] + file, elm);	
			}
			catch(err){
				console.error(err);
				console.log("Retrying...");
				openFile(json["base-folder-gh"] + file, elm);	
			}
			
		}
	);

	// Loads Reveal.js
	loadReveal();
};

function loadReveal(){
	 // Inicializa a biblioteca Reveal
    Reveal.initialize({
      parallaxBackgroundImage: "./media/img/textura-01.jpg",
      parallaxBackgroundHorizontal: 50,
      parallaxBackgroundVertical: 50,
      
      transition: 'fade', // none/fade/slide/convex/concave/zoom
      transitionSpeed: 'slow', // default/fast/slow
      
      dependencies: [
        {src: './src/lib/anime/anime.min.js', async: true}
      ]
    });
    
    // Inicializa as animações quando Reveal.js carregar    
    if(Reveal.isReady()){
      reveal_handleReady();
    } else{
      Reveal.addEventListener('ready', () => reveal_handleReady());
    }
}

function reveal_handleReady(){
  Reveal.addEventListener( 'ready', function( event ) {
    // event.previousSlide, event.currentSlide, event.indexh, event.indexv
    if (!Reveal.isOverview()) {
        reveal_handleSlide();
        slide_animations(Reveal.getIndices().h);
    }
  });
}

function reveal_handleSlide(){
  Reveal.addEventListener( 'slidechanged', function( event ) {
      // event.previousSlide, event.currentSlide, event.indexh, event.indexv
      if (!Reveal.isOverview()) {
          slide_animations(Reveal.getIndices().h);
      }
  } );
}