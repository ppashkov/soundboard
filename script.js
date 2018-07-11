window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.box[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
  
  });

  $(".box").click(btnPlay);
  
	function btnPlay(){
		var audio=$(this).find("audio");
        audio.trigger('play');
            
	}