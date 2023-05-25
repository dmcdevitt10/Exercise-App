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
      type: DataTypes.STRING({ length: 300 }),
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
  trainingSplit: database.define("training_split", {
    id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    split_name: {
      type: DataTypes.STRING({ length: 50 }),
      allowNull: false,
    },
    sunday: {
      type: DataTypes.STRING({ length: 50 }),
      allowNull: false,
    },
    monday: {
      type: DataTypes.STRING({ length: 50 }),
      allowNull: false,
    },
    tuesday: {
      type: DataTypes.STRING({ length: 50 }),
      allowNull: false,
    },
    wednesday: {
      type: DataTypes.STRING({ length: 50 }),
      allowNull: false,
    },
    thursday: {
      type: DataTypes.STRING({ length: 50 }),
      allowNull: false,
    },
    friday: {
      type: DataTypes.STRING({ length: 50 }),
      allowNull: false,
    },
    saturday: {
      type: DataTypes.STRING({ length: 50 }),
      allowNull: false,
    },
  }),
  Exercise: database.define("exercise", {
    id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    bodyPart: {
      type: DataTypes.STRING({ length: 400 }),
      allowNull: true,
    },
    equipment: {
      type: DataTypes.STRING({ length: 400 }),
      allowNull: true,
    },
    gifUrl: {
      type: DataTypes.STRING({ length: 400 }),
    },
    exerciseId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING({ length: 400 }),
      allowNull: true,
    },
    target: {
      type: DataTypes.STRING({ length: 400 }),
      allowNull: true,
    },
  }),
  WorkoutSplit: database.define("workouts_split", {
    id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
  })
};
