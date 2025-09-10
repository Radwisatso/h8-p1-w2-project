const pool = require("./config");

async function migrate() {
  try {
    await pool.query('drop table if exists "Users", "Posts"');
    console.log("All table has been dropped");

    const userTable = `
    create table if not exists "Users" (
        id serial primary key,
        name varchar not null,
        email varchar unique not null
    );
    `;
    await pool.query(userTable);
    console.log('Successfully create table "Users"');

    const postTable = `
    create table if not exists "Posts" (
        id serial primary key,
        title varchar(100) not null,
        "createdAt" date not null,
        "UserId" integer references "Users"(id)
    );
    `;

    await pool.query(postTable);
    console.log('Successfully create table "Posts"');
  } catch (error) {
    console.log(error)
  }
}

migrate();
