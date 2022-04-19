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
					"text": "Problem description",
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
					"text": "STR",
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
					"text": "STP",
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
					"text": "Other info",
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
	}
}