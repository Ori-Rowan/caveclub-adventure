// object to handle a sprite in a scene
class Sprite {
	constructor(gameWindow, spriteArgs) {
		this.gameWindow = gameWindow;
		this.imgPath = spriteArgs.img;

		this.constructSprite(this.gameWindow, this.imgPath);
	}

	// TODO: create the load sprite function

	constructSprite(gameWindow, imgPath) {
		// create html element
		let img = document.createElement("img");
		img.src = "src/img/sprites/" + imgPath;
		gameWindow.append(img);
	}
}
