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
				lemonPlot: {
					currentState: 0,
					state0: {
						img: "garden_plot.png",
						coords: { x: 1000, y: 600 },
						type: "door",
						path: "lemonBoy",
					},
				},
				cucumberPlant: {
					currentState: 0,
					state0: {
						img: "cucumber_plant.png",
						coords: { x: 0, y: 600 },
                        type: 'chest',
                        item: 'cucumber',
                    },
                    state1: {
						img: "nocucumber_plant.png",
						coords: { x: 0, y: 600 },
                        type: 'decoration',
                    },
				},
                kitchenDoor: {
					currentState: 0,
					state0: {
						img: "test_sprite_4.png",
						coords: { x: 10, y: 200 },
						type: "door",
						path: "kitchen",
					},
				},
			},
		},
		lemonBoy: {
			background: "test_background_4.jpg",
			sprites: {
				arrowBack: {
					currentState: 0,
					state0: {
						img: "arrow_down.png",
						coords: { x: 1000, y: 800 },
						type: "door",
						path: "garden",
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
