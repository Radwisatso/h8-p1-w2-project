const Controller = require('../controllers/controller')
const route = require('express').Router()

route.get("/", Controller.showUsers) // tidak diinvoke

module.exports = route