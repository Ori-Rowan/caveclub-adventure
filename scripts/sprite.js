// object to handle a sprite in a scene
class Sprite {
	constructor(game, spriteArgs) {
		// define important attributes
		this.game = game;
		this.gameWindow = game.gameWindow;
		this.spriteArgs = spriteArgs;
		this.stateArgs = this.getStateArgs(this.spriteArgs);

		// draw the sprite on canvas and create click area
		this.drawSprite();
	}

	// this will get the current state args
	getStateArgs(spriteArgs) {
		let currentState = spriteArgs.currentState;
		currentState = "state" + String(currentState);
		let stateArgs = spriteArgs[currentState];
		return stateArgs;
	}

	// this draws sprite on the canvas on desired position and also create click area
	drawSprite() {
		// define variables needed
		let imgPath = this.stateArgs.img;
		let coords = this.stateArgs.coords;

		// draw the img on the canvas at desired coords
		this.context = this.gameWindow.getContext("2d");
		let img = new Image();
		img.src = "src/img/sprites/" + imgPath;
		img.onload = () => {
			this.context.drawImage(img, coords.x, coords.y);

			//! this might get removed later
			// create click area
			this.clickArea({ width: img.width, height: img.height });
		};
	}

	// this will create a clickable area over the object on the canvas
	clickArea(size) {
		// define important variables
		let coords = this.stateArgs.coords;

		// this thing is important, cuz it is used to remove event listener
		this.controller = new AbortController();
		let { signal } = this.controller;

		// add the event listener
		this.gameWindow.addEventListener(
			"click",
			(event) => {
				// calculate where mouse is on 1920/1080 canvas even when resized
				let mouseX = Math.ceil(
					(event.offsetX / this.gameWindow.offsetWidth) * 1920
				);
				let mouseY = Math.ceil(
					(event.offsetY / this.gameWindow.offsetHeight) * 1080
				);

				// check if mouse is in the area
				if (
					mouseX >= coords.x &&
					mouseX <= coords.x + size.width &&
					mouseY >= coords.y &&
					mouseY <= coords.y + size.height
				) {
					// do the click action
					this.clickFunction();
				}
			},
			{ signal }
		);
	}

	// this handles what happens when object is clicked based on type
	clickFunction() {
		// define variables
		let type = this.stateArgs.type;

		// if type is door then load desired scene
		if (type == "door") {
			let path = this.stateArgs.path;
			this.game.sceneLoader.loadScene(path);
		}

		// if type is chest then give item and change state
		if (type == "chest") {
			let reward = this.stateArgs.reward;
			// give item to player
			this.game.itemHandler.addItem(reward);
			// change state
			this.spriteArgs.currentState++;
			// reload scene
			this.game.sceneLoader.reloadScene();
		}
	}
}
