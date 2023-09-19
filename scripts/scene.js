// object to load a scene with bg and sprites
class Scene {
	constructor(gameWindow, sceneArgs) {
		this.gameWindow = gameWindow;
		this.background = sceneArgs.background;
		this.sprites = sceneArgs.sprites;
        this.context = this.gameWindow.getContext('2d')

        // clear the old scene
        this.context.clearRect(0, 0, this.gameWindow.width, this.gameWindow.height);
        
        // set new beckground
		this.setBackground(this.background);

		// iterate through sprites and load them
		this.loadedSprites = new Array();
		Object.values(this.sprites).forEach((val) =>
			this.loadSprite(this.gameWindow, val)            
		);
        console.log(this.loadedSprites);
	}

	/**
	 * * Sets the background for a scene.
	 * @param img - file name, in 'background/' folder
	 */
	setBackground(img) {
		var path = "src/img/background/" + img;
		this.gameWindow.style.backgroundImage = 'url("' + path + '")';
	}

	/**
	 * * loads an object that handles a sprite into the scene
	 * @param spriteArgs - dictionarry with arguments for the sprite {img: img path, coords: {x : x-position, y: y-position}, properties: {sprite properties}}
	 */
	loadSprite(gameWindow, spriteArgs) {
		this.loadedSprites.push(new Sprite(gameWindow, spriteArgs));
	}


}
