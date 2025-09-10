const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    user: 'radwisatso', // postgres
    password: 'postgres',
    port: '5432',
    database: 'BSD-28',
    idleTimeoutMillis: 1000
})

module.exports = pool