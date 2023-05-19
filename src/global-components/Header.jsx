import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import AuthContext from "./AuthContext";

const Header = () => {
  const authCtx = useContext(AuthContext);
  return (
    <header>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/exercises">Exercises</NavLink>
        </li>
      </ul>
      <button onClick={() => authCtx.logout()}>Logout</button>
    </header>
  );
};

export default Header;
