// object to handle a sprite in a scene
class Sprite {
    constructor(game, spriteArgs) {
        this.game = game;
        this.gameWindow = game.gameWindow;
        this.spriteArgs = spriteArgs;
        this.stateArgs = this.getStateArgs(this.spriteArgs)
        
        
        this.drawSprite(this.stateArgs.img, this.stateArgs.coords);
    }

    getStateArgs(spriteArgs){
        let currentState = spriteArgs.currentState;
        currentState = 'state'+String(currentState);
        let stateArgs = spriteArgs[currentState];
        return stateArgs;
    }

    /**
     * * loads the sprite into the game window, to desired position
     * @param {*} imgPath the file name in the /src/omg/sprite folder, extracted from spriteArgs
     * @param {*} coords the coords of where the spirte is on the canvas, extracted from spriteArgs
     */
    drawSprite(imgPath, coords) {
        // draw the img on the canvas at desired coords
        this.context = this.gameWindow.getContext('2d');
        let img = new Image();
        img.src = 'src/img/sprites/' + imgPath;
        img.onload = () => {
            this.context.drawImage(img, coords.x, coords.y);
            // make the clickable area
            this.clickArea(coords, { width: img.width, height: img.height });
        };
    }

    /**
     * * create a clickable area on the canvas around the sprite
     * @param {*} coords the coords of where the spirte is on the canvas, extracted from spriteArgs
     * @param {*} size size of the sprite that will determine width and height of clickable rectangle are
     */
    clickArea(coords, size) {
        this.gameWindow.addEventListener('click', (event) => {
            // calculate where mouse is on 1920/1080 canvas even when resized
            let mouseX = Math.ceil(
                (event.offsetX / this.gameWindow.offsetWidth) * 1920
            );
            let mouseY = Math.ceil(
                (event.offsetY / this.gameWindow.offsetHeight) * 1080
            );

            // check if mouse is in the area
            if (
                mouseX >= coords.x &&
                mouseX <= coords.x + size.width &&
                mouseY >= coords.y &&
                mouseY <= coords.y + size.height
            ) {
                this.game.sceneLoader.loadScene('scene1');
            }
        });
    }
}
