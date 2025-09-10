class View {
    static printError(error) {
        console.log(error)
    }

    static showUsers(users) {
        console.table(users)
    }
}

module.exports = View