import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import headerClasses from "../global-components/header.module.css";

import AuthContext from "../global-components/AuthContext";

const TrainingSplits = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
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
      <div>TrainingSplits</div>
    </div>
  );
};

export default TrainingSplits;
