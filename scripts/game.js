// main object for the whole game
class Game {
	constructor() {
		this.gameWindow = document.getElementById("gameWindow");
	}

    
	/**
	 * * loads a scene with bg and sprites
	 * @param sceneArgs dictionary must contain {background: path, sprites: {sprite dict}}
	 */
	newScene(sceneArgs) {
		this.scene = new Scene(this, sceneArgs);
	}
}
