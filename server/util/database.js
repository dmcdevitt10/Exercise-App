require("dotenv").config();

const Sequelize = require("sequelize");
const { CONNECTION_URL } = process.env;

module.exports = {
  database: new Sequelize(CONNECTION_URL, {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }),
};
