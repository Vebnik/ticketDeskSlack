const { modalSchema } = require('../modalMessage/modal')


function commandListen (app) {

	app.command('/newticket', async ({ ack, body, client, logger }) => {
		await ack()
		await modalSchema.ticket(client, body).then(modal => { logger.info(modal) })
	})
}


module.exports = { commandListen }