const {
  Workout,
  setsReps,
  trainingSplit,
  Exercise,
  WorkoutSplit
} = require("../util/models");

module.exports = {
  deleteWorkout: async (req, res) => {
    try {
      const { workoutId } = req.params;
      await Workout.destroy({ where: { id: workoutId } });
      res.status(200).send("workout deleted");
    } catch (err) {
      console.log(err);
      res.status(400).send(`error with deleteWorkout: ${err}`);
    }
  },
  deleteSplit: async (req, res) => {
    try {
      const { splitId } = req.params;
      await WorkoutSplit.destroy({ where: { trainingSplitId: splitId } });
      await trainingSplit.destroy({ where: { id: splitId } });
      res.status(200).send("split deleted");
    } catch (err) {
      console.log(err);
      res.status(400).send(`error with deleteSplit: ${err}`);
    }
  },
};
