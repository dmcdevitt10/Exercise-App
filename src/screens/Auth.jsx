import React, { useRef } from "react";
import axios from "axios";

import classes from "./Auth.module.css";

const Auth = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const registerHandler = (e) => {
    e.preventDefault();
    const body = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    axios.post("/api/register", body).then((res) => {
      console.log(res.data);
    });

    console.log(usernameRef.current.value, passwordRef.current.value);

    usernameRef.current.value = "";
    passwordRef.current.value = "";
  };

  const loginHandler = (e) => {
    e.preventDefault();
    const body = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    axios.post("/api/login", body).then((res) => {
      console.log(res.data);
    });

    console.log(usernameRef.current.value, passwordRef.current.value);

    usernameRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <div className={classes.form_container}>
      <form className={classes.login_register_form}>
        <div>RegisterAndLogin</div>
        <input type="text" ref={usernameRef} placeholder="username" />
        <input type="password" ref={passwordRef} placeholder="password" />
        <button type="submit" onClick={registerHandler}>
          Register
        </button>
        <button type="submit" onClick={loginHandler}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
