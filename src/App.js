import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import Header from "./global-components/Header";
import AuthContext from "./global-components/AuthContext";
import Auth from "./screens/Auth";
import Home from "./screens/Home";
import Exercises from "./screens/Exercises";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <div className="App">
      {authCtx.token ? <Header /> : null}
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
      </Routes>
    </div>
  );
}

export default App;
