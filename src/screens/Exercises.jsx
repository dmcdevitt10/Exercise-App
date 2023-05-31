import React, { useEffect, useState, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {AiOutlineDown} from 'react-icons/ai'

import classes from "./Exercises.module.css";
import AuthContext from "../global-components/AuthContext";

const Exercises = () => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const [exercises, setExercises] = useState([]);
  const [chosenMuscle, setChosenMuscle] = useState("");
  const [workout, setWorkout] = useState([]);
  const [workoutDisplay, setWorkoutDisplay] = useState("create");
  const [workoutId, setWorkoutId] = useState(0);
  const [exercisesPage, setExercisesPage] = useState(true);
  const workoutNameRef = useRef();

  const sets = useRef();
  const reps = useRef();

  // const muscleOptionsArr = [
  //   "abductors",
  //   "abs",
  //   "adductors",
  //   "biceps",
  //   "calves",
  //   "cardiovascular system",
  //   "delts",
  //   "forearms",
  //   "glutes",
  //   "hamstrings",
  //   "lats",
  //   "levator scapulae",
  //   "pectorals",
  //   "quads",
  //   "serratus anterior",
  //   "spine",
  //   "traps",
  //   "triceps",
  //   "upper back",
  // ];

  const { userId } = useContext(AuthContext);
  // console.log(userId)

  // console.log(workout);

  useEffect(() => {
    axios.get("/api/getExercises").then((res) => {
      setExercises(res.data);
    });
  }, []);

  const saveWorkout = async () => {
    setWorkoutDisplay('create')
    const workoutBody = {
      workout_name: workoutNameRef.current.value,
      exercise1: null,
      exercise2: null,
      exercise3: null,
      exercise4: null,
      exercise5: null,
      exercise6: null,
      userId: userId,
    };
    if (workout[0]) {
      workoutBody.exercise1 = workout[0];
    }
    if (workout[1]) {
      workoutBody.exercise2 = workout[1];
    }
    if (workout[2]) {
      workoutBody.exercise3 = workout[2];
    }
    if (workout[3]) {
      workoutBody.exercise4 = workout[3];
    }
    if (workout[4]) {
      workoutBody.exercise5 = workout[4];
    }
    if (workout[5]) {
      workoutBody.exercise6 = workout[5];
    }
    axios
      .post("/api/addWorkout", workoutBody)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));

    setTimeout(() => {
      axios.get(`/api/getUserWorkouts/${userId}`).then((res) => {
        let setsRepsBody = {
          sets: sets.current.value,
          reps: reps.current.value,
          workoutId: res.data[res.data.length - 1].id,
        };

        axios.post("/api/addSetsReps", setsRepsBody).then((res) => {
          console.log(res.data);
        });
      });
    }, 1000);

    setTimeout(() => {
      setWorkout([]);
      workoutNameRef.current.value = "";
      sets.current.value = "";
      reps.current.value = "";
    }, 2000);
  };

  const onClick = (muscle) => setChosenMuscle(muscle);

  // const btnDisplay = muscleOptionsArr.map((muscle) => {
  //   return (
  //     <button
  //       style={
  //         chosenMuscle === muscle
  //           ? { color: "white", backgroundColor: "red" }
  //           : { color: "black" }
  //       }
  //       onClick={setChosenMuscle(muscle)}
  //     >
  //       {muscle}
  //     </button>
  //   );
  // })

  return (
    <div>
      <header className={classes.exercisesHeader}>
        <nav>
          <ul>
            <li>
              <button onClick={() => navigate("/")}>Home</button>
            </li>
            <li>
              <button
                style={exercisesPage ? { color: "red" } : { color: "white" }}
                onClick={() => navigate("/exercises")}
              >
                Exercises
              </button>
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
      <div className={classes.menu_exercises_container}>
        <div className={classes.menu_container}>
          {/* {btnDisplay} */}

          <button
            style={
              chosenMuscle === "abductors"
                ? { color: "white", backgroundColor: "red" }
                : { color: "black" }
            }
            onClick={() => setChosenMuscle("abductors")}
          >
            Abductors
          </button>
          <button
            style={
              chosenMuscle === "abs"
                ? { color: "white", backgroundColor: "red" }
                : { color: "black" }
            }
            onClick={() => setChosenMuscle("abs")}
          >
            Abs
          </button>
          <button
            style={
              chosenMuscle === "adductors"
                ? { color: "white", backgroundColor: "red" }
                : { color: "black" }
            }
            onClick={() => setChosenMuscle("adductors")}
          >
            Adductors
          </button>
          <button
            style={
              chosenMuscle === "biceps"
                ? { color: "white", backgroundColor: "red" }
                : { color: "black" }
            }
            onClick={() => setChosenMuscle("biceps")}
          >
            Biceps
          </button>
          <button
            style={
              chosenMuscle === "calves"
                ? { color: "white", backgroundColor: "red" }
                : { color: "black" }
            }
            onClick={() => setChosenMuscle("calves")}
          >
            Calves
          </button>
          <button
            style={
              chosenMuscle === "cardiovascular system"
                ? { color: "white", backgroundColor: "red" }
                : { color: "black" }
            }
            onClick={() => setChosenMuscle("cardiovascular system")}
          >
            Cardiovascular System
          </button>
          <button
            style={
              chosenMuscle === "delts"
                ? { color: "white", backgroundColor: "red" }
                : { color: "black" }
            }
            onClick={() => setChosenMuscle("delts")}
          >
            Delts
          </button>
          <button
            style={
              chosenMuscle === "forearms"
                ? { color: "white", backgroundColor: "red" }
                : { color: "black" }
            }
            onClick={() => setChosenMuscle("forearms")}
          >
            Forearms
          </button>
          <button
            style={
              chosenMuscle === "glutes"
                ? { color: "white", backgroundColor: "red" }
                : { color: "black" }
            }
            onClick={() => setChosenMuscle("glutes")}
          >
            Glutes
          </button>
          <button
            style={
              chosenMuscle === "hamstrings"
                ? { color: "white", backgroundColor: "red" }
                : { color: "black" }
            }
            onClick={() => setChosenMuscle("hamstrings")}
          >
            Hamstrings
          </button>
          <button
            style={
              chosenMuscle === "lats"
                ? { color: "white", backgroundColor: "red" }
                : { color: "black" }
            }
            onClick={() => setChosenMuscle("lats")}
          >
            Lats
          </button>
          <button
            style={
              chosenMuscle === "levator scapulae"
                ? { color: "white", backgroundColor: "red" }
                : { color: "black" }
            }
            onClick={() => setChosenMuscle("levator scapulae")}
          >
            Levator Scapulae
          </button>
          <button
            style={
              chosenMuscle === "pectorals"
                ? { color: "white", backgroundColor: "red" }
                : { color: "black" }
            }
            onClick={() => setChosenMuscle("pectorals")}
          >
            Pectorals
          </button>
          <button
            style={
              chosenMuscle === "quads"
                ? { color: "white", backgroundColor: "red" }
                : { color: "black" }
            }
            onClick={() => setChosenMuscle("quads")}
          >
            Quads
          </button>
          <button
            style={
              chosenMuscle === "serratus anterior"
                ? { color: "white", backgroundColor: "red" }
                : { color: "black" }
            }
            onClick={() => setChosenMuscle("serratus anterior")}
          >
            Serratus Anterior
          </button>
          <button
            style={
              chosenMuscle === "spine"
                ? { color: "white", backgroundColor: "red" }
                : { color: "black" }
            }
            onClick={() => setChosenMuscle("spine")}
          >
            Spine
          </button>
          <button
            style={
              chosenMuscle === "traps"
                ? { color: "white", backgroundColor: "red" }
                : { color: "black" }
            }
            onClick={() => setChosenMuscle("traps")}
          >
            Traps
          </button>
          <button
            style={
              chosenMuscle === "triceps"
                ? { color: "white", backgroundColor: "red" }
                : { color: "black" }
            }
            onClick={() => setChosenMuscle("triceps")}
          >
            Triceps
          </button>
          <button
            style={
              chosenMuscle === "upper back"
                ? { color: "white", backgroundColor: "red" }
                : { color: "black" }
            }
            onClick={() => setChosenMuscle("upper back")}
          >
            Upper back
          </button>
        </div>
        <div className={classes.exercises_container}>
          {chosenMuscle === ""
            ? exercises?.map((exercise) => {
                return (
                  <div className={classes.exercise_card}>
                    <h2>{exercise.name}</h2>
                    <h3>Target Muscle: {exercise.target}</h3>
                    <h3>Body part: {exercise.bodyPart}</h3>
                    <h3>Equipment: {exercise.equipment}</h3>
                    <img src={exercise.gifUrl} />
                    {workoutDisplay !== 'create' ? (
                      <button
                        onClick={() => setWorkout([...workout, exercise.name])}
                      >
                        Add To Workout
                      </button>
                    ) : null}
                  </div>
                );
              })
            : exercises
                ?.filter((exercise) => {
                  return exercise.target === chosenMuscle;
                })
                .map((exercise) => {
                  return (
                    <div className={classes.exercise_card}>
                      <h2>{exercise.name}</h2>
                      <h3>Target Muscle: {exercise.target}</h3>
                      <h3>Body part: {exercise.bodyPart}</h3>
                      <h3>Equipment: {exercise.equipment}</h3>
                      <img src={exercise.gifUrl} />
                      {workoutDisplay !== 'create' ? (
                        <button
                          onClick={() =>
                            setWorkout([...workout, exercise.name])
                          }
                        >
                          Add To Workout
                        </button>
                      ) : null}
                    </div>
                  );
                })}
        </div>

        {workoutDisplay === "create" ? (
          <button
            onClick={() => setWorkoutDisplay("show")}
            className={classes.workout_btn}
          >
            Create Workout
          </button>
        ) : null}
        <div
          style={workoutDisplay === "show" ? { opacity: 1 } : { opacity: 0, zIndex: -3 }}
          className={classes.workout_display}
        >
          <div
            className={classes.downbtn}
            onClick={() => setWorkoutDisplay("showbtn")}
          >
            <AiOutlineDown size={28} />
          </div>
          <h1>Exercises</h1>
          {workout?.map((exercise) => {
            return <h4>{exercise}</h4>;
          })}
          <input ref={sets} placeholder="sets" />
          <input ref={reps} placeholder="reps" />
          <input ref={workoutNameRef} placeholder="Workout Name" />
          <button onClick={saveWorkout}>Save Workout</button>
        </div>
        {workoutDisplay === "showbtn" ? (
          <div className={classes.showbtn}>
            <div onClick={() => setWorkoutDisplay('show')} className={classes.upbtn}>
              <AiOutlineDown style = {{transform: 'rotate(180deg)' }} size={28} />
            </div>
            <h3>Exercises: {workout.length}</h3>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Exercises;

// useEffect(() => {
//   const options = {
//     method: "GET",
//     url: "https://exercisedb.p.rapidapi.com/exercises",
//     headers: {
//       "X-RapidAPI-Key": "d6767e25d0msh9ef22a9608cc423p1c9346jsnb6194e00d1ea",
//       "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
//     },
//   };

//   try {
//     axios.request(options).then((res) => {
//       for(let i = 0; i < res.data.length; i++){
//         let body = {
//           bodyPart: res.data[i].bodyPart,
//           equipment: res.data[i].equipment,
//           gifUrl: res.data[i].gifUrl,
//           exerciseId: res.data[i].id,
//           name: res.data[i].name,
//           target: res.data[i].target
//         }
//         axios.post('/api/addExercise', body).then((res) => {
//           console.log(res.data)
//         })
//       }
//       setExercises(res.data);
//     });
//   } catch (err) {
//     console.error(`Error with exercises useEffect: ${err}`);
//   }
// }, []);

// console.log(exercises);
// if(exercises.length > 1){
//   for(let i = 0; i < exercises.length; i++){
//     let body = {
//       bodyPart: exercises[i].bodyPart,
//       equipment: exercises[i].equipment,
//       gifUrl: exercises[i].gifUrl,
//       exerciseId: exercises[i].id,
//       name: exercises[i].name,
//       target: exercises[i].target
//     }
//     axios.post('/api/addExercise', body)
//   }
// }
