const sample = require('./sampleBlock')


const modalSchema = {
	ticket: async (client, body) => {
		await client.views.open({
			trigger_id: body.trigger_id,
			view: sample.ticket()[0]
		})
	},
	ticketResend: async (client, body) => {
		await client.views.open({
			trigger_id: body.trigger_id,
			view: sample.resendTicket(body.message.ts)[0]
		})
	}
}


module.exports = { modalSchema }