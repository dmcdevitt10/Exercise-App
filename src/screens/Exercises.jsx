import React, { useEffect, useState } from "react";
import axios from "axios";

import classes from "./Exercises.module.css";

const Exercises = () => {
  const [exercises, setExercises] = useState([]);
  const [chosenMuscle, setChosenMuscle] = useState("");
  const [workout, setWorkout] = useState([]);

  console.log(workout);

  useEffect(() => {
    axios.get("/api/getExercises").then((res) => {
      setExercises(res.data);
    });
  }, []);

  const saveWorkout = () => {
    const body = {
      workout_name: "back",
      exercise1: null,
      exercise2: null,
      exercise3: null,
      exercise4: null,
      exercise5: null,
      exercise6: null,
    };
    if (workout[0]) {
      body.exercise1 = workout[0];
    }
    if (workout[1]) {
      body.exercise2 = workout[1];
    }
    if (workout[2]) {
      body.exercise3 = workout[2];
    }
    if (workout[3]) {
      body.exercise4 = workout[3];
    }
    if (workout[4]) {
      body.exercise5 = workout[4];
    }
    if (workout[5]) {
      body.exercise6 = workout[5];
    }
    axios.post("/api/addWorkout", body).then((res) => {
      console.log(res.data);
    });

    setWorkout([]);
  };

  return (
    <div className={classes.menu_exercises_container}>
      <div className={classes.menu_container}>
        <button onClick={() => setChosenMuscle("abductors")}>abductors</button>
        <button onClick={() => setChosenMuscle("abs")}>abs</button>
        <button onClick={() => setChosenMuscle("adductors")}>adductors</button>
        <button onClick={() => setChosenMuscle("biceps")}>biceps</button>
        <button onClick={() => setChosenMuscle("calves")}>calves</button>
        <button onClick={() => setChosenMuscle("cardiovascular system")}>
          cardiovascular system
        </button>
        <button onClick={() => setChosenMuscle("delts")}>delts</button>
        <button onClick={() => setChosenMuscle("forearms")}>forearms</button>
        <button onClick={() => setChosenMuscle("glutes")}>glutes</button>
        <button onClick={() => setChosenMuscle("hamstrings")}>
          hamstrings
        </button>
        <button onClick={() => setChosenMuscle("lats")}>lats</button>
        <button onClick={() => setChosenMuscle("levator scapulae")}>
          levator scapulae
        </button>
        <button onClick={() => setChosenMuscle("pectorals")}>pectorals</button>
        <button onClick={() => setChosenMuscle("quads")}>quads</button>
        <button onClick={() => setChosenMuscle("serratus anterior")}>
          serratus anterior
        </button>
        <button onClick={() => setChosenMuscle("spine")}>spine</button>
        <button onClick={() => setChosenMuscle("traps")}>traps</button>
        <button onClick={() => setChosenMuscle("triceps")}>triceps</button>
        <button onClick={() => setChosenMuscle("upper back")}>
          upper back
        </button>
      </div>
      <div className={classes.exercises_container}>
        <button onClick={saveWorkout}>save workout</button>
        {chosenMuscle === ""
          ? exercises?.map((exercise) => {
              return (
                <div className={classes.exercise_card}>
                  <h3>{exercise.name}</h3>
                  <h3>{exercise.target}</h3>
                  <h3>{exercise.bodyPart}</h3>
                  <h3>{exercise.equipment}</h3>
                  <img src={exercise.gifUrl} />
                  <button
                    onClick={() => setWorkout([...workout, exercise.name])}
                  >
                    Add to Workout
                  </button>
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
                    <h3>{exercise.name}</h3>
                    <h3>{exercise.target}</h3>
                    <h3>{exercise.bodyPart}</h3>
                    <h3>{exercise.equipment}</h3>
                    <img src={exercise.gifUrl} />
                    <button
                      onClick={() => setWorkout([...workout, exercise.name])}
                    >
                      Add to Workout
                    </button>
                  </div>
                );
              })}
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
