module.exports = {
	ticket: () => [{
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
					"text": "Create ticket"
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
						"text": "Pick right channel",
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
					"text": "ID User 1",
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
					"text": "ID User 2",
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
					"text": ":one: Description of the problem",
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
					"text": ":four: Actual Behavior",
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
					"text": ":five: Expected Behavior",
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
	}],
	resendTicket: (threadTs) => [{
		type: 'modal',
		callback_id: 'ticketReModal',
		title: {
			"type": "plain_text",
			"text": "Ticket Resend",
			"emoji": true
		},
		blocks: [
			{
				"type": "section",
				"text": {
					"type": "mrkdwn",
					"text": "Redirect ticket"
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
						"text": "Pick right channel",
						"emoji": true
					},
					{
						"type": "plain_text",
						"text": `Current thread - ${threadTs}`,
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
	}],
	testAttachment: (userName) => [
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": `Обращения для QA 💻 -> @${userName}`
			}
		},
	],
	ticketReply: (userInput) => [
		{
			"type": "divider"
		},
		{
			"type": "section",
			"text": {
				"type": "plain_text",
				"text": `:one: Description of the problem\n${userInput[3]}`,
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
				"text": `:three: Actual Behavior\n${userInput[5]}`,
				"emoji": true
			}
		},
		{
			"type": "section",
			"text": {
				"type": "plain_text",
				"text": `:four: Expected Behavior\n${userInput[6]}`,
				"emoji": true
			}
		},
		{
			"type": "section",
			"text": {
				"type": "plain_text",
				"text": `:five: Additional Information\nID1: ${userInput[1]} || ID2 ${userInput[2]}`,
				"emoji": true
			}
		},
		{
			"type": "divider"
		},
	],
	ticketMsg: (userName, status) => [
		{
			"color": "#255eb4",
			"blocks": [
				{
					"type": "section",
					"text": {
						"type": "mrkdwn",
						"text": `Problem case  ➡  @${userName}`
					}
				},
				{
					"type": "section",
					"text": {
						"type": "plain_text",
						"text": `Status  ➡  ${status}`,
						"emoji": true
					}
				}
			]
		}
	],
	ticketReSend: (userName) => [
		{
			"color": "#255eb4",
			"blocks": [
				{
					"type": "section",
					"text": {
						"type": "mrkdwn",
						"text": `<@${userName}>  ➡  Resend this ticket in other channel `
					},
					"accessory": {
						"type": "button",
						"text": {
							"type": "plain_text",
							"text": "Redirect",
							"emoji": true
						},
						"style": "primary",
						"value": "redirect",
						"action_id": "buttonRedirect"
					}
				}
			]
		}
	],
}
