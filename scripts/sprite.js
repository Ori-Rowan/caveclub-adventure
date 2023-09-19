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
	 * @param {*} imgPath the file name in the /src/omg/sprite folder, extracted from spriteArgs
     * @param {*} coords the coords of where the spirte is on the canvas, extracted from spriteArgs 
	 */
	drawSprite(imgPath, coords) {
		// draw the img on the canvas at desired coords
		this.context = this.gameWindow.getContext("2d");
		let img = new Image();
		img.src = "src/img/sprites/" + imgPath;
		img.onload = () => {
            this.context.drawImage(img, coords.x, coords.y);
            // make the clickable area
            this.clickArea(coords, {width : img.width, height : img.height})
		};
	}

	// TODO: create outline on hover
	// this should help create outline path, saving for later: https://stackoverflow.com/questions/23983461/creating-a-path-from-the-edge-of-an-image

	// TODO: make clickable non-transparent part and desired effect

    /**
     * * create a clickable area on the canvas around the sprite
     * @param {*} coords the coords of where the spirte is on the canvas, extracted from spriteArgs 
     * @param {*} size size of the sprite that will determine width and height of clickable rectangle are
     */
    clickArea(coords, size) {
        this.gameWindow.addEventListener("click", (event) => {
            // check if mouse is in the area
            if (event.offsetX >= coords.x && event.offsetX <= coords.x + size.width && event.offsetY >= coords.y && event.offsetY <= coords.y + size.height) {
                alert('har har har har');
            }
        });
    }

    

}
