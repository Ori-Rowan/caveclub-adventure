$(document).ready(function () {
	//test gameScript
	gameScript = {
		menu: {
			background: "test_background_3.jpg",
			sprites: {
				startButton: {
					currentState: 0,
					state0: {
						img: "start_button.png",
						coords: { x: 800, y: 400 },
						type: "door",
						path: "garden",
					},
				},
			},
		},
		garden: {
			background: "test_background_1.jpg",
			sprites: {
                gardenPlot: {
                    currentState: 0,
                    state0: {
						img: "garden_plot.png",
						coords: { x: 100, y: 200 },
						type: "door",
						path: "menu",
					},
                },
			},
		},
	};

	// create game object
	game = new Game(gameScript);

	//test
	game.sceneLoader.loadScene("menu");
});
