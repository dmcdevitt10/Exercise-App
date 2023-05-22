import React, { useEffect, useState } from "react";
import axios from "axios";

import classes from "./Exercises.module.css";

const Exercises = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    axios.get('/api/getExercises').then((res) => {
      setExercises(res.data)
    })
  }, [])
  
  return (
    <div>
      <div className={classes.menu_container}>
        <button>abductors</button>
        <button>abs</button>
        <button>adductors</button>
        <button>biceps</button>
        <button>calves</button>
        <button>cardiovascular system</button>
        <button>delts</button>
        <button>forearms</button>
        <button>glutes</button>
        <button>hamstrings</button>
        <button>lats</button>
        <button>levatar scapulae</button>
        <button>pectorals</button>
        <button>quads</button>
        <button>serratus anterior</button>
        <button>spine</button>
        <button>traps</button>
        <button>triceps</button>
        <button>upperback</button>
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