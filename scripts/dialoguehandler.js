// this object handles dialogue window
class DialogueHandler {
	constructor(game) {
		this.game = game;
		this.dialogueBox = document.getElementById("dialogueBox");

		// rescale the dialogue box font on window resize
		window.addEventListener("resize", () => {
			this.scaleFont();
		});
	}

	displayMessage(title, content, reloadScene = false) {
		// display title in <h2> element and content in <p> element
		this.dialogueBox.getElementsByTagName("h2")[0].innerHTML = title;
		this.dialogueBox.getElementsByTagName("p")[0].innerHTML = content;

		// display dialogue box
		this.dialogueBox.style.display = "block";

		// rescale the dialogue box font
		this.scaleFont();

		// reload scene if needed
		if (reloadScene) {
			this.game.sceneLoader.reloadScene();
		}

		// when clicking on the game, stop displaying the message
		//? must be on a tiemout because otherwise it is activated with the 1st click
		setTimeout(() => {
			this.game.gameContainer.addEventListener(
				"click",
				() => {
					// hide dialogue box
					this.dialogueBox.style.display = "none";

					// reload scene if needed
					if (reloadScene) {
						this.game.sceneLoader.reloadScene();
					}
				},
				{ once: true }
			);
		}, 50);
	}

	// returns true if dialogue box is displayed
	isDisplayed() {
		if (this.dialogueBox.style.display == "block") {
			return true;
		}
		return false;
	}

	// rescale the dialogue box font
	scaleFont() {
		// calculate the font size
		let dialogueBoxWidth = this.dialogueBox.offsetWidth;
		let scaledFontSize = dialogueBoxWidth * 0.01; // Adjust the multiplier as needed

		// set the font size
		this.dialogueBox.style.fontSize = scaledFontSize + "px";
	}
}
