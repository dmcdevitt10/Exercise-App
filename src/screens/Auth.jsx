import React, { useRef, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import classes from "./Auth.module.css";
import AuthContext from "../global-components/AuthContext";

const Auth = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (authCtx.token) {
      navigate("/home");
    }
  }, []);

  const usernameRef = useRef();
  const passwordRef = useRef();

  const [login, setLogin] = useState(true);

  const submitHandler = async (e) => {
    e.preventDefault();
    const body = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };

    axios.post(login ? "/api/login" : "/api/register", body).then((res) => {
      console.log(res.data);
      authCtx.login(res.data.token, res.data.exp, res.data.userId);
    });

    console.log(usernameRef.current.value, passwordRef.current.value);

    usernameRef.current.value = "";
    passwordRef.current.value = "";

    // await navigate('/home')
  };

  return (
    <div className={classes.form_container}>
      <form onSubmit={submitHandler} className={classes.login_register_form}>
        {login ? <h1>Login</h1> : <h1>Register</h1>}
        <input type="text" ref={usernameRef} placeholder="username" />
        <input type="password" ref={passwordRef} placeholder="password" />
        {login ? (
          <button type="submit">Login</button>
        ) : (
          <button type="submit">Register</button>
        )}
        {login ? (
          <button onClick={() => setLogin(!login)}>Sign Up</button>
        ) : (
          <h4 onClick={() => setLogin(!login)}>Already have an Account?</h4>
        )}
      </form>
    </div>
  );
};

export default Auth;
