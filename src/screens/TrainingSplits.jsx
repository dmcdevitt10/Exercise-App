import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import headerClasses from "../global-components/header.module.css";
import classes from "./TrainingSplits.module.css";
import AuthContext from "../global-components/AuthContext";

const TrainingSplits = () => {
  const authCtx = useContext(AuthContext);
  const { userId } = useContext(AuthContext);
  const [splitsPage, setSplitsPage] = useState(true);
  const [getSplits, setGetSplits] = useState(false);
  const navigate = useNavigate();
  const [splits, setSplits] = useState();

  useEffect(() => {
    axios.get(`/api/getSplitsAndWorkouts/${userId}`).then((res) => {
      setSplits(res.data);
    });
  }, [getSplits]);
  console.log(splits);
  return (
    <div>
      <header className={headerClasses.header}>
        <nav>
          <ul>
            <li>
              <button onClick={() => navigate("/")}>Dashboard</button>
            </li>
            <li>
              <button onClick={() => navigate("/exercises")}>Exercises</button>
            </li>
            <li>
              <button onClick={() => navigate("/workouts")}>Workouts</button>
            </li>
            <li>
              <button
                style={splitsPage ? { color: "red" } : { color: "white" }}
                onClick={() => navigate("/training-splits")}
              >
                Training Splits
              </button>
            </li>
            <li>
              <button onClick={() => authCtx.logout()}>Logout</button>
            </li>
          </ul>
        </nav>
      </header>
      <div className={classes.splits_container}>
        <button
          className={classes.split_button}
          onClick={() => navigate("/add-split")}
        >
          Create New Split
        </button>
        {splits?.map((split) => {
          return (
            <div className={classes.split_card}>
              <div className={classes.split_name_container}>
                <h2>{split.split_name}</h2>
                <button
                  onClick={() => {
                    axios.delete(`/api/deleteSplit/${split.id}`);
                    setGetSplits(!getSplits);
                  }}
                >
                  Delete Split
                </button>
              </div>

              <div className={classes.days_container}>
                <div className={classes.info_container}>
                  <div className={classes.daydiv}>
                    <h4>Sunday</h4>
                  </div>

                  {split.sunday === "Rest Day" ? (
                    <div className={classes.namediv}>
                      <h3>Rest Day</h3>
                    </div>
                  ) : (
                    <div className={classes.name_workout_container}>
                      <div className={classes.namediv}>
                        <h3>{split.sunday}</h3>
                      </div>
                      <div className={classes.workoutdiv}>
                        <h4>
                          Workout:
                          {split.workouts_splits[0].workout.workout_name}
                        </h4>
                      </div>
                    </div>
                  )}
                </div>



                <div className={classes.info_container}>
                  <div className={classes.daydiv}>
                    <h4>Monday</h4>
                  </div>
                  {split.sunday === "Rest Day" ? (
                    <div className={classes.namediv}>
                      <h3>Rest Day</h3>
                    </div>
                  ) : (
                    <div className={classes.name_workout_container}>
                      <div className={classes.namediv}>
                        <h3>{split.monday}</h3>
                      </div>
                      <div className={classes.workoutdiv}>
                        <h4>
                          Workout:
                          {split.workouts_splits[1].workout.workout_name}
                        </h4>
                      </div>
                    </div>
                  )}
                </div>




                <div className={classes.info_container}>
                  <div className={classes.daydiv}>
                    <h4>Tuesday</h4>
                  </div>
                  {split.sunday === "Rest Day" ? (
                    <div className={classes.namediv}>
                      <h3>Rest Day</h3>
                    </div>
                  ) : (
                    <div className={classes.name_workout_container}>
                      <div className={classes.namediv}>
                        <h3>{split.tuesday}</h3>
                      </div>
                      <div className={classes.workoutdiv}>
                        <h4>
                          Workout:
                          {split.workouts_splits[2].workout.workout_name}
                        </h4>
                      </div>
                    </div>
                  )}
                </div>




                <div className={classes.info_container}>
                  <div className={classes.daydiv}>
                    <h4>WednesDay</h4>
                  </div>
                  {split.sunday === "Rest Day" ? (
                    <div className={classes.namediv}>
                      <h3>Rest Day</h3>
                    </div>
                  ) : (
                    <div className={classes.name_workout_container}>
                      <div className={classes.namediv}>
                        <h3>{split.wednesday}</h3>
                      </div>
                      <div className={classes.workoutdiv}>
                        <h4>
                          Workout:
                          {split.workouts_splits[3].workout.workout_name}
                        </h4>
                      </div>
                    </div>
                  )}
                </div>



                <div className={classes.info_container}>
                  <div className={classes.daydiv}>
                    <h4>Thursday</h4>
                  </div>
                  {split.sunday === "Rest Day" ? (
                    <div className={classes.namediv}>
                      <h3>Rest Day</h3>
                    </div>
                  ) : (
                    <div className={classes.name_workout_container}>
                      <div className={classes.namediv}>
                        <h3>{split.thursday}</h3>
                      </div>
                      <div className={classes.workoutdiv}>
                        <h4>
                          Workout:
                          {split.workouts_splits[4].workout.workout_name}
                        </h4>
                      </div>
                    </div>
                  )}
                </div>




                <div className={classes.info_container}>
                  <div className={classes.daydiv}>
                    <h4>Friday</h4>
                  </div>
                  {split.sunday === "Rest Day" ? (
                    <div className={classes.namediv}>
                      <h3>Rest Day</h3>
                    </div>
                  ) : (
                    <div className={classes.name_workout_container}>
                      <div className={classes.namediv}>
                        <h3>{split.friday}</h3>
                      </div>
                      <div className={classes.workoutdiv}>
                        <h4>
                          Workout:
                          {split.workouts_splits[5].workout.workout_name}
                        </h4>
                      </div>
                    </div>
                  )}
                </div>



                <div className={classes.info_container}>
                  <div className={classes.daydiv}>
                    <h4>Saturday</h4>
                  </div>
                  {split.sunday === "Rest Day" ? (
                    <div className={classes.namediv}>
                      <h3>Rest Day</h3>
                    </div>
                  ) : (
                    <div className={classes.name_workout_container}>
                      <div className={classes.namediv}>
                        <h3>{split.saturday}</h3>
                      </div>
                      <div className={classes.workoutdiv}>
                        <h4>
                          Workout:
                          {split.workouts_splits[6].workout.workout_name}
                        </h4>
                      </div>
                    </div>
                  )}
                </div>



              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrainingSplits;
