const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    database: 'issue_form',
    user: 'kibru',
    password: 'free'
})

module.exports = pool