const restify = require('restify')
const { BotFrameworkAdapter } = require('botbuilder')
const MainDialog = require('./dialogs/mainDialog')
require('dotenv').config()

const server = restify.createServer()
server.listen(3978, () => console.log(`Bot listening on port 3978`))

const adapter = new BotFrameworkAdapter({
  appId: process.env.MICROSOFT_APP_ID || '',
  appPassword: process.env.MICROSOFT_APP_PASSWORD || ''
})

const bot = new MainDialog()

server.post('/api/messages', async (req, res) => {
  await adapter.processActivity(req, res, async (context) => {
    await bot.run(context)
  })
})
