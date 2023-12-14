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
        this.initScene = "";
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

    // make every element on the page unselectable
    disableSelect() {
        // Get all elements on the page
        var allElements = document.querySelectorAll('*');

        // Add a class to each element
        allElements.forEach(function(element) {
        element.classList.add('prevent-select');
        });
    }

    // initiate game
    gameInit(initScene){
        // load the game and disable selecting
        this.preload();
        this.disableSelect();

        // set loadign screen as background
        this.gameWindow.style.backgroundImage = 'url("src/img/background/loading_screen.png")';

        // load initial scene upon clicking on the game container
        this.gameContainer.addEventListener("click", () => {
            this.sceneLoader.loadScene(initScene);
        }, {once: true});

        // set init scene
        this.initScene = initScene;        
    }

    // reset the game
    resetGame() {
        Object.values(this.gameScript.scenes).forEach((val) => {
            Object.values(val.sprites).forEach((val) => {
                val.currentState = "0";
            });
        });
        // load init scene
        this.sceneLoader.loadScene(this.initScene);
    }
}
