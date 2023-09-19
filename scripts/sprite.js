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
            // console.log('mouseX:', event.offsetX, 'mouseY:', event.offsetY, 'spriteX:', coords.x, 'spriteY:', coords.y)
            // console.log(this.gameWindow.offsetWidth, this.gameWindow.offsetHeight);
            // calculate where mouse is on 1920/1080 canvas even when resized
            let mouseX = Math.ceil(event.offsetX / this.gameWindow.offsetWidth * 1920);
            let mouseY = Math.ceil(event.offsetY / this.gameWindow.offsetHeight * 1080);
            console.log('mouseX:', mouseX);
            
            // check if mouse is in the area
            if (mouseX >= coords.x && mouseX <= coords.x + size.width && mouseY >= coords.y && mouseY <= coords.y + size.height) {
                alert(this.imgPath);
            }
        });
    }



}
