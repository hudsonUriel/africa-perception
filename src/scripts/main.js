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
};

