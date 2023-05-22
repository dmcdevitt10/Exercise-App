import React, { useEffect, useState } from "react";
import axios from "axios";

import classes from "./Exercises.module.css";

const Exercises = () => {
  const [exercises, setExercises] = useState([]);
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

  return (
    <div>
      <div>Exercises</div>
      {exercises?.map((exercise) => {
        return <h3>{exercise.name}</h3>;
      })}
    </div>
  );
};

export default Exercises;
