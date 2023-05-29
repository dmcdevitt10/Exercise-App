import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import classes from "./Home.module.css";
import headerClasses from '../global-components/header.module.css'

import AuthContext from "../global-components/AuthContext";

const Home = () => {
  const authCtx = useContext(AuthContext);
  const { userId } = useContext(AuthContext)
  const navigate = useNavigate()

  const [workouts, setWorkouts] = useState()
  const [splits, setSplits] = useState()

  useEffect(() => {
    axios.get(`/api/getUserWorkouts/${userId}`).then((res) => {
      setWorkouts(res.data);
    });
    axios.get(`/api/getSplitsAndWorkouts/${userId}`).then((res) => {
      setSplits(res.data);
    });
  }, []);

  console.log(workouts, splits)

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
              <button onClick={() => navigate("/training-splits")}>Training Splits</button>
            </li>
            <li>
              <button onClick={() => authCtx.logout()}>Logout</button>
            </li>
          </ul>
        </nav>
      </header>
      Home
    </div>
  );
};

export default Home;
