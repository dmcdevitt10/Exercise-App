import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import AuthContext from "./AuthContext";

const Header = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate()
  return (
    <header>
      {/* <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/exercises">Exercises</NavLink>
        </li>
      </ul> */}
      <nav>
        <ul>
          <li>
          <button onClick={() => navigate('/')}>Home</button>
          </li>
          <li>
          <button onClick={() => navigate('/exercises')}>Exercises</button>
          </li>
          <li>
            <button onClick={() => authCtx.logout()}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
