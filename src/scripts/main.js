/***
 * 
 * ESTA FUNÇÃO É EXECUTADA QUANDO A
 * PÁGINA TERMINAR DE CARREGAR
 * 
 ***/

window.onload = function(){
  // Define arquivo JSON
  try{
  	openFile("./src/config.json", "json");
  } catch(err){
  	console.error(err);
  	openFile("./africa-perceptions/src/config.json", "json");
  }
	
	//openFile("https://github.com/hudsonUriel/africa-perceptions/blob/gh-pages/src/config.json", "json");
};

