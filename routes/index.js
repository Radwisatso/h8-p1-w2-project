const Controller = require('../controllers/controller')
const route = require('express').Router()

route.get("/", Controller.showUsers) // tidak diinvoke
route.get("/posts", Controller.showPosts)
route.get("/posts/add", Controller.showAddPost)
route.post("/posts/add", Controller.addPost)
route.get("/posts/delete/:id", Controller.deletePost)
route.get("/posts/update/:id", Controller.showUpdatePost)
route.post("/posts/update/:id", Controller.updatePost)

module.exports = route