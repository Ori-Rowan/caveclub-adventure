// object that handles audio
class AudioPlayer {
    constructor(game) {
        this.game = game;  
        this.backgroundMusic = new Audio();    
        this.currentBackgroundMusic = "";        
    }

    // play audio from path
    playAudio(path) {
        let audio = new Audio("src/audio/" + path);
        audio.play();
    }

    // play background music from path
    playBackgroundMusic(path) {
        // if the same music is already playing, do nothing
        if(this.currentBackgroundMusic == path) {
            return;
        }

        // stop the old music and play the new one
        this.backgroundMusic.src = "src/audio/" + path;
        this.currentBackgroundMusic = path;
        this.backgroundMusic.loop = true;
        this.backgroundMusic.play();
    }

}