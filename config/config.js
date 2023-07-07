require('dotenv').config();

const {
  DB_UNAME,
  DB_PASS,
  DB_HOST,
  DB_NAME,
  DB_DIALECT,
} = process.env;

module.exports = 
{
  "development": {
    "username": DB_UNAME,
    "password": DB_PASS,
    "database": DB_NAME,
    "host": DB_HOST,
    "dialect": DB_DIALECT
  },
  "test": {
    "username": DB_UNAME,
    "password": DB_PASS,
    "database": DB_NAME,
    "host": DB_HOST,
    "dialect": DB_DIALECT
  },
  "production": {
    "username": DB_UNAME,
    "password": DB_PASS,
    "database": DB_NAME,
    "host": DB_HOST,
    "dialect": DB_DIALECT
  }
}
