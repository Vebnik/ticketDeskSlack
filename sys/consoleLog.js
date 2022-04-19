const ch = require('chalk')


const log = {
	log: (str) => console.log(ch.blue(str)),
	err: (str) => console.log(ch.red(str)),
	info: (str) => console.log(ch.yellow(str)),
}


module.exports = { log }