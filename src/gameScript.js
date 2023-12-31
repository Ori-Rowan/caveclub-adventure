// this is the game script that contains all the information about the game
gameScript = {
	scenes: {
        menu: {
            background: "menu.png",
            music: "menu_theme.mp3",
            sprites: {
                title: {
                    currentState: 0,
                    state0: {
                        img: "menu-title.png",
                        coords: { x: 800, y: 70 },
                        type: "decoration",
                    },
                },
                buttonPlay: {
                    currentState: 0,
                    state0: {
                        img: "menu-button-play.png",
                        coords: { x: 40, y: 200 },
                        type: "door",
                        path: "menuIntroduction",
                        sound: "button_press.mp3",
                    },
                },
                buttonControls: {
                    currentState: 0,
                    state0: {
                        img: "menu-button-controls.png",
                        coords: { x: 40, y: 400 },
                        type: "door",
                        path: "menuControls",
                        sound: "button_press.mp3",
                    },
                },
                buttonCredits: {
                    currentState: 0,
                    state0: {
                        img: "menu-button-credits.png",
                        coords: { x: 40, y: 600 },
                        type: "door",
                        path: "menuCredits",
                        sound: "button_press.mp3",
                    },
                },
            },
        },
        menuIntroduction: {
            background: "menu.png",
            music: "menu_theme.mp3",
            sprites: {
                pageIntroduction: {
                    currentState: 0,
                    state0: {
                        img: "menu-introduction.png",
                        coords: { x: 650, y: 100 },
                        type: "decoration",
                    },
                },
                buttonContinue: {
                    currentState: 0,
                    state0: {
                        img: "menu-button-continue.png",
                        coords: { x: 861, y: 734 },
                        type: "door",
                        path: "garden",
                        sound: "button_press.mp3",
                    },                
                },
            },
        },
        menuControls: {
            background: "menu.png",
            music: "menu_theme.mp3",
            sprites: {
                pageControls: {
                    currentState: 0,
                    state0: {
                        img: "menu-controls.png",
                        coords: { x: 650, y: 100 },
                        type: "decoration",
                    },
                },
                buttonBack: {
                    currentState: 0,
                    state0: {
                        img: "menu-back-arrow.png",
                        coords: { x: 1335, y: 884 },
                        type: "door",
                        path: "menu",
                        sound: "button_press.mp3",
                    },                
                },
            },
        },
        menuCredits: {
            background: "menu.png",
            music: "menu_theme.mp3",
            sprites: {
                pageCredits: {
                    currentState: 0,
                    state0: {
                        img: "menu-credits.png",
                        coords: { x: 650, y: 100 },
                        type: "decoration",
                    },
                },
                buttonBack: {
                    currentState: 0,
                    state0: {
                        img: "menu-back-arrow.png",
                        coords: { x: 1335, y: 884 },
                        type: "door",
                        path: "menu",
                        sound: "button_press.mp3",
                    },                
                },
            },
        },
		garden: {
			background: "garden.png",
			music: "nature_ambience.mp3",
			sprites: {
				lemonPlot: {
					currentState: 0,
					state0: {
						img: "lemonboy-garden.png",
						coords: { x: 1246, y: 780 },
						type: "door-change",
						path: "lemonBoy",
						dialogueChangeState: {
							title: "Lemon plot",
							content: "Looks like the clouds ran out of water!",
						},
                        soundChangeState: "sad_music.mp3",
					},
					state1: {
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
						reward: "Cucumber",
						dialogueChangeState: {
							title: "Cucumber Plant",
							content: "You got a cucumber from the plant.",
						},
						soundChangeState: "plant_pick.mp3",
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
						type: "door-change",
						path: "kitchen",
						dialogueChangeState: {
							title: "Kitchen",
							content: "Smells like food in here!",
						},
						soundChangeState: "door_1.mp3",
					},
					state1: {
						img: "door-garden.png",
						coords: { x: 73, y: 153 },
						type: "door",
						path: "kitchen",
						sound: "door_1.mp3",
					},
				},
				signCrossroad: {
					currentState: 0,
					state0: {
						img: "garden-sign.png",
						coords: { x: 1700, y: 380 },
						type: "door-change",
						path: "crossroad",
						dialogueChangeState: {
							title: "Crossroad",
							content: "Look, a well! You can get water from there.",
						},
						soundChangeState: "footsteps.mp3",
					},
					state1: {
						img: "garden-sign.png",
						coords: { x: 1700, y: 380 },
						type: "door",
						path: "crossroad",
						sound: "footsteps.mp3",
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
						type: "locked-door",
                        key: "Full_Watering_Can",
                        path: "endscreen",
						dialogue: {
							title: "Lemon Boy",
							content: "Lemon Boy doesn't look good. He needs some water ASAP!",
						},
                        sound: "lemon_cry.mp3",
                        soundChangeState: "water_lemon.mp3",
					},
				},
				arrow: {
					currentState: 0,
					state0: {
						img: "arrow-lemon.png",
						coords: { x: 100, y: 100 },
						type: "door-change",
						path: "garden",
						dialogueChangeState: {
							title: "Garden",
							content: "You find a way to help Lemon Boy!",
						},
					},
					state1: {
						img: "arrow-lemon.png",
						coords: { x: 100, y: 100 },
						type: "door",
						path: "garden",
					},
				},
			},
		},
		kitchen: {
			background: "kitchen.png",
			music: "room_ambience.mp3",
			sprites: {
				doorGarden: {
					currentState: 0,
					state0: {
						img: "garden-door.png",
						coords: { x: 1750, y: 250 },
						type: "door",
						path: "garden",
						sound: "door_1.mp3",
					},
					state1: {
						img: "garden-door.png",
						coords: { x: 1750, y: 250 },
						type: "door-change",
						path: "garden",
						dialogueChangeState: {
							title: "Garden",
							content: "You left the house. The sun hurts your eyes.",
						},
						signals: {
							1: {scene: "kitchen",sprite: "oven",},
						},
						soundChangeState: "door_1.mp3",
					},
					state2: {
						img: "garden-door.png",
						coords: { x: 1750, y: 250 },
						type: "door",
						path: "garden",
						sound: "door_1.mp3",
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
						signals: {
							1: {scene: "kitchen", sprite: "recipe",}
						},
						soundChangeState: "splat.mp3",
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
						soundChangeState: "pick_up.mp3",
					},
					state2: {
						img: "",
						type: "none",
					},
				},
				recipe: {
					currentState: 0,
					state0: {
						img: "list-1.png",
						coords: { x: 765, y: 400 },
						type: "decoration",
						dialogue: {
							title: "Recipe",
							content: "It says you gotta add a banana to the dough.",
						},
					},
					state1: {
						img: "list-2.png",
						coords: { x: 765, y: 400 },
						type: "decoration",
						dialogue: {
							title: "Recipe",
							content: "Now you gotta bake the bread.",
						},
					},
					state2: {
						img: "list-3.png",
						coords: { x: 765, y: 400 },
						type: "decoration",
						dialogue: {
							title: "Recipe",
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
						signals: {
							1: {scene: "kitchen", sprite: "doorGarden",}
						},
						soundChangeState: "oven_start.mp3",
					},
					state1: {
						img: "oven-bowl.png",
						coords: { x: 960, y: 730 },
						type: "decoration",
						dialogue: {
							title: "Oven",
							content: "The dough is slowly transforming into bread .",
						},
						sound: "oven_bake.mp3",
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
						signals: {
							1: {scene: "kitchen", sprite: "recipe",}
						},
						soundChangeState: "oven_end.mp3",
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
						type: "door-change",
						path: "pantry",
						dialogueChangeState: {
							title: "Pantry",
							content: "This is where you keep your food and other stuff.",
						},
                        soundChangeState: "door_3.mp3",
					},
                    state1: {
                        img: "pantry-door.png",
                        coords: { x: 0, y: 218 },
                        type: "door",
                        path: "pantry",
                        sound: "door_3.mp3",
                    },
				},
			},
		},
        pantry: {
            background: "pantry.png",
            music: "room_ambience.mp3",
            sprites: {
                arrow: {
                    currentState: 0,
                    state0: {
                        img: "arrow-pantry.png",
                        coords: { x: 900, y: 970 },
                        type: "door",
                        path: "kitchen",
                        sound: "door_3.mp3",
                    },
                },
                toast: {
                    currentState: 0,
                    state0: {
                        img: "toast_packed.png",
                        coords: { x: 1230, y: 400 },
                        type: "chest",
                        reward: "Toast",
                        dialogueChangeState: {
                            title: "Toast Bread",
                            content: "You got yourself nice two pieces of toast bread!",
                        },
                        soundChangeState: "bread_open.mp3",
                    },
                    state1: {
                        img: "toast_unpacked.png",
                        coords: { x: 1222, y: 401 },
                        type: "decoration",
                        dialogue: {
                            title: "Toast Bread",
                            content: "Thats enough toast for today.",
                        },
                    },
                },
                ratt_kidd: {
                    currentState: 0,
                    state0: {
                        img: "ratt_kidd.png",
                        coords: { x: 355, y: 870 },
                        type: "decoration",
                        dialogue: {
                            title: "Ratt Kidd",
                            content: "Yo! Yo! Yo! Is that the Ratt Kidd?!",
                        },
                        sound: "ratt.mp3",
                    },
                },              
            },
        },
		crossroad: {
			background: "forest.png",
			music: "nature_ambience.mp3",
			sprites: {
				signGarden: {
					currentState: 0,
					state0: {
						img: "forest-sign.png",
						coords: { x: 10, y: 750 },
						type: "door-change",
						path: "garden",
						dialogueChangeState: {
							title: "Garden",
							content: "Back at the garden!",
						},
						soundChangeState: "footsteps.mp3",
					},
					state1: {
						img: "forest-sign.png",
						coords: { x: 10, y: 750 },
						type: "door",
						path: "garden",
						sound: "footsteps.mp3",
					},
				},
				pigeonSwing: {
					currentState: 0,
					state0: {
						img: "forest-pigeon.png",
						coords: { x: 680, y: 0 },
						type: "door-change",
						path: "pigeonSwing",
						dialogueChangeState: {
							title: "Swing",
							content: "Cool! There's a pigeon hanging out on the swing.",
						},
						soundChangeState: "footsteps.mp3",
					},
					state1: {
						img: "forest-pigeon.png",
						coords: { x: 680, y: 0 },
						type: "door-change",
						path: "pigeonSwing",
						dialogueChangeState: {
							title: "Swing",
							content: "The pigeon hasn't left yet.",
						},
						soundChangeState: "footsteps.mp3",
					},
					state2: {
						img: "forest-pigeon.png",
						coords: { x: 680, y: 0 },
						type: "door-change",
						path: "pigeonSwing",
						dialogueChangeState: {
							title: "Swing",
							content: "Guess what? The pigeon is still here.",
						},
						soundChangeState: "footsteps.mp3",
					},
					state3: {
						img: "forest-pigeon.png",
						coords: { x: 680, y: 0 },
						type: "door",
						path: "pigeonSwing",
						dialogue: {
							title: "Swing",
							content: "The pigeon is still here.",
						},
						sound: "footsteps.mp3",
					},
				},
				well: {
					currentState: 0,
					state0: {
						img: "forest-well.png",
						coords: { x: 1310, y: 400 },
						type: "door-change",
						path: "well",
						dialogueChangeState: {
							title: "Well",
							content: "There's a frog blocking the water stream.",
						},
						soundChangeState: "well_enter.mp3",
					},
					state1: {
						img: "forest-well.png",
						coords: { x: 1310, y: 400 },
						type: "door",
						path: "well",
						sound: "well_enter.mp3",
					},
				},
				shed: {
					currentState: 0,
					state0: {
						img: "forest-shed.png",
						coords: { x: 26, y: 110 },
						type: "door-change",
						path: "shed",
						dialogueChangeState: {
							title: "Shed",
							content: "It's your shed! All your tools are in here.",
						},
						soundChangeState: "door_2.mp3",
					},
					state1: {
						img: "forest-shed.png",
						coords: { x: 26, y: 110 },
						type: "door",
						path: "shed",
						sound: "door_2.mp3",
					},
				},
			},
		},
		shed: {
			background: "shed.png",
			music: "shack_ambience.mp3",
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
								"The bees won't let you get the watering can. You gotta get rid of them.",
						},
						dialogueChangeState: {
							title: "Watering Can",
							content:
								"As they always say &ldquo;banana bread before I go to bed puts the bees to sleep&ldquo;.",
						},
						signals: {
							1: {scene: "shed", sprite: "bees",}
						},
						soundChangeState: "bee_buzzin.mp3",
						sound: "bee_buzzin.mp3",
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
						soundChangeState: "pick_can.mp3",
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
						sound: "bee_buzzin.mp3",
					},
				},
				arrow: {
					currentState: 0,
					state0: {
						img: "arrow-shed.png",
						coords: { x: 900, y: 950 },
						type: "door-change",
						path: "crossroad",
						dialogueChangeState: {
							title: "Crossroad",
							content: "You came out of the shed. Congrats on the coming out!",
						},
						soundChangeState: "door_2.mp3",
					},
					state1: {
						img: "arrow-shed.png",
						coords: { x: 900, y: 950 },
						type: "door",
						path: "crossroad",
						sound: "door_2.mp3",
					},
				},
			},
		},
		pigeonSwing: {
			background: "pigeon.png",
			music: "nature_ambience.mp3",
			sprites: {
				sign: {
					currentState: 0,
					state0: {
						img: "pigeon-sign.png",
						coords: { x: 1690, y: 640 },
						type: "door-change",
						path: "crossroad",
						dialogueChangeState: {
							title: "Crossroad",
							content: "Back at the cross road.",
						},
						soundChangeState: "footsteps.mp3",
					},
					state1: {
						img: "pigeon-sign.png",
						coords: { x: 1690, y: 640 },
						type: "door",
						path: "crossroad",
						sound: "footsteps.mp3",
					},
				},
				pigeon: {
					currentState: 0,
					state0: {
						img: "pigeon-sitting.png",
						coords: { x: 1030, y: 400 },
						type: "locked-chest",
						key: "Cucumber_Sandwich",
						reward: "Hat",
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
							content: "The pigeon gave you his hat. It's warm!",
						},
						sound: "pigeon.mp3",
						soundChangeState: "pigeon_eat.mp3",
					},
					state1: {
						img: "pigeon-no-hat.png",
						coords: { x: 1042, y: 400 },
						type: "decoration",
						dialogue: {
							title: "Pigeon",
							content: "The pigeon seems happy.",
						},
						sound: "pigeon.mp3",
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
						sound: "leaf_rustle.mp3",
					},
					state1: {
						img: "ladder.png",
						coords: { x: 410, y: 223 },
						type: "door-change",
						path: "tree",
                        dialogueChangeState: {
                            title: "Tree",
                            content: "There she is! Chillin with Juno!",
                        },
                        soundChangeState: "leaf_rustle.mp3",
					},
                    state2: {
						img: "ladder.png",
						coords: { x: 410, y: 223 },
						type: "door",
						path: "tree",
                        dialogue: {
                            title: "Tree",
                            content: "Hello Juno! Hello frog!",
                        },
                        sound: "leaf_rustle.mp3",
					},
				},
			},
		},
		tree: {
			background: "tree.png",
			music: "wind_in_trees.mp3",
			sprites: {
				ladder: {
					currentState: 0,
					state0: {
						img: "ladder-tree.png",
						coords: { x: 210, y: 710 },
						type: "door-change",
						path: "pigeonSwing",
						dialogueChangeState: {
							title: "Pigeon Swing",
							content: "The pigeon is still hanging out on the swing.",
						},
						soundChangeState: "leaf_rustle.mp3",
					},
					state1: {
						img: "ladder-tree.png",
						coords: { x: 210, y: 710 },
						type: "door",
						path: "pigeonSwing",
						sound: "leaf_rustle.mp3",
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
						soundChangeState: "plant_pick.mp3",
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
							content: "You pat Juno on the head!",
                            img: "juno-pat.png",
							coords: { x: 783, y: 293 },
							displayImg: false,
						},
						sound: "cat_purr.mp3",
					},
				},
                frog: {
                    currentState: 0,
                    state0: {
                        img: "",
                        type: "none",
                    },
                    state1: {
                        img: "frog-hat.png",
                        coords: { x: 590, y: 450 },
                        type: "decoration",
                        dialogue: {
                            title: "Frog",
                            content: "The frog isn't cold anymore!",
                        },
                        sound: "frog_ribbit.mp3",
                    },
                }
			},
		},
		well: {
			background: "well.png",
			music: "droplets_cave.mp3",
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
						sound: "well_exit.mp3",
					},
					state1: {
						img: "rope.png",
						coords: { x: 190, y: 0 },
						type: "door-change",
						path: "crossroad",
						dialogueChangeState: {
							title: "Crossroad",
							content: "Where could the frog have gone?",
						},
						soundChangeState: "well_exit.mp3",
					},
					state2: {
						img: "rope.png",
						coords: { x: 190, y: 0 },
						type: "door",
						path: "crossroad",
						sound: "well_exit.mp3",
					},
				},
				frog: {
					currentState: 0,
					state0: {
						img: "frog2.png",
						coords: { x: 600, y: 477 },
						type: "lock",
						key: "Hat",
						dialogue: {
							title: "Frog",
							content: "The frog looks cold. Gotta warm her up somehow.",
							img: "frog.png",
							coords: { x: 600, y: 100 },
							displayImg: false,
						},
						dialogueChangeState: {
							title: "Frog",
							content: "The frog took the hat and hopped out of the well.",
						},
                        signals:{
                            1: {scene: "tree", sprite: "frog",},
                            2: {scene: "well", sprite: "rope",},
                            3: {scene: "pigeonSwing", sprite: "ladder",},
                        },
						sound: "frog_ribbit.mp3",
						soundChangeState: "frog_jump.mp3",
					},
					state1: {
						img: "fountain.png",
						coords: { x: 600, y: 690 },
						type: "locked-chest",
						key: "Watering_Can",
						reward: "Full_Watering_Can",
						dialogue: {
							title: "Water stream",
							content: "If only you had something to carry the water in.",
						},
						sound: "water_stream.mp3",
						soundChangeState: "can_water.mp3",
					},
					state2: {
						img: "fountain.png",
						coords: { x: 600, y: 690 },
						type: "decoration",
						dialogue: {
							title: "Water stream",
							content: "You already got your water. What more do you want?",
						},
						sound: "water_stream.mp3",
					},
				},
			},
		},
        endscreen:{
            background: "endscreen.png",
            music: "end_screen.mp3",
            sprites: {
                arrow: {
                    currentState: 0,
                    state0: {
                        img: "arrow_endscreen.png",
                        coords: { x: 1740, y: 900},
                        type: "door",
                        path: "endscreenCredits",
                        sound: "button_press.mp3",
                    },
                },
            },
        },
        endscreenCredits:{
            background: "endscreen.png",
            music: "end_screen.mp3",
            sprites: {
                pageCredits: {
                    currentState: 0,
                    state0: {
                        img: "end-credits.png",
                        coords: { x: 600, y: 100 },
                        type: "decoration",
                    },
                },
                buttonBack: {
                    currentState: 0,
                    state0: {
                        img: "menu-back-arrow.png",
                        coords: { x: 1285, y: 884 },
                        type: "exit",
                        path: "menu",
                        sound: "button_press.mp3",
                    },                
                },
            },
        },
	},
	items: {
		Cucumber: {
			img: "cucumber.png",
			dialogue: "A tasty green cucumber.",
            merge: "Toast",
            product: "Cucumber_Sandwich",
            mergeDialogue: "You invented cucumber sandwich.",
		},
        Toast: {
            img: "toast.png",
            dialogue: "Two pieces of toast bread.",
            merge: "Cucumber",
            product: "Cucumber_Sandwich",
            mergeDialogue: "You invented cucumber sandwich.",
        },
        Cucumber_Sandwich: {
            img: "cucumber-sandwich.png",
            dialogue: "Mmmm! Tasty!",
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
			dialogue: "Despite being a bit burnt, it  still tastes delicious!",
		},
		Hat: {
			img: "hat.png",
			dialogue: "It's very stylish and very warm hat.",
		},
		Watering_Can: {
			img: "can.png",
			dialogue: "Great for watering plants. Only there is no water in it.",
		},
		Full_Watering_Can: {
			img: "can-water.png",
			dialogue: "Great for watering plants. And there's water in it!",
		},
	},
};
