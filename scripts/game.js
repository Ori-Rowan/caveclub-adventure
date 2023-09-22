// main object for the whole game
class Game {
	constructor(gameScript) {
        this.gameScript = gameScript;
		this.gameWindow = document.getElementById("gameWindow");
	}

	/**
	 * * loads a scene with bg and sprites
	 * @param sceneArgs dictionary must contain {background: path, sprites: {sprite dict}}
	 */
	loadScene(sceneName) {
        let sceneArgs = this.gameScript[sceneName];
		let scene = new Scene(this, sceneArgs);
	}
}
