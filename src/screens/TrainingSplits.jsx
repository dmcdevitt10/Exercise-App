import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import headerClasses from "../global-components/header.module.css";
import AuthContext from "../global-components/AuthContext";

const TrainingSplits = () => {
  const authCtx = useContext(AuthContext);
  const { userId } = useContext(AuthContext);
  const navigate = useNavigate();
  const [splits, setSplits] = useState();

  useEffect(() => {
    axios.get(`/api/getSplitsAndWorkouts/${userId}`).then((res) => {
      setSplits(res.data);
    });
  }, []);
  console.log(splits);
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
      <div>
        {splits?.map((split) => {
          return (
            <div>
              <div>
                <h2>{split.split_name}</h2>
                <h3>Sunday</h3>
                <h3>Monday</h3>
                <h3>Tuesday</h3>
                <h3>Wednesday</h3>
                <h3>Thursday</h3>
                <h3>Friday</h3>
                <h3>Saturday</h3>
              </div>
              <div>
                <h3>{split.sunday}</h3>
                <h3>{split.monday}</h3>
                <h3>{split.tuesday}</h3>
                <h3>{split.wednesday}</h3>
                <h3>{split.thursday}</h3>
                <h3>{split.friday}</h3>
                <h3>{split.saturday}</h3>
              </div>
              <div>
                {split.workouts_splits.map((association) => {
                  return (
                    <div>
                      <h2>{association.workout.workout_name}</h2>
                      <h3>{association.workout.exercise1}</h3>
                      <h3>{association.workout.exercise2}</h3>
                      <h3>{association.workout.exercise3}</h3>
                      <h3>{association.workout.exercise4}</h3>
                      <h3>{association.workout.exercise5}</h3>
                      <h3>{association.workout.exercise6}</h3>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrainingSplits;
