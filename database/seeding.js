const pool = require("./config");
const fs = require('fs').promises

async function seeding() {
    try {
        /*
        1. Mendapatkan data json nya dulu dan sudah di parsed
        2. Mengubah data nya menjadi query INSERT
        3. Setelah itu, jalankan pool query nya
        */

        const userJson = JSON.parse(await fs.readFile('./data/users.json', 'utf-8'))

        let userQuery = `INSERT INTO "Users" (name, email) VALUES \n`
        const usersData = userJson.map(user => {
            return `('${user.name}', '${user.email}')`
        }).join(", \n")
        userQuery += usersData

        await pool.query(userQuery)
        console.log('Successfully insert Users')
        /*
        INSERT INTO "Users" (name, email)
        VALUES
        ('Raditya', 'radit@mail.com'),
        ('Ersapta', 'ersapta@mail.com')
        */

        const postJson = JSON.parse(await fs.readFile('./data/posts.json', 'utf-8'))
        
        let postQuery = `INSERT INTO "Posts" (title, "createdAt", "UserId") VALUES \n`
        const postsData = postJson.map(post => {
            return `('${post.title}', '${post.createdAt}', ${post.UserId})`
        }).join(", \n")
        postQuery += postsData
        await pool.query(postQuery)
        console.log('Successfully insert Posts')
        
    } catch (error) {
        console.log(error)
    }
}

seeding()