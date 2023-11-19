// this object handles dialogue window
class DialogueHandler{
	constructor(game) {
		this.game = game;
		this.dialogueBox = document.getElementById("dialogueBox");
	}

    displayMessage(title ,content) {

        // display title in <h2> element and content in <p> element
        this.dialogueBox.getElementsByTagName("h2")[0].innerHTML = title;
        this.dialogueBox.getElementsByTagName("p")[0].innerHTML = content;

        // display dialogue box
        this.dialogueBox.style.display = "block";

        // when clicking on the game, stop displaying the message
        //! must be on a tiemout because otherwise it is activated with the 1st click
        setTimeout(() => {
            this.game.gameContainer.addEventListener(
                "click",
                () => {
                    this.stopDisplayMessage();
                },
                { once: true }
            );
        }, 50);

    }

    // stop displaying the message
    stopDisplayMessage() {
        // hide dialogue box
        this.dialogueBox.style.display = "none";
    }

    // returns true if dialogue box is displayed
    isDisplayed(){
        if (this.dialogueBox.style.display == "block") {
            return true;
        }
        return false;
    }
}

