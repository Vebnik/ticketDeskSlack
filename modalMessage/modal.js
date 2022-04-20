const sample = require('./sampleBlock')


const modalSchema = {
	ticket: async (client, body) => {
		await client.views.open({
			trigger_id: body.trigger_id,
			view: sample.ticket()[0]
		})
	},
	ticketResend: async (client, body) => {
		try {
			await client.views.open({
				trigger_id: body.trigger_id,
				view: sample.resendTicket(body.message.thread_ts)[0]
			})
		} catch (e) {
			console.error(e)
		}
	}
}


module.exports = { modalSchema }