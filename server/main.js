require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { PORT } = process.env;
const { database } = require("./util/database");
const {User, Workout, setsReps, trainingSplit} = require('./util/models')
const {register} = require('./controllers.js/auth')
const {addWorkout, addSetsReps, addTrainingSplit} = require('./controllers.js/create')

const app = express();
app.use(express.json());
app.use(cors());

User.hasMany(Workout)
Workout.belongsTo(User)

Workout.hasOne(setsReps)
setsReps.belongsTo(Workout)

User.hasMany(trainingSplit)
trainingSplit.belongsTo(User)

app.post('/api/register', register)

app.post('/api/add-workout', addWorkout)
app.post('/api/add-setsReps', addSetsReps)
app.post('/api/add-trainingSplit', addTrainingSplit)

database.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`);
  });
});
