import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import classes from "./Workouts.module.css";
import headerClasses from "../global-components/header.module.css";
import Header from "../global-components/Header";
import AuthContext from "../global-components/AuthContext";

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const [getWorkouts, setGetWorkouts] = useState(false);
  const [workoutsPage, setWorkoutsPage] = useState(true)
  const { userId } = useContext(AuthContext);
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/api/getUserWorkoutsAndSetsReps/${userId}`).then((res) => {
      setWorkouts(res.data);
    });
  }, [getWorkouts]);
  console.log(workouts);

  return (
    <div>
      <header className={headerClasses.header}>
        <nav>
          <ul>
            <li>
              <button onClick={() => navigate("/")}>Home</button>
            </li>
            <li>
              <button onClick={() => navigate("/exercises")}>Exercises</button>
            </li>
            <li>
              <button style={workoutsPage ? {color: "red"} : {color: "white"}} onClick={() => navigate("/workouts")}>Workouts</button>
            </li>
            <li>
              <button onClick={() => navigate("/training-splits")}>
                Training Splits
              </button>
            </li>
            <li>
              <button onClick={() => authCtx.logout()}>Logout</button>
            </li>
          </ul>
        </nav>
      </header>
      <div className={classes.workouts_container}>
        {workouts?.map((workout) => {
          return (
            <div className={classes.workout_card}>
              <div className={classes.name_container}>
                <h1>{workout.workout_name}</h1>
              </div>
              <div className={classes.exercises_container}>
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
                        setGetWorkouts(!getWorkouts);
                      })
                      .catch((err) => console.log(err));
                  }}
                >
                  Delete Workout
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Workouts;

{/* <div className={classes.workout_card}>
              <div className={classes.name_container}>
                <h3>{workout.workout_name}</h3>
              </div>
              <div className={classes.exercises_container}>
                <h3>{workout.exercise1}</h3>
                <h3>{workout.exercise2}</h3>
                <h3>{workout.exercise3}</h3>
                <h3>{workout.exercise4}</h3>
                <h3>{workout.exercise5}</h3>
                <h3>{workout.exercise6}</h3>
                <h3>{workout.sets_rep.sets}</h3>
                <h3>{workout.sets_rep.reps}</h3>
              </div>
              <button
                onClick={() => {
                  axios
                    .delete(`/api/deleteWorkout/${workout.id}`)
                    .then((res) => {
                      console.log(res.data);
                      setGetWorkouts(!getWorkouts);
                    })
                    .catch((err) => console.log(err));
                }}
              >
                Delete Workout
              </button>
            </div> */}
