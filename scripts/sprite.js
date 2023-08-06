// object to handle a sprite in a scene
class Sprite {
	constructor(gameWindow, spriteArgs) {
		this.gameWindow = gameWindow;
		imgPath = spriteArgs.img;

		this.loadSprite(imgPath);
	}

	// TODO: create the load sprite function
	/*
	loadSprite(imgPath) {
		// create html element
		img = document.createElement("img");
		img.src = imgPath;
	}
    */
}
