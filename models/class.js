class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

class Post {
  constructor(id, title, createdAt, UserId) {
    this.id = id;
    this.title = title;
    this.createdAt = createdAt;
    this.UserId = UserId;
  }
}

class PostAuthor extends Post {
  constructor(id, title, createdAt, UserId, author, authorEmail) {
    super(id, title, createdAt, UserId);
    this.author = author;
    this.authorEmail = authorEmail;
  }

  formatDate() {
    // bikin di sini
    // yyyy-mm-dd
    return '2025-09-11'
  }
}

module.exports = { User, Post, PostAuthor };
