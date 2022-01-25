const Utils = require('./utils.js')

class ChoiceArray {
	constructor (arr) {
		this._chosen = []
		this._data = arr
	}

	choose () {
		let randIdx = Utils.randIdx(this._data.length)
		let chosen = this._data[randIdx]
		return chosen
	}

	chosen () {
		return this._chosen
	}

	remaining () {
		return this._data
	}
}

module.exports = ChoiceArray