const {
  Workout,
  setsReps,
  trainingSplit,
  Exercise,
  WorkoutSplit,
} = require("../util/models");

module.exports = {
  updateWorkout: async (req, res) => {
    try {
      const { workoutsSplitId } = req.body;
      await Workout.update(
        {
          workoutsSplitId,
        },
        {
          where: { id: 12 },
        }
      );
      res.status(200).send("workout updated");
    } catch (err) {
      console.log(err);
      res.status(400).send(`error with updateWorkout: ${err}`);
    }
  },
};
