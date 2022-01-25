const Utils = require('./utils.js')

class ChoiceArray {
	constructor (arr) {
		this._data = arr;
		this._chosen = [];
		this._original = arr;
	}

	choose () {
		if (this._data.length < 1) {
			throw new Error("There are no more elements to choose from!");
		}
		let randIdx = Utils.randIdx(this._data.length);
		let chosen = this._data[randIdx];
		this._chosen.push(chosen);
		this._data = Utils.removeElement(this._data, chosen);
		return chosen;
	}

	chosen () {
		return this._chosen;
	}

	remaining () {
		return this._data;
	}
	
	reset () {
		this._data = this._original;
	}

	toString () {
		return this._data;
	}
}

module.exports = ChoiceArray