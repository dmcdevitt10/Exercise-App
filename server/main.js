require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { PORT } = process.env;
const { database } = require("./util/database");
const {User, Workout, setsReps, trainingSplit} = require('./util/models')
const {register, login} = require('./controllers.js/auth')
const {addWorkout, addSetsReps, addTrainingSplit, addExercise} = require('./controllers.js/create')
const {getUserWorkouts, getUserSetsReps, getUserTrainingSplits, getExercises} = require('./controllers.js/get')

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
app.post('/api/login', login)

app.post('/api/addWorkout', addWorkout)
app.get('/api/getUserWorkouts/:userId', getUserWorkouts)

app.post('/api/addSetsReps', addSetsReps)
app.get ('/api/getWorkoutSetsReps/:workoutId', getUserSetsReps)

app.post('/api/addTrainingSplit', addTrainingSplit)
app.get('/api/getUserTrainingSplits/:userId', getUserTrainingSplits)

app.post('/api/addExercise', addExercise)
app.get('/api/getExercises', getExercises)

database.sync(/*{ force: true }*/).then(() => {
  app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`);
  });
});
