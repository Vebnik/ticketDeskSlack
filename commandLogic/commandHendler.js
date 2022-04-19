const { modalSchema } = require('../modalMessage/modal')


function commandListen (app) {
	app.command('/newticket', async ({ ack, body, client, logger }) => {
		await ack()
		await modalSchema.ticket(client, body).then(modal => { logger.info(modal) })
	})
}

function modalSubmitListen (app) {
	app.view('ticketModal', async ({ ack, body, view, client, logger }) => {
		await ack()
		const userName = `@${body.user.name}`
		const userInputs = Object.values(view.state.values).map(el => Object.values(el)).map(el => Object.entries(...el)[1]).map(el => el[1])

		console.log(userName, userInputs)
		await client.chat.postMessage({
			channel: userInputs[0],
			text: userInputs.slice(1).toString()
		})
	})
}


module.exports = { commandListen, modalSubmitListen }