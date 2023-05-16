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
  Workout: database.define("workout", {
    id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    workout_name: {
      type: DataTypes.STRING({ length: 50 }),
      allowNull: false,
    },
    exercise1: {
      type: DataTypes.STRING({ length: 50 }),
      allowNull: false,
    },
    exercise2: {
      type: DataTypes.STRING({ length: 50 }),
      allowNull: true,
    },
    exercise3: {
      type: DataTypes.STRING({ length: 50 }),
      allowNull: true,
    },
    exercise4: {
      type: DataTypes.STRING({ length: 50 }),
      allowNull: true,
    },
    exercise5: {
      type: DataTypes.STRING({ length: 50 }),
      allowNull: true,
    },
    exercise6: {
      type: DataTypes.STRING({ length: 50 }),
      allowNull: true,
    },
  }),
  setsReps: database.define("sets_reps", {
    id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    sets: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    reps: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }),
};
