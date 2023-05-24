const { Workout, setsReps, trainingSplit, Exercise } = require("../util/models");

module.exports = {
    deleteWorkout: async (req, res) => {
        try {
            const {workoutId} = req.params
            await Workout.destroy({where: {id: workoutId}})
            res.status(200).send('workout deleted')
        } catch (err) {
            console.log(err);
      res.status(400).send(`error with deleteWorkout: ${err}`);
        }
    }
}