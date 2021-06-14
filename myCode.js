
/*
 var audio = new Audio('http://sverigesradio.se/topsy/direkt/srapi/2562.mp3');
function play() {
  audio.play();
}

function stop() {
  audio.pause();
}
*/
// caso 2
/*var myAudio = document.getElementById("player");

function togglePlay() {
  console.log('togglePlay(');
  return myAudio.paused ? myAudio.play() : myAudio.pause();
};*/

//caso 3
var play_pause_status = "pause";

function play_pause() {
  var player_radio = document.getElementById('player');
  if (play_pause_status == "pause") {
    player_radio.play();
    play_pause_status = "play";
    document.getElementById('my-btn-play').style.backgroundImage="url(img/Pause.png)";
  } else {
    player_radio.pause();
    play_pause_status = "pause";
    document.getElementById('my-btn-play').style.backgroundImage="url(img/But-Play.png)";
  }
}