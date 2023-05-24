import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

import classes from "./Workouts.module.css";
import AuthContext from "../global-components/AuthContext";

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const { userId } = useContext(AuthContext);

  useEffect(() => {
    axios.get(`/api/getUserWorkoutsAndSetsReps/${userId}`).then((res) => {
      setWorkouts(res.data);
    });
  }, []);
  console.log(workouts);

  return (
    <div className={classes.workouts_container}>
      {workouts?.map((workout) => {
        return (
          <div>
            <h3>{workout.exercise1}</h3>
            <h3>{workout.exercise2}</h3>
            <h3>{workout.exercise3}</h3>
            <h3>{workout.exercise4}</h3>
            <h3>{workout.exercise5}</h3>
            <h3>{workout.exercise6}</h3>
            <h3>{workout.sets_rep.sets}</h3>
            <h3>{workout.sets_rep.reps}</h3>
            <button
              onClick={() => {
                axios
                  .delete(`/api/deleteWorkout/${workout.id}`)
                  .then((res) => {
                    console.log(res.data);
                  })
                  .catch((err) => console.log(err));
              }}
            >
              Delete Workout
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Workouts;
