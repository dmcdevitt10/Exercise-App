const { Workout, setsReps, trainingSplit } = require("../util/models");
const { User } = require("../util/models");

module.exports = {
  getUserWorkouts: async (req, res) => {
    try {
      const { userId } = req.params;
      const workouts = await Workout.findAll({
        where: { userId: userId },
      });
      res.status(200).send(workouts);
    } catch (err) {
      console.log(err);
      res.status(400).send(`error with getUserWorkouts: ${err}`);
    }
  },
  getUserSetsReps: () => {},
  getUserTrainingSplits: () => {},
};
