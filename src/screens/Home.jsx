import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import classes from "./Home.module.css";
import headerClasses from "../global-components/header.module.css";

import AuthContext from "../global-components/AuthContext";

const Home = () => {
  const authCtx = useContext(AuthContext);
  const { userId } = useContext(AuthContext);
  const [homePage, setHomePage] = useState(true);
  const navigate = useNavigate();

  const [workouts, setWorkouts] = useState([]);

  const [currentWorkout, setCurrentWorkout] = useState("");
  const [currentSplit, setCurrentSplit] = useState("");

  const [splits, setSplits] = useState([]);

  useEffect(() => {
    axios.get(`/api/getUserWorkouts/${userId}`).then((res) => {
      setWorkouts([
        res.data[res.data.length - 1],
        res.data[res.data.length - 2],
        res.data[res.data.length - 3],
      ]);
      setCurrentWorkout(res.data[res.data.length - 1].workout_name);
    });
    axios.get(`/api/getSplitsAndWorkouts/${userId}`).then((res) => {
      setSplits([
        res.data[res.data.length - 1],
        res.data[res.data.length - 2],
        res.data[res.data.length - 3],
      ]);
      setCurrentSplit(res.data[res.data.length - 1].split_name);
    });
  }, []);

  console.log(workouts, splits);

  const workoutsDisplay = workouts
    ?.filter((workout) => {
      return workout.workout_name === currentWorkout;
    })
    .map((workout) => {
      return (
        <div className={classes.middle_div}>
          <h3>{workout.exercise1}</h3>
          <h3>{workout.exercise2}</h3>
          <h3>{workout.exercise3}</h3>
          <h3>{workout.exercise4}</h3>
          <h3>{workout.exercise5}</h3>
          <h3>{workout.exercise6}</h3>
        </div>
      );
    });

  const splitsDisplay = splits
    ?.filter((split) => {
      return split.split_name === currentSplit;
    })
    .map((split) => {
      return (
        <div className={classes.middle_div}>
          <h3>{split.sunday}</h3>
          <h3>{split.monday}</h3>
          <h3>{split.tuesday}</h3>
          <h3>{split.wednesday}</h3>
          <h3>{split.thursday}</h3>
          <h3>{split.friday}</h3>
          <h3>{split.saturday}</h3>
        </div>
      );
    });

  return (
    <div>
      <header className={headerClasses.header}>
        <nav>
          <ul>
            <li>
              <button
                style={homePage ? { color: "red" } : { color: "white" }}
                onClick={() => navigate("/")}
              >
                Dashboard
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/exercises")}>Exercises</button>
            </li>
            <li>
              <button onClick={() => navigate("/workouts")}>Workouts</button>
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
      <div className={classes.dashboard_container}>
        <div className={classes.info_container}>
          <div className={classes.recentdiv}>
            <h1>Recently Added Workouts</h1>
          </div>
          <div className={classes.namesdiv}>
            {workouts?.map((workout) => {
              return (
                <h2 onClick={() => setCurrentWorkout(workout.workout_name)}>
                  {workout.workout_name}
                </h2>
              );
            })}
          </div>

          {workouts ? workoutsDisplay : null}

          <div className={classes.btndiv}>
            <button>View All Workouts</button>
          </div>
        </div>
        <div className={classes.info_container}>
          <div className={classes.recentdiv}>
            <h1>Recently Added Training Splits</h1>
          </div>
          <div className={classes.namesdiv}>
            {splits?.map((split) => {
              return (
                <h2 onClick={() => setCurrentSplit(split.split_name)}>
                  {split.split_name}
                </h2>
              );
            })}
          </div>

          {splits ? splitsDisplay : null}

          {/* <div>{splits ? splitsDisplay : null}</div> */}

          <div className={classes.btndiv}>
            <button>View All Training Splits</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
