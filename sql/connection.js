const mysql = require('mysql')

require("dotenv").config()

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating connection...')
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: process.env,
        user: process.env,
        password: process.env,
        database: process.env
      })

      return this.pool
    }

    return this.pool
  }
}

const instance = new Connection()

module.exports = instance;