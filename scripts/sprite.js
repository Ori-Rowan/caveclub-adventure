// object to handle a sprite in a scene
class Sprite {
	constructor(game, spriteArgs) {
		// define important attributes
		this.game = game;
		this.gameWindow = game.gameWindow;
		this.spriteArgs = spriteArgs;
		this.stateArgs = this.getStateArgs();

		// draw the sprite on canvas and create click area
		this.drawSprite();
	}

	// this will get the current state args
	getStateArgs() {
		let spriteArgs = this.spriteArgs;
		let currentState = spriteArgs.currentState;
		currentState = "state" + String(currentState);
		let stateArgs = spriteArgs[currentState];
		return stateArgs;
	}

	// this draws sprite on the canvas on desired position and also create click area
	//TODO: separate click are from this function
	drawSprite() {
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
		let coords = this.stateArgs.coords;

		// this thing is important, cuz it is used to remove event listener
		this.controller = new AbortController();
		let { signal } = this.controller;

		// add the event listener
		this.gameWindow.addEventListener(
			"click",
			(event) => {
                // check if dialogue box is displayed and if it is, dont do anything
                if (this.game.dialogueHandler.isDisplayed()) {
                    return;
                }

				// calculate where mouse is on 1920/1080 canvas even when resized
				//! this isnt completly accurate
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
			// link it to the controler
			{ signal }
		);
	}

	// this handles what happens when object is clicked based on type
	clickFunction() {
		let type = this.stateArgs.type;

		// if type is door then load desired scene
		if (type == "door") {
			let path = this.stateArgs.path;
			this.game.sceneLoader.loadScene(path);
            return;
		}

		// if type is chest then give item and change state
		if (type == "chest") {
			// get reward
			let reward = this.stateArgs.reward;
			// give item to player
			this.game.itemHandler.addItem(reward);
			// change state
			this.changeState();
            return
		}

		// if type us lock then check if player has the right key and change state
		if (type == "lock") {
			// get item in use
			let iteminUse = this.game.itemHandler.itemInUseName;

			// check if item in use is the right key
			if (iteminUse == this.stateArgs.key) {
				// remove key item in inventory
				this.game.itemHandler.removeItemInUse();

				// change state
				this.changeState();
                return;
			}

            
		}
        
        
		// type locked-chest then check if player has the right key, give item and change state
		if (type == "locked-chest") {
            // get item in use
			let iteminUse = this.game.itemHandler.itemInUseName;
            
			// check if item in use is the right key
			if (iteminUse == this.stateArgs.key) {
                // remove key item in inventory
				this.game.itemHandler.removeItemInUse();
                
				// get reward
				let reward = this.stateArgs.reward;
				// give item to player
				this.game.itemHandler.addItem(reward);
				// change state
				this.changeState();
                return;
			}
		}
        
        // display message if there is an dialogue
        //? has to be on the end, else it will be displayed even if the player has the right key
        if(typeof this.stateArgs.dialogue !== 'undefined'){
        
            let title = this.stateArgs.dialogue.title;
            let content = this.stateArgs.dialogue.content;
            this.game.dialogueHandler.displayMessage(title, content);
        }
	}
    
	// change state, send possible signal and reload scene
	changeState() {
        // change state
		this.spriteArgs.currentState++;
        
		// reload scene
		this.game.sceneLoader.reloadScene();

		// send signal
		if (this.stateArgs.signal) {
			let signal = this.stateArgs.signal;
            // change the state of the signalled sprite
			this.game.gameScript.scenes[signal.scene].sprites[signal.sprite]
				.currentState++;
		}
	}
}
