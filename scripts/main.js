$(document).ready(function () {
	// create game object
	game = new Game(gameScript);


	// load initial scene
	//! this will not be here later
	game.sceneLoader.loadScene("garden");
});
