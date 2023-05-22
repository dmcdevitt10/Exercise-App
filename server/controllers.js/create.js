const { Workout, setsReps, trainingSplit, Exercise } = require("../util/models");

module.exports = {
  addWorkout: async (req, res) => {
    try {
      const {
        workout_name,
        exercise1,
        exercise2,
        exercise3,
        exercise4,
        exercise5,
        exercise6,
        userId,
      } = req.body;
      await Workout.create({
        workout_name,
        exercise1,
        exercise2,
        exercise3,
        exercise4,
        exercise5,
        exercise6,
        userId,
      });
      res.status(200).send('Workout created')
    } catch (err) {
      console.log(err);
      res.status(400).send(`error with addWorkout: ${err}`);
    }
  },
  addSetsReps: async (req, res) => {
    try {
        const {sets, reps, workoutId} = req.body
        await setsReps.create({sets, reps, workoutId})
        res.status(200).send('setsReps created')
    } catch (err) {
      console.log(err);
      res.status(400).send(`error with addSetsRep: ${err}`);
    }
  },
  addTrainingSplit: async (req, res) => {
    try {
        const {split_name, sunday, monday, tuesday, wednesday, thursday, friday, saturday, userId} = req.body
        await trainingSplit.create({split_name, sunday, monday, tuesday, wednesday, thursday, friday, saturday, userId})
        res.status(200).send('trainingSplit created')
    } catch (err) {
      console.log(err);
      res.status(400).send(`error with addTrainingSplit: ${err}`);
    }
  },
  addExercise: async (req, res) => {
    try {
      const {bodyPart, equipment, gifUrl, exerciseId, name, target} = req.body
      await Exercise.create({bodyPart, equipment, gifUrl, exerciseId, name, target})
      res.status(200).send('exercise created')
    } catch (err) {
      console.log(err);
      res.status(400).send(`error with addExercise: ${err}`);
    }
  }
};
