// main object for the whole game
class Game {
	constructor() {
		this.gameWindow = document.getElementById("gameWindow");

        console.log(this.gameWindow.height, this.gameWindow.width)
	}

	/**
	 * * loads a scene with bg and sprites
	 * @param sceneArgs dictionary must contain {background: path, sprites: {sprite dict}}
	 */
	loadScene(sceneArgs) {
		let scene = new Scene(this.gameWindow, sceneArgs);
	}
}
