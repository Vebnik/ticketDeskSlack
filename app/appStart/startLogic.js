const { log } = require('../../sys/consoleLog')
const { commandListen, modalSubmitListen, teamEventListen, actionListen } = require('../../commandLogic/commandHendler')


function AppStart (app) {

	this.login = () => {
		app.start()
			.then(ev => ev.ok ? log.log(`App started ${new Date().toJSON()}`): log.err(ev))
			.catch(err => log.err(err))
	}

	this.eventHandler = () => {
		commandListen(app)
		modalSubmitListen(app)
		teamEventListen(app)
		actionListen(app)
	}
}


module.exports = { AppStart }