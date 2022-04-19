const { modalSchema } = require('../modalMessage/modal')
const { log } = require('../sys/consoleLog')
const { sendMsg } = require('./slackApi')


function commandListen (app) {
	app.command('/newticket', async ({ ack, body, client, logger }) => {
		await ack()
		await modalSchema.ticket(client, body).then(modal => { logger.info(modal) })
	})
}

function modalSubmitListen (app) {
	app.view('ticketModal', async ({ ack, body, view, client, logger }) => {
		await ack()
		await sendMsg(client, body, view).catch(err => log.err(err))
	})
}


module.exports = { commandListen, modalSubmitListen }