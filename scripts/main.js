$(document).ready(function () {
    
    //test gameScript
	gameScript = {
        scene1: {
            background: "test_background_1.jpg",
			sprites: {
                sprite1: {
                    img: "test_sprite_1.png",
					coords: { x: 50, y: 100 },
					properties: {},
				},
				sprite2: {
                    img: "test_sprite_2.png",
					coords: { x: 200, y: 200 },
					properties: {},
				},
				sprite3: {
                    img: "test_sprite_4.png",
					coords: { x: 500, y: 200 },
					properties: {},
				},
			},
		},
		scene2: {
            background: "test_background_2.jpg",
			sprites: {
                sprite1: {
                    img: "test_sprite_3.png",
					coords: { x: 50, y: 600 },
					properties: {},
				},
				sprite2: {
                    img: "test_sprite_4.png",
					coords: { x: 800, y: 200 },
					properties: {},
				},
			},
		},
	};
    
    // create the game
    game = new Game();

	//test
	game.newScene(gameScript.scene1);
});
