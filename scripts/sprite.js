// object to handle a sprite in a scene
class Sprite {
	constructor(gameWindow, spriteArgs) {
		this.gameWindow = gameWindow;
		this.imgPath = spriteArgs.img;
		this.coords = spriteArgs.coords;

		this.drawSprite(this.imgPath, this.coords);
	}

	
	/**
	 * * loads the sprite into the game window, to desired position
	 * @param {*} imgPath the file name in the /src/omg/sprite folder, extracted from spireArgs
	 */
	drawSprite(imgPath, coords) {
		// draw the img on the canvas at desired coords
		this.context = this.gameWindow.getContext("2d");
		let img = new Image();
		img.src = "src/img/sprites/" + imgPath;
		img.onload = () => {
			this.context.drawImage(img, coords.x, coords.y);
		};
	}

	// TODO: create outline on hover
	// this should help create outline path, saving for later: https://stackoverflow.com/questions/23983461/creating-a-path-from-the-edge-of-an-image

	// TODO: make clickable non-transparent part and desired effect
}
