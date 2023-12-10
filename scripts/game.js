// main object for the whole game
class Game {
	constructor(gameScript) {
		this.gameScript = gameScript;
		// game window is the canvas
		this.gameWindow = document.getElementById("gameWindow");
		// game container is a <div> that holds the canvas, inventory and dialogue box. Its useful when I need to detect if someone clicked on the whole area not just the canvas
		this.gameContainer = document.getElementById("gameContainer");
		this.sceneLoader = new SceneLoader(this);
		this.itemHandler = new ItemHandler(this);
		this.dialogueHandler = new DialogueHandler(this);
        this.audioPlayer = new AudioPlayer(this);
	}

    // preload images
    //? requires PHP to work, so only works on a server
    preload() {
		// get the image array from the get_images.php
		$.ajax({
			url: "scripts/get_images.php",
			type: "POST",
			success: function (response) {
                // parse the response
				let images = JSON.parse(response);

                // iterate through them and load them
                Object.values(images).forEach((val) => {
                    // console.log(val);
                    let img = new Image();
                    img.src = "src/img/" + val;
                });
			},
		});		
	}
}
