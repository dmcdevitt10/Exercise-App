const { database } = require("./database");
const { DataTypes } = require("sequelize");

module.exports = {
  User: database.define("user", {
    id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    username: {
      type: DataTypes.STRING({ length: 20 }),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING({ length: 50 }),
      allowNull: false,
    },
  }),
};
