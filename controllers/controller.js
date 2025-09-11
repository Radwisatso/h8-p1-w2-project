const Model = require("../models/model");

class Controller {
  static async showUsers(req, res) {
    try {
      const users = await Model.showUsers()
      res.send(users)
    } catch (error) {
      res.send(error)      
    }
  }
}

module.exports = Controller;
