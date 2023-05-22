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
  //       setExercises(res.data);
  //     });
  //   } catch (err) {
  //     console.error(`Error with exercises useEffect: ${err}`);
  //   }
  // }, []);

  console.log(exercises);

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
