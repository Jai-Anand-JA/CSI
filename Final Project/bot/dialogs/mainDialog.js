const { ActivityHandler } = require('botbuilder')

class MainDialog extends ActivityHandler {
  constructor() {
    super()
    this.onMessage(async (context, next) => {
      const text = context.activity.text.toLowerCase()
      if (text.includes('restaurant')) {
        await context.sendActivity("Explore restaurants via our /api/restaurants API.")
      } else if (text.includes('menu')) {
        await context.sendActivity("Menus are at /api/restaurants/:id/menu.")
      } else if (text.includes('reservation')) {
        await context.sendActivity("You can create reservations via /api/reservations.")
      } else {
        await context.sendActivity(`You said: ${context.activity.text}`)
      }
      await next()
    })
    this.onMembersAdded(async (context, next) => {
      await context.sendActivity("Hello! I'm your restaurant assistant bot 🤖")
      await next()
    })
  }
}

module.exports = MainDialog
