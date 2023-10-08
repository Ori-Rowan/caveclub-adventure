// object that handles items
class ItemHandler {
	constructor(game) {
		this.game = game;
		this.itemList = game.gameScript.items;
		this.inventory = new Array();
		this.inventoryGUI = this.gameWindow = document.getElementById("inventory");
		this.itemInUse = {};
	}

	// add an item to invertory
	addItem(itemName) {
		// add item to inventory
		let item = this.itemList[itemName];
		this.inventory[itemName] = item;

		// create img element and add it to the inventory GUI
		item.element = document.createElement("img");
		item.element.className = "inventoryItem";
		item.element;
		let path = item.img;
		item.element.src = "src/img/items/" + path;
		this.inventoryGUI.appendChild(item.element);

		// when clicking on item, use it
		item.element.addEventListener("click", () => {
			this.useItem(item);
		});
	}

	// make item selcted as 'in use'
	useItem(item) {
		// check if item is in use already
		if (Object.keys(this.itemInUse).length) {
			return;
		}

		// store item as itemInUse
		this.itemInUse = item;

		// add visual indicator
		item.element.classList.add("inUse");

		// when clicking on the game, stop using it
		//! must be on a tiemout because otherwise it is activated with the 1st click
		setTimeout(() => {
			this.game.gameContainer.addEventListener(
				"click",
				() => {
					this.stopUseItem();
				},
				{ once: true }
			);
		}, 50);
	}

	// unselect the current item in use
	stopUseItem() {
		// remove the visual indicator
		this.itemInUse.element.classList.remove("inUse");

		// make item not in use
		this.itemInUse = {};
	}
}
