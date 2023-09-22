// object that loads scenes
class SceneLoader {
    constructor(game) {
        this.game = game;
        this.gameWindow = game.gameWindow;
        this.loadedSprites = new Array();
    }

    loadScene(sceneName) {
        let sceneArgs = this.game.gameScript[sceneName];
        // deload old scene
        this.deloadScene();
        // set new beckground
        this.setBackground(sceneArgs.background);
        // load sprites
        this.loadSprites(sceneArgs.sprites);
    }

    deloadScene() {
        let context = this.gameWindow.getContext("2d");
        // clear the old scene
        context.clearRect(
            0,
            0,
            this.gameWindow.width,
            this.gameWindow.height
        );
    }

    /**
     * * Sets the background for a scene.
     * @param img - file name, in 'background/' folder
     */
    setBackground(img) {
        var path = 'src/img/background/' + img;
        this.gameWindow.style.backgroundImage = 'url("' + path + '")';
    }

    loadSprites(sprites) {
        //iterate through sprites and load them
        Object.values(sprites).forEach((val) =>
            this.loadedSprites.push(new Sprite(this.game, val))
        );
    }
}
