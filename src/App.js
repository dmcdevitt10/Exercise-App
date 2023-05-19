import { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import AuthContext from "./AuthContext";
import Auth from "./screens/Auth";

function App() {
  const authCtx = useContext(AuthContext)
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={!authCtx.token ? <Auth /> : null} />
      </Routes>
    </div>
  );
}

export default App;
