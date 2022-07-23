require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.MYSQL_USER,
    "password": process.env.PASSWORD,
    "database": process.env.MYSQL_DB_NAME,
    "host": process.env.MYSQL_HOST,
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.MYSQL_USER,
    "password": process.env.PASSWORD,
    "database": process.env.MYSQL_DB_NAME,
    "host": process.env.MYSQL_HOST,
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.MYSQL_USER,
    "password": process.env.PASSWORD,
    "database": process.env.MYSQL_DB_NAME,
    "host": process.env.MYSQL_HOST,
    "dialect": "mysql"
  }
}
