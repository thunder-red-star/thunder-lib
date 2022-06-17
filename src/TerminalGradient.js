const chalk = require('chalk');

function hexToRgb(hex) {
	hex = hex.replace('#', '');
	let hexArray = hex.split('');
	let rgbArray = [];
	for (let i = 0; i < hexArray.length; i += 2) {
		rgbArray.push(parseInt(hexArray[i] + hexArray[i + 1], 16));
	}
	return rgbArray;
}

function generateGradient(startRgb, endRgb, steps) {
	let gradient = [];
	for (let i = 0; i < steps; i++) {
		let currentRgb = [];
		for (let j = 0; j < 3; j++) {
			currentRgb.push(Math.round((endRgb[j] - startRgb[j]) / steps * i + startRgb[j]));
		}
		gradient.push(currentRgb);
	}
	return gradient;
}

module.exports = function (text, hex1, hex2) {
	let textLength = text.length;
	let gradient = generateGradient(hexToRgb(hex1), hexToRgb(hex2), textLength);
	let resString = '';
	for (let i = 0; i < textLength; i++) {
		let currentChar = text[i];
		let currentRgb = gradient[i];
		resString += chalk.rgb(currentRgb[0], currentRgb[1], currentRgb[2])(currentChar);
	}
	return resString;
}