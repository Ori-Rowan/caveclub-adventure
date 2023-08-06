// object to load a scene with bg and sprites
class Scene {
	constructor(gameWindow, sceneArgs) {
		this.gameWindow = gameWindow;
		this.background = sceneArgs.background;

		this.setBackground(this.background);
	}

	/**
	 * * Sets the background for a scene.
	 * @param img - file name, in 'background/' folder
	 */
	setBackground(img) {
		var path = "src/img/background/" + img;
		this.gameWindow.css("background-image", 'url("' + path + '")');
	}
}
