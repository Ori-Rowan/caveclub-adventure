// main object for the whole game
class Game {
	constructor() {
		this.gameWindow = $("#gameWindow");
	}

	/**
	 * * loads a scene with bg and sprites
	 * @param sceneArgs dictionary must contain {background: path, sprites: {sprite dict}}
	 */
	loadScene(sceneArgs) {
		scene = new Scene(this.gameWindow, sceneArgs);
	}
}
