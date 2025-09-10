const Controller = require("./controllers/controller")

const arguments = process.argv.slice(2)
const command = arguments[0]

switch (command) {
    case 'showUsers': {
        Controller.showUsers()
        break
    }
}