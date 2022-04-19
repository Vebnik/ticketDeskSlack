

function commandListen (app) {

	app.command('/newticket', async ({ command, ack, respond }) => {
		await ack()
		console.log(command)
		await respond('hello')
	})

}


module.exports = { commandListen }