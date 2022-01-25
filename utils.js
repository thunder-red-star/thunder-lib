/*
 * General utility functions for my utility classes.
 * L
 */

// Choose a random number between 0 and l - 1 (useful for choosing a random index in an array)
function randIdx (l) {
	return Math.floor(Math.random() * l)
}

// Removes an element from an array.
function removeElement(array, element) {
    const index = array.indexOf(element);
    array.splice(index, 1);
}

module.exports = {
	randIdx, removeElement
}