const dotenv = require("dotenv");
const path = require("path");

dotenv.config({
  path: path.resolve(__dirname, "../" + process.env.NODE_ENV + ".env"),
});

module.exports = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  dialectOptions: JSON.parse(process.env.DB_DIALECT_OPTIONS),
  port: process.env.DB_PORT || 3307,
};
