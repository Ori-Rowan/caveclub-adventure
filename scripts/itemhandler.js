// object that handles items
class ItemHandler {
	constructor(game) {
		this.game = game;
		this.itemList = game.gameScript.items;
		this.inventory = new Array();
		this.inventoryGUI = this.gameWindow = document.getElementById("inventory");
	}

	// add an item to invertory
	addItem(itemName) {
		// add item to inventory
		let item = this.itemList[itemName];
		this.inventory[itemName] = item;

        // create img element
		let element = document.createElement('img');
        element.className = 'inventoryItem';
        element.id = itemName;
        // put the rigt img actually
        let path = item.img;
        element.src = 'src/img/items/' +  path;
        // append element to GUI
		this.inventoryGUI.appendChild(element);
	}
}
