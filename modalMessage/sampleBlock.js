module.exports = {
	ticket: {
		type: 'modal',
		callback_id: 'ticketModal',
		title: {
			"type": "plain_text",
			"text": "Ticket Create",
			"emoji": true
		},
		blocks: [
			{
				"type": "section",
				"text": {
					"type": "mrkdwn",
					"text": "Создание обращения для QA"
				}
			},
			{
				"type": "divider"
			},
			{
				"type": "context",
				"elements": [
					{
						"type": "plain_text",
						"text": "Выбери нужные канал",
						"emoji": true
					}
				]
			},
			{
				"type": "actions",
				"elements": [
					{
						"type": "channels_select",
						"placeholder": {
							"type": "plain_text",
							"text": "Select a channel",
							"emoji": true
						},
						"initial_channel": "C12345678",
						"action_id": "actionId-2"
					}
				]
			},
			{
				"type": "input",
				"element": {
					"type": "plain_text_input",
					"action_id": "plain_text_input-action"
				},
				"label": {
					"type": "plain_text",
					"text": "ID Student",
					"emoji": true
				}
			},
			{
				"type": "input",
				"element": {
					"type": "plain_text_input",
					"action_id": "plain_text_input-action"
				},
				"label": {
					"type": "plain_text",
					"text": "ID Teacher",
					"emoji": true
				}
			},
			{
				"type": "input",
				"element": {
					"type": "plain_text_input",
					"multiline": true,
					"action_id": "plain_text_input-action"
				},
				"label": {
					"type": "plain_text",
					"text": ":one: Описание проблемы",
					"emoji": true
				}
			},
			{
				"type": "input",
				"element": {
					"type": "plain_text_input",
					"multiline": true,
					"action_id": "plain_text_input-action"
				},
				"label": {
					"type": "plain_text",
					"text": ":two: Step To Record",
					"emoji": true
				}
			},
			{
				"type": "input",
				"element": {
					"type": "plain_text_input",
					"multiline": true,
					"action_id": "plain_text_input-action"
				},
				"label": {
					"type": "plain_text",
					"text": ":four: Фактическое поведение",
					"emoji": true
				}
			},
			{
				"type": "input",
				"element": {
					"type": "plain_text_input",
					"action_id": "plain_text_input-action"
				},
				"label": {
					"type": "plain_text",
					"text": ":five: Ожидаемое поведение",
					"emoji": true
				}
			}
		],
		close: {
			"type": "plain_text",
			"text": "Cancel",
			"emoji": true
		},
		submit: {
			"type": "plain_text",
			"text": "Submit",
			"emoji": true
		},
	},
	ticketMsg: (userName, userInput) => [
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": `Обращения для QA 💻 -> @${userName}`
			}
		},
		{
			"type": "divider"
		},
		{
			"type": "section",
			"text": {
				"type": "plain_text",
				"text": `:one: Описание проблемы\n${userInput[3]}`,
				"emoji": true
			}
		},
		{
			"type": "section",
			"text": {
				"type": "plain_text",
				"text": `:two: Step To Record\n${userInput[4]}`,
				"emoji": true
			}
		},
		{
			"type": "section",
			"text": {
				"type": "plain_text",
				"text": `:four: Фактическое поведение\n${userInput[5]}`,
				"emoji": true
			}
		},
		{
			"type": "section",
			"text": {
				"type": "plain_text",
				"text": `:five: Ожидаемое поведение\n${userInput[6]}`,
				"emoji": true
			}
		},
		{
			"type": "section",
			"text": {
				"type": "plain_text",
				"text": `:six: Дополнительная информация\nID1: ${userInput[1]} || ID2 ${userInput[2]}`,
				"emoji": true
			}
		}
	],
}