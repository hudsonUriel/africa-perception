function slide_animations(x){
  elm = Reveal.getCurrentSlide();
  
  animations = {
    elements: "section",
    pos: x,
    call_animation: function(index){
      if(this.functions[index]){this.functions[index](document.querySelectorAll("section")[this.pos], this.pos);}},
    
    functions: [
      // Slide 01
      function(elm, pos){},
      
      // Slide 02
      function(elm, pos){
        observeChanges(elm, "123", function(){
          console.log("OI");
        });
        
        elm.querySelector(".fragment").style.background = "blue";
        
        var img_anime = anime({
          targets: elm.querySelector("#question-mark-normal"),
          translateX: '5em',
          delay: 1000,
          opacity: .5,
          easing: 'easeInOutSine',
          direction: 'alternate',
          loop: true
        }),
                
        h1_anime = anime({
          targets: elm.querySelector("h1"),
          delay: 1000,
          opacity: 0,
          easing: 'easeInOutSine',
          direction: 'alternate',
          loop: true
        });
        
        img_anime.pause();
        h1_anime.pause();
      }
    ]
  };
  
  animations.call_animation(x);
}

function observeChanges(elm, config, fnct){
  console.log(elm);
  console.log(config);
  
  if(config){
    fnct();
  }
  
  // https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
}