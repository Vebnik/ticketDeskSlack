const { ticketMsg } = require('../modalMessage/sampleBlock')


async function sendMsg (client, body, view) {

	const userName = `${body.user.name}`
	const userInputs = Object.values(view.state.values).map(el => Object.values(el)).map(el => Object.entries(...el)[1]).map(el => el[1])

	await client.chat.postMessage({
		channel: userInputs[0],
		blocks: ticketMsg(userName, userInputs)
	})
}


module.exports = { sendMsg }