const { Workout, setsReps, trainingSplit, Exercise } = require("../util/models");
const { User } = require("../util/models");

module.exports = {
  getUserWorkouts: async (req, res) => {
    try {
      const { userId } = req.params;
      const workouts = await Workout.findAll({
        where: { userId },
      });
      res.status(200).send(workouts);
    } catch (err) {
      console.log(err);
      res.status(400).send(`error with getUserWorkouts: ${err}`);
    }
  },
  getUserSetsReps: async (req, res) => {
    try {
      const { workoutId } = req.params;
      const setsAndReps = await setsReps.findAll({
        where: { workoutId },
      });
      res.status(200).send(setsAndReps);
    } catch (err) {
      console.log(err);
      res.status(400).send(`error with getUserSetsReps: ${err}`);
    }
  },
  getUserTrainingSplits: async (req, res) => {
    try {
      const { userId } = req.params;
      const trainingSplits = await trainingSplit.findAll({
        where: { userId },
      });
      res.status(200).send(trainingSplits)
    } catch (err) {
      console.log(err);
      res.status(400).send(`error with getTrainingSplits: ${err}`);
    }
  },
  getExercises: async (req, res) => {
    try {
      const exercises = await Exercise.findAll()
      res.status(200).send(exercises)
    } catch (err) {
      console.log(err);
      res.status(400).send(`error with getExercises: ${err}`);
    }
  }
};
