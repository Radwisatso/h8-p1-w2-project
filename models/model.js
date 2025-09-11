const pool = require("../database/config");
const { User, PostAuthor } = require("./class");

class Model {
  static async showUsers() {
    try {
      const { rows: users } = await pool.query(`SELECT * FROM "Users"`);
      const result = users.map((user) => {
        return new User(user.id, user.name, user.email);
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async showPosts(keyword) {
    try {
      let postsQuery = `
                select p.id, p.title, p."createdAt", p."UserId", u.name as author, u.email as "authorEmail" 
                from "Posts" p
                join "Users" u on u.id = p."UserId" 
            `;
        if (keyword) {
            postsQuery += `where p.title ilike '%${keyword}%'`
        }
      const { rows: posts } = await pool.query(postsQuery);
      const result = posts.map((p) => {
        return new PostAuthor(
          p.id,
          p.title,
          p.createdAt,
          p.UserId,
          p.author,
          p.authorEmail
        );
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async showPostById(id) {
    try {
      const query = `
        select p.id, p.title, p."createdAt", p."UserId", u.name as author, u.email as "authorEmail" 
        from "Posts" p
        join "Users" u on u.id = p."UserId"
        where p.id = $1
    `;
      const { rows: posts } = await pool.query(query, [id]);
      const {
        id: postId,
        title,
        createdAt,
        UserId,
        author,
        authorEmail,
      } = posts[0];
      const instance = new PostAuthor(
        postId,
        title,
        createdAt,
        UserId,
        author,
        authorEmail
      );
      return instance;
    } catch (error) {
      throw error;
    }
  }

  static async addPost(title, createdAt, UserId) {
    try {
      const query = `
            insert into "Posts" (title, "createdAt", "UserId")
            values ($1, $2, $3)`;

      await pool.query(query, [title, createdAt, UserId]);
    } catch (error) {
      throw error;
    }
  }

  static async deletePost(id) {
    try {
      const query = `delete from "Posts" where id = $1`;
      await pool.query(query, [id]);
    } catch (error) {
      throw error;
    }
  }

  static async updatePost(postId, title, createdAt, UserId) {
    try {
      const query = `
            update "Posts" 
            set title = $1,
                "createdAt" = $2,
                "UserId" = $3
            where id = $4
        `;
      await pool.query(query, [title, createdAt, UserId, postId]);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Model;
