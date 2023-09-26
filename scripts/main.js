$(document).ready(function () {
    //test gameScript
    gameScript = {
        scene0: {
            background: 'test_background_2.jpg',
            sprites: {
                sprite0: {
                    currentState: 0,
                    state0: {
                        img: 'test_sprite_4.png',
                        coords: { x: 800, y: 400 },
                        type: 'door',
                        path: 'scene2'
                    }
                }
            }
        },
        scene1: {
            background: 'test_background_1.jpg',
            sprites: {
                sprite0: {
                    currentState: 0,
                    state0: {
                        img: 'test_sprite_2.png',
                        coords: { x: 900, y: 400 },
                        type: 'door'
                    },
                    state1:{                        
                        img: 'test_sprite_1.png',
                        coords: { x: 50, y: 100 },
                        type: 'door'
                    }
                },
            },
        },
    };

    // create game object
    game = new Game(gameScript);

    //test
    game.sceneLoader.loadScene('scene0');
});
