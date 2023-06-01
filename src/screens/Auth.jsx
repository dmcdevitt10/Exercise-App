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
      <form
        name="login"
        onSubmit={submitHandler}
        className={classes.login_register_form}
      >
        {login ? <h1>Login</h1> : <h1>Register</h1>}

        <input type="text" ref={usernameRef} placeholder="username" />
        <input type="password" ref={passwordRef} placeholder="password" />
        <div className={classes.btndiv}>
          {login ? (
            <button className={classes.loginbtn} type="submit">Login</button>
          ) : (
            <button className={classes.loginbtn} type="submit">Register</button>
          )}
          {login ? (
            <button className={classes.signupbtn} onClick={() => setLogin(!login)}>Sign Up</button>
          ) : null}
        </div>
        {!login ? (
          <h4 onClick={() => setLogin(!login)}>Already have an Account?</h4>
        ) : null}
      </form>
    </div>
  );
};

export default Auth;
