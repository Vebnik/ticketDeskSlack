const { App } = require('@slack/bolt')
const { AppStart } = require('./appStart/startLogic')
const app = new App({
	token: process.env.BOT_TOKEN,
	appToken: process.env.APP_TOKEN,
	signingSecret: process.env.SIGNING,
	port: process.env.PORT,
	socketMode: true,
	scopes: ['reactions:read']
})
const start = new AppStart(app)


start.login()
start.eventHandler()