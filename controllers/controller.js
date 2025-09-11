const Model = require("../models/model");

class Controller {
  static async showUsers(req, res) {
    try {
      const users = await Model.showUsers();
      res.render("index.ejs", { users: users });
    } catch (error) {
      res.send(error);
    }
  }

  static async showPosts(req, res) {
    try {
      const { keyword } = req.query
      const postAuthors = await Model.showPosts(keyword);
      res.render("posts", { posts: postAuthors });
    } catch (error) {
      res.send(error);
    }
  }

  static async showAddPost(req, res) {
    try {
      const users = await Model.showUsers();
      res.render("add-post", { authors: users });
    } catch (error) {
      res.send(error);
    }
  }

  static async addPost(req, res) {
    try {
      const { title, createdAt, UserId } = req.body;
      await Model.addPost(title, createdAt, UserId);
      res.redirect("/posts")
    } catch (error) {
      res.send(error);
    }
  }

  static async deletePost(req, res) {
    try {
      const { id } = req.params
      await Model.deletePost(+id)
      res.redirect("/posts")
    } catch (error) {
      res.send(error)
    }
  }

  static async showUpdatePost(req, res) {
    try {
      const { id } = req.params
      const postById = await Model.showPostById(+id)
      const users = await Model.showUsers()
      res.render("update-post", { post: postById, authors: users })
    } catch (error) {
      res.send(error)
    }
  }

  static async updatePost(req, res) {
    try {
      const { id } = req.params
      const { title, createdAt, UserId } = req.body
      await Model.updatePost(+id, title, createdAt, +UserId)
      res.redirect("/posts")
    } catch (error) {
      res.send(error)
    }
  }
}

module.exports = Controller;
