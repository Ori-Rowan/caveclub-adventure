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
							dialogue: {
								title: "Lemon plot",
								content: "Looks like the clouds ran out of water!",
							},
						},
					},
					cucumberPlant: {
						currentState: 0,
						state0: {
							img: "cucumber-plant.png",
							coords: { x: 370, y: 680 },
							type: "chest",
							reward: "Cucumber",
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
							dialogue: {
								title: "Kitchen",
								content: "Smells like food in here!",
							},
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
								content: "Look, a well! You can get water from there.",
							},
						},
					},
				},
			},
			lemonBoy: {
				background: "lemon.png",
				sprites: {
					lemonBoy: {
						currentState: 0,
						state0: {
							img: "lemonboy-dry.png",
							coords: { x: 320, y: 140 },
							type: "decoration",
							dialogue: {
								title: "Lemon Boy",
								content:
									"Lemon Boy doesn't look good. He needs some water ASAP!",
							},
						},
					},
					arrow: {
						currentState: 0,
						state0: {
							img: "arrow-lemon.png",
							coords: { x: 100, y: 100 },
							type: "door",
							path: "garden",
							dialogue: {
								title: "Garden",
								content: "You find a way to help Lemon Boy!",
							},
						},
					},
				},
			},
			kitchen: {
				background: "kitchen.png",
				sprites: {
					doorGarden: {
						currentState: 0,
						state0: {
							img: "garden-door.png",
							coords: { x: 1750, y: 250 },
							type: "door",
							path: "garden",
							dialogue: {
								title: "Garden",
								content: "You left the house. Sunlight hurts in your eyes!",
							},
						},
						state1: {
							img: "garden-door.png",
							coords: { x: 1750, y: 250 },
							type: "door-change",
							path: "garden",
							dialogue: {
								title: "Garden",
								content: "Here's your garden!",
							},
							signal: {
								scene: "kitchen",
								sprite: "oven",
							},
						},
                        state2: {
							img: "garden-door.png",
							coords: { x: 1750, y: 250 },
							type: "door",
							path: "garden",
							dialogue: {
								title: "Garden",
								content: "You left the house. Sunlight hurts in your eyes!",
							},
						},
					},
					bowl: {
						currentState: 0,
						state0: {
							img: "bowl.png",
							coords: { x: 520, y: 550 },
							type: "lock",
							key: "Banana",
							dialogue: {
								title: "Dough",
								content: "Someone has been doing banana bread here.",
							},
							dialogueChangeState: {
								title: "Dough",
								content: "You put the whole unpeeled banana into the dough!",
							},
							signal: {
								scene: "kitchen",
								sprite: "recipie",
							},
						},
						state1: {
							img: "bowl-banana.png",
							coords: { x: 520, y: 530 },
							type: "chest",
							reward: "Banana_Dough",
							dialogueChangeState: {
								title: "Banana Dough",
								content: "You have dough with banana in it!",
							},
						},
						state2: {
							img: "",							
							type: "none",
						},
					},
					recipie: {
						currentState: 0,
						state0: {
							img: "list-1.png",
							coords: { x: 765, y: 400 },
							type: "decoration",
							dialogue: {
								title: "Recipie",
								content: "It says you gotta add a banana.",
							},
						},
						state1: {
							img: "list-2.png",
							coords: { x: 765, y: 400 },
							type: "decoration",
							dialogue: {
								title: "Recipie",
								content: "Now you gotta put the dough into the owen.",
							},
						},
						state2: {
							img: "list-3.png",
							coords: { x: 765, y: 400 },
							type: "decoration",
							dialogue: {
								title: "Recipie",
								content: "And you're all done.",
							},
						},
					},
					oven: {
						currentState: 0,
						state0: {
							img: "oven.png",
							coords: { x: 960, y: 730 },
							type: "lock",
							key: "Banana_Dough",
							dialogue: {
								title: "Oven",
								content: "This is where you bake things.",
							},
							dialogueChangeState: {
								title: "Oven",
								content:
									"Now we wait for it to bake. Be careful so you don't burn it!",
							},
							signal: {
								scene: "kitchen",
								sprite: "doorGarden",
							},
						},
						state1: {
							img: "oven-bowl.png",
							coords: { x: 960, y: 730 },
							type: "decoration",
							dialogue: {
								title: "Oven",
								content: "The dough is slowly transforming into bread .",
							},
						},
						state2: {
							img: "oven-bread.png",
							coords: { x: 960, y: 730 },
							type: "chest",
							reward: "Banana_Bread",
							dialogueChangeState: {
								title: "Oven",
								content: "You almost burned the bread! But it's still good.",
							},
							signal: {
								scene: "kitchen",
								sprite: "recipie",
							},
						},
						state3: {
							img: "oven.png",
							coords: { x: 960, y: 730 },
							type: "lock",
							dialogue: {
								title: "Oven",
								content: "The oven is still hot.",
							},
						},
					},
					pantryDoor: {
						currentState: 0,
						state0: {
							img: "pantry-door.png",
							coords: { x: 0, y: 218 },
							type: "door",
							path: "pantry",
							dialogue: {
								title: "Pantry",
								content: "This is where you keep your food.",
							},
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
							dialogue: {
								title: "Well",
								content: "There's a frog blocking the water stream.",
							},
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
							key: "Banana_Bread",
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
							signal: {
								scene: "shed",
								sprite: "bees",
							},
						},
						state1: {
							img: "can.png",
							coords: { x: 1200, y: 150 },
							type: "chest",
							reward: "Watering_Can",
							dialogueChangeState: {
								title: "Watering Can",
								content: "You got the watering can! Now you only need water.",
							},
						},
                        state2: {
							img: "",							
							type: "none",
						},
					},
					bees: {
						currentState: 0,
						state0: {
							img: "",							
							type: "none",
						},
						state1: {
							img: "banana-bread.png",
							coords: { x: 1000, y: 470 },
							type: "decoration",
							dialogue: {
								title: "Bees",
								content: "There's bunch of bees sleeping on the banana bread.",
							},
						},
					},
					arrow: {
						currentState: 0,
						state0: {
							img: "arrow-shed.png",
							coords: { x: 900, y: 950 },
							type: "door",
							path: "crossroad",
							dialogue: {
								title: "Crossroad",
								content:
									"You came out of the shed. Congrats on the comming out!",
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
								content: "Back at the cross road.",
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
							path: "tree",
							dialogue: {
								title: "Tree",
								content: "OMG! It's Juno!? What is she doing here?",
							},
						},
					},
				},
			},
			tree: {
				background: "tree.png",
				sprites: {
					ladder: {
						currentState: 0,
						state0: {
							img: "ladder-tree.png",
							coords: { x: 210, y: 710 },
							type: "door",
							path: "pigeonSwing",
							dialogue: {
								title: "Pigeon Swing",
								content: "The pigeon is still hanging out on the swing.",
							},
						},
					},
					banana: {
						currentState: 0,
						state0: {
							img: "banana.png",
							coords: { x: 1330, y: 683 },
							type: "chest",
							reward: "Banana",
							dialogueChangeState: {
								title: "Banana",
								content: "You got a banana... from a regular tree?",
							},
						},
						state1: {
							img: "",							
							type: "none",
						},
					},
					juno: {
						currentState: 0,
						state0: {
							img: "juno.png",
							coords: { x: 800, y: 350 },
							type: "decoration",
							dialogue: {
								title: "Juno",
								content: "Juno is just chilling in the tree.",
							},
						},
					},
				},
			},
			well: {
				background: "well.png",
				sprites: {
					rope: {
						currentState: 0,
						state0: {
							img: "rope.png",
							coords: { x: 190, y: 0 },
							type: "door",
							path: "crossroad",
							dialogue: {
								title: "Crossroad",
								content: "You climed out of the well.",
							},
						},
					},
					frog: {
						currentState: 0,
						state0: {
							img: "frog2.png",
							coords: { x: 600, y: 477 },
							type: "lock",
							key: "hat",
							dialogue: {
								title: "Frog",
								content: "The frog looks cold. Gotta warm them up somehow.",
								img: "frog.png",
								coords: { x: 600, y: 100 },
								displayImg: false,
							},
						},
						state1: {
							img: "fountain.png",
							coords: { x: 600, y: 690 },
							type: "decoration",
							dialogue: {
								title: "Water stream",
								content: "If only you had something to carry the water in.",
							},
						},
					},
				},
			},
		},
		items: {
			Cucumber: {
				img: "cucumber.png",
				dialogue: "A tasty green cucumber.",
			},
			Banana: {
				img: "banana-item.png",
				dialogue: "A perfect banana for baking.",
			},
			Banana_Dough: {
				img: "bowl-item.png",
				dialogue: "Dough with banana in it ready for baking.",
			},
			Banana_Bread: {
				img: "bbread.png",
				dialogue: "Despite being a bit burnt, it's still tastes delicious!",
			},
			Hat: {
				img: "hat.png",
				dialogue: "It's very stylish and very warm hat.",
			},
			Watering_Can: {
				img: "can.png",
				dialogue: "Great for watering plants. Only there is no water in it.",
			},
		},
	};

	// create game object
	game = new Game(gameScript);

	// load initial scene
	//! this will not be here later
	game.sceneLoader.loadScene("shed");
});
