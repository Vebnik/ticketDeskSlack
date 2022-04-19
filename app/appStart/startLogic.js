const { log } = require('../../sys/consoleLog')
const { commandListen } = require('../../commandLogic/commandHendler')


function AppStart (app) {

	this.login = () => {
		app.start()
			.then(ev => ev.ok ? log.log(`App started ${new Date().toJSON()}`): log.err(ev))
			.catch(err => log.err(err))
	}

	this.eventHandler = () => {
		commandListen(app)
	}
}


module.exports = { AppStart }