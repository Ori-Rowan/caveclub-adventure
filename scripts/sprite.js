// object to handle a sprite in a scene
class Sprite {
	constructor(gameWindow, spriteArgs) {
		this.gameWindow = gameWindow;
		this.imgPath = spriteArgs.img;

		this.constructSprite(this.imgPath);
	}

	// TODO: create load the sprite to coords
	/**
	 * * loads the sprite into the game window, to desired position
	 * @param {*} imgPath the file name in the /src/omg/sprite folder, extracted from spireArgs
	 */
	constructSprite(imgPath) {
		// create html element
		let img = document.createElement("img");
		img.src = "src/img/sprites/" + imgPath;
		this.gameWindow.append(img);
	}

	// TODO: create outline on hover
	// this should help create outline path, saving for later: https://stackoverflow.com/questions/23983461/creating-a-path-from-the-edge-of-an-image

	// TODO: make clickable non-transparent part and desired effect
}
