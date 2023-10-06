// object that handles items
class ItemHandler {
	constructor(game) {
		this.game = game;
		this.itemList = game.gameScript.items;
		this.inventory = new Array();
	}

	// add an item to invertory
	addItem(itemName) {
		let item = this.itemList[itemName];
		this.inventory[itemName] = item;
		console.log(this.inventory);
	}
}
