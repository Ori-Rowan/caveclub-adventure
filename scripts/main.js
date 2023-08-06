$(document).ready(function () {
	game = new Game();

	//test scene
	scene = {
		background: "test-1.jpg",
		sprites: {
			sprite1: {
				img: "test-ball.png",
				coords: { x: 50, y: 100 },
				properties: {},
			},
		},
	};

	//test
	game.loadScene(scene);
});
