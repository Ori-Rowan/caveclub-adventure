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
	}
}
