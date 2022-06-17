// TerminalGradient test

const { TerminalGradient } = require('../src');

console.log(
	TerminalGradient(
		"Hello World! Hello World! Hellooooooooooooooooo World! And hello again! Ding ding ding, I say today's a merry day to say \"Hello World!\"",
		'#000000',
		'#ffffff'
		)
)

// thanks copilot for writing all the tests for me
console.log(
	TerminalGradient(
		"Node.js is a platform ",
		'#ff0000',
		'#ff8800'
	) +
	TerminalGradient(
		"built on Chrome's ",
		'#ff8800',
		'#ffff00'
	) +
	TerminalGradient(
		"V8 JavaScript engine. ",
		'#ffff00',
		'#88ff00',
	) +
	TerminalGradient(
		"It was created by ",
		'#88ff00',
		'#00ff00'
	) +
	TerminalGradient(
		"Ryan Dahl in 2009, ",
		'#00ff00',
		'#00ff88'
	) +
	TerminalGradient(
		"and is maintained by ",
		'#00ff88',
		'#00ffff'
	) +
	TerminalGradient(
		"the Node.js community. ",
		'#00ffff',
		'#0088ff'
	) +
	TerminalGradient(
		"It's open source and ",
		'#0088ff',
		'#0000ff'
	) +
	TerminalGradient(
		"it's used by all of the ",
		'#0000ff',
		'#8800ff'
	) +
	TerminalGradient(
		"world's largest ",
		'#8800ff',
		'#ff00ff'
	) +
	TerminalGradient(
		"companies. ",
		'#ff00ff',
		'#ff0000'
	)
)