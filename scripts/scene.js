// object to load a scene with bg and sprites
class Scene {
	constructor(game, sceneArgs) {
		this.game = game;
		this.gameWindow = game.gameWindow;
		this.background = sceneArgs.background;
		this.sprites = sceneArgs.sprites;
		this.context = this.gameWindow.getContext("2d");

        this.context.clearRect(0, 0, this.gameWindow.width, this.gameWindow.height);

		//load the scene
		this.loadScene();
	}

	/**
	 * * loads the scene background and all the sprites
	 */
	loadScene() {
		// set new beckground
		this.setBackground(this.background);

		// iterate through sprites and create them
		this.loadedSprites = new Array();
		Object.values(this.sprites).forEach((val) =>
			this.createSprite(this.game, val)
		);
	}

	/**
	 * * Sets the background for a scene.
	 * @param img - file name, in 'background/' folder
	 */
	setBackground(img) {
		let path = "src/img/background/" + img;
		this.gameWindow.style.backgroundImage = 'url("' + path + '")';
	}

	/**
	 * * loads an object that handles a sprite into the scene
	 * @param spriteArgs - dictionarry with arguments for the sprite {img: img path, coords: {x : x-position, y: y-position}, properties: {sprite properties}}
	 */
	createSprite(game, spriteArgs) {
		this.loadedSprites.push(new Sprite(game, spriteArgs));
	}

	/**
	 * clear the canvas and deload all the sprites
	 */
	deloadeScene() {
		this.context.clearRect(0, 0, this.gameWindow.width, this.gameWindow.height);
	}
}
