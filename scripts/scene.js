// object to load a scene with bg and sprites
class Scene {
	constructor(gameWindow, sceneArgs) {
		this.gameWindow = gameWindow;
		this.background = sceneArgs.background;
		this.sprites = sceneArgs.sprites;

		this.setBackground(this.background);

		// iterate through sprites and load them
		this.loadedSprites = [];
		Object.values(this.sprites).forEach((val) =>
			this.loadSprite(this.gameWindow, val)
		);
	}

	/**
	 * * Sets the background for a scene.
	 * @param img - file name, in 'background/' folder
	 */
	setBackground(img) {
		var path = "src/img/background/" + img;
		this.gameWindow.css("background-image", 'url("' + path + '")');
	}

	/**
	 * loads an object that handles a sprite into the scene
	 * @param spriteArgs - dictionarry with arguments for the sprite {img: img path, coords: {x : x-position, y: y-position}, properties: {sprite properties}}
	 */
	loadSprite(gameWindow, spriteArgs) {
		let sprite = new Sprite(gameWindow, spriteArgs);
	}
}
