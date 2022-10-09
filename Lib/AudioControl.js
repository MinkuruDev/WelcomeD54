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
