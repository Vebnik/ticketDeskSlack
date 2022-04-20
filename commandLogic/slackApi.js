const { ticketMsg, ticketReply, testAttachment } = require('../modalMessage/sampleBlock')


const threadMem = new Map()

async function sendMsg (client, body, view) {

	const userName = `${body.user.name}`
	const userInputs = Object.values(view.state.values).map(el => Object.values(el)).map(el => Object.entries(...el)[1]).map(el => el[1])

	await client.chat.postMessage({
		channel: userInputs[0],
		attachments: ticketMsg(userName, 'waiting support ⏲'),
	})
		.then(async info => {
			threadMem.set(info.ts, [info.channel, userName])
			await client.chat.postMessage({
				channel: info.channel,
				thread_ts: info.ts,
				blocks: ticketReply(userInputs)
			})
		})
}

async function editStatusMsg (client, event) {

	const emoji = event.reaction
	const reactions = [event.item.channel, event.item.ts]

	if (!threadMem.has(reactions[1])) return false
	switch (emoji) {

		case 'eyes':
			await client.chat.update({
				channel: reactions[0],
				ts: reactions[1],
				attachments: ticketMsg(threadMem.get(reactions[1])[1], 'In progress 🛠'),
			})
		break

		case 'heavy_check_mark':
			await client.chat.update({
				channel: reactions[0],
				ts: reactions[1],
				attachments: ticketMsg(threadMem.get(reactions[1])[1], 'Close 🛑'),
			})
		break
	}
}


module.exports = { sendMsg, editStatusMsg }