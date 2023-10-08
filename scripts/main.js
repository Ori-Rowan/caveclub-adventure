$(document).ready(function () {
	//test gameScript
	gameScript = {
		scenes: {
			garden: {
				background: "garden.png",
				sprites: {
					lemonPlot: {
						currentState: 0,
						state0: {
							img: "lemonboy-garden.png",
							coords: { x: 1246, y: 780 },
							type: "door",
							path: "lemonBoy",
						},
					},
					cucumberPlant: {
						currentState: 0,
						state0: {
							img: "cucumber_plant.png",
							coords: { x: 370, y: 680 },
							type: "chest",
							reward: "cucumber",
						},
						state1: {
							img: "nocucumber_plant.png",
							coords: { x: 370, y: 680 },
							type: "decoration",
						},
					},
					kitchenDoor: {
						currentState: 0,
						state0: {
							img: "door-garden.png",
							coords: { x: 73, y: 153 },
							type: "door",
							path: "kitchen",
						},
					},
                    doorRoof: {
                        currentState: 0,
                        state0: {
                            img: 'roof-garden.png',
                            coords: {x: 0, y: 30},
                            type: 'decoration'
                        }
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
			kitchen: {
				background: "test_background_5.jpg",
				sprites: {
					arrowGarden: {
						currentState: 0,
						state0: {
							img: "arrow_down.png",
							coords: { x: 1500, y: 200 },
							type: "door",
							path: "garden",
						},
					},
					bowl: {
						currentState: 0,
						state0: {
							img: "bowl_with_flour.png",
							coords: { x: 1000, y: 300 },
							type: "door",
							path: "bananaBread",
						},
						state1: {
							img: "bowl.png",
							coords: { x: 1000, y: 300 },
							type: "door",
							path: "bananaBread",
						},
					},
				},
			},
			bananaBread: {
				background: "test_background_6.jpg",
				sprites: {
					arrowKitchen: {
						currentState: 0,
						state0: {
							img: "arrow_down.png",
							coords: { x: 1000, y: 800 },
							type: "door",
							path: "kitchen",
						},
					},
					bananaBreadBowl: {
						currentState: 0,
						state0: {
							img: "bowl_with_flour.png",
							coords: { x: 1000, y: 300 },
							type: "lock",
							key: "banana",
						},
						state1: {
							img: "bowl_with_flour.png",
							coords: { x: 1000, y: 300 },
							type: "chest",
							key: "banana",
							signal: { scene: "kitchen", sprite: "bowl" },
						},
						state1: {
							img: "",
							coords: { x: 0, y: 0 },
							type: "none",
						},
					},
				},
			},
		},
		items: {
			cucumber: {
				img: "cucumber.png",
			},
		},
	};

	// create game object
	game = new Game(gameScript);

	//test
	game.sceneLoader.loadScene("garden");

});
