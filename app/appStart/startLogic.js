
function AppStart (app) {

	this.login = async () => {
		await app.start()
	}

	this.eventHandler = () => {

	}
}


module.exports = { AppStart }