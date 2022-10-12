function pauseAfterSeconds(audioID, seconds){
    let audio = document.getElementById(audioID);

    audio.addEventListener("play", () => {
        setTimeout(() => {
            audio.pause();
        }, seconds * 1000);
    });
}

function audioStartsAt(audioID, seconds){
    let audio = document.getElementById(audioID);
    
    audio.currentTime = seconds;
    audio.addEventListener("pause", () => {
        audio.currentTime = seconds;
    });
}

function playAudio(audioID){
    document.getElementById(audioID).play();
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

function tangDan(audioID, start = 0.1, end = 1, delta = 0.5){
    let audio = document.getElementById(audioID);
    audio.volume = start;
    
    audio.addEventListener("play", async () => {
        while(audio.volume <= end){
            await sleep(delta * 1000);
            audio.volume += 0.1;
        }
    });
}

function giamDan(audioID, start = 1, end = 0, delta = 0.5){
    let audio = document.getElementById(audioID);
    audio.volume = start;
    
    audio.addEventListener("play", async () => {
        while(audio.volume >= end){
            await sleep(delta * 1000);
            audio.volume -= 0.1;
        }
    });
}
