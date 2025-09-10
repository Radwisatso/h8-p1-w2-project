const Model = require("../models/model");
const View = require("../views/view");

class Controller {
  static async showUsers() {
    try {
      const users = await Model.showUsers();
      View.showUsers(users)
    } catch (error) {
      View.printError(error)
    }
  }
}

module.exports = Controller;
