require('dotenv').config();
const { Client } = require('pg')

const db = new Client({
    host : process.env.host,
    user : process.env.user,
    port : process.env.port,
    password : process.env.password,
    database : process.env.database,
    ssl : true
})

db.connect((err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('Database berhasil terkoneksi')
})

module.exports = db;