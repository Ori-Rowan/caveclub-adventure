// object that handles audio
class AudioPlayer {
    constructor(game) {
        this.game = game;  
        this.backgroundMusic = new Audio();      
    }

    // play audio from path
    playAudio(path) {
        let audio = new Audio("src/audio/" + path);
        audio.play();
    }

    // play background music from path
    playBackgroundMusic(path) {
        this.backgroundMusic.src = "src/audio/" + path;
        this.backgroundMusic.loop = true;
        this.backgroundMusic.play();
    }

}