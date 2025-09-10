const pool = require("../database/config")
const { User } = require("./class")

class Model {
    static async showUsers() {
        try {
            const { rows: users } = await pool.query(`SELECT * FROM "Users"`)
            const result = users.map(user => {
                return new User(user.id, user.name, user.email)
            })
            return result
        } catch (error) {
            throw error
        }
    }
}

module.exports = Model