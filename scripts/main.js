$(document).ready(function () {
	// game script used to load the entire game
	// TODO: move to a different JS file
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
							img: "cucumber-plant.png",
							coords: { x: 370, y: 680 },
							type: "chest",
							reward: "cucumber",
							dialogueChangeState: {
								title: "Cucumber Plant",
								content: "You got a cucumber from the plant.",
							},
						},
						state1: {
							img: "nocucumber-plant.png",
							coords: { x: 370, y: 680 },
							type: "decoration",
							dialogue: {
								title: "Cucumber Plant",
								content: "There isn't any more cucumbers.",
							},
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
					signCrossroad: {
						currentState: 0,
						state0: {
							img: "garden-sign.png",
							coords: { x: 1700, y: 380 },
							type: "door",
							path: "crossroad",
							dialogue: {
								title: "Crossroad",
								content: "Look, a well! you can get water from there.",
							},
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
							img: "none.png",
							coords: { x: 0, y: 0 },
							type: "none",
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
					kitty: {
						currentState: 0,
						state0: {
							img: "test_sprite_2.png",
							coords: { x: 100, y: 100 },
							type: "chest",
							reward: "necoIdk",
						},
						state1: {
							img: "none.png",
							coords: { x: 0, y: 0 },
							type: "none",
						},
					},
					bananaBreadBowl: {
						currentState: 0,
						state0: {
							img: "bowl.png",
							coords: { x: 1000, y: 300 },
							type: "lock",
							key: "necoIdk",
						},
						state1: {
							img: "bowl_with_flour.png",
							coords: { x: 1000, y: 300 },
							type: "chest",
							reward: "bowl_with_flour",
							signal: { scene: "kitchen", sprite: "bowl" },
						},
						state2: {
							img: "none.png",
							coords: { x: 0, y: 0 },
							type: "none",
						},
					},
				},
			},
			crossroad: {
				background: "forest.png",
				sprites: {
					signGarden: {
						currentState: 0,
						state0: {
							img: "forest-sign.png",
							coords: { x: 10, y: 750 },
							type: "door",
							path: "garden",
							dialogue: {
								title: "Garden",
								content: "Here's your garden!",
							},
						},
					},
					pigeonSwing: {
						currentState: 0,
						state0: {
							img: "forest-pigeon.png",
							coords: { x: 680, y: 0 },
							type: "door",
							path: "pigeonSwing",
							dialogue: {
								title: "Swing",
								content: "Cool! There's a pigeon hanging out on the swing.",
							},
						},
					},
					well: {
						currentState: 0,
						state0: {
							img: "forest-well.png",
							coords: { x: 1310, y: 400 },
							type: "door",
							path: "well",
						},
					},
					shed: {
						currentState: 0,
						state0: {
							img: "forest-shed.png",
							coords: { x: 26, y: 110 },
							type: "door",
							path: "shed",
							dialogue: {
								title: "Shed",
								content: "It's your shed! All your tools are in here.",
							},
						},
					},
				},
			},
			shed: {
				background: "shed.png",
				sprites: {
					wateringCan: {
						currentState: 0,
						state0: {
							img: "can-bees.png",
							coords: { x: 1200, y: 150 },
							type: "lock",
							key: "necoIdk",
							dialogue: {
								title: "Watering Can",
								content:
									"The bees won't let you get the watering can. You gotta put them to sleep somehow.",
							},
							dialogueChangeState: {
								title: "Watering Can",
								content:
									"As they always say &ldquo;banana bread before I go to bed puts the bees to sleep&ldquo;.",
							},
						},
						state1: {
							img: "can.png",
							coords: { x: 1200, y: 150 },
							type: "chest",
							reward: "watering_can",
							dialogueChangeState: {
								title: "Watering Can",
								content: "You got the watering can! Now you only need water.",
							},
						},
					},
				},
			},
			pigeonSwing: {
				background: "pigeon.png",
				sprites: {
					sign: {
						currentState: 0,
						state0: {
							img: "pigeon-sign.png",
							coords: { x: 1690, y: 640 },
							type: "door",
							path: "crossroad",
							dialogue: {
								title: "Crossroad",
								content: "Look, a well! you can get water from there.",
							},
						},
					},
					pigeon: {
						currentState: 0,
						state0: {
							img: "pigeon-sitting.png",
							coords: { x: 1030, y: 400 },
							type: "locked-chest",
							key: "cucumber",
							reward: "hat",
							dialogue: {
								title: "Pigeon",
								content:
									"The pigeon looks hungry. What only should I feed to a pigeon?",
								img: "pigeon-sitting-bubble.png",
                                coords: { x: 1041, y: 296 },
                                displayImg: false,
							},
							dialogueChangeState: {
								title: "Pigeon",
								content: "The pigeon gave you their hat. It's very warm!",
							},
						},
						state1: {
							img: "pigeon-no-hat.png",
							coords: { x: 1041, y: 400 },
							type: "decoration",
							dialogue: {
								title: "Pigeon",
								content: "The pigeon seems happy.",
							},
						},
					},
					ladder: {
						currentState: 0,
						state0: {
							img: "ladder.png",
							coords: { x: 410, y: 223 },
							type: "door",
							key: "tree",
						},
					},
				},
			},
		},
		items: {
			cucumber: {
				img: "cucumber.png",
				dialogue: "A tasty green cucumber.",
				merge: "bowl_with_flour",
				product: "necoIdk",
			},
			necoIdk: {
				img: "necoIdk.png",
				dialogue: "A cute kitty.",
			},
			bowl_with_flour: {
				img: "bowl_with_flour.png",
				dialogue: "A bowl with flour.",
				merge: "cucumber",
				product: "necoIdk",
			},
			hat: {
				img: "hat.png",
				dialogue: "It's very stylish and very warm hat.",
			},
			watering_can: {
				img: "can.png",
				dialogue: "Great for watering plants.",
			},
		},
	};

	// create game object
	game = new Game(gameScript);

	// load initial scene
	//! this will not be here later
	game.sceneLoader.loadScene("pigeonSwing");
});
