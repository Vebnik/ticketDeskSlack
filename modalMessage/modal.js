const sample = require('./sampleBlock')


const modalSchema = {
	ticket: async (client, body) => {
		await client.views.open({
			trigger_id: body.trigger_id,
			view: sample.ticket
		})
	},
	ticketResend: async (client, body) => {
		await client.views.open({
			trigger_id: body.trigger_id,
			view: sample.resendTicket
		})
	}
}


module.exports = { modalSchema }