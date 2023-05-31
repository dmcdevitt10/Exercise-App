import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import headerClasses from "../global-components/header.module.css";
import {BiArrowBack} from 'react-icons/bi'

import classes from "./AddSplit.module.css";
import AuthContext from "../global-components/AuthContext";

const AddSplit = () => {
  const authCtx = useContext(AuthContext);
  const { userId } = useContext(AuthContext);
  const [workouts, setWorkouts] = useState([]);
  const navigate = useNavigate();

  const splitNameRef = useRef();
  const sundayRef = useRef();
  const mondayRef = useRef();
  const tuesdayRef = useRef();
  const wednesdayRef = useRef();
  const thurdayRef = useRef();
  const fridayRef = useRef();
  const saturdayRef = useRef();

  const sundayWorkoutRef = useRef();
  const mondayWorkoutRef = useRef();
  const tuesdayWorkoutRef = useRef();
  const wednesdayWorkoutRef = useRef();
  const thursdayWorkoutRef = useRef();
  const fridayWorkoutRef = useRef();
  const saturdayWorkoutRef = useRef();

  useEffect(() => {
    // axios.get(`/api/getSplitsAndWorkouts/${userId}`).then((res) => {
    //   console.log(res.data);
    // });
    axios.get(`/api/getUserWorkouts/${userId}`).then((res) => {
      setWorkouts(res.data);
    });
  }, []);

  const submitTrainingSplit = (e) => {
    e.preventDefault();
    let splitBody = {
      split_name: splitNameRef.current.value,
      sunday: sundayRef.current.value,
      monday: mondayRef.current.value,
      tuesday: tuesdayRef.current.value,
      wednesday: wednesdayRef.current.value,
      thursday: thurdayRef.current.value,
      friday: fridayRef.current.value,
      saturday: saturdayRef.current.value,
      userId,
    };
    axios
      .post("/api/addTrainingSplit", splitBody)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));

    setTimeout(() => {
      axios.get(`/api/getUserTrainingSplits/${userId}`).then((res) => {
        let workoutRefsArr = [
          sundayWorkoutRef.current.value,
          mondayWorkoutRef.current.value,
          tuesdayWorkoutRef.current.value,
          wednesdayWorkoutRef.current.value,
          thursdayWorkoutRef.current.value,
          fridayWorkoutRef.current.value,
          saturdayWorkoutRef.current.value,
        ];

        for (let i = 0; i < workoutRefsArr.length; i++) {
          let workoutSplitBody = {
            workoutId: workoutRefsArr[i],
            trainingSplitId: res.data[res.data.length - 1].id,
          };
          axios.post("/api/addWorkoutSplit", workoutSplitBody).then((res) => {
            console.log(res.data);
          });
        }
      });
    }, 1000);

    navigate("/training-splits");
  };

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

      <button className={classes.goback} onClick={() => navigate("/training-splits")}>Back</button>
      <div className={classes.form_container}>
        <form className={classes.form} onSubmit={submitTrainingSplit}>
          <div className={classes.name_container}>
            <h3>Split Name</h3>
            <input ref={splitNameRef} placeholder="Name" />
          </div>
          <div className={classes.day}>
            <h3>Sunday</h3>
          </div>
          <div className={classes.inputs_container}>
            <input ref={sundayRef} placeholder="Muscle Group" />
            <select ref={sundayWorkoutRef}>
              {workouts?.map((workout) => {
                return (
                  <option value={workout.id}>{workout.workout_name}</option>
                );
              })}
            </select>
          </div>
          <div className={classes.day}>
            <h3>Monday</h3>
          </div>
          <div className={classes.inputs_container}>
            <input ref={mondayRef} placeholder="Muscle Group" />
            <select ref={mondayWorkoutRef}>
              {workouts?.map((workout) => {
                return (
                  <option value={workout.id}>{workout.workout_name}</option>
                );
              })}
            </select>
          </div>
          <div className={classes.day}>
            <h3>Tuesday</h3>
          </div>
          <div className={classes.inputs_container}>
            <input ref={tuesdayRef} placeholder="Muscle Group" />
            <select ref={tuesdayWorkoutRef}>
              {workouts?.map((workout) => {
                return (
                  <option value={workout.id}>{workout.workout_name}</option>
                );
              })}
            </select>
          </div>
          <div className={classes.day}>
            <h3>Wednesday</h3>
          </div>
          <div className={classes.inputs_container}>
            <input ref={wednesdayRef} placeholder="Muscle Group" />
            <select ref={wednesdayWorkoutRef}>
              {workouts?.map((workout) => {
                return (
                  <option value={workout.id}>{workout.workout_name}</option>
                );
              })}
            </select>
          </div>
          <div className={classes.day}>
            <h3>Thursday</h3>
          </div>
          <div className={classes.inputs_container}>
            <input ref={thurdayRef} placeholder="Muscle Group" />
            <select ref={thursdayWorkoutRef}>
              {workouts?.map((workout) => {
                return (
                  <option value={workout.id}>{workout.workout_name}</option>
                );
              })}
            </select>
          </div>
          <div className={classes.day}>
            <h3>Friday</h3>
          </div>
          <div className={classes.inputs_container}>
            <input ref={fridayRef} placeholder="Muscle Group" />
            <select ref={fridayWorkoutRef}>
              {workouts?.map((workout) => {
                return (
                  <option value={workout.id}>{workout.workout_name}</option>
                );
              })}
            </select>
          </div>
          <div className={classes.day}>
            <h3>Saturday</h3>
          </div>
          <div className={classes.inputs_container}>
            <input ref={saturdayRef} placeholder="Muscle Group" />
            <select ref={saturdayWorkoutRef}>
              {workouts?.map((workout) => {
                return (
                  <option value={workout.id}>{workout.workout_name}</option>
                );
              })}
            </select>
          </div>
          <div className={classes.btndiv}>
            <button type="submit">Save training split</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSplit;
