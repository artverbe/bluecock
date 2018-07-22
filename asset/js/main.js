/** Registering Sw */
     if("serviceWorker" in navigator){
	    navigator.serviceWorker.register("../sw.js",{"scope":"./"}).then((rg)=>{
		 console.log("Sw Registered registered successfuly");
	    }).catch(err=>{
	    	 console.log("Sw Registration Failed",err); 
	   });
           }

let expando,relative,click,togglePlayPause;
      click = "click";
      expando  = document.querySelector(".menubar");
      relative = document.querySelector(".screen_change");
      body = document.querySelector(`body`);
	  togglePlayPause = document.querySelector(`.play-pause-button`);
	  
		  expando.addEventListener(click,()=>{
			 relative.classList.toggle("screen_change");			  
});
/*
         //_______________ MediaPlayer ______________
 */
mediaPlayer = document.getElementById('media-video');

mediaPlayer.addEventListener('timeupdate', updateProgressBar, false);

 initialiseMediaPlayer =()=> {
  mediaPlayer.controls = false;
}

 togglePlayPause.addEventListener(click,toggleplaypause =()=> {
  let btn = document.querySelector(`.play-pause-button`),
      ovr = document.getElementById('play-disp'),
      avi = document.getElementById('user-avi');
  if (mediaPlayer.paused || mediaPlayer.ended) {
    btn.title = 'pause';
    ovr.innerHTML = '<span class="n n-pause"></span>';
    ovr.style.textShadow = '0 0 0 #fff, 0 0.5px 1px #000';
    avi.style.transform = "scale(1)";
    mediaPlayer.play();
  } else {
    btn.title = 'play';
    ovr.innerHTML = '<span class="n n-play"></span>';
    avi.style.transform = "scale(0)";
    ovr.style.textShadow = 'none';
    mediaPlayer.pause();
  }
});

function updateProgressBar() {
  const progressBar = document.getElementById('play-bar'),
        percentage = Math.floor((100 / mediaPlayer.duration) *
        mediaPlayer.currentTime);
     progressBar.style.width = percentage + "%";
}