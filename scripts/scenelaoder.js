// object that loads scenes
class SceneLoader {
	constructor(game) {
		// define important attributes
		this.game = game;
		this.gameWindow = game.gameWindow;
		// this array contains all instances of currently loaded sprites on the scene
		this.loadedSprites = new Array();
		// this stores the current scene name in game script
		this.currentScene = "";
	}

	// load a new sceme
	loadScene(sceneName) {
		this.deloadScene();
		this.currentScene = sceneName;
		let sceneArgs = this.game.gameScript.scenes[sceneName];

		// set new beckground
		this.setBackground(sceneArgs.background);
		// load sprites
		this.loadSprites(sceneArgs.sprites);
	}

	// deload the old scene
	deloadScene() {
		let context = this.gameWindow.getContext("2d");
		// clear the old scene, erese sprites visually
		context.clearRect(0, 0, this.gameWindow.width, this.gameWindow.height);
		// remove all the click areas - controller abbort for each sprite
		Object.values(this.loadedSprites).forEach(function (val) {
			if (typeof val.controller !== "undefined") {
                val.controller.abort();
            }
		});
		// clear the array
		this.loadedSprites = [];
	}

	// set background for the scene
	setBackground(img) {
		var path = "src/img/background/" + img;
		this.gameWindow.style.backgroundImage = 'url("' + path + '")';
	}

	// load all of the sprites and store them in loadedSprites
	loadSprites(sprites) {
		//iterate through sprites and load them
		Object.values(sprites).forEach((val) =>
			this.loadedSprites.push(new Sprite(this.game, val))
		);
	}

	// load the current scene again
	//? used when sprite changes state
	reloadScene() {
		this.loadScene(this.currentScene);
	}
}
