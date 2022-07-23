console.log("welcome");
let songIndex=0;
let audioElement = new Audio('media/1.mp3')
function play(){
    audio.play;
}
a4.addEventListener('click',()=>{
    // setInterval(play,1000)
    if (audioElement.paused||audioElement.currentTime<=0) {
        audioElement.play();
    }
    else{
        audioElement.pause();
    }
})