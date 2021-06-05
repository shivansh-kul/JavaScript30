let play = document.getElementsByClassName("player__button toggle")[0];
let video = document.getElementsByClassName("player__video viewer")[0];
let progressFilled = document.getElementsByClassName("progress__filled")[0];
let backward = document.querySelectorAll(".player__button")[1];
let forward = document.querySelectorAll(".player__button")[2];
let volume = document.getElementsByName("volume")[0];
let playback = document.getElementsByName("playbackRate")[0];
let progressSlider = document.getElementsByClassName("progress")[0];
let current=0;
let duration;

// console.log(volume)
// console.log(document.querySelectorAll(".player__button"))
function playingEventHandler(){
    // console.log(this.currentTime > 0 && !this.paused && !this.ended)
        // console.log("hellooo")
    // console.log(current);
    // console.log((100*current)/duration);
    // console.log(100*current/duration+"%");
    current = this.currentTime;
    progressFilled.style["flexBasis"] = `${(100*current/duration)}%`;
    // console.log((100*current/duration)+"%")
    // console.log(progressFilled.style);
    }
play.addEventListener("click",()=>{
    duration = video.duration;
    if(video.paused){
        video.play();
        play.textContent = "▌▌"
    }
    else{
        video.pause();
        play.textContent = "▶"
    }
})
video.addEventListener("click",()=>{
    duration = video.duration;
    if(video.paused){
        video.play();
        play.textContent = "▌▌"
    }
    else{
        video.pause();
        play.textContent = "▶"
    }
})
forward.addEventListener("click",()=>{
    if(!video.ended && duration - current>=25)
    video.currentTime += 25;
})
backward.addEventListener("click",()=>{
    if(current>=10){
        video.currentTime -= 10;
    }
})
volume.addEventListener("change",()=>{
    console.log(`${volume.value}`)
    video.volume = `${volume.value}`
})
playback.addEventListener("change",()=>{
    video.playbackRate = `${playback.value}`;
})
/*important stuff*/
function scrub(e){
    const scrubTime = (e.offsetX/progressSlider.offsetWidth)*(video.duration);
    video.currentTime = scrubTime;
}
progressSlider.addEventListener("click",scrub);
let mouseDown = false;
progressSlider.addEventListener("mousedown",()=>mouseDown=true)
progressSlider.addEventListener("mouseup",()=>mouseDown=false)
progressSlider.addEventListener("mousemove",e=>mouseDown && scrub(e));
video.addEventListener("timeupdate",playingEventHandler);