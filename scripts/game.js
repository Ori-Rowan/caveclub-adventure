// main object for the whole game
class Game {
    constructor(gameScript) {
        this.gameScript = gameScript;
        this.gameWindow = document.getElementById('gameWindow');
        this.sceneLoader = new SceneLoader(this);
    }
}
