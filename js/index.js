mediaPlayer = document.getElementById('media-video');

mediaPlayer.addEventListener('timeupdate', updateProgressBar, false);

 initialiseMediaPlayer =()=> {
  mediaPlayer.controls = false;
}

 togglePlayPause =()=> {
  let btn = document.getElementById('play-pause-button'),
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
}

function updateProgressBar() {
  const progressBar = document.getElementById('play-bar'),
        percentage = Math.floor((100 / mediaPlayer.duration) *
        mediaPlayer.currentTime);
     progressBar.style.width = percentage + "%";
}