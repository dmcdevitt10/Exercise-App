import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import Header from "./global-components/Header";
import AuthContext from "./global-components/AuthContext";
import Auth from "./screens/Auth";
import Home from "./screens/Home";
import Exercises from "./screens/Exercises";
import Workouts from "./screens/Workouts";
import TrainingSplits from "./screens/TrainingSplits";
import AddSplit from "./screens/AddSplit";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <div className="App">
      {/* {authCtx.token ? <Header /> : null} */}
      <Routes>
        <Route
          path="/"
          element={authCtx.token ? <Home /> : <Navigate to="/auth" />}
        />
        <Route
          path="/auth"
          element={!authCtx.token ? <Auth /> : <Navigate to="/" />}
        />
        <Route
          path="/exercises"
          element={authCtx.token ? <Exercises /> : <Navigate to="/auth" />}
        />
        <Route
          path="/workouts"
          element={authCtx.token ? <Workouts /> : <Navigate to="/auth" />}
        />
        <Route
          path="/training-splits"
          element={authCtx.token ? <TrainingSplits /> : <Navigate to="/auth" />}
        />
        <Route
          path="/add-split"
          element={authCtx.token ? <AddSplit /> : <Navigate to="/auth" />}
        />
      </Routes>
    </div>
  );
}

export default App;
