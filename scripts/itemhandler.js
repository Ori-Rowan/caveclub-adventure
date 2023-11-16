// object that handles items
class ItemHandler {
	constructor(game) {
		this.game = game;
		this.itemList = game.gameScript.items;
		this.inventory = new Array();
		this.inventoryGUI = this.gameWindow = document.getElementById("inventory");
		this.itemInUse = {};
        this.itemInUseName = "";
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
			this.useItem(item, itemName);
		});
	}

	// make item selcted as 'in use'
	useItem(item, itemName) {
		// check if item is in use already
		if (Object.keys(this.itemInUse).length) {
            if (Object.keys(this.itemInUse.merge).length) {
                this.tryMergeItem(itemName);
            }
			return;
		}

		// store item as itemInUse
		this.itemInUse = item;
        this.itemInUseName = itemName;

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
        if (Object.keys(this.itemInUse).length == 0) {
            return;
        }
		// remove the visual indicator
		this.itemInUse.element.classList.remove("inUse");
        
		// make item not in use
		this.itemInUse = {};
        this.itemInUseName = "";
	}

    // removes item from inventory
    removeItem(item) {
        // remove item from inventory
        delete this.inventory[item];
        // remove item from GUI
        this.inventoryGUI.removeChild(item.element);
    }

    // removes item in use
    removeItemInUse() {
        this.removeItem(this.itemInUse);
         // stop using item
        this.stopUseItem();
    }
    
    // try to merge item clicked on with item in use; itemName is of the clicked on item
    tryMergeItem(itemName){
        if (itemName == this.itemInUse.merge) {
            this.addItem(this.itemInUse.product);
            this.removeItemInUse();
            this.removeItem(this.inventory[itemName]);
        }
    }
}
